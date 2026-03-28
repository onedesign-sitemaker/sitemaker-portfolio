# 【Pattern H】 Tech & Cyber（近未来・テクノロジー）

## 基本定義

- **用途**: AI、Web3、ゲーミング、ITスタートアップ、SaaS、ブロックチェーン
- **キーワード**: 近未来、テクノロジー、サイバー、グロー、ダーク

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #00D4FF;        /* シアン（ネオン） */
  --color-base: #0A0A0F;        /* 深い黒 */
  --color-white: #FFFFFF;
  --color-accent: #7C3AED;      /* パープル */
  --color-glow: rgba(0, 212, 255, 0.3);
  --color-text: #E0E0E0;
  --color-text-light: #6B7280;
  --color-border: #1F2937;

  --font-en: 'JetBrains Mono', monospace;
  --font-heading-jp: 'Noto Sans JP', sans-serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1200px;
  --section-padding: 120px;
  --section-padding-sp: 64px;
  --radius: 8px;
}
```

---

## デザインルール

### ナビゲーション
- 黒の半透明（グラスモーフィズム `rgba(10,10,15,0.8)` + `blur(20px)`）
- 極度にシンプル。ロゴはSVGでグロー付き

### タイポグラフィ
- 英語は等幅フォント（JetBrains Mono）
- 日本語は角張ったゴシック体（Noto Sans JP weight 500〜700）
- 見出しは大きく、letter-spacing: 0.05em

### 見出し装飾
- 発光エフェクト（Glow）: `text-shadow: 0 0 20px var(--color-glow);`
- グリッチノイズアニメーション
- `::before` でスキャンライン効果

### 余白
- ダークモード基本
- セクション間 **120px**（SP: 64px）
- セクションを斜めの直線で鋭く切り取る（`clip-path`）

### UIパーツ
- ネオンカラーの細い枠線
- ホバーでグラデーション（シアン→パープル）
- `box-shadow: 0 0 15px var(--color-glow);` でグロー

### ビジュアル
- 3Dグラフィックやパーティクルアニメーション
- グラデーション背景（暗い紫→黒）
- グリッドラインの透かし

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
```
