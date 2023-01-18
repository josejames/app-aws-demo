// Common
import Head from 'next/head'
import Image from 'next/image'
// Components
import Button from '@components/Button'
// Layout
import InnerContainer from '@layouts/InnerContainer'

const Header = () => (
    <>
        <header className='w-full bg-black fixed top-0 shadow-2xl shadow-black'>
            <InnerContainer>
                <nav className='h-16 md:h-24 flex justify-between items-center'>
                    <div className='relative w-36 md:w-56 h-10'>
                        <Image src='/assets/images/logo-global.png' alt='Mavie global' fill className='object-contain' />
                    </div>
                    <Button>join the waitlist</Button>
                </nav>
            </InnerContainer>
        </header>
    </>
)

const Footer = () => (
    <>
        <footer className=''>
            <InnerContainer>
                <p>Footer</p>
            </InnerContainer>
        </footer>
    </>
)

export default function LandingLayout ({ children }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className=''>
                <InnerContainer>
                    { children }
                </InnerContainer>
            </main>
            <Footer />
        </>
    )
}