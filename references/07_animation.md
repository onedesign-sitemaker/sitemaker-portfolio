# 07 アニメーション辞書

AIはサイト制作時、本ドキュメントのアニメーションレベルとパターン別指定を**例外なく遵守**すること。

---

## 1. アニメーションレベル定義

4段階に分類し、パターンごとに使用レベルを指定する。

### Level 0: Base（全パターン必須）

| 名前 | 実装 | 備考 |
|------|------|------|
| **Smooth Scroll** | Lenis CDN または `html { scroll-behavior: smooth }` | プレミアム感を出すにはLenis推奨 |
| **Page Transition** | body全体を `opacity: 0→1` / `0.6s ease` | ローディング後のフェードイン |

```html
<!-- Lenis CDN -->
<script src="https://unpkg.com/lenis@1/dist/lenis.min.js"></script>
<script>
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
</script>
```

### Level 1: Standard（全パターン必須）

| 名前 | CSS | 備考 |
|------|-----|------|
| **Fade In Up** | `translateY(30px)→0, opacity 0→1, 0.6s` | 最も汎用的 |
| **Fade In Left** | `translateX(-40px)→0, opacity 0→1, 0.6s` | 左から登場 |
| **Fade In Right** | `translateX(40px)→0, opacity 0→1, 0.6s` | 右から登場 |
| **Stagger** | 子要素に `0.1s` ずつdelay追加 | カード並びなどに |

HTML属性で制御:
```html
<div data-animate="fade-up">...</div>
<div data-animate="fade-left">...</div>
<div data-animate="fade-right">...</div>
<div data-animate="fade-up" data-stagger="0.1">
  <div>子1</div>
  <div>子2</div>
  <div>子3</div>
</div>
```

### Level 2: Rich（パターン別指定）

| 名前 | 実装概要 | 効果 |
|------|---------|------|
| **Parallax** | `transform: translateY(calc(var(--scroll) * 0.3))` + JS scroll listener | 奥行き・立体感 |
| **Text Split** | 見出しを1文字ずつ `<span>` に分割、stagger 0.03s でフェード | 高級感・演出力 |
| **Image Reveal** | `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` / 0.8s | 映像的な画像表示 |
| **Scale Reveal** | overflow:hidden コンテナ内で `scale(1.1)→1.0` / 0.8s | ダイナミックな登場 |
| **Counter Up** | IntersectionObserver発火 + requestAnimationFrame でカウントアップ | 実績・数字の訴求 |

### Level 3: Advanced（高級・テック系のみ）

| 名前 | 実装概要 | 効果 |
|------|---------|------|
| **Horizontal Scroll** | CSS scroll-snap または GSAP ScrollTrigger pin | 横方向の動き・驚き |
| **Sticky + Scroll Sync** | 左テキストsticky、右コンテンツがスクロール | ストーリーテリング |
| **GSAP ScrollTrigger** | pin, scrub, timeline連動 | 高度なスクロール演出 |
| **Cursor Follow** | カスタムカーソルがlerp追従 | インタラクティブ感 |
| **Magnetic Button** | ボタンがカーソルに少し吸い寄せられる | 遊び心・テック感 |

---

## 2. パターン別アニメーションレベル

| Pattern | Level 0 | Level 1 | Level 2 | Level 3 | 備考 |
|---------|---------|---------|---------|---------|------|
| **A** (Trust) | ✅ | ✅ | △ Parallax, Counter Up | ❌ | 落ち着いた動きに限定 |
| **B** (Friendly) | ✅ | ✅ | △ Counter Up | ❌ | バウンス系easing OK |
| **C** (Modern) | ✅ | ✅ | ✅ 全て使用可 | △ Horizontal Scroll | シャープな動き |
| **D** (Luxury) | ✅ | ✅ | ✅ 全て使用可 | △ Cursor Follow | ゆったり・0.8s以上 |
| **E** (Natural) | ✅ | ✅ | △ Parallax のみ | ❌ | 自然でさりげなく |
| **F** (Pop/Fun) | ✅ | ✅ | ✅ Counter Up, Scale | ❌ | バウンス・弾む動き |
| **G** (Japanese) | ✅ | ✅ | ✅ Text Split, Image Reveal | ❌ | 筆のような動き |
| **H** (Tech) | ✅ | ✅ | ✅ 全て使用可 | ✅ 全て使用可 | グリッチ・パーティクル可 |
| **I** (Minimal) | ✅ | ✅ | △ Image Reveal のみ | ❌ | 最小限だが洗練 |
| **J** (Corporate) | ✅ | ✅ | ✅ 全て使用可 | △ Sticky Scroll | プロフェッショナル |

---

## 3. Easing辞書

| 名前 | CSS cubic-bezier | 用途 |
|------|-----------------|------|
| **Smooth** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | 汎用・標準 |
| **Elegant** | `cubic-bezier(0.16, 1, 0.3, 1)` | 高級感・ゆったり |
| **Sharp** | `cubic-bezier(0.33, 1, 0.68, 1)` | モダン・テック |
| **Bounce** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | ポップ・楽しい |
| **Soft** | `cubic-bezier(0.4, 0, 0.2, 1)` | ナチュラル |

### パターン別推奨easing・duration

| Pattern | 推奨easing | duration目安 |
|---------|-----------|-------------|
| **A** | Smooth | 0.5–0.7s |
| **B** | Bounce / Smooth | 0.4–0.6s |
| **C** | Sharp | 0.3–0.5s |
| **D** | Elegant | 0.8–1.2s |
| **E** | Soft | 0.5–0.8s |
| **F** | Bounce | 0.3–0.5s |
| **G** | Elegant / Soft | 0.6–1.0s |
| **H** | Sharp | 0.2–0.4s |
| **I** | Smooth / Sharp | 0.4–0.6s |
| **J** | Smooth | 0.5–0.7s |

---

## 4. 実装ルール

1. **IntersectionObserver** は共通JSファイルに1つだけ実装。各要素は `data-animate` 属性で制御する。
2. **threshold**: `0.15`（要素が15%見えたら発火）。
3. **一度だけ発火**: `observer.unobserve(entry.target)` で再発火防止。
4. **SP対応**: モバイル（768px以下）では Level 2 以上をシンプル化またはフェードのみに縮退。パフォーマンス最優先。
5. **prefers-reduced-motion**: アクセシビリティ対応**必須**。`@media (prefers-reduced-motion: reduce)` で全アニメーション無効化。
6. **パフォーマンス**: アニメーション対象は `transform` と `opacity` のみ。`width`, `height`, `top`, `left` 等のレイアウト発生プロパティのアニメーションは**禁止**。

---

## 5. 標準実装コード（コピペ可）

### 5-1. IntersectionObserver（Level 1 共通）

```javascript
/* ── Scroll Animation Observer ── */
document.addEventListener('DOMContentLoaded', () => {
  const animateEls = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // Stagger対応: 子要素にdelayを付与
        if (el.dataset.stagger) {
          const delay = parseFloat(el.dataset.stagger);
          [...el.children].forEach((child, i) => {
            child.style.transitionDelay = `${i * delay}s`;
            child.classList.add('is-visible');
          });
        }

        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  animateEls.forEach(el => observer.observe(el));
});
```

対応CSS:
```css
/* ── Base animation states ── */
[data-animate] {
  opacity: 0;
  transition: opacity 0.6s var(--easing, ease), transform 0.6s var(--easing, ease);
}
[data-animate="fade-up"]   { transform: translateY(30px); }
[data-animate="fade-left"]  { transform: translateX(-40px); }
[data-animate="fade-right"] { transform: translateX(40px); }
[data-animate="fade-scale"] { transform: scale(0.95); }

[data-animate].is-visible {
  opacity: 1;
  transform: translate(0) scale(1);
}

/* Stagger children */
[data-stagger] > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s var(--easing, ease), transform 0.5s var(--easing, ease);
}
[data-stagger] > *.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* アクセシビリティ: モーション軽減 */
@media (prefers-reduced-motion: reduce) {
  [data-animate],
  [data-stagger] > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

### 5-2. Parallax スクロール追跡（Level 2）

```javascript
/* ── Parallax via CSS variable ── */
(() => {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll', window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  });
})();
```

使用例:
```css
.parallax-bg {
  transform: translateY(calc(var(--scroll, 0) * 0.3px));
  will-change: transform;
}
```

### 5-3. Text Split ユーティリティ（Level 2）

```javascript
/* ── Text Split Animation ── */
function splitText(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    el.setAttribute('aria-label', text);
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.transitionDelay = `${i * 0.03}s`;
      span.classList.add('split-char');
      el.appendChild(span);
    });
  });
}

// 使用: splitText('[data-split]');
```

対応CSS:
```css
.split-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
[data-split].is-visible .split-char {
  opacity: 1;
  transform: translateY(0);
}
```

### 5-4. Counter Up（Level 2）

```javascript
/* ── Counter Up Animation ── */
function counterUp(el, target, duration = 2000) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// IntersectionObserverと組み合わせて使用
// <span data-counter="1500">0</span>
document.querySelectorAll('[data-counter]').forEach(el => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      counterUp(el, parseInt(el.dataset.counter), 2000);
      observer.unobserve(el);
    }
  }, { threshold: 0.5 });
  observer.observe(el);
});
```

---

> **📌 読み込みルール**: 本ドキュメントはサイト制作時に `02_design.md` と合わせて常に参照すること。パターンファイル（`02_design_X.md`）で指定されたアニメーションレベルを超える演出は使用しないこと。
