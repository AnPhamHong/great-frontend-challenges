import colors from 'tailwindcss/colors';

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"], // Thêm Noto Sans vào font-family mặc định
      },
      colors: {...colors,
        //colors
        primary: "#171717", // text-neutral-900
        "primary-hover": "#0a0a0a", // text-neutral-950
        "primary-invert": "#fff", // text-white
        secondary: "#525252", // text-neutral-600
        tertiary: "#737373", // text-neutral-500
        brand: "#4338ca", // text-indigo-700
        disabled: "#a3a3a3", // text-neutral-400
        error: "#dc2626", // text-red-600
        "error-emphasize": "#991b1b", // text-red-800
        success: "#15803d", // text-green-700
        warning: "#a16207", // text-amber-700
        // Background Colors

        "dark-bg": "#1e1e1e",
        "bg-primary": "#ffffff",
        "bg-primary-inverted": "#0a0a0a",
        "bg-primary-hover": "#fafafa",
        "bg-secondary": "#e5e7eb",
        "bg-secondary-hover": "#d1d5db",
        "bg-tertiary": "#fafafa",
        "bg-disabled": "#f5f5f5",
        "bg-disabled-emphasize": "#f3f4f6",
        "bg-brand-primary": "#4338ca",
        "bg-brand-primary-emphasize": "#3730a3",
        "bg-error": "#dc2626",
        "bg-error-emphasize": "#b91c1c",
        "bg-error-subtle": "#fef2f2",
        "bg-success-subtle": "#f0fdf4",
        "bg-brand-subtle": "#eef2ff",
        "bg-neutral-subtle": "#f9fafb",
        "bg-warning-subtle": "#fffbeb",

        // Line Colors (Borders)
        "border-primary": "#e5e5e5", // border-neutral-200
        "border-secondary": "#9ca3af", // border-gray-400
        "border-success": "#bbf7d0", // border-green-200
        "border-brand-solid": "#4f46e5", // border-indigo-600
        "border-brand-subtle": "#c7d2fe", // border-indigo-200
        "border-error-subtle": "#fecaca", // border-red-200
        "border-warning-subtle": "#fde68a", // border-amber-200

        // Icon Colors
        "icon-emphasize": "#404040", // neutral-700
        "icon-primary": "#a3a3a3", // neutral-400
        "icon-primary-hover": "#737373", // neutral-500
        "icon-brand": "#6366f1", // indigo-500
        "icon-brand-background": "#eef2ff", // indigo-50
        "icon-success": "#15803d", // green-700
        "icon-error": "#dc2626", // red-600
        "icon-warning": "#facc15", // yellow-400

        // Input/Field Colors
        "input-text-title": "#404040", // text-neutral-700
        "input-text-placeholder": "#737373", // text-neutral-500
        "input-text-hint": "#737373", // text-neutral-500
        "input-text-filled": "#171717", // text-neutral-900
        "input-text-disabled": "#a3a3a3", // text-neutral-400
        "input-text-error": "#dc2626", // text-red-600
        "input-background": "#fafafa", // bg-neutral-50
        "input-border": "#e5e5e5", // border-neutral-200
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
      },
      fontSize: {
        xs: "12px", // 12px / 16px: Badge labels
        sm: "14px", // 14px / 20px: Badge labels, Form labels, etc.
        base: "16px", // 16px / 24px: Body, Section labels
        lg: "18px", // 18px / 28px: Button labels
        xl: "20px", // 20px / 28px: Section subtitles
        "2xl": "24px", // 24px / 32px: Card titles
        "3xl": "30px", // 30px / 36px: Section titles (mobile)
        "4xl": "36px", // 36px / 40px: Main title (mobile)
        "5xl": "48px", // 48px / 48px: Main title (tablet)
        "6xl": "60px", // 60px / 60px: Main title (desktop)
      },
    },
  },
  plugins: [],
};
