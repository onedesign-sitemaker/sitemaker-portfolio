# 【Pattern F】 Pop & Colorful（ポップ・楽しさ・にぎやか）

## 基本定義

- **用途**: キッズ向け、イベント、カジュアルな飲食店、エンタメ、テーマパーク
- **キーワード**: 楽しい、にぎやか、カラフル、元気、ワクワク

---

## デザイントークン（CSS変数の推奨値）

```css
:root {
  --color-main: #FF6B6B;        /* コーラルレッド */
  --color-base: #FFFEF5;        /* クリーム */
  --color-white: #FFFFFF;
  --color-accent: #4ECDC4;      /* ターコイズ */
  --color-sub1: #FFE66D;        /* イエロー */
  --color-sub2: #A8E6CF;        /* ミントグリーン */
  --color-text: #2D3436;
  --color-text-light: #636E72;
  --color-border: #DFE6E9;

  --font-en: 'Fredoka One', cursive;
  --font-heading-jp: 'Noto Sans JP', sans-serif;
  --font-body-jp: 'Noto Sans JP', sans-serif;

  --content-width: 1080px;
  --section-padding: 64px;
  --section-padding-sp: 40px;
  --radius: 16px;
}
```

---

## デザインルール

### ナビゲーション
- 原色の太い帯。跳ねるようなアニメーション
- ボタン型メニュー項目

### タイポグラフィ
- 極太のゴシック体やポップ体
- 太い黒の縁取りをつける（text-stroke）
- 本文 16〜18px、太め

### 見出し装飾
- 斜め配置、文字ごとの色変え、背景にドット柄など
- 吹き出し風の装飾

### 余白
- セクション間 **60〜80px**（狭め）（SP: 40〜48px）
- 画面全体に情報を散りばめる

### UIパーツ
- ピル型で下部に濃い色の太い影（ソリッドシャドウ `4px 4px 0`）で立体的に
- 角丸 16px〜完全円形
- ホバーでバウンドアニメーション

### ビジュアル
- ビビッドな多色使い、イラストの多用
- 写真にカラフルな枠やステッカー風装飾

---

## Google Fonts 読み込みテンプレート

```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
```
