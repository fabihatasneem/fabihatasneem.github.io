import CONFIG from './gitprofile.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      // Map themes array, replacing 'light' and 'dark' with custom themes if defined
      ...CONFIG.themeConfig.themes.map((theme) => {
        if (theme === 'dark' && CONFIG.themeConfig.customDarkTheme) {
          return { dark: CONFIG.themeConfig.customDarkTheme };
        }
        if (theme === 'light' && CONFIG.themeConfig.customLightTheme) {
          return { light: CONFIG.themeConfig.customLightTheme };
        }
        return theme;
      }),
      // Add custom procyon theme if customTheme is defined
      ...(CONFIG.themeConfig.customTheme
        ? [{ procyon: CONFIG.themeConfig.customTheme }]
        : []),
    ],
  },
};
