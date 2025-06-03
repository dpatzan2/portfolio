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
          panel: 'rgba(0, 0, 0, 0.85)',
          window: 'rgba(37, 37, 37, 0.95)',
          header: 'rgba(48, 48, 48, 0.95)',
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