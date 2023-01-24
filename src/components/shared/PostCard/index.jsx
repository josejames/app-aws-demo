// Common
import Image from 'next/image'
import Link from 'next/link'
// Icons
import { IoPersonCircle } from 'react-icons/io5'

export default function PostCard({ title, content, banner = '/assets/images/og.png', author, url = '#' }) {
    return (
        <div className='w-full h-auto aspect-w-11 aspect-h-16 border border-brand-cyan rounded-3xl overflow-hidden'>
            <div className='w-full h-full'>
                <div className='relative w-full h-1/2'>
                    <Image src={ banner } alt='Mavie global' fill className='object-cover' />
                    <span className='w-full h-16 md:h-24 bg-black-bottom-gradient absolute bottom-0' ></span>
                </div>
                <div className='w-full h-1/2 p-8 py-0'>
                    <p className='text-2xl font-medium leading-none mb-4'>{ title }</p>
                    <p className='text-xs font-dm'>{ content }</p>
                    <div className='flex items-center gap-2 my-3'>
                        <IoPersonCircle className='text-3xl' />
                        <span>{ author }</span>
                    </div>
                    <div className='w-1/2 flex'>
                        <Link
                            href={url}
                            className='w-full bg-main-gradient p-[1px] rounded-md'
                        >
                            <div className='w-full h-full flex justify-center items-center bg-black hover:bg-opacity-0 text-sm font-light hover:text-black hover:font-normal py-1 rounded-md transition-all ease-in-out'>
                                Read more
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
