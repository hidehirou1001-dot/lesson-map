# SEOページ優先度（2026-07-31）

Search Consoleの「ページ.csv」（2026-07-26取得）と、公開中のおすすめページ86件を照合した優先度一覧。

## 判定基準

- **伸ばす（31ページ）**: Search Consoleですでに表示実績があるページ。既存クエリに合わせた追記、タイトル・導入文・内部リンク改善を優先する。
- **統合候補（11ページ）**: 表示実績がなく、同地域の総合ページと検索意図が近いページ。すぐ削除せず、次回データでも表示がなければ本文を親ページへ統合し、301リダイレクトを検討する。
- **保留（44ページ）**: 現時点で表示実績はないが、地域・ジャンル単位で独立した検索意図を持つページ。最低4〜8週間は計測し、内容の正確性維持を優先する。

## 伸ばす（31）

| ページ | クリック | 表示 | 平均順位 |
|---|---:|---:|---:|
| `/recommendations/` | 0 | 6 | 5.33 |
| `matsuyama-dance-beginner` | 30 | 205 | 6.83 |
| `ehime-adult-lessons` | 10 | 180 | 18.73 |
| `matsuyama-soccer` | 2 | 93 | 18.10 |
| `matsuyama-english` | 0 | 66 | 51.17 |
| `imabari-lessons` | 2 | 30 | 13.47 |
| `matsuyama-boxing` | 1 | 30 | 9.53 |
| `matsuyama-kpop-dance` | 1 | 28 | 9.25 |
| `matsuyama-dance` | 0 | 24 | 16.79 |
| `matsuyama-lessons` | 1 | 23 | 21.04 |
| `matsuyama-programming` | 0 | 16 | 47.44 |
| `matsuyama-piano` | 0 | 14 | 23.57 |
| `matsuyama-fitness` | 2 | 11 | 7.45 |
| `matsuyama-adult-piano` | 0 | 10 | 7.90 |
| `matsuyama-calligraphy` | 2 | 9 | 11.56 |
| `matsuyama-cheap-english` | 0 | 7 | 13.86 |
| `masaki-english` | 0 | 6 | 9.17 |
| `niihama-lessons` | 0 | 6 | 29.67 |
| `uwajima-lessons` | 0 | 4 | 10.00 |
| `saijo-dance` | 0 | 3 | 8.00 |
| `seiyo-lessons` | 0 | 3 | 10.67 |
| `imabari-dance-beginner` | 0 | 3 | 34.67 |
| `matsuyama-dance-tuition` | 0 | 2 | 8.50 |
| `imabari-fitness` | 0 | 2 | 16.00 |
| `matsuyama-cram-school` | 0 | 2 | 19.00 |
| `ehime-age-lessons` | 0 | 1 | 2.00 |
| `imabari-programming` | 0 | 1 | 7.00 |
| `imabari-adult-lessons-anxiety` | 1 | 1 | 6.00 |
| `ehime-trial-lessons` | 0 | 1 | 11.00 |
| `ehime-beginner-lessons` | 0 | 1 | 12.00 |
| `niihama-fitness` | 0 | 1 | 12.00 |

## 統合候補（11）

| ページ | 統合先候補 |
|---|---|
| `imabari-adult-lessons-evening` | `imabari-lessons` |
| `imabari-adult-study-one` | `imabari-lessons` |
| `matsuyama-adult-relearning-lessons` | `ehime-adult-lessons` |
| `matsuyama-lessons-evening-transport` | `matsuyama-lessons` |
| `matsuyama-lessons-sibling-transport` | `matsuyama-lessons` |
| `matsuyama-lessons-transport-burden` | `matsuyama-lessons` |
| `niihama-adult-lessons-anxiety` | `niihama-lessons` |
| `niihama-lessons-overload` | `niihama-lessons` |
| `niihama-lessons-study-one` | `niihama-lessons` |
| `uwajima-kids-first-lessons` | `uwajima-kids-lessons` |
| `uwajima-lessons-first-choice` | `uwajima-lessons` |

## 保留（44）

`ai-self-study-or-school-ehime`、`ainan-lessons`、`ehime-ai-it-learning`、`ehime-kids-lessons`、`ehime-local-lessons`、`ehime-price-lessons`、`ehime-qualification-lessons`、`ehime-reskilling-lessons`、`imabari-aeon-area-lessons`、`imabari-english`、`imabari-piano`、`iyo-lessons`、`iyo-programming`、`kihoku-lessons`、`masaki-cooking`、`masaki-cram-school`、`masaki-lessons`、`matsuyama-adult-english`、`matsuyama-ballet`、`matsuyama-dance-trial`、`matsuyama-early-education`、`matsuyama-jo-pla-lessons`、`matsuyama-kids-dance`、`matsuyama-kids-english`、`matsuyama-kids-piano`、`matsuyama-soroban`、`matsuyama-yoga-pilates`、`niihama-dance-beginner`、`niihama-english`、`niihama-piano`、`niihama-programming`、`ozu-lessons`、`saijo-kids-lessons`、`saijo-lessons`、`shikokuchuo-english`、`shikokuchuo-lessons`、`tobe-lessons`、`toon-english`、`toon-lessons`、`uchiko-lessons`、`uwajima-dance-beginner`、`uwajima-kids-lessons`、`uwajima-swimming`、`yawatahama-lessons`

## 実行順

1. まず「伸ばす」のうち掲載順位7〜20位かつ表示回数が多いページを改善する。
2. 改善後28日間はページ単位のクリック・表示・CTR・順位を週次記録する。
3. 「保留」は公開後4〜8週間たっても表示0なら、インデックス状況と内部リンクを確認する。
4. 「統合候補」は次回も表示0の場合に限り、統合先へ有用部分を移してから301リダイレクトする。
