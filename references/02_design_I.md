# 【Pattern I】 Minimalism（極限のシンプル・アート）

## 基本定義

- **用途**: デザイン事務所、アパレル、クリエイターポートフォリオ、建築事務所、ギャラリー
- **キーワード**: ミニマル、余白、静寂、アート、禁欲的

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #111111;        /* ほぼ黒 */
  --color-base: #FFFFFF;        /* 純白 */
  --color-white: #FFFFFF;
  --color-accent: #111111;      /* アクセントも黒（色を排除） */
  --color-text: #111111;
  --color-text-light: #AAAAAA;
  --color-border: #E5E5E5;

  --font-en: 'Inter', sans-serif;
  --font-heading-jp: 'Noto Sans JP', sans-serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1200px;
  --section-padding: 200px;
  --section-padding-sp: 100px;
  --radius: 0px;
}
```

---

## デザインルール

### ナビゲーション
- 四隅にテキストリンク、または極小の「＋」マークのみ
- ハンバーガーメニューもシンプルに2本線

### タイポグラフィ
- 超巨大（**100px以上**）と極小（**12px**）の極端なコントラスト
- font-weight: 100〜300 の極細を積極使用
- letter-spacing: 0.15em以上

### 見出し装飾
- 一切の装飾を排除。フォント自体の美しさだけで見せる
- 色は黒と白のみ

### 余白
- セオリーを無視しランダム配置に見せる
- 画面の **80%以上を余白** にする
- セクション間 **200px以上**（SP: 100px）

### UIパーツ
- 文字の下に極細の下線（1px）を引くだけ
- 角丸なし（0px）
- シャドウなし

### ビジュアル
- モノクローム基調。抑制された表現
- 写真は大きく1枚で静かに見せる
- `filter: grayscale(100%)` も活用

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Noto+Sans+JP:wght@100;300;400;500&display=swap" rel="stylesheet">
```
