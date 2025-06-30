/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                lato: ['var(--font-lato)', 'sans-serif'],
            },
            colors: {
                primary: '#5f57ea',
                secondary: '#9647db',
            },
            backgroundImage: {
                'main-gradient': 'linear-gradient(to right, #5f57ea 0%, #9647db 100%)',
            },
        },
    },
    content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    plugins: [],
};