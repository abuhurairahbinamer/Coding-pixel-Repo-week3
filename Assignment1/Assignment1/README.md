# Assignment 1 — React Hooks Drills

A focused React + TypeScript project built with Vite demonstrating essential React hooks patterns without unnecessary re-renders or side-effect pitfalls.

---

## 🎯 Assignment Drills & Features

### 1. `useEffect` Drill (Correct Dependencies & Cleanup)
* **File**: [`src/components/Timer.tsx`](file:///d:/CMIT_Internships/week3/Assignment1/Assignment1/src/components/Timer.tsx)
* **Goal**: Implement `useEffect` with a proper dependency array and cleanup function to avoid memory leaks and infinite rendering loops.
* **Implementation Details**:
  * Initializes a `setInterval` timer on component mount.
  * Uses the functional updater form `setCount(c => c + 1)` so the effect does not need `count` in its dependency array.
  * Returns a cleanup function `clearInterval(id)` when the component unmounts.
  * Includes console logs on mount (`"Effect started"`) and unmount (`"Cleanup ran"`).

### 2. `useRef` Drill (No Re-renders)
* **File**: [`src/components/inputFocus.tsx`](file:///d:/CMIT_Internships/week3/Assignment1/Assignment1/src/components/inputFocus.tsx)
* **Goal**: Use `useRef` for DOM references and state persistence without triggering unnecessary re-renders.
* **Implementation Details**:
  * `inputRef`: Automatically focuses an `<input>` element on mount via `inputRef.current?.focus()`.
  * `prevValue`: Stores the previous value of the input across renders (`prevValue.current = value`) without causing additional render cycles.
  * Logs `"Rendered"` to demonstrate re-renders only occur on state updates (`setValue`).

### 3. Custom Hook Drill (`useToggle`)
* **File**: [`src/components/Toggle.tsx`](file:///d:/CMIT_Internships/week3/Assignment1/Assignment1/src/components/Toggle.tsx)
* **Goal**: Encapsulate reusable stateful logic into a custom hook.
* **Implementation Details**:
  * `useToggle(initial = false)`: A generic hook providing boolean state management and a toggle trigger function.
  * Actively consumed by `<ToggleComponent />` to expand/collapse UI content dynamically.

---

## 🛠️ Technology Stack

* **Core**: React 19, TypeScript
* **Build Tool**: Vite
* **Linter**: ESLint

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

```bash
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Building for Production

Build and type-check the project:

```bash
npm run build
```

### Linting

Run ESLint to check for code style and potential errors:

```bash
npm run lint
```
