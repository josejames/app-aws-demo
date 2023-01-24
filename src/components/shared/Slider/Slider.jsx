// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper'
import PostCard from '../PostCard'
import { useEffect, useRef, useState } from 'react'

const Slider = ({ items }) => {
    const carouselContainer = useRef()
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [spaceBetween, setSpaceBetween] = useState(-200)
    useEffect(() => {
        const listener = () => {
            if (carouselContainer.current) {
                const rect = carouselContainer.current.getBoundingClientRect()
                let itemsPerPage = rect.width / 400
                let spaceBetween = rect.width / 200
                // eslint-disable-next-line no-unused-vars
                const height = 600
                if (rect.width < 600) {
                    itemsPerPage = 1.4
                    spaceBetween = 20
                } else {
                    itemsPerPage = Math.floor(itemsPerPage)
                    spaceBetween = -280
                }
                setItemsPerPage(itemsPerPage)
                setSpaceBetween(spaceBetween)
            }
        }
        window.addEventListener('resize', listener)
        listener()
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])
    return (
        <>
            <Swiper
                ref={carouselContainer}
                slidesPerView={itemsPerPage}
                navigation={true}
                spaceBetween={spaceBetween}
                modules={[Navigation]}
                autoHeight={true}
            >
                <div className='grid grid-cols-3 grid-rows-1 place-items-end'>
                    {items.list?.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='w-[100%] md:w-[350px] mt-6'>
                                <PostCard
                                    title={item.title}
                                    author={`${item.user.name} ${item.user.lastName}`}
                                    content={item.resume}
                                    url={item.id}
                                    banner={item.image}
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </>
    )
}

export default Slider
