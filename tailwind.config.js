/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F4EC',
          alt: '#EFEADD',
          warm: '#E8E2D2',
        },
        ink: {
          DEFAULT: '#0F3D3E',
          soft: '#1B4D4E',
          deep: '#0A2A2B',
        },
        accent: {
          DEFAULT: '#1F7A6D',
          hover: '#186459',
          light: '#289888',
        },
        saffron: {
          DEFAULT: '#F2A33A',
          hover: '#E09228',
          light: '#FCEFD8',
        },
        sage: {
          DEFAULT: '#DCE8DF',
          deep: '#C2D6C7',
          light: '#F0F5F1',
        },
        brick: {
          DEFAULT: '#B5503C',
          light: '#F8ECE9',
        },
        bodyText: '#3B4A48',
        mutedText: '#6B7A77',
        borderSubtle: '#E3DDCC',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(15, 61, 62, 0.04), 0 1px 2px rgba(15, 61, 62, 0.02)',
        'lift': '0 8px 24px rgba(15, 61, 62, 0.08), 0 2px 4px rgba(15, 61, 62, 0.03)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
    },
  },
  plugins: [],
};
