# 🏷️ Badge Component

A reusable badge component built with React and Tailwind CSS. It supports different visual styles (`success`, `warning`, `neutral`) and optional icons. Designed to be lightweight, theme-aware (dark mode supported), and customizable.

## ✨ Features

- 3 badge variants: `success`, `warning`, `neutral`
- Optional icons for quick visual cues
- Dark mode styling
- Fully customizable with `className` prop
- Responsive and compact layout

---

## 🚀 Usage

### 1. **Import the Component**

```tsx
import Badge from "@/components/ui/badge";
```

> Adjust the import path based on your project structure.

---

### 2. **Basic Usage**

```tsx
<Badge text="Pending" />
```

> This renders a neutral badge with text only.

---

### 3. **With Icon**

```tsx
<Badge text="Completed" variant="success" withIcon />
```

> Adds a green success icon (check circle) before the text.

---

### 4. **Custom Variant**

```tsx
<Badge text="Waiting for Approval" variant="warning" withIcon />
```

> Shows a yellow warning icon and badge styling.

---

### 5. **Custom Styling**

You can pass additional class names for layout tweaks:

```tsx
<Badge
  text="Custom Styled"
  variant="success"
  className="uppercase tracking-wide"
  withIcon
/>
```

---

## 🧩 Props

| Prop        | Type                                  | Default      | Description                                    |
| ----------- | ------------------------------------- | ------------ | ---------------------------------------------- |
| `text`      | `string`                              | **required** | The text displayed inside the badge            |
| `variant`   | `"success" \| "warning" \| "neutral"` | `"neutral"`  | Badge style and icon                           |
| `withIcon`  | `boolean`                             | `false`      | Show icon before the text                      |
| `className` | `string`                              | `""`         | Additional Tailwind classes to style the badge |

---

## 🎨 Available Variants

| Variant   | Color Style (Light/Dark)                                     | Icon           |
| --------- | ------------------------------------------------------------ | -------------- |
| `success` | Green background and text / Green text on dark green         | ✅ CheckCircle |
| `warning` | Yellow background and dark text / Yellow text on dark yellow | ⏰ Clock       |
| `neutral` | Gray background and text / Light gray on dark background     | ⏸️ PauseCircle |

---

## 📦 Dependencies

- `lucide-react` for icons
- Tailwind CSS for styling
- `cn()` utility for class merging (from your utils)

---

## 📁 Example Integration

```tsx
import Badge from "@/components/ui/badge";

export default function OrderStatus() {
  return (
    <div className="space-y-2">
      <Badge text="Success" variant="success" withIcon />
      <Badge text="Waiting" variant="warning" withIcon />
      <Badge text="Paused" variant="neutral" />
    </div>
  );
}
```

---

## 📄 License

MIT — Feel free to use and modify.
