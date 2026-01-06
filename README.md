# @renzynx/neumorphic-ui

A soft, tactile component library for React.

[![npm version](https://img.shields.io/npm/v/@renzynx/neumorphic-ui?color=blue)](https://www.npmjs.com/package/@renzynx/neumorphic-ui)
[![license](https://img.shields.io/github/license/renzynx/neumorphic-ui)](https://github.com/renzynx/neumorphic-ui/blob/main/LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)](https://tailwindcss.com/)

---

## Features

- **Base UI foundation**: Built on top of Base UI primitives for maximum accessibility and flexibility.
- **Tailwind CSS v4**: Leveraging the latest Tailwind CSS features including native CSS variables and lightning-fast compilation.
- **Dark mode**: Fully compatible with dark mode out of the box with optimized neumorphic shadows for dark surfaces.
- **Accessible**: WAI-ARIA compliant components with keyboard navigation and screen reader support.
- **shadcn CLI compatible**: Easy to add to your project using the shadcn CLI registry system.

---

## Installation

Add components directly to your project using the shadcn CLI:

```bash
npx shadcn@latest add https://neumorphic-ui.vercel.app/r/[component].json
```

---

## Quick Start

To add a Button component:

```bash
npx shadcn@latest add https://neumorphic-ui.vercel.app/r/button.json
```

Then use it in your React component:

```tsx
import Button from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}
```

---

## Available Components

| | | |
| --- | --- | --- |
| accordion | alert-dialog | avatar |
| button | card | checkbox |
| collapsible | dialog | field |
| input | menu | number-field |
| password-input | popover | progress |
| radio | scroll-area | select |
| separator | slider | switch |
| tabs | textarea | theme-toggle |
| toast | toggle | toggle-group |
| tooltip | | |

---

## Tech Stack

- **Framework**: React 19, Next.js 16
- **Styling**: Tailwind CSS v4, class-variance-authority
- **Primitives**: Base UI
- **Icons**: Phosphor Icons

---

## License

MIT

---

## Documentation

For full documentation and live examples, visit [neumorphic-ui.vercel.app](https://neumorphic-ui.vercel.app).
