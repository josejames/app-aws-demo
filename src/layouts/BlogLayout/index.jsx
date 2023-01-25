// Common
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// Components
import HeaderUser from '@components/shared/HeaderUser'
import MobileMenu from '@components/shared/MobileMenu'
// Layout
import InnerContainer from '@layouts/InnerContainer'
// Icons
import { FiMail, FiPhone } from 'react-icons/fi'

const Header = () => (
    <>
        <header className='w-full bg-black-top-gradient absolute top-0 z-40 transition-all duration-300'>
            <InnerContainer>
                <nav className='h-16 md:h-24 flex justify-between items-center'>
                    <div className='relative w-36 md:w-48 h-10'>
                        <Image src='/assets/images/logo-global.png' alt='Mavie global' priority fill className='object-contain' />
                    </div>
                    <div className='flex items-center gap-4 md:gap-10'>
                        <Link href='/' className='hidden lg:block'>Event</Link>
                        <Link href='/' className='hidden lg:block'>Blog</Link>
                        <div className='w-full min-w-[10rem] hidden lg:flex'>
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
        <footer className='w-full bg-brand-black font-dm overflow-hidden'>
            <InnerContainer>
                <div className='w-full relative'>
                    <div className='w-72 h-72 absolute -bottom-28 -right-11'>
                        <Image src='/assets/images/blog/footer.png' alt='Footer vector' fill />
                    </div>
                    <div className='w-full h-48 flex flex-col lg:flex-row justify-around items-center'>
                        <div className='relative w-36 md:w-48 h-10'>
                            <Image src='/assets/images/logo-global.png' alt='Mavie global' fill className='object-contain' />
                        </div>
                        <Link href='/privacy' className=''>Privacy policy</Link>
                        <Link href='/terms' className=''>Terms and conditions</Link>
                        <div className='flex flex-col items-center md:items-start gap-2'>
                            <span>Company Information</span>
                            <Link href='mailto:mavie@maviesupport.com'>
                                <div className='flex justify-center md:justify-start items-center gap-2'>
                                    <FiMail />
                                    <span className='text-xs'>mavie@maviesupport.com</span>
                                </div>
                            </Link>
                            <Link href='tel:270 555-0017'>
                                <div className='flex justify-center md:justify-start items-center gap-2'>
                                    <FiPhone />
                                    <span className='text-xs'>(270) 555-0017</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full h-16 flex justify-center items-center'>
                        <span className='text-sm text-center'>All Rights Reserved Mavie © 2023</span>
                    </div>
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
