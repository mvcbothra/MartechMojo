/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'] },
            colors: {
                lightBase:   '#F7F7F5',
                lightAlt:    '#EFEFEA',
                textMain:    '#0E0E0E',
                textMuted:   '#6B6B6B',
                borderLight: '#D8D8D4',
            },
        },
    },
}
