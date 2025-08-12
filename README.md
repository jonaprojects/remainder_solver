# Modular Equations System Solver

## Overview

The Modular Equations System Solver is a web application that allows users to solve systems of modular (congruence) equations using the Chinese Remainder Theorem (CRT). It provides an intuitive and interactive UI for entering equations, visualizing solutions, and learning about the underlying mathematics.

## Mathematical Background

The Chinese Remainder Theorem is a fundamental result in number theory. It states that if you have a system of congruences:

```
  x ≡ a₁ (mod n₁)
  x ≡ a₂ (mod n₂)
  ...
  x ≡ aₖ (mod nₖ)
```

where the moduli n₁, n₂, ..., nₖ are pairwise coprime, then there exists a unique solution modulo N = n₁·n₂·...·nₖ. The CRT has a rich history, with origins in ancient China and India, and was later developed by mathematicians such as Gauss, Euler, and Lagrange. It is widely used in cryptography, computer science, engineering, and other fields.

This project also provides a detailed background article (see the Background page in the app) covering:

- The historical development of the CRT
- Formal theorem statements and proofs
- Algorithms for solving modular systems
- Applications in modern mathematics and technology

## Features

- Solve systems of modular equations with step-by-step feedback
- Responsive, math-style input for equations
- Visual feedback for valid/invalid input and solution states
- In-depth background article with mathematical explanations and proofs
- Modern, mobile-friendly UI

## Tech Stack

- **Next.js** (React framework for SSR and static sites)
- **React** (UI components)
- **better-react-mathjax** (MathJax integration for rendering LaTeX/TeX math)
- **CSS Modules** (scoped, modular CSS for styling)
- **Material-UI (MUI)** (for navigation and UI elements)

## Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/jonaprojects/remainder_solver.git
   cd remainder_solver
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Project Structure

- `pages/` — Main Next.js pages, including the solver UI and background article
- `components/` — Reusable UI components (equation input, navbar, etc.)
- `models/` — Core logic for modular equations and CRT
- `styles/` — CSS Modules for styling

## Learn More

For a deep dive into the mathematics, history, and algorithms behind the Chinese Remainder Theorem, see the **Background** page in the app.

---

© 2025 jonaprojects. Licensed under the MIT License.
