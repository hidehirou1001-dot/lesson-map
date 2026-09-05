const REVIEW_SHEET_NAME = '口コミ管理';
const REVIEW_COLUMNS = 17;
const MIN_REVIEW_LENGTH = 40;
const MAX_REVIEW_LENGTH = 1200;
const ALLOWED_USAGE_STATUS = ['現在通っている', '過去に通っていた', '体験レッスンのみ'];
const ALLOWED_USER_TYPE = ['本人', '子ども'];
const ALLOWED_AGE_GROUP = ['10代', '20代', '30代', '40代', '50代', '60代以上', '回答しない'];

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    validatePayload_(payload);

    const spreadsheetId = PropertiesService.getScriptProperties().getProperty('LESSONMAP_SPREADSHEET_ID');
    if (!spreadsheetId) throw new Error('Spreadsheet setting is missing.');

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(REVIEW_SHEET_NAME);
      if (!sheet) throw new Error('Review sheet was not found.');
      verifyHeader_(sheet);
      preventDuplicate_(payload);

      const reviewId = Utilities.getUuid();
      const submittedAt = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
      sheet.appendRow([
        safeCell_(payload.school_name),
        safeCell_(payload.age_group || '回答しない'),
        safeCell_(payload.review_body),
        submittedAt,
        '掲載候補',
        '未反映',
        safeCell_(payload.school_url),
        'Lesson Map口コミフォーム',
        '',
        reviewId,
        safeCell_(payload.school_id),
        safeCell_(payload.usage_status),
        safeCell_(payload.user_type),
        Number(payload.overall_rating),
        optionalRating_(payload.staff_rating),
        optionalRating_(payload.atmosphere_rating),
        optionalRating_(payload.value_rating)
      ]);
      rememberDuplicate_(payload);
      return response_({ ok: true, review_id: reviewId });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return response_({ ok: false, error: '投稿内容を保存できませんでした。' });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error('Empty request.');
  if (e.postData.contents.length > 20000) throw new Error('Payload too large.');
  return JSON.parse(e.postData.contents);
}

function validatePayload_(p) {
  if (!p || typeof p !== 'object') throw new Error('Invalid payload.');
  if (p.website) throw new Error('Bot submission.');
  if (Number(p.form_elapsed_ms || 0) < 4000) throw new Error('Submitted too quickly.');
  if (!/^[a-z0-9][a-z0-9-]{2,120}$/.test(String(p.school_id || ''))) throw new Error('Invalid school id.');
  if (!isText_(p.school_name, 1, 200)) throw new Error('Invalid school name.');
  if (!/^https:\/\/www\.lesson-map\.com\/\?school=/.test(String(p.school_url || ''))) throw new Error('Invalid school url.');
  if (ALLOWED_USAGE_STATUS.indexOf(p.usage_status) === -1) throw new Error('Invalid usage status.');
  if (ALLOWED_USER_TYPE.indexOf(p.user_type) === -1) throw new Error('Invalid user type.');
  validateRating_(p.overall_rating, true);
  validateRating_(p.staff_rating, false);
  validateRating_(p.atmosphere_rating, false);
  validateRating_(p.value_rating, false);
  if (!isText_(p.review_body, MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH)) throw new Error('Invalid review body.');
  if (/<\/?[a-z][^>]*>|javascript:/i.test(p.review_body)) throw new Error('Markup is not allowed.');
  if ((String(p.review_body).match(/(?:https?:\/\/|www\.)/gi) || []).length > 2) throw new Error('Too many urls.');
  if (ALLOWED_AGE_GROUP.indexOf(p.age_group || '回答しない') === -1) throw new Error('Invalid age group.');
  if (p.guideline_consent !== true) throw new Error('Consent is required.');
}

function verifyHeader_(sheet) {
  const required = ['教室名', '年代・性別', '口コミ本文', '投稿日', '掲載状況', 'Lesson Map反映状況', '教室URL', '情報元', '備考', 'review_id', '教室ID', '利用状況', '利用者', '総合評価', '先生・スタッフ評価', '教室の雰囲気評価', '料金の納得感'];
  const actual = sheet.getRange(1, 1, 1, REVIEW_COLUMNS).getDisplayValues()[0];
  if (required.some(function (value, index) { return actual[index] !== value; })) throw new Error('Review sheet header mismatch.');
}

function preventDuplicate_(p) {
  const key = duplicateKey_(p);
  if (CacheService.getScriptCache().get(key)) throw new Error('Duplicate submission.');
}

function rememberDuplicate_(p) {
  CacheService.getScriptCache().put(duplicateKey_(p), '1', 21600);
}

function duplicateKey_(p) {
  const raw = [p.school_id, p.usage_status, p.user_type, p.review_body].join('|');
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw, Utilities.Charset.UTF_8);
  return 'review_' + digest.map(function (byte) { return (byte + 256).toString(16).slice(-2); }).join('');
}

function validateRating_(value, required) {
  if (!required && (value === '' || value === null || typeof value === 'undefined')) return;
  const rating = Number(value);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) throw new Error('Invalid rating.');
}

function optionalRating_(value) {
  return value === '' || value === null || typeof value === 'undefined' ? '' : Number(value);
}

function isText_(value, min, max) {
  if (typeof value !== 'string') return false;
  const length = value.trim().length;
  return length >= min && length <= max;
}

function safeCell_(value) {
  const text = String(value || '').trim().replace(/\u0000/g, '');
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function response_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
