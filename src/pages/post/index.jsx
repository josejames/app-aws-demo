
import Hero from '@components/blog/Post/Hero'
import PostBody from '@components/blog/Post/PostBody'
import BlogLayout from '@layouts/BlogLayout'

export default function post () {
    return <BlogLayout>
        <Hero/>
        <PostBody/>
    </BlogLayout>
}
