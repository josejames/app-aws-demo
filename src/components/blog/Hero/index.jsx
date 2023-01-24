// Common
import Image from 'next/image'

export default function Hero() {
    return (
        <section className=''>
            <div className='w-full h-[70vh] relative flex justify-center items-center'>
                <Image src='/assets/images/blog/hero.png' fill alt='Hero image' className='object-cover' />
                <div className='relative bg-main-gradient bg-clip-text'>
                    <h1 className='text-8xl font-medium text-transparent text-center'>Own your future</h1>
                </div>
                <span className='w-full h-16 md:h-24 bg-black-bottom-gradient absolute bottom-0' ></span>
            </div>
        </section>
    )
}
