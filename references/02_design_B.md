# 【Pattern B】 Friendly & Warm（親しみ・温もり）

## 基本定義

- **用途**: 採用サイト、BtoC店舗、クリニック、保育園、スクール、地域密着型サービス
- **キーワード**: 親しみ、温もり、笑顔、安心感、やわらかい

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #FF8C5A;        /* オレンジ系（親しみ） */
  --color-base: #FFF9F5;        /* ほんのりピーチ */
  --color-white: #FFFFFF;
  --color-accent: #4ECDC4;      /* ミントグリーン */
  --color-text: #333333;
  --color-text-light: #888888;
  --color-border: #F0E8E0;

  --font-en: 'Quicksand', sans-serif;
  --font-heading-jp: 'Zen Maru Gothic', sans-serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1080px;
  --section-padding: 100px;
  --section-padding-sp: 56px;
  --radius: 16px;
}
```

---

## デザインルール

### ナビゲーション
- 丸みを帯びたフローティングメニュー
- 背景は柔らかい白 + 大きめのシャドウ

### タイポグラフィ
- 丸ゴシック（Zen Maru Gothic）を積極使用
- 本文 **16〜18px**、line-height: 1.8〜2.0
- ほんわかした雰囲気を文字から演出

### 見出し装飾
- 中央揃え。文字の背景に角丸の薄い座布団を敷く
- 小さな丸ドットや波線で装飾

### 余白
- セクション間 **100〜120px**（SP: 56〜64px）
- 波線や背景色で柔らかく区切る

### UIパーツ
- 角丸 **8px〜完全な円形**
- ふっくらとしたドロップシャドウ（`rgba(0,0,0,0.08)` blur 16px）
- ボタンは丸みのあるピル型

### ビジュアル
- 写真を角丸（16〜24px）またはアメーバ状のマスクで切り抜く
- 人物写真を多用（笑顔、自然体）
- イラストを混ぜるのも効果的

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
```
