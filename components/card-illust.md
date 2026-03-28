# カード型UI：イラスト付きカード（ビーワークス風）

## 概要
上半分にイラスト（背景色あり）、左上に大きな数字、下半分にタイトル＋テキストのカード型UIコンポーネント。

## HTML構造
```html
<div class="strength-card">
  <div class="strength-card__visual">
    <span class="strength-card__number">01</span>
    <img src="[イラストURL]" alt="[説明]" class="strength-card__illust">
  </div>
  <div class="strength-card__body">
    <h3 class="strength-card__title">[タイトル]</h3>
    <p class="strength-card__text">[本文テキスト]</p>
  </div>
</div>
```

## グリッド配置
```html
<div class="strengths__grid">
  <!-- 3カラムで配置 -->
  <div class="strength-card">...</div>
  <div class="strength-card">...</div>
  <div class="strength-card">...</div>
</div>
```

## CSS
```css
.strengths__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.strength-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: 0.3s ease;
}

.strength-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--color-primary-light);
}

.strength-card__visual {
  position: relative;
  background: var(--color-primary-pale);
  padding: 32px 32px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  overflow: hidden;
}

.strength-card__number {
  font-family: var(--font-en);
  font-size: 64px;
  font-weight: 500;
  line-height: 1.0;
  color: var(--color-primary);
  opacity: 0.2;
  position: absolute;
  top: 12px;
  left: 20px;
  z-index: 1;
}

.strength-card:hover .strength-card__number {
  opacity: 0.35;
}

.strength-card__illust {
  width: 80%;
  max-width: 240px;
  height: auto;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.strength-card:hover .strength-card__illust {
  transform: scale(1.05);
}

.strength-card__body {
  padding: 28px 32px 36px;
}

.strength-card__title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  line-height: 1.6;
}

.strength-card__text {
  font-size: 14px;
  line-height: 1.9;
  color: var(--color-text-light);
}

/* SP */
@media (max-width: 768px) {
  .strengths__grid { grid-template-columns: 1fr; }
  .strength-card__number { font-size: 48px; }
  .strength-card__visual { min-height: 180px; padding: 24px 24px 12px; }
  .strength-card__body { padding: 24px 24px 28px; }
}
```

## イラスト推奨ソース
- [storyset.com](https://storyset.com/) - Bro / Rafiki / Amico スタイル
- カラーカスタマイズ可能（ブランドカラーに合わせる）

## 使用例
- 「選ばれる理由」セクション
- 「サービスの特長」セクション
- 「ステップ紹介」セクション
