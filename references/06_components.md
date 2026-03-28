# 06_components.md - コンポーネント管理

## コンポーネント保存場所

| ファイル | 役割 |
|---------|------|
| `assets/index.html` | Living Styleguide本体（ブラウザで開いて一覧確認） |
| `assets/library.css` | スタイルガイドUI用CSS |
| `assets/library.js` | スタイルガイド用JS（サイドバー追従・ナビアクティブ制御） |

---

## 登録済みコンポーネント一覧

### Sections

| ID | 名前 | パターン | 元案件 | 登録日 |
|----|------|----------|--------|--------|
| sec-hero | Hero - Framed Image | Pattern E | rinotto | 2026-03-19 |
| sec-concept | Concept - 2col Greeting | Pattern E | rinotto | 2026-03-19 |
| sec-style | Style - Instagram Grid | Pattern E | rinotto | 2026-03-19 |

### コンポーネント詳細

#### sec-hero: Hero - Framed Image
- **概要**: 全画面ヒーロー。周囲にpadding余白＋角丸でフレーム効果
- **特徴**: 背景白の余白→角丸の画像エリア→中央にロゴ＋キャッチ→下部にスクロール誘導
- **向いている業種**: 美容室、サロン、カフェ、アパレルなど女性向け・ナチュラル系
- **依存**: Cormorant Garamond, Shippori Mincho
- **カスタマイズポイント**: padding値（余白幅）、border-radius（角丸）、背景色、overlay gradient

#### sec-concept: Concept - 2col Greeting
- **概要**: 左テキスト＋右画像の2カラム Greeting セクション
- **特徴**: 英字ラベル→日本語見出し→本文を左に、大きな画像を右に配置。SP時は画像上・テキスト下
- **参考**: dplus-groen.com の home-greeting
- **向いている業種**: サロン、クリニック、レストラン、スクールなど「想い」を伝えたい業種全般
- **依存**: Josefin Sans, Shippori Mincho, Noto Sans JP
- **カスタマイズポイント**: grid比率、gap、画像aspect-ratio、テキストline-height

#### sec-style: Style - Instagram Grid
- **概要**: Instagram投稿風の正方形グリッドギャラリー
- **特徴**: 3列グリッド、正方形画像、ホバーズーム、スタイル名＋タグ、Instagramリンクボタン
- **向いている業種**: 美容室、ネイルサロン、飲食、フォトスタジオなどビジュアル重視の業種
- **依存**: Josefin Sans, Noto Sans JP, Phosphor Icons
- **カスタマイズポイント**: 列数、gap、hover効果、タグスタイル、リンクボタンデザイン

---

## 登録ルール

### 1. カード構造（必須）

各コンポーネントは `component-card` でラップし、**以下の順序**で構成する：

```
┌─ component-card__header（タイトル + パターンタグ + 元案件タグ）
├─ component-card__desc（説明文）
├─ component-card__meta（主要CSS値バッジ）
├─ component-card__preview（★ プレビュー画面 ★）
├─ component-card__code > HTML（折りたたみ）
└─ component-card__code > CSS（折りたたみ）
```

### 2. プレビュー画面（必須）

プレビューは **iframe の `srcdoc` 方式**で実装する。

```html
<div class="component-card__preview">
  <div class="component-card__preview-bar">
    <span class="preview-dot"></span>
    <span class="preview-dot"></span>
    <span class="preview-dot"></span>
    <span class="preview-label">Preview</span>
  </div>
  <iframe class="component-card__iframe" style="height:480px;" srcdoc="
    <!DOCTYPE html>
    <html lang='ja'>
    <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width,initial-scale=1'>
      <!-- 必要なGoogle Fonts -->
      <link href='https://fonts.googleapis.com/css2?family=...' rel='stylesheet'>
      <style>
        /* リセット + CSS変数 + コンポーネントCSS をすべて埋め込み */
      </style>
    </head>
    <body>
      <!-- コンポーネントHTML（ダミーデータ入り） -->
    </body>
    </html>
  "></iframe>
</div>
```

**プレビューのルール：**
- CSS変数・フォント・スタイルを **iframe内に自己完結**で埋め込む（ライブラリCSSと干渉させない）
- 画像は `placehold.co` か Pexels の汎用画像URLを使用（ローカルファイル非依存）
- `height` は `style` 属性で各コンポーネントに合わせて指定（Hero: 480px、一般セクション: 520px 等）
- `srcdoc` 内の引用符は `&quot;` にエスケープするか、CSSでは別記法を使う
- プレビュー用にフォントサイズ・余白を若干縮小してカード内に収まるよう調整してOK

### 3. プレビューバーのデザイン

macOS風ウィンドウバー：
- 赤・黄・緑の3ドット（`.preview-dot`）
- 「Preview」ラベル
- CSSクラスは `component-card__preview-bar` を使用

### 4. サイドバー

- セクション・パーツの大カテゴリは `nav-list` で表示
- 各コンポーネントへのリンクは `nav-list--sub` でインデント表示
- `nav-category` でカテゴリラベルを挿入（例: "Sections"）
- サイドバーは `position: sticky; top: 0` でスクロール追従

### 5. 命名規則

- セクション: `sec-[名前]`（例: `sec-hero`, `sec-concept`）
- パーツ: `part-[名前]`（例: `part-button-pill`, `part-card-basic`）

### 6. 登録時のチェックリスト

- [ ] `assets/index.html` にカード追加（プレビュー + HTML + CSS）
- [ ] `assets/index.html` のサイドバーにリンク追加
- [ ] このファイル（06_components.md）の一覧テーブルに追記
- [ ] このファイルのコンポーネント詳細に追記
