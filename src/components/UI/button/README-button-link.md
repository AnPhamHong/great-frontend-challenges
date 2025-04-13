# 🏷️ ButtonOrLink Component

A flexible component that conditionally renders either a `<button>` or a `<Link>` from `react-router-dom`, depending on the `href` prop.

## ✨ Features

- Automatically renders a `<Link>` when `href` is provided.
- Renders a standard `<button>` when no `href` is passed.
- Supports all standard HTML button and link props.
- Uses `forwardRef` for better integration and accessibility.
- Utility-first styling with Tailwind CSS via `cn()` class merger.

---

## 🚀 Usage

### 1. **Import the Component**

```tsx
import ButtonOrLink from "@/components/ui/button-or-link";
```

> Adjust the path according to your project structure.

---

### 2. **As a Link**

```tsx
<ButtonOrLink href="/dashboard" className="text-blue-600 hover:underline">
  Go to Dashboard
</ButtonOrLink>
```

> Internally renders a `<Link to="/dashboard" />`.

---

### 3. **As a Button**

```tsx
<ButtonOrLink onClick={() => alert("Clicked!")}>Click Me</ButtonOrLink>
```

> Internally renders a standard `<button>` element.

---

## 🧩 Props

| Prop        | Type        | Default      | Description                                           |
| ----------- | ----------- | ------------ | ----------------------------------------------------- |
| `href`      | `string?`   | `undefined`  | If provided, renders a `<Link>` instead of `<button>` |
| `onClick`   | `function?` | `undefined`  | Callback when button is clicked                       |
| `type`      | `string?`   | `"button"`   | Button type (only used when rendering a `<button>`)   |
| `className` | `string?`   | `""`         | Additional Tailwind CSS classes                       |
| `children`  | `ReactNode` | **required** | The content to display inside the button or link      |

---

## 📦 Dependencies

- `react-router-dom` for routing (`<Link>` component)
- `cn()` utility for conditional className merging

---

## 📁 Example Integration

```tsx
import ButtonOrLink from "@/components/ui/button-or-link";

function Example() {
  return (
    <div className="space-x-4">
      <ButtonOrLink href="/profile" className="text-sm text-blue-600 underline">
        View Profile
      </ButtonOrLink>

      <ButtonOrLink
        onClick={() => console.log("Submitted")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </ButtonOrLink>
    </div>
  );
}
```

---

## 🛡️ Accessibility

The component forwards refs properly, enabling better integration with other libraries and accessibility tooling.

---

## 📄 License

MIT — Free to use and adapt.
