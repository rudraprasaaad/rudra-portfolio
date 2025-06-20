import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Enhanced minimalist color palette
        minimal: {
          accent: "hsl(var(--minimal-accent))",
          "accent-light": "hsl(var(--minimal-accent-light))",
          "accent-soft": "hsl(var(--minimal-accent-soft))",
          surface: "hsl(var(--minimal-surface))",
          "surface-hover": "hsl(var(--minimal-surface-hover))",
          "surface-soft": "hsl(var(--minimal-surface-soft))",
          "text-primary": "hsl(var(--minimal-text-primary))",
          "text-secondary": "hsl(var(--minimal-text-secondary))",
          "text-muted": "hsl(var(--minimal-text-muted))",
          "text-subtle": "hsl(var(--minimal-text-subtle))",
          border: "hsl(var(--minimal-border))",
          "border-light": "hsl(var(--minimal-border-light))",
          "border-subtle": "hsl(var(--minimal-border-subtle))",

          // New accent colors
          blue: "hsl(var(--minimal-blue))",
          "blue-light": "hsl(var(--minimal-blue-light))",
          "blue-soft": "hsl(var(--minimal-blue-soft))",
          slate: "hsl(var(--minimal-slate))",
          "slate-light": "hsl(var(--minimal-slate-light))",
          "slate-soft": "hsl(var(--minimal-slate-soft))",
          warm: "hsl(var(--minimal-warm))",
          "warm-light": "hsl(var(--minimal-warm-light))",
          "warm-soft": "hsl(var(--minimal-warm-soft))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
