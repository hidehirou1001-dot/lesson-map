(function () {
  'use strict';

  const MIN_REVIEW_LENGTH = 40;
  const MAX_REVIEW_LENGTH = 1200;
  const CLIENT_COOLDOWN_MS = 60 * 1000;
  const form = document.getElementById('review-form');
  if (!form) return;

  const schoolName = document.getElementById('review-school-name');
  const schoolError = document.getElementById('review-school-error');
  const reviewBody = document.getElementById('review-body');
  const characterCount = document.getElementById('review-character-count');
  const submitButton = document.getElementById('review-submit');
  const status = document.getElementById('review-status');
  const complete = document.getElementById('review-complete');
  const config = window.LESSONMAP_REVIEW_CONFIG || {};
  const params = new URLSearchParams(window.location.search);
  const requestedSchoolId = params.get('school_id') || '';
  const studio = Array.isArray(window.studiosData)
    ? window.studiosData.find(item => item.id === requestedSchoolId)
    : null;
  const formStartedAt = Date.now();

  function getSchoolUrl(id) {
    const url = new URL('/', window.location.origin);
    url.searchParams.set('school', id);
    return url.toString();
  }

  function setStatus(message, type) {
    status.textContent = message;
    status.className = `review-status ${type ? `is-${type}` : ''}`;
    status.setAttribute('role', type === 'error' ? 'alert' : 'status');
  }

  function getCheckedValue(name) {
    return form.querySelector(`input[name="${name}"]:checked`)?.value || '';
  }

  function countUrls(text) {
    return (text.match(/(?:https?:\/\/|www\.)/gi) || []).length;
  }

  function validateReview() {
    const body = reviewBody.value.trim();
    if (!studio) return '投稿する教室を確認できません。教室詳細の「口コミを投稿する」から開き直してください。';
    if (!getCheckedValue('usage_status')) return '利用状況を選択してください。';
    if (!getCheckedValue('user_type')) return '利用者を選択してください。';
    if (!getCheckedValue('overall_rating')) return '総合評価を選択してください。';
    if (body.length < MIN_REVIEW_LENGTH) return `口コミ本文は${MIN_REVIEW_LENGTH}文字以上で入力してください。`;
    if (body.length > MAX_REVIEW_LENGTH) return `口コミ本文は${MAX_REVIEW_LENGTH}文字以内で入力してください。`;
    if (countUrls(body) > 2) return '口コミ本文にURLを3件以上入力することはできません。';
    if (/<\/?[a-z][^>]*>|javascript:/i.test(body)) return 'HTMLやJavaScriptを含む内容は投稿できません。';
    if (!form.elements.guideline_consent.checked) return '口コミ掲載ガイドラインへの同意が必要です。';
    return '';
  }

  function ratingMarkupValue(name) {
    const value = getCheckedValue(name);
    return value ? Number(value) : '';
  }

  function getLastSubmittedAt() {
    try { return Number(window.localStorage.getItem('lessonmap_review_last_submitted_at') || 0); }
    catch (error) { return 0; }
  }

  function saveSubmittedAt() {
    try { window.localStorage.setItem('lessonmap_review_last_submitted_at', String(Date.now())); }
    catch (error) { /* localStorageが無効でもサーバー側で検証する */ }
  }

  if (!studio) {
    schoolName.textContent = '教室を確認できません';
    schoolError.hidden = false;
    submitButton.disabled = true;
  } else {
    schoolName.textContent = studio.name;
    form.elements.school_id.value = studio.id;
    form.elements.school_name.value = studio.name;
    form.elements.school_url.value = getSchoolUrl(studio.id);
  }

  if (!config.endpoint) {
    submitButton.disabled = true;
    setStatus('口コミ受付の準備中です。GASの設定完了後に投稿できるようになります。', 'error');
  }

  reviewBody.addEventListener('input', () => {
    characterCount.textContent = `${reviewBody.value.length} / ${MAX_REVIEW_LENGTH}文字`;
  });

  form.querySelectorAll('.review-stars').forEach(group => {
    group.addEventListener('change', event => {
      const selected = Number(event.target.value || 0);
      group.querySelectorAll('.review-star').forEach((label, index) => {
        label.classList.toggle('is-active', index < selected);
      });
    });
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitButton.disabled) return;

    const error = validateReview();
    if (error) {
      setStatus(error, 'error');
      return;
    }

    const elapsed = Date.now() - getLastSubmittedAt();
    if (elapsed > 0 && elapsed < CLIENT_COOLDOWN_MS) {
      setStatus('連続投稿を防ぐため、少し時間をおいてからお試しください。', 'error');
      return;
    }

    const payload = {
      school_id: studio.id,
      school_name: studio.name,
      school_url: getSchoolUrl(studio.id),
      usage_status: getCheckedValue('usage_status'),
      user_type: getCheckedValue('user_type'),
      overall_rating: ratingMarkupValue('overall_rating'),
      staff_rating: ratingMarkupValue('staff_rating'),
      atmosphere_rating: ratingMarkupValue('atmosphere_rating'),
      value_rating: ratingMarkupValue('value_rating'),
      review_body: reviewBody.value.trim(),
      age_group: form.elements.age_group.value,
      guideline_consent: true,
      website: form.elements.website.value,
      form_elapsed_ms: Date.now() - formStartedAt
    };

    submitButton.disabled = true;
    submitButton.textContent = '送信中…';
    setStatus('口コミを送信しています。画面を閉じずにお待ちください。', '');

    try {
      await fetch(config.endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow'
      });
      saveSubmittedAt();
      form.hidden = true;
      complete.hidden = false;
      complete.focus();
    } catch (networkError) {
      submitButton.disabled = false;
      submitButton.textContent = '口コミを投稿する';
      setStatus('送信できませんでした。通信環境を確認して、もう一度お試しください。', 'error');
    }
  });
})();
