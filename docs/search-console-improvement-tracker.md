# Search Console 改善トラッカー

Search Console のページ別データを、改善前後で比較するための記録シートです。

## 使い方

1. Search Console で「検索結果」→「ページ」へ進む
2. 比較期間を設定する
   - 改善前: `2026-06-06` 〜 `2026-06-20`
   - 改善後: `2026-06-21` 〜 `2026-07-02`
3. 下の表に、クリック数・表示回数・CTR・掲載順位を転記する
4. CTRが上がったページは、同じ型で横展開する
5. 表示回数はあるのにCTRが低いページは、タイトル・description・冒頭導線を再調整する

## 判断基準

| 状態 | 判断 | 次アクション |
| --- | --- | --- |
| 表示回数が増えてCTRも上がった | 改善が効いている | 同ジャンル・近隣エリアへ横展開 |
| 表示回数はあるがCTRが0%〜低い | 検索結果で押されていない | title / description / 冒頭カードを再調整 |
| CTRは高いが表示回数が少ない | ニッチだが刺さっている | 関連ページから内部リンクを増やす |
| 掲載順位が20位以下 | クリック改善より本文強化が先 | 比較表・FAQ・関連導線を増やす |
| 掲載順位が8〜12位 | もう少しで伸びる | CTR改善と内部リンク集中 |

## 改善履歴

| 改善日 | 対象ページ | 改善内容 | 狙い |
| --- | --- | --- | --- |
| 2026-06-21 | `/recommendations/matsuyama-soccer/` | タイトル、冒頭カード、FAQ、関連導線を改善 | CTR 0%からのクリック発生 |
| 2026-06-21 | `/recommendations/ehime-adult-lessons/` | 大人初心者の不安訴求、3ジャンル導線、FAQを追加 | 表示回数最大ページの順位・CTR改善 |
| 2026-06-21 | `/recommendations/matsuyama-dance/` | キッズ・大人初心者・K-POPの目的別導線を追加 | 13位台から1ページ目入り |
| 2026-06-21 | `/recommendations/matsuyama-english/` | タイトル、体験導線、目的別カード、FAQを改善 | CTR 0%からのクリック発生 |
| 2026-06-21 | `/` | 「今よく見られている入口」を追加 | TOPから重要記事への回遊強化 |
| 2026-06-21 | `/recommendations/matsuyama-fitness/` | 24時間・初心者・料金・駐車場の導線を追加 | 表示ありCTR 0%ページの改善 |
| 2026-06-21 | `/recommendations/matsuyama-programming/` | マイクラ・ロボット・料金の教材別判断カードを追加 | 低順位ページの本文強化 |
| 2026-06-21 | `/recommendations/matsuyama-piano/` | 子ども・大人初心者・月謝・体験の導線を追加 | CTR 0%ページの検索意図整理 |
| 2026-06-21 | `/recommendations/shikokuchuo-english/` | タイトルを無料体験・幼児・小学生寄りへ改善 | 10位前後からクリック獲得 |
| 2026-06-21 | `/recommendations/matsuyama-ballet/` | タイトルと冒頭カードを改善 | 10位以内付近のCTR改善 |

## ページ別計測表

| 優先 | ページ | 改善前クリック | 改善前表示 | 改善前CTR | 改善前順位 | 改善後クリック | 改善後表示 | 改善後CTR | 改善後順位 | 判定 | 次アクション |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| A | `/recommendations/matsuyama-soccer/` | 0 | 48 | 0% | 16.6 |  |  |  |  |  |  |
| A | `/recommendations/matsuyama-english/` | 0 | 34 | 0% | 23.5 |  |  |  |  |  |  |
| A | `/recommendations/ehime-adult-lessons/` | 8 | 158 | 5.06% | 19.97 |  |  |  |  |  |  |
| A | `/recommendations/matsuyama-dance/` | 3 | 67 | 4.48% | 13.31 |  |  |  |  |  |  |
| A | `/` | 0 | 28 | 0% | 11.68 |  |  |  |  |  |  |
| B | `/recommendations/matsuyama-fitness/` | 0 | 24 | 0% | 22.25 |  |  |  |  |  |  |
| B | `/recommendations/matsuyama-programming/` | 0 | 21 | 0% | 45.19 |  |  |  |  |  |  |
| B | `/recommendations/matsuyama-piano/` | 0 | 8 | 0% | 29.25 |  |  |  |  |  |  |
| B | `/recommendations/shikokuchuo-english/` | 0 | 10 | 0% | 10.3 |  |  |  |  |  |  |
| B | `/recommendations/matsuyama-ballet/` | 0 | 7 | 0% | 8.86 |  |  |  |  |  |  |
| C | `/recommendations/matsuyama-dance-beginner/` | 19 | 149 | 12.75% | 8.98 |  |  |  |  |  | 勝ちページ。内部リンク元として活用 |
| C | `/recommendations/imabari-lessons/` | 1 | 12 | 8.33% | 12.75 |  |  |  |  |  |  |
| C | `/recommendations/matsuyama-boxing/` | 1 | 10 | 10% | 8.8 |  |  |  |  |  |  |
| C | `/recommendations/matsuyama-calligraphy/` | 1 | 7 | 14.29% | 10.43 |  |  |  |  |  |  |
| C | `/recommendations/matsuyama-kpop-dance/` | 1 | 5 | 20% | 9.4 |  |  |  |  |  |  |

## 横展開候補

| 伸びたページ | 横展開候補 | 作る/改善する内容 |
| --- | --- | --- |
| `/recommendations/matsuyama-soccer/` | `imabari-soccer`, `niihama-soccer`, `ehime-soccer-lessons` | 小学生・初心者・送迎・体験の型を横展開 |
| `/recommendations/matsuyama-ballet/` | `matsuyama-kids-ballet`, `matsuyama-adult-ballet` | 子ども向け、大人初心者向けへ分岐 |
| `/recommendations/shikokuchuo-english/` | `shikokuchuo-adult-english`, `ehime-kids-english` | 無料体験・幼児・小学生の型を東予/愛媛全体へ展開 |
| `/recommendations/matsuyama-fitness/` | `matsuyama-24h-gym`, `matsuyama-gym-price` | 24時間・料金・駐車場の検索意図へ分岐 |
| `/recommendations/matsuyama-programming/` | `matsuyama-minecraft-programming`, `matsuyama-robot-programming` | 教材別に深掘り |

## 次回チェックメモ

次回のSearch Console確認時に見ること:

- CTR 0%だったページにクリックが発生したか
- 8〜12位のページが1ページ目に残っているか
- 表示回数が増えたのにCTRが低いページがないか
- TOPの「今よく見られている入口」へ載せるべきページが変わったか
- 勝ちページから内部リンクを追加すべき派生ページがあるか
