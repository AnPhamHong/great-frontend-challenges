# Toggle Component

A customizable toggle switch component using Tailwind CSS and React.

## ✨ Props

| Prop Name         | Type                              | Required | Default     | Description                                    |
| ----------------- | --------------------------------- | -------- | ----------- | ---------------------------------------------- |
| `id`              | `string`                          | ✅       | —           | id                                             |
| `checked`         | `boolean`                         | ✅       | —           | Determines whether the toggle is on or off.    |
| `disabled`        | `boolean`                         | ✅       | —           | Disables the toggle if set to `true`.          |
| `text`            | `string`                          | ❌       | `undefined` | Optional label displayed next to the toggle.   |
| `onChange`        | `() => void`                      | ✅       | —           | Callback triggered when the toggle is changed. |
| `size`            | `"small" \| "default" \| "large"` | ✅       | —           | Determines the size of the toggle.             |
| `classNameToggle` | `string`                          | ❌       | `""`        | Additional class names for the toggle element. |
| `classNameText`   | `string`                          | ❌       | `""`        | Additional class names for the label text.     |
| `mainColor`       | `string` (CSS color)              | ❌       | `"#2563EB"` | Background color when toggle is on.            |
| `circleColor`     | `string` (CSS color)              | ❌       | `"#FFFFFF"` | Color of the circle inside the toggle.         |
| `baseColor`       | `string` (CSS color)              | ❌       | `"#E5E7EB"` | Background color when toggle is off.           |

---

## 🧩 Size Options

| Size      | Width x Height | Circle Size |
| --------- | -------------- | ----------- |
| `small`   | 36px x 20px    | 16px        |
| `default` | 44px x 24px    | 20px        |
| `large`   | 56px x 28px    | 24px        |

---

## 📦 Example Usage

```tsx
<Toggle
  checked={isActive}
  disabled={false}
  onChange={() => setIsActive(!isActive)}
  size="default"
  text="Enable Notifications"
  mainColor="#22C55E" // green-500
  circleColor="#FFFFFF"
  baseColor="#D1D5DB" // gray-300
/>
```

## 📌 Notes

- Colors accept any valid CSS color string (hex, rgb, hsl, etc.).

- For Tailwind compatibility, avoid using dynamic bg-\${color} class — instead, use inline style={{ backgroundColor }}.

- The component is keyboard accessible and supports dark mode if styled accordingly.
