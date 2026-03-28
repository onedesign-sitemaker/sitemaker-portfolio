# 【Pattern D】 Elegant & Luxury（高級感・エレガント）

## 基本定義

- **用途**: 高級不動産、高級サロン、ハイブランド、ジュエリー、高級レストラン
- **キーワード**: 高級感、エレガント、ラグジュアリー、品格、特別感

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #1A1A1A;        /* ほぼ黒 */
  --color-base: #0D0D0D;        /* ダークモード背景 */
  --color-white: #F5F5F0;       /* オフホワイト */
  --color-accent: #C9A96E;      /* ゴールド */
  --color-text: #E8E8E8;
  --color-text-light: #999999;
  --color-border: #333333;

  --font-en: 'Cormorant Garamond', serif;
  --font-heading-jp: 'Shippori Mincho', serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1080px;
  --section-padding: 200px;
  --section-padding-sp: 100px;
  --radius: 0px;
}
```

---

## デザインルール

### ナビゲーション
- 英語表記メイン。極力目立たせない
- 細い白文字、letter-spacing広め

### タイポグラフィ
- 細身の明朝体（Shippori Mincho weight 300〜400）
- letter-spacing **0.1em以上**で優雅に
- 見出しは大きめだが細いウェイト

### 見出し装飾
- ゴールドやシルバーの細いライン
- 小さく配置し余白で魅せる

### 余白
- セクション間 **200px以上**（SP: 100px）
- 「何もない空間」をデザインする

### UIパーツ
- 細いゴールドや白の枠線のみのボタン（ゴースト型）
- 角丸なし（0px）。シャープさで高級感を演出
- ホバーで枠線→塗りつぶしに変化

### ビジュアル
- 黒や濃いグレーの背景（ダークモード）
- 彩度を落とした写真
- 写真は大きく1枚で見せる

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Shippori+Mincho:wght@300;400;500&family=Noto+Sans+JP:wght@300;400&display=swap" rel="stylesheet">
```
