// Components
import PostCard from '@components/shared/PostCard'

export default function SeeMore() {
    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                Array(10).fill(0).map((item, i) => (
                    <div key={i} className='w-full max-w-xs'>
                        <PostCard
                            title='Lorem Imsun is simple dummy text of the'
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa..."
                            author='Lorem Impsun'
                        />
                    </div>
                ))
            }
        </section>
    )
}
