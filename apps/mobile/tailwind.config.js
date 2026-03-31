const { hairlineWidth } = require('nativewind/theme');
const { Colors } = require('./src/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Light mode as defaults — dark mode switched via NativeWind class
        background: Colors.light.background,
        surface: Colors.light.surface,
        card: Colors.light.card,
        foreground: Colors.light.foreground,
        'muted-foreground': Colors.light.mutedForeground,
        primary: {
          DEFAULT: Colors.light.primary,
          foreground: Colors.light.primaryForeground,
        },
        secondary: {
          DEFAULT: Colors.light.secondary,
          foreground: Colors.light.secondaryForeground,
        },
        accent: {
          DEFAULT: Colors.light.accent,
          foreground: Colors.light.accentForeground,
        },
        destructive: {
          DEFAULT: Colors.light.destructive,
          foreground: Colors.light.destructiveForeground,
        },
        muted: {
          DEFAULT: Colors.light.muted,
          foreground: Colors.light.mutedForeground,
        },
        border: Colors.light.border,
        input: Colors.light.input,
        ring: Colors.light.ring,
        success: Colors.light.success,
        warning: Colors.light.warning,
        // Brand tokens — never change between modes
        brand: Colors.brand,
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};
