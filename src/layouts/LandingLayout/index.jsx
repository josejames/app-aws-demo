// Common
import Head from 'next/head'
import Image from 'next/image'
// Components
import Button from '@components/Button'
// Layout
import InnerContainer from '@layouts/InnerContainer'

const Header = () => (
    <>
        <header className='w-full bg-black fixed top-0 z-40 shadow-2xl shadow-black'>
            <InnerContainer>
                <nav className='h-16 md:h-24 flex justify-between items-center'>
                    <div className='relative w-36 md:w-48 h-10'>
                        <Image src='/assets/images/logo-global.png' alt='Mavie global' priority fill className='object-contain' />
                    </div>
                    <Button>join the waitlist</Button>
                </nav>
            </InnerContainer>
        </header>
    </>
)

export default function LandingLayout ({ children }) {
    return (
        <>
            <Head>
                <title>MaVie | Dubai Grand Event</title>
                <meta name="description" content="MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta property="og:title" content="MaVie | Dubai Grand Event" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mavie-dubai-grand-event.vercel.app" />
                <meta property="og:image" content="https://mavie-dubai-grand-event.vercel.app/images/og.png" />
            </Head>
            <Header />
            <main className=' overflow-clip'>
                { children }
            </main>
        </>
    )
}
