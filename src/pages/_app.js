// Styles
import '@styles/globals.sass'
// Fonts
import localFonts from '@next/font/local'
import { Inter } from '@next/font/google'

const eestiPro = localFonts({
    src: [
        {
            path: '../../public/assets/fonts/GTEestiProText-UltraLight.woff',
            weight: '200'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Light.woff',
            weight: '300'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Regular.woff',
            weight: '400'
        }
    ],
    variable: '--font-eesti'
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

export default function App ({ Component, pageProps }) {
    return (
        <div className={`${eestiPro.variable} ${inter.variable} font-sans relative`}>
            <Component {...pageProps} />
        </div>
    )
}
