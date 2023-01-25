// Common
import Image from 'next/image'

export default function Hero({ headline = 'Own your future ', image = '' }) {
    return (
        <section className=''>
            <div className='w-full h-[70vh] relative flex justify-center items-end'>
                <Image src={image} fill alt='Hero image' className='object-cover' />
                <div className='relative z-10 py-20 max-w-[90vw] md:max-w-[70rem]'>
                    <h1 className='relative z-10 text-5xl md:text-8xl font-medium text-white text-center'>{headline}</h1>
                </div>
                <span className='w-full h-[90%] z-0 bg-black-bottom-gradient absolute bottom-0' ></span>
            </div>
        </section>
    )
}
