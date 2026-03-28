# 【Pattern E】 Natural & Organic（自然・オーガニック）

## 基本定義

- **用途**: カフェ、美容室、自然素材の住宅、オーガニックコスメ、サロン、アロマ、ヨガスタジオ
- **キーワード**: 透明感、ナチュラル、やわらかい、呼吸感、余白、手触り

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  /* カラーパレット */
  --color-main: #8B7E6A;        /* くすみベージュ（メインカラー） */
  --color-base: #F5F0EB;        /* 淡いベージュ（ベースカラー） */
  --color-white: #FDFBF9;       /* ほぼ白のウォームホワイト */
  --color-accent: #C4956A;      /* テラコッタ系（アクセント） */
  --color-text: #404040;        /* 完全な黒は使わない、ダークグレー */
  --color-text-light: #8B8178;  /* 薄い本文色 */
  --color-border: #E8E0D8;      /* ボーダー色 */

  /* フォント */
  --font-en: 'Cormorant Garamond', serif;      /* 英字見出し */
  --font-heading-jp: 'Shippori Mincho', serif;  /* 日本語見出し */
  --font-body-jp: 'Noto Sans JP', sans-serif;   /* 本文 */
  --font-label: 'Josefin Sans', sans-serif;     /* セクションラベル */
  --font-accent: 'Zen Maru Gothic', sans-serif; /* ワンポイント丸文字 */

  /* サイズ */
  --content-width: 1080px;
  --section-padding: 120px;
  --section-padding-sp: 64px;
  --radius: 8px;
}
```

---

## ナビゲーション

- 背景は透過または薄いベージュ `rgba(253, 251, 249, 0.85)`
- `backdrop-filter: blur(8px)` で柔らかなすりガラス
- 力の抜けたデザイン。フォントは細め
- ロゴは手書き風またはセリフ体で温もりを演出

## タイポグラフィ

- 丸みを帯びた明朝体（Shippori Mincho）を見出しに
- 完全な黒（#000000）は使わない → `#404040` または `#333`
- 英字ラベルは `Josefin Sans`（letter-spacing: 0.2em、uppercase）
- 本文は `Noto Sans JP` 14〜15px、line-height: 2.0〜3.0（ゆったり）
- letter-spacing: 0.5〜1px で呼吸感を出す

## 見出し装飾

- セクションラベル（英字）→ 日本語見出し の2段構成
- 英字ラベルは小さく薄い色（`--color-text-light`）
- 水彩画のような淡いテクスチャや、植物のワンポイントは控えめに
- 見出し下の余白を広めに取り「呼吸感」を重視

## 余白

- セクション間 **120px**（SP: 64px）
- アシンメトリーで自然な揺らぎを出す
- 2カラムレイアウトでは左右で異なる余白量を許容

## UIパーツ

- 角丸 **8px** 程度
- ボタンはアースカラー（オリーブ、テラコッタ等）
- ボタンの角丸は `24px`（ピル型）も可
- ホバー時は `opacity: 0.8` + `translateY(-2px)`
- シャドウは `rgba(139, 126, 106, 0.08)` 程度の極薄

## ビジュアル

- 背景はアイボリーや淡いベージュ
- 写真のフチを少しぼかす、または角丸（12px）で柔らかく
- 画像の `aspect-ratio` を活用（4/5 縦長、3/2 横長など）
- `object-fit: cover` でトリミング

---

## 表現テクニック集（実案件から蓄積）

### Hero - Framed Image（sec-hero）

全画面ヒーロー。画面全体に `padding` を取り、中央の画像エリアに `border-radius` を付けることで「額縁」効果を演出する。

**構成パターン:**
```
┌─ 白い余白（padding: 16px）──────────┐
│ ┌─ 角丸の画像エリア（radius: 24px）─┐ │
│ │                                    │ │
│ │   中央: ロゴ + キャッチコピー      │ │
│ │   下部: スクロール誘導             │ │
│ │                                    │ │
│ └────────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**実装ポイント:**
- 外側: `background: #fff; padding: 16px;`
- 内側: `border-radius: 24px; overflow: hidden;`
- 背景画像 + `linear-gradient` オーバーレイで文字の可読性を確保
- キャッチコピーは `Cormorant Garamond`（英字）＋ `Shippori Mincho`（日本語）
- スクロール誘導は `@keyframes` でバウンスアニメーション
- **ダミー画像**: Pexels 風景系（サロン外観、自然光の室内など横長構図）

**CSS値の目安:**
- hero高さ: `100vh` / SP: `100svh`
- padding: `16px` / SP: `8px`
- border-radius: `24px` / SP: `16px`
- overlay: `rgba(0,0,0,0.18)`
- ロゴ: `max-width: 160px`
- キャッチ: `font-size: 14px; letter-spacing: 0.35em`

---

### Concept - 2col Greeting（sec-concept）

左テキスト＋右画像の2カラムGreetingセクション。「想い」を丁寧に伝えるレイアウト。

**構成パターン:**
```
┌──────────────────────────────────────┐
│  [英字ラベル]                        │
│  [日本語見出し]                      │
│                                      │
│  ┌─テキスト─────┐ ┌─画像──────────┐ │
│  │ セクション    │ │               │ │
│  │ ラベル        │ │ 縦長画像       │ │
│  │ 見出し        │ │ aspect-ratio  │ │
│  │ 本文×3段落    │ │ 4/5           │ │
│  └───────────────┘ └───────────────┘ │
└──────────────────────────────────────┘
SP時: 画像が上、テキストが下（orderで制御）
```

**実装ポイント:**
- `display: grid; grid-template-columns: 1fr 1fr; gap: 64px;`
- テキスト側: `order: 1;` / 画像側: `order: 2;`
- SP時: `grid-template-columns: 1fr;` で1列化、画像 `order: 1` テキスト `order: 2`
- 本文は段落ごとに `<p>` 分割、`margin-bottom: 24px`
- **本文の line-height: 3.0** で十分な行間を確保（ゆったり感の要）
- 画像は `aspect-ratio: 4/5; object-fit: cover; border-radius: 12px;`
- **ダミー画像**: Pexels 室内・インテリア系（暖色照明、木目、観葉植物など）

**CSS値の目安:**
- grid gap: `64px` / SP: `40px`
- ラベル: `Josefin Sans 14px, letter-spacing: 0.2em`
- 見出し: `Shippori Mincho 28px` / SP: `22px`
- 本文: `Noto Sans JP 14px, line-height: 3.0, letter-spacing: 1px`
- 画像radius: `12px`

---

### Style - Instagram Grid（sec-style）

Instagram投稿風の正方形グリッドギャラリー。ビジュアル重視の業種に最適。

**構成パターン:**
```
┌──────────────────────────────────────┐
│  [英字ラベル]  [日本語見出し]        │
│                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │  □   │ │  □   │ │  □   │         │
│  │ hover│ │ hover│ │ hover│         │
│  │ zoom │ │ zoom │ │ zoom │         │
│  │ 名前 │ │ 名前 │ │ 名前 │         │
│  │ タグ │ │ タグ │ │ タグ │         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │  □   │ │  □   │ │  □   │         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
│       [ View on Instagram → ]        │
└──────────────────────────────────────┘
```

**実装ポイント:**
- `display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;`
- 各カード: `aspect-ratio: 1/1; overflow: hidden; position: relative;`
- ホバー: `transform: scale(1.05);` で軽いズーム
- オーバーレイ: ホバー時に `rgba(0,0,0,0.3)` + スタイル名・タグを `opacity: 1` で表示
- タグは `background: rgba(255,255,255,0.9); border-radius: 20px; font-size: 11px;`
- Instagram CTA ボタンは `border: 1px solid var(--color-main);` のゴーストボタン
- Phosphor Icons で Instagram アイコンを使用
- SP時: 2列に変更 `grid-template-columns: repeat(2, 1fr);`
- **ダミー画像**: `placehold.co/600x600` または Pexels の正方形画像

**CSS値の目安:**
- grid gap: `4px`
- ホバーscale: `1.05`
- overlay: `rgba(0,0,0,0.3)`
- スタイル名: `Josefin Sans 15px, letter-spacing: 0.08em, white`
- タグ: `11px, padding: 4px 12px, border-radius: 20px`
- CTAボタン: `padding: 16px 48px, border-radius: 32px, font-size: 14px`

---

## ダミー画像の推奨（Pexels）

Pattern E案件では以下のカテゴリの画像が適合しやすい：

| 用途 | 推奨キーワード | 構図 |
|------|---------------|------|
| Hero背景 | salon interior, natural light room, green nature | 横長・広角 |
| Concept画像 | vanity table, cozy interior, wooden furniture | 縦長（4:5） |
| Styleグリッド | hair style, beauty, salon work | 正方形（1:1） |
| About/Profile | portrait soft light, warm tone | 縦長 or 正方形 |
| アクセント | dried flowers, eucalyptus, linen texture | 任意 |

---

## Google Fonts 読み込みテンプレート

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Josefin+Sans:wght@300;400&family=Noto+Sans+JP:wght@300;400;500&family=Shippori+Mincho:wght@400;500&family=Zen+Maru+Gothic:wght@400;500&display=swap" rel="stylesheet">
```
