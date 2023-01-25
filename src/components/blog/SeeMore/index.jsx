// Components
import Paginator from '@components/shared/Paginator'
import PostCard from '@components/shared/PostCard'
import InnerContainer from '@layouts/InnerContainer'
import apiClient from '@utils/api-client'
import useApi from 'hooks/useApi'
import Image from 'next/image'
import { useState } from 'react'

const Posts = ({ data = [], loading, params, onPrev, onNext }) => {
    if (loading) {
        return (
            <div className= 'w-full h-screen flex flex-col justify-center items-center'>
                <div className='w-10 h-10 bg-main-gradient rounded-full animate-ping mb-10' />
                <span>Loading posts...</span>
            </div>
        )
    }

    if (data.length === 0 && params.page === 1) {
        return (
            <div className='w-full h-screen flex justify-center items-center my-10'>
                <span>Posts not found, be the first to create one now!</span>
            </div>
        )
    }

    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 relative z-10'>
                {
                    data.map(({ title, resume, image, id, user }, i) => (
                        <PostCard
                            key={i}
                            title={ title }
                            content={ resume }
                            banner={ image }
                            author={ user.name }
                            url={ id }
                        />
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center my-10 relative z-10'>
                <Paginator
                    page={params.page}
                    onPrev={onPrev}
                    onNext={onNext}
                    disableNext={data && data.length < 1}
                />
            </div>
        </>
    )
}

export default function SeeMore() {
    const [params, setParams] = useState({
        page: 1,
        offset: 0,
        limit: 10
    })

    const { data: { data }, loading } = useApi(() => apiClient.get('/posts', { params }), params.page)

    const handlePrev = () => {
        setParams({
            page: params.page - 1,
            offset: params.offset - 10,
            limit: params.limit - 10
        })
    }

    const handleNext = () => {
        setParams({
            page: params.page + 1,
            offset: params.offset + 10,
            limit: params.limit + 10
        })
    }

    return (
        <section className='w-full min-h-screen relative'>
            <div className='w-[40rem] h-[40rem] rotate-180 absolute -top-28 -right-[20rem] z-0'>
                <Image src='/assets/images/logom2.png' alt='Footer vector' fill className='object-contain' />
            </div>
            <InnerContainer>
                <h2 className='text-3xl uppercase mb-10 relative z-10'>See more</h2>
                <Posts
                    data={data}
                    loading={loading}
                    params={params}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            </InnerContainer>
        </section>
    )
}
