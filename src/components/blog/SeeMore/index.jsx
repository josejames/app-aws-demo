// Components
import Paginator from '@components/shared/Paginator'
import PostCard from '@components/shared/PostCard'
import InnerContainer from '@layouts/InnerContainer'
import apiClient from '@utils/api-client'
import useApi from 'hooks/useApi'
import { useState } from 'react'

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
        <section className='w-full'>
            <InnerContainer>
                <h2 className='text-3xl uppercase mb-10'>See more</h2>
                {
                    (!loading && data)
                        ? <>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4'>
                                {
                                    data.map(({ title, resume, image, id }, i) => (
                                        <PostCard
                                            key={i}
                                            title={ title }
                                            content={ resume }
                                            banner={ image }
                                            author='Lorem Impsun'
                                        />
                                    ))
                                }
                            </div>
                            <div className='w-full flex justify-center items-center my-10'>
                                <Paginator
                                    page={params.page}
                                    onPrev={handlePrev}
                                    onNext={handleNext}
                                    disableNext={data && data.length < 1}
                                />
                            </div>
                        </>
                        : null
                }
            </InnerContainer>
        </section>
    )
}
