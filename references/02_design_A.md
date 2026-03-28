# 【Pattern A】 Trust & Solid（堅実・トラディショナル）

## 基本定義

- **用途**: BtoB企業（建設・土木）、士業、医療機関、製造業、官公庁関連
- **キーワード**: 信頼、実績、安定、誠実、堅実

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #1B4965;        /* 紺系（信頼感） */
  --color-base: #F7F7F5;        /* オフホワイト */
  --color-white: #FFFFFF;
  --color-accent: #E07A2F;      /* オレンジ（行動喚起） */
  --color-text: #1A1A1A;
  --color-text-light: #666666;
  --color-border: #E0E0E0;

  --font-en: 'Noto Serif JP', serif;
  --font-heading-jp: 'Noto Serif JP', serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1080px;
  --section-padding: 80px;
  --section-padding-sp: 48px;
  --radius: 4px;
}
```

---

## デザインルール

### ナビゲーション
- ヘッダー上部固定。ロゴは左、メニューは右に直線配置
- 背景: グラスモーフィズム（`rgba(255,255,255,0.9)` + `blur(10px)`）

### タイポグラフィ
- 明朝体またはウェイトのしっかりしたゴシック
- 本文 **15〜16px**、line-height: 1.8
- 見出しは太め（Bold 700）

### 見出し装飾
- 左側に太い縦線（幅 4〜8px）、または上下を細い実線で挟む
- 英字ラベルは控えめに

### 余白
- セクション間 **80〜100px**（SP: 48〜60px）
- 規則的で等間隔。安定感を重視

### UIパーツ
- 角丸 **0〜4px**。シャープで真面目な印象
- ボタンは塗りつぶし型、角丸小さめ
- シャドウ: `rgba(0,0,0,0.06)` 程度

### ビジュアル
- 四角くトリミングし彩度を抑えめ
- アイコンは均一な線で単色（Material Icons推奨）

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@400;700&display=swap" rel="stylesheet">
```
