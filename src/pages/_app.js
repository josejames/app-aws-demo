// Layout
import MainLayout from '@layouts/MainLayout'
// Styles
import '@styles/globals.sass'

export default function App({ Component, pageProps }) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
