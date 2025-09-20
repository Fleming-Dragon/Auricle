/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        // Calming color palette
        lavender: {
          50: '#f8f7ff',
          100: '#f1edff',
          200: '#e6dcff',
          300: '#d4c2ff',
          400: '#bc9aff',
          500: '#a06eff',
          600: '#8c4df5',
          700: '#7a3ae1',
          800: '#6530bd',
          900: '#542a9a',
        },
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      backgroundImage: {
        'gradient-calm': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #ccfbf1 50%, #f1edff 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #a06eff 0%, #5eead4 50%, #38bdf8 100%)',
        'gradient-peace': 'linear-gradient(135deg, #f8f7ff 0%, #f0fdfa 50%, #f0f9ff 100%)',
        'gradient-therapy': 'linear-gradient(135deg, #e6dcff 0%, #bae6fd 25%, #99f6e4 50%, #e0f2fe 100%)',
        // Dark mode gradients
        'gradient-calm-dark': 'linear-gradient(135deg, #1e1b30 0%, #2d1b3d 25%, #1e2d3a 50%, #1a1a2e 100%)',
        'gradient-aurora-dark': 'linear-gradient(135deg, #4c1d95 0%, #155e75 50%, #1e3a8a 100%)',
        'gradient-peace-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
        'gradient-therapy-dark': 'linear-gradient(135deg, #2d1b3d 0%, #1e3a8a 25%, #155e75 50%, #0f172a 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}