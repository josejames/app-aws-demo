// Layout
import BlogLayout from '@layouts/BlogLayout'
// Components
import Hero from '@components/blog/Hero'
import SeeMore from '@components/blog/SeeMore'

export default function BlogPage() {
    return (
        <>
            <BlogLayout>
                <Hero />
                <SeeMore />
            </BlogLayout>
        </>
    )
}
