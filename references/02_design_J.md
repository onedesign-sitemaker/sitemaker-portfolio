# 【Pattern J】 Corporate Trust（コーポレート・トラスト）

## 基本定義

- **用途**: コーポレートサイト、採用サイト、BtoB企業、建設・製造業、士業、金融
- **キーワード**: 信頼感、品格、先進性、誠実、しれっとお洒落

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #0B2545;          /* トラストネイビー */
  --color-base: #FFFFFF;          /* ピュアホワイト */
  --color-white: #FFFFFF;
  --color-accent: #6B8F71;        /* アースグリーン（安心感・温かみ） */
  --color-text: #1A1A1A;
  --color-text-light: #666666;
  --color-border: #E8E8E8;        /* 極薄グレー */

  --font-en: 'Inter', sans-serif;
  --font-heading-jp: 'Noto Serif JP', serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1200px;
  --section-padding: clamp(100px, 12vw, 200px);
  --section-padding-sp: clamp(64px, 8vw, 100px);
  --radius: 4px;
}
```

### カラー比率ルール (70:25:5)
- **70% ベース**: ピュアホワイト（#FFFFFF）またはオフホワイト。圧倒的な抜け感と清潔感。
- **25% メイン**: トラストネイビー / ダークブルー。誠実さ・堅実さ・知的さを担保。
- **5% アクセント**: アースカラー（淡いグリーン、落ち着いたゴールドなど）。安心感や温かみを添える。

---

## デザインルール

### ナビゲーション
- クリーンなホワイトバー or 透過ヘッダー（スクロールで白背景に変化）
- テキストリンクのみ、装飾は最小限
- letter-spacing を広めに取り、品の良い間隔

### タイポグラフィ（Fluid & Macro-space）
- 全ての主要なフォントサイズに `clamp()` を使用し、デバイス幅に合わせて美しく伸縮
- 見出し: 上品な明朝体（Noto Serif JP）でジャンプ率を高く設定しメリハリをつける
- 本文: ウェイトを抑えたモダンなゴシック体（Noto Sans JP, weight: 300〜400）
- font-size 例:
  - h1: `clamp(32px, 4vw, 56px)`
  - h2: `clamp(24px, 3vw, 40px)`
  - body: `clamp(14px, 1.1vw, 16px)`

### 見出し装飾
- 英字ラベル（小さめ・letter-spacing広め）+ 日本語見出しの2段構成
- 装飾は最小限。フォントの美しさと余白で見せる

### 余白（マクロ余白）
- テキストブロックは `max-width: 600px` 〜 `800px` に制限し、一行が長くなりすぎるのを防ぐ
- 余った空間は `vw` 単位の広大な余白（padding / margin）として使い、窮屈さを排除
- セクション間: `clamp(100px, 12vw, 200px)`（SP: `clamp(64px, 8vw, 100px)`）

### UIパーツ（極限の引き算）
- **枠線（border）**: 不使用、または極めて細く（1px #E8E8E8）
- **影（box-shadow）**: 原則不使用。使う場合は極限まで薄く広く拡散のみ許容
  - 許容例: `0 20px 40px rgba(0, 0, 0, 0.04)`
  - **濃い影は厳禁**
- **角丸**: 0〜4px。過度な角丸は使用しない
- **ボタン**: ゴーストボタン（細い枠線のみ）or テキストリンク + 矢印

### レイアウト設計（静と動の融合）

#### ファーストビュー (Hero)
- 画面全幅（100vw / 100vh）を贅沢に使ったフルブリードの画像スライダー
- クロスフェードなど、ゆっくりとした上品なアニメーションで切り替え
- Ken Burns（ゆっくりズーム）効果も有効

#### ブロークングリッド（ずらし配置）
- 「代表メッセージ」「企業理念」など最も読ませたい重要セクションで使用
- 画像と白ベタのテキストボックスを CSS Grid またはネガティブマージンで意図的にオーバーラップさせる
- ボックスと画像は常に一体で動き、画面サイズが変わっても離れない構造にすること

### ビジュアル
- 高品質な写真を大きく使う
- 彩度は抑えめ（落ち着いたトーン）
- 写真のオーバーレイは不使用 or 極薄のグラデーションのみ

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Serif+JP:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet">
```
