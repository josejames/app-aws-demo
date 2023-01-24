// Common
import Image from 'next/image'

export default function Hero({ headline = 'Own your future ' }) {
    return (
        <section className=''>
            <div className='w-full h-[70vh] relative flex justify-center items-end'>
                <Image src='/assets/images/blog/postHero.png' fill alt='Hero image' className='object-cover' />
                <div className='relative py-20'>
                    <h1 className='text-8xl font-medium text-white text-center'>{headline}</h1>
                </div>
                <span className='w-full h-16 md:h-24 bg-black-bottom-gradient absolute bottom-0' ></span>
            </div>
        </section>
    )
}
