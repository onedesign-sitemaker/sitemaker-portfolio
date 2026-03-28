# 【Pattern G】 Japanese Traditional（和風・伝統）

## 基本定義

- **用途**: 老舗旅館、和食店、伝統工芸、神社仏閣、日本酒・茶道
- **キーワード**: 和、伝統、格式、侘び寂び、四季

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #8B2500;        /* えんじ色 */
  --color-base: #F5F0E8;        /* 和紙ベージュ */
  --color-white: #FDFBF7;
  --color-accent: #2E7D32;      /* 抹茶グリーン */
  --color-text: #2C2C2C;
  --color-text-light: #7A7A7A;
  --color-border: #D4C9B8;

  --font-en: 'Noto Serif JP', serif;
  --font-heading-jp: 'Shippori Mincho', serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1080px;
  --section-padding: 120px;
  --section-padding-sp: 64px;
  --radius: 0px;
}
```

---

## デザインルール

### ナビゲーション
- 縦書きメニューを左右端に固定
- または横書きでも明朝体＋広い letter-spacing

### タイポグラフィ
- 美しい明朝体（Shippori Mincho）
- 「縦書き」セクションを取り入れる（`writing-mode: vertical-rl`）
- letter-spacing: 0.1em〜0.15em

### 見出し装飾
- 伝統色（えんじ、抹茶、藍など）
- 和柄の透かし（麻の葉、青海波など `background-image` で薄く）
- 判子モチーフの装飾

### 余白
- セクション間 **120〜160px**（SP: 64〜80px）
- 掛け軸のように縦に流す

### UIパーツ
- 角丸は使わず直角（**0px**）
- 判子モチーフや和紙テクスチャ
- ボタンは細い枠線のみ

### ビジュアル
- 四季の自然や職人の手元
- 写真を縦長（短冊形）にトリミング
- 彩度を少し落とし、フィルムライクに

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Noto+Sans+JP:wght@400;500&family=Noto+Serif+JP:wght@400;600&display=swap" rel="stylesheet">
```
