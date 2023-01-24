// Common
import Head from 'next/head'
import Image from 'next/image'
// Components
import HeaderUser from '@components/shared/HeaderUser'
import MobileMenu from '@components/shared/MobileMenu'
// Layout
import InnerContainer from '@layouts/InnerContainer'

const Header = () => (
    <>
        <header className='w-full bg-black-top-gradient absolute top-0 z-40 transition-all duration-300'>
            <InnerContainer>
                <nav className='h-16 md:h-24 flex justify-between items-center'>
                    <div className='relative w-36 md:w-48 h-10'>
                        <Image src='/assets/images/logo-global.png' alt='Mavie global' priority fill className='object-contain' />
                    </div>
                    <div className='flex items-center gap-4 md:gap-10'>
                        <div className='hidden lg:block'>Event</div>
                        <div className='hidden lg:block'>Blog</div>
                        <div className='hidden lg:flex'>
                            <HeaderUser />
                        </div>
                        <MobileMenu />
                    </div>
                </nav>
            </InnerContainer>
        </header>
    </>
)

const Footer = () => (
    <>
        <footer>
            <InnerContainer>
                <div>
                    <span>Footer</span>
                </div>
            </InnerContainer>
        </footer>
    </>
)

export default function BlogLayout ({ children }) {
    return (
        <>
            <Head>
                <title>MaVie | Blog</title>
                <meta name="description" content="MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta property="og:title" content="MaVie | Blog" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mavie-dubai-grand-event.vercel.app/blog" />
                <meta property="og:image" content="https://mavie-dubai-grand-event.vercel.app/images/og.png" />
            </Head>
            <Header />
            <main className='bg-brand-black overflow-clip'>
                { children }
            </main>
            <Footer />
        </>
    )
}
