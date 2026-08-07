# Assignment 3 — Tailwind UI Kit & Performance Optimization

Hey there! This is my submission for **Assignment 3**. In this project, I built a set of reusable Tailwind-styled components and investigated how to fix unnecessary re-renders in React using performance hooks (`useCallback`, `React.memo`, and `useRef`).

---

##  Reusable UI Components

I created 4 reusable components with prop variants and custom Tailwind `hover` / `focus` styling:

1. **`Button`** (`src/components/Button.tsx`)
   - **Variants:** `primary`, `secondary`, `danger`.
   - **Interactive States:** Accepts `hover` and `focus` Tailwind class strings for dynamic styling.
   - **Memoized:** Wrapped in `React.memo()` to prevent unnecessary re-renders.

2. **`Card`** (`src/components/Cards.tsx`)
   - Displays user details (name, role, email, status badge).
   - **Interactive States:** Accepts `hover` and `focus` styling, focusable via `tabIndex`.
   - **Memoized:** Wrapped in `React.memo()`.

3. **`Input`** (`src/components/Input.tsx`)
   - Styled text input supporting placeholder, custom focus rings, and hover states.

4. **`Spinner`** (`src/components/spinner.tsx`)
   - **Variants:** `size` (`sm`, `md`, `lg`) and `color` (`blue`, `gray`, `red`, `green`).
   - Smooth CSS animation with Tailwind's `animate-spin`.
   - **Memoized:** Wrapped in `React.memo()`.

---

##  Performance Optimization: Detailed Breakdown for Each Component

While building the main `App` component, I noticed a performance issue: whenever a user types into the `Input` box, the parent state (`text`) updates on every keystroke, causing `<App />` to re-render.

To track renders in real-time, I placed a `useRef(0)` render counter inside `Button`, `Card`, and `Spinner`.

Below is the separate breakdown for **each component case** showing the problem, fix, and before/after logs when typing 5 characters (`"hello"`) into the input field.

---

### 1. `Button` Component Case

####  The Problem (Before Fix)
When passing an inline function prop like `onClick={(e) => ...}` to `<Button>`, JavaScript creates a brand-new function reference on every single render of `App`. Even though `Button` was wrapped in `React.memo()`, React sees a new `onClick` prop reference every time `App` re-renders, causing `React.memo()` to fail and `Button` to redraw unnecessarily.

**Console Log Before Fix:**
```
button rendered: 1 times (initial mount)
button rendered: 2 times (typed 'h')
button rendered: 3 times (typed 'e')
button rendered: 4 times (typed 'l')
button rendered: 5 times (typed 'l')
button rendered: 6 times (typed 'o')
```

####  The Fix (After `useCallback` + `React.memo`)
I stabilized the function reference in `App.tsx` using `useCallback`:

```tsx
// App.tsx
const func = useCallback((e: React.MouseEvent<HTMLElement>) => {
  console.log(e.currentTarget.innerHTML);
}, []);
```

And ensured `Button.tsx` is wrapped in `React.memo`:
```tsx
// Button.tsx
export default memo(Button);
```

**Console Log After Fix:**
```
button rendered: 1 times (initial mount only — 0 extra renders!)
```

---

### 2. `Card` Component Case

####  The Problem (Before Fix)
Without memoization, whenever `App` re-rendered due to `text` state changes, all `Card` items inside `users.map()` were completely recreated and re-rendered by React, even though the user list data (`users`) and card props never changed!

**Console Log Before Fix (3 User Cards):**
```
Card rendered: 1 times (Ali Khan - mount)
Card rendered: 1 times (Sara Ahmed - mount)
Card rendered: 1 times (Ahmed Raza - mount)
Card rendered: 2 times (Ali Khan - typed 'h')
Card rendered: 2 times (Sara Ahmed - typed 'h')
Card rendered: 2 times (Ahmed Raza - typed 'h')
Card rendered: 3 times (Ali Khan - typed 'e')
... (all 3 cards re-render on every single character!)
```

####  The Fix (After `React.memo` + Primitive Prop Stability)
I wrapped `Card` in `React.memo(Card)` and ensured all props passed (`name`, `role`, `email`, `Status`, `hover`, `focus`, `key={user.id}`) are stable primitive values.

```tsx
// Cards.tsx
export default memo(Card);
```

Because `React.memo` performs a shallow equality check on props, and string/number primitives compare by value, React sees that no card props changed and skips re-rendering all cards.

**Console Log After Fix:**
```
Card rendered: 1 times (Ali Khan - initial mount only)
Card rendered: 1 times (Sara Ahmed - initial mount only)
Card rendered: 1 times (Ahmed Raza - initial mount only)
// Typing into input field... (cards remain at 1 render total!)
```

---

### 3. `Spinner` Component Case

####  The Problem (Before Fix)
Similarly, the `<Spinner />` component sits inside `App`. Without `React.memo`, every keystroke in the input box triggered a re-render of `App`, which forced the `Spinner` component to re-render and re-execute its component logic.

**Console Log Before Fix:**
```
spinner rendered: 1 times (initial mount)
spinner rendered: 2 times (typed 'h')
spinner rendered: 3 times (typed 'e')
spinner rendered: 4 times (typed 'l')
spinner rendered: 5 times (typed 'l')
spinner rendered: 6 times (typed 'o')
```

####  The Fix (After `React.memo`)
I wrapped `Spinner` in `React.memo(Spinner)`:

```tsx
// spinner.tsx
export default memo(Spinner);
```

Since the props (`size="lg"`, `color="green"`, `hover="..."`, `focus="..."`) are static primitives, `React.memo` successfully bails out of re-rendering `Spinner` when parent `App` state changes.

**Console Log After Fix:**
```
spinner rendered: 1 times (initial mount only — 0 extra renders!)
```

---

##  Summary Comparison Table Across All Components

| Component | Trigger Action | Renders BEFORE Optimization | Renders AFTER Optimization | Hook / Mechanism Used |
| :--- | :--- | :---: | :---: | :--- |
| **`Button`** | Typing 5 chars in Input | **6 renders** | **1 render** | `useCallback` + `React.memo` |
| **`Card`** (x3) | Typing 5 chars in Input | **18 renders** (6 per card) | **3 renders** (1 per card) | `React.memo` + Stable primitive props |
| **`Spinner`** | Typing 5 chars in Input | **6 renders** | **1 render** | `React.memo` + Static primitive props |

---

##  Stable React Keys

When mapping over the `users` array in `App.tsx`, I assigned unique database IDs (`key={user.id}`) rather than using array indices. This eliminates console React key warnings and ensures React accurately tracks component instances during list updates.
