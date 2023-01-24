/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                eesti: ['var(--font-eesti)'],
                inter: ['var(--font-inter)'],
                dm: ['var(--font-dm)']
            },
            colors: {
                'brand-cyan': 'var(--brand-cyan)',
                'brand-pink': 'var(--brand-pink)',
                'brand-gray': 'var(--brand-gray)',
                'brand-black': 'var(--brand-black)'
            },
            backgroundImage: {
                'main-gradient': 'var(--main-gradient)',
                'black-top-gradient': 'var(--black-top-gradient)',
                'black-bottom-gradient': 'var(--black-bottom-gradient)',
                news: "url('/assets/images/landing/news.png')"
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite'
            },
            transitionTimingFunction: {
                spring: 'cubic-bezier(.58,.08,.23,1.38)'
            }
        }
    },
    plugins: []
}
