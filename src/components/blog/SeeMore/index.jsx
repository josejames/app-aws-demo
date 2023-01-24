// Components
import PostCard from '@components/shared/PostCard'
import InnerContainer from '@layouts/InnerContainer'

export default function SeeMore() {
    return (
        <section className='w-full'>
            <InnerContainer>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4'>
                    {
                        Array(10).fill(0).map((item, i) => (
                            <PostCard
                                key={i}
                                title='Lorem Imsun is simple dummy text of the'
                                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa"
                                banner='https://public.bnbstatic.com/image/cms/blog/20221209/727053b6-0085-407e-8938-8dfb35e99be7.png'
                                author='Lorem Impsun'
                            />
                        ))
                    }
                </div>
            </InnerContainer>
        </section>
    )
}
