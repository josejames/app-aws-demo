// Common
import Image from 'next/image'

export default function Hero() {
    return (
        <section className=''>
            <div className='w-full h-[70vh] relative'>
                <Image src='/assets/images/blog/hero.png' fill alt='Hero image' className='object-cover' />
            </div>
        </section>
    )
}
