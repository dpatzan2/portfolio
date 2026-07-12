import animatePlugin from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'], 
  theme: {
    extend: {
      colors: {
        ubuntu: {
          orange: '#E95420',
          dark: '#2C001E',
          panel: 'var(--ubuntu-panel)',
          window: 'var(--ubuntu-window)',
          header: 'var(--ubuntu-header)',
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'ubuntu-desktop': "url('/assets/ubuntu-bg.jpg')",
      },
      spacing: {
        '17': '4.25rem', // Para left-17 que usas en WindowsContainer
      }
    },
  },
  plugins: [animatePlugin],
}