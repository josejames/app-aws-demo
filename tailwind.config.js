/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                eesti: ['var(--font-eesti)'],
                inter: ['var(--font-inter)']
            },
            colors: {
                'brand-cyan': 'var(--brand-cyan)',
                'brand-pink': 'var(--brand-pink)',
                'brand-gray': 'var(--brand-gray)'
            },
            backgroundImage: {
                'main-gradient': 'var(--main-gradient)'
            }
        }
    },
    plugins: []
}
