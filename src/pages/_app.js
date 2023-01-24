// Styles
import '@styles/globals.sass'
// Fonts
import localFonts from '@next/font/local'
import { Inter, DM_Sans as DMSans } from '@next/font/google'
import { AuthProvider } from '@utils/auth-provider'

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
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Medium.woff',
            weight: '500'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Bold.woff',
            weight: '600'
        }
    ],
    variable: '--font-eesti'
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin']
})

const dmSans = DMSans({
    variable: '--font-dm',
    weight: ['400', '500', '700'],
    subsets: ['latin']
})

export default function App ({ Component, pageProps }) {
    return (
        <div className={`${eestiPro.variable} ${inter.variable} ${dmSans.variable} font-eesti relative`}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </div>
    )
}
