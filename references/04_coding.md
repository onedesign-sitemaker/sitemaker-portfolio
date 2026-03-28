# 04_coding.md - コーディングルール

SITEMAKERにおけるHTML/CSS/JavaScriptの実装は、本ルールに従うこと。デザイン辞書（`dict/02_design.md`）のトンマナと矛盾しない実装とする。

---

## 1. HTML

- **セマンティックなマークアップ**を心がける（`header`, `nav`, `main`, `section`, `article`, `footer` 等を適切に使用する）。
- 見出し階層（`h1`〜`h6`）は文書構造に沿って飛び番号にしない。
- 画像には必ず `alt` を付与する。装飾画像の場合は `alt=""` とする。
- 外部リンクには `target="_blank"` と合わせて `rel="noopener noreferrer"` を付与する。

---

## 2. CSS

### 2-1. 余白・サイズ（8pxグリッド）

- **余白（margin / padding）および要素の主要なサイズは、すべて 8 の倍数**で指定する。
- 使用する値の目安: **8, 16, 24, 32, 48, 64, 80, 120px** 等。
- 例外（例: 1px のボーダー）を除き、7px や 15px などの中途半端な数値は避ける。

```css
/* 推奨 */
padding: 24px;
margin-bottom: 32px;
gap: 16px;

/* 非推奨 */
padding: 23px;
margin-bottom: 30px;
```

### 2-2. レイアウト

- レイアウトには **Flexbox** または **CSS Grid** を使用する。
- レガシーな `float` によるレイアウトは使用しない（テキストの回り込み等、やむを得ない場合を除く）。

### 2-3. アニメーション・状態変化

- ホバー・フォーカス・表示切替などの状態変化には **transition** を必ず付与する。
- **基本値**: `transition: 0.3s ease;` または `transition: 0.3s ease-in-out;`
- 一瞬で切り替わるチープな動きは避け、不透明度（`opacity`）や軽い移動（`transform: translateY(-2px)` 等）で上品に表現する。

```css
/* 推奨 */
.button {
  transition: 0.3s ease;
}
.button:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

/* 非推奨：transition なしで色だけ変える */
.button:hover {
  background: #333;
}
```

### 2-4. レスポンシブ

- ブレイクポイントの基準は **max-width: 768px**（スマホ／PC の切り替え）。
- メディアクエリはモバイルファーストまたはデスクトップファーストのどちらかに統一し、プロジェクト内で一貫させる。
- 768px 以下では、セクション間・要素内の余白を PC の **50〜2/3** に縮小し、本文フォントは **14〜15px** 以上、見出し（H2）は PC の **70〜80%** に縮小する。

### 2-5. iOS / Safari 特有の対策

- **ビューポート高さのズレ防止**: フルスクリーン表示などで高さを指定する際、`100vh` は iOS Safari でアドレスバー表示時にずれるため使用しない。**`100dvh`**（Dynamic Viewport Height）を使用する。未対応ブラウザ用に `100vh` をフォールバックとして併記する。

```css
/* 推奨 */
.min-height-screen {
  min-height: 100vh;
  min-height: 100dvh;
}
```

- **ホバー時のチラつき防止**: ホバーで `transform` や `opacity` を変化させる要素では、Safari でレンダリングがチラつくことがある。**`transform: translateZ(0)`** を付与して GPU レイヤー化し、チラつきを防ぐ。

```css
/* 推奨 */
.button {
  transform: translateZ(0);
  transition: 0.3s ease;
}
.button:hover {
  transform: translateZ(0) translateY(-2px);
}
```

---

## 3. クラス命名（BEMベース・シンプル）

- **BEM記法**をベースに、**ブロック__要素--修飾子** の関係を守る。
- クラス名は**シンプルに**。必要以上に長くしない。
- 要素名は英語で、小文字・ハイフン区切り（kebab-case）とする。

| 役割 | 例 |
|------|-----|
| **Block**（ブロック） | `.card`, `.header`, `.hero` |
| **Element**（要素） | `.card__title`, `.card__body`, `.header__nav` |
| **Modifier**（修飾子） | `.card--featured`, `.button--primary` |

```html
<!-- 例 -->
<article class="card card--featured">
  <h2 class="card__title">タイトル</h2>
  <p class="card__body">本文</p>
</article>
```

- 修飾子単体では使わず、必ずブロック（または要素）クラスとセットで付与する。

---

## 4. JavaScript

### 4-1. Vanilla JS のみ（jQuery 禁止）

- **jQuery は使用しない**。すべて **Vanilla JavaScript（素のJS）** で実装する。
- DOM 操作・イベント・非同期処理は、ネイティブの `document.querySelector` / `addEventListener` / `fetch` 等で行う。
- 必要に応じて **Intersection Observer API**（スクロール連動アニメーション等）を活用する。

### 4-2. 記述の基本

- スクリプトは `DOMContentLoaded` 内、または `defer` 付きで読み込み、DOM の準備後に実行する。
- グローバル汚染を避け、必要な範囲で関数やオブジェクトにまとめる。
- 既存のライブラリ（Swiper.js 等）を CDN で使う場合は、本ルールおよび `02_design.md` で許可されているものに限定する。

---

## 5. 共通で守ること

- **ID はスタイル付けに使わない**。スタイルはクラスで指定する。ID はアンカーや `aria` 用に留める。
- **インラインスタイルは原則使わない**。スタイルは CSS ファイル（または CSS モジュール）に記述する。
- 他辞書（`01_pm.md`, `02_design.md`）で定められたフォルダ構成・デザインルール（カラー比・フォント・NG デザイン等）に反する実装をしない。
