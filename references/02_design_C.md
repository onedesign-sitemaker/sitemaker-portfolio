# 【Pattern C】 Clean & Modern（洗練・モダン）

## 基本定義

- **用途**: IT企業、デザイン会社、高級商材、SaaS、コンサルティング
- **キーワード**: 洗練、モダン、クリーン、余白、先進的

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #0F172A;        /* ダークネイビー */
  --color-base: #FAFAFA;        /* ライトグレー */
  --color-white: #FFFFFF;
  --color-accent: #3B82F6;      /* ブルー */
  --color-text: #1E293B;
  --color-text-light: #94A3B8;
  --color-border: #E2E8F0;

  --font-en: 'Inter', sans-serif;
  --font-heading-jp: 'Noto Sans JP', sans-serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1200px;
  --section-padding: 160px;
  --section-padding-sp: 80px;
  --radius: 8px;
}
```

---

## デザインルール

### ナビゲーション
- 初期は背景透明、スクロールで背景色が出現
- テキストリンクのみ（装飾最小限）

### タイポグラフィ
- モダンなサンセリフ体。英語は幾何学的フォント（Inter）
- 見出しは極大（48px〜）、本文はやや小さめ（14〜15px）
- letter-spacing広め（0.05〜0.1em）

### 見出し装飾
- 背景に巨大な英語の透かし文字を配置し日本語を重ねる
- 透かし: `font-size: 120px; opacity: 0.03;`

### 余白
- セクション間 **160〜200px**（SP: 80〜100px）
- 大胆なホワイトスペース（抜け感）

### UIパーツ
- アウトライン（線のみ）ボタン
- シャドウは広く薄くぼかす（`blur: 40px, rgba(0,0,0,0.04)`）
- 角丸 8px

### ビジュアル
- 画面幅いっぱいのダイナミックな高画質写真
- グリッド配置で整然と

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
```
