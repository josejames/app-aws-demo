// Layout
import BlogLayout from '@layouts/BlogLayout'
// Components
import Hero from '@components/blog/Hero'
import SeeMore from '@components/blog/SeeMore'
import PopularPost from '@components/blog/PopularPost/PopularPost'

export default function BlogPage() {
    return (
        <>
            <BlogLayout>
                <Hero />
                <PopularPost/>
                <SeeMore />
            </BlogLayout>
        </>
    )
}
