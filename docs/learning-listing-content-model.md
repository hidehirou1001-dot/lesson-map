# Learning Listing Content Model

LessonMapの既存記事は「学びのガイド」として維持し、掲載情報は共通の「学び情報」として扱う。既存の `data/studios.js` は互換性のためファイル名と `studios` 配列名を維持するが、今後のデータ追加では教室以外も同じ配列に追加できる前提で整理する。

## 扱う掲載種別

| 種別 | `listingType` | 例 |
| --- | --- | --- |
| 教室・スクール | `school` | 英会話教室、ダンススクール、ピアノ教室 |
| セミナー | `seminar` | 保護者向け教育セミナー、キャリアセミナー |
| 勉強会 | `study_group` | 英語勉強会、プログラミング勉強会 |
| ワークショップ | `workshop` | 親子工作、ダンス体験、料理体験 |
| オンライン講座 | `online_course` | Zoom講座、動画講座、オンライン英会話 |
| イベント | `event` | 体験会、発表会、地域学習イベント |
| 資格講座 | `certification_course` | TOEIC対策、簿記、IT資格、検定対策 |

既存データで `listingType` が未指定の場合は `school` とみなす。

## 共通項目

すべての掲載種別で使う項目。

| 項目 | 必須 | 内容 |
| --- | --- | --- |
| `id` | 必須 | 一意なID。例: `school-english-matsuyama-nova`, `event-dance-matsuyama-trial-202607` |
| `listingType` | 任意 | 掲載種別。未指定は `school` |
| `name` | 必須 | 表示名 |
| `description` | 必須 | 一覧・詳細で使う短い説明 |
| `category` | 必須 | 検索カテゴリ。例: `English`, `Dance`, `Programming` |
| `city` | 必須 | 市町名。オンラインのみの場合は主催拠点、または `オンライン` |
| `area` | 必須 | 詳細エリア。オンラインのみの場合は `オンライン` |
| `access` | 必須 | 会場・アクセス・受講方法の説明 |
| `genres` | 必須 | 絞り込み用タグ |
| `learningNeeds` | 任意 | 学習ニーズ。例: `kids_lessons`, `ai_it`, `career` |
| `decisionFactors` | 任意 | 意思決定の判断軸。例: `beginner_friendly`, `schedule_fit`, `career_outcome` |
| `fitSummary` | 任意 | どんな人に合うかを短く説明 |
| `checkpoints` | 任意 | 体験・申込前に確認したい項目 |
| `pricing` | 必須 | 料金情報。無料・未定・要問い合わせもここで表現 |
| `features` | 必須 | 対象・初心者向け・駐車場など既存UIで使う特徴 |
| `imageUrl` | 必須 | カード画像 |
| `link` | 必須 | 公式サイト、公式申込ページ、公式告知ページ |
| `relatedGuides` | 任意 | 関連する既存記事。記事を置き換えず関連付けるために使う |
| `sourceNote` | 任意 | 公式情報確認メモ |
| `status` | 任意 | `active`, `scheduled`, `ended`, `draft`。未指定は `active` |

## 固有項目

掲載種別ごとに必要なときだけ追加する項目。未指定でも既存の教室表示は壊さない。

## 学習ニーズ

`learningNeeds` は、検索カテゴリよりも「なぜ学ぶか」に近い分類として使う。

| ニーズ | 値 |
| --- | --- |
| 子どもの習い事 | `kids_lessons` |
| 大人の習い事 | `adult_lessons` |
| セミナー | `seminar_learning` |
| 勉強会 | `study_group_learning` |
| ワークショップ | `workshop_learning` |
| オンライン講座 | `online_learning` |
| 資格学習 | `certification` |
| AI・IT学習 | `ai_it` |
| ビジネススキル | `business_skill` |
| 語学学習 | `language_learning` |
| 副業・キャリア学習 | `side_job_career` |

## 意思決定の判断軸

`decisionFactors` は、LessonMap独自の価値を作るための比較軸として使う。

| 判断軸 | 値 |
| --- | --- |
| 初心者でも入りやすい | `beginner_friendly` |
| 子どもの年齢に合う | `age_fit` |
| 大人が続けやすい | `adult_friendly` |
| 送迎・通いやすさ | `commute_fit` |
| 平日夜・週末に合う | `schedule_fit` |
| 料金の見通しがある | `price_clarity` |
| 体験・見学しやすい | `trial_available` |
| オンラインで受けやすい | `online_fit` |
| 資格・成果につながる | `credential_outcome` |
| キャリア・副業に近い | `career_outcome` |
| 仲間や交流がある | `community_fit` |

### 教室・スクール

| 項目 | 内容 |
| --- | --- |
| `scheduleNote` | 通常レッスンの曜日・時間帯メモ |
| `trial` | 体験レッスン情報 |
| `chainName` | 複数拠点がある場合のブランド名 |
| `locationSummary` | 複数拠点の補足 |

### セミナー / 勉強会 / ワークショップ / イベント

| 項目 | 内容 |
| --- | --- |
| `eventDate` | 単日開催日。例: `2026-07-20` |
| `eventStartTime` | 開始時刻 |
| `eventEndTime` | 終了時刻 |
| `venueName` | 会場名 |
| `capacity` | 定員 |
| `reservationRequired` | 予約必須か |
| `isRecurring` | 継続開催か |
| `organizer` | 主催者名 |

### オンライン講座

| 項目 | 内容 |
| --- | --- |
| `deliveryMode` | `online` |
| `platform` | Zoom、動画、専用アプリなど |
| `archiveAvailable` | アーカイブ視聴の有無 |
| `onlineAreaNote` | 愛媛県内向け、全国対応など |

### 資格講座

| 項目 | 内容 |
| --- | --- |
| `certificationName` | 対象資格・検定名 |
| `level` | 初級、中級、試験対策など |
| `examSupport` | 模試、添削、面接対策など |
| `courseDuration` | 受講期間 |

## データ追加ルール

- 既存記事のURL、本文、比較表は変更しない。
- 新しい掲載情報は `relatedGuides` で既存記事とつなぐ。
- `relatedGuides` はURL文字列、または `{ href, title, description }` の形式で持てる。
- 公式サイト、公式申込ページ、公式告知ページが確認できるものを優先する。
- 期間限定イベントは `status` と `eventDate` を入れ、終了後に表示制御しやすくする。
- 既存UIの互換性のため、教室以外でも `features.kidsClass`, `features.adultClass`, `features.beginnerFriendly`, `features.parking` は持たせる。
- 条件検索で使う `features.weekendOpen`, `features.femaleTeacher`, `features.parkingCapacity` は、公式情報や掲載文で確認できる場合に追加する。未確認の場合は推定で `true` にしない。
- `features.weekendOpen` は土曜・日曜・週末・24時間営業など、週末利用が明示できる場合のみ `true` にする。
- `features.femaleTeacher` は女性講師・女性インストラクターなどの明記がある場合のみ `true` にする。未掲載は項目自体を省略する。
- `features.parkingCapacity` は `large`, `standard`, `unknown`, `none` のいずれか。商業施設内・大型駐車場など広さを比較しやすい根拠がある場合は `large`、駐車場ありだが規模不明の場合は `standard` にする。

## 例

```js
{
  id: 'workshop-dance-matsuyama-beginner-202607',
  listingType: 'workshop',
  name: '初心者向けダンス体験ワークショップ',
  description: '松山市内で開催される初心者向けの単発ダンス体験。教室選びの前に雰囲気を見たい人向けです。',
  category: 'Dance',
  city: '松山市',
  area: '松山市中心部',
  access: '会場は公式ページを確認',
  genres: ['Dance', 'Beginner', 'Trial'],
  learningNeeds: ['adult_lessons', 'workshop_learning'],
  decisionFactors: ['beginner_friendly', 'trial_available', 'schedule_fit'],
  fitSummary: '未経験からダンスの雰囲気を試したい大人向け',
  checkpoints: ['当日の持ち物', '初心者だけでも参加しやすいか', '継続クラスへの案内があるか'],
  pricing: {
    system: '参加費',
    minPrice: 1000,
    note: '詳細は公式ページへ'
  },
  features: {
    parking: false,
    beginnerFriendly: '◎',
    kidsClass: false,
    adultClass: true
  },
  eventDate: '2026-07-20',
  eventStartTime: '14:00',
  eventEndTime: '15:30',
  venueName: '松山市内会場',
  reservationRequired: true,
  isRecurring: false,
  organizer: '主催者名',
  imageUrl: '/assets/og/recommendations.svg',
  link: 'https://example.com/official-workshop',
  relatedGuides: [
    '/recommendations/matsuyama-dance-beginner/',
    '/recommendations/ehime-trial-lessons/'
  ],
  status: 'scheduled'
}
```
