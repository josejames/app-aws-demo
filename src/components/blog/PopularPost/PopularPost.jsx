import Slider from '@components/shared/Slider/Slider'
import { useBlogList } from 'hooks/connectors/useBlog'
import Image from 'next/image'
import { useEffect } from 'react'

const PopularPost = () => {
    const blogList = useBlogList()
    useEffect(() => {
        blogList.fetch()
    }, [])
    return (
        <section className='flex flex-col w-full overflow-hidden bg-mvoutline bg-no-repeat bg-right-top max-h-screen bg-[length:50%_40%]'>
            <div className='flex flex-col pt-16 lg:py-28 px-6 lg:px-32'>
                <h2 className='text-4xl leading-tight font-medium'>EXPLORE THE WORLD, </h2>
                <h2 className='text-4xl text-transparent bg-clip-text bg-main-gradient bg-[length:20%_100px]'>POPULAR POST</h2>
            </div>
            <div className='w-full md:w-3/4 ml-auto h-fit'>
                <Slider items={blogList}/>
            </div>
            <div className='relative w-fit h-fit -top-[30rem] -left-48 lg:-left-32'>
                <Image src={'/assets/images/logom2.png'} className='object-contain' width="500" height="500" alt='logo' priority/>
            </div>
        </section>
    )
}

export default PopularPost
