/**
 * LessonMap affiliate program registry.
 *
 * 提携が承認された案件だけを追加します。広告案件は通常の教室データや
 * 表示順位へ混ぜず、検索結果下の「オンラインの学び」枠にのみ表示します。
 *
 * Example:
 * {
 *   id: 'service-slug',
 *   name: 'サービス名',
 *   category: '英会話',
 *   audience: '大人・子ども',
 *   description: '確認済みの特徴を簡潔に記載',
 *   ctaLabel: '無料体験を確認する',
 *   affiliateUrl: 'ASPで発行された広告URL',
 *   asp: 'A8.net',
 *   active: true
 * }
 */
window.affiliatePrograms = [
  {
    id: 'kimini-english',
    name: '学研グループのオンライン英会話 Kimini英会話',
    category: 'オンライン英会話',
    audience: '子ども・学生・大人の英語学習',
    description: '通学や送迎が難しい方も、自宅から目的に合う英語学習を始められるオンライン英会話です。無料体験の期間や対象プランを確認してから検討できます。',
    ctaLabel: '無料体験の内容を確認する',
    affiliateUrl: '',
    asp: 'A8.net',
    programId: 's00000017782001',
    active: false
  },
  {
    id: 'dmm-generative-ai-camp',
    name: 'DMM 生成AI CAMP',
    category: '生成AI・リスキリング',
    audience: '生成AIを仕事で活用したい社会人',
    description: 'ChatGPTなどの生成AIを、資料作成やマーケティング、営業、開発などで活用する方法を学びたい方向けのオンライン学習サービスです。',
    ctaLabel: '無料セミナーの内容を確認する',
    affiliateUrl: '',
    asp: 'A8.net',
    programId: 's00000027398001',
    active: false
  }
];
