# 🖱️ Button Component

A fully customizable, accessible, and reusable Button component for React + Tailwind projects. Designed to support multiple variants, sizes, states, and icon placements — ideal for building your own design system.

---

## ✨ Features

- ✅ Variants: `primary`, `secondary`, `tertiary`, `destructive`, `link`
- ✅ Sizes: `md`, `lg`, `xl`, `2xl`
- ✅ Icon support: left, right, both sides, or icon-only
- ✅ Loading state with spinner (`<Loader2 />` from `lucide-react`)
- ✅ Accessible: `aria-label` support for icon-only buttons
- ✅ Dark mode compatible (auto-styled via Tailwind classes)
- ✅ Keyboard focus ring + disabled states
- ✅ Responsive with utility-first Tailwind CSS

---

## 📦 Installation

No installation required if copied into your codebase.

Ensure you have:

- `react`, `react-dom`
- `lucide-react` for icons
- TailwindCSS configured

---

## 🧩 Usage

```tsx
import Button from "@/components/ui/Button";
import { Mail } from "lucide-react";

export default function Demo() {
  return (
    <div className="space-y-4">
      <Button variant="primary" size="lg">
        Primary
      </Button>

      <Button variant="secondary" icon={<Mail />}>
        With Left Icon
      </Button>

      <Button variant="destructive" iconPosition="right" iconRight={<Mail />}>
        Delete
      </Button>

      <Button icon={<Mail />} iconPosition="only" ariaLabel="Send mail" />

      <Button loading>Loading</Button>
    </div>
  );
}
```

---

## ⚙️ Props

| Prop           | Type                                                                                                            | Description                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `variant`      | `"primary"` &#124; <br> `"secondary"` &#124; <br> `"tertiary"` &#124; <br> `"destructive"` &#124; <br> `"link"` | Button style                    |
| `size`         | `"md"` &#124; <br> `"lg"` &#124; <br> `"xl"` &#124; <br> `"2xl"`                                                | Set the size of button          |
| `icon`         | `ReactNode`                                                                                                     | Left icon (or icon-only)        |
| `iconRight`    | `ReactNode`                                                                                                     | Right-side icon                 |
| `iconPosition` | `"left"` &#124; <br> `"right"` &#124; <br> `"both"` &#124; <br> `"only"`                                        | Set the icon position of button |
| `loading`      | `boolean`                                                                                                       | Shows spinner                   |
| `disabled`     | `boolean`                                                                                                       | Disabled state of button        |
| `ariaLabel`    | `string`                                                                                                        | Required if icon-only           |
| `className`    | `Record<SemanticDOM, string>`                                                                                   | Semantic DOM class              |
| `children`     | `React.ReactNode`                                                                                               | Button text/content             |

---

## 🔒 Accessibility Notes

- Buttons with `iconPosition="only"` must include an `aria-label`.
- Fully keyboard navigable with `Tab`.
- Focus ring added via Tailwind `focus:outline-none focus:ring-2`.

---

## 🧼 Styling System

Uses `tailwind-merge` (or `clsx`) to merge base + variant + size + icon classes dynamically. All styles are inlined and composable.

---

## 💡 Tips

- Can be used with `ButtonOrLink` component for dynamic `<Link>` or `<button>` rendering.
- Extend `variantStyles` or `sizeStyles` as needed.

---

Happy coding! ✨
