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
    id: 'ucan-lifelong-learning',
    name: '生涯学習のユーキャン',
    category: '資格・通信講座',
    audience: '資格取得や趣味の学びを自宅で進めたい方',
    description: '資格・実用・趣味など幅広い通信講座から、目的や生活時間に合う学びを探せるサービスです。受講期間、教材、添削・質問対応、試験要件を確認してから検討できます。',
    ctaLabel: '講座の内容を確認する',
    affiliateUrl: '',
    asp: 'A8.net',
    programId: 's00000018254001',
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
  },
  {
    id: 'formie-qualification',
    name: 'スマホで資格のサブスク formie（フォーミー）',
    category: '資格・通信講座',
    audience: '食・美容・心理・子育てなど、生活や趣味に生かせる民間資格をスマホで学びたい方',
    description: '40種類以上の資格講座から選べます。サブスクは月額制のポイントプランで、講座の受講、本試験、認定証にそれぞれポイントが必要になる場合があります。申込み前に希望講座の総額と資格の活用先を確認してください。',
    ctaLabel: 'formieの講座を確認する',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4BAE5D+7289HM+321O+65U41',
    bannerImageUrl: 'https://www21.a8.net/svt/bgt?aid=260825377427&wid=008&eno=01&mid=s00000014262001035000&mc=1',
    bannerWidth: 300,
    bannerHeight: 250,
    trackingPixelUrl: 'https://www18.a8.net/0.gif?a8mat=4BAE5D+7289HM+321O+65U41',
    showOnHome: false,
    asp: 'A8.net',
    programId: 's00000014262001',
    active: true
  },
  {
    id: 'coconala-skill-market',
    name: 'スキルマーケット ココナラ',
    category: '個別相談・オンラインレッスン',
    audience: 'スクールへ入る前に、専門家への単発相談や個別レッスンを試したい方',
    description: '語学、IT、デザイン、資格などの相談・レッスンを出品者ごとに探せるスキルマーケットです。料金、提供内容、評価、本人確認、キャンセル条件を確認してから利用してください。',
    ctaLabel: 'ココナラに無料登録して探す',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4BAEXD+C8KXU2+2PEO+O8CBM',
    trackingPixelUrl: 'https://www14.a8.net/0.gif?a8mat=4BAEXD+C8KXU2+2PEO+O8CBM',
    showOnHome: false,
    asp: 'A8.net',
    programId: 's00000012624004',
    active: true
  }
];
