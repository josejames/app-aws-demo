// React
import { useState, useEffect } from 'react'
// Components
import Hero from '@components/blog/Post/Hero'
import PostBody from '@components/blog/Post/PostBody'
import BlogLayout from '@layouts/BlogLayout'
import CommentSection from '@components/blog/Comments/CommentSection'
// Hooks
import { useBlog } from 'hooks/connectors/useBlog'
// Spinners
import { TailSpin } from 'react-loader-spinner'
// Next Js
import { useRouter } from 'next/router'

export default function Post () {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const { id } = router.query
    const blogFetcher = useBlog()

    useEffect(() => {
        if (id) {
            const asyncLoad = async () => {
                try {
                    setLoading(true)
                    const blog = await blogFetcher.fetchAsync(id)
                    setPost(blog)
                } catch (error) {
                    console.log('error at fetching', error)
                } finally {
                    setLoading(false)
                }
            }
            asyncLoad()
        }
    }, [id])

    return (
        <>
            { !loading
                ? <BlogLayout>
                    <Hero
                        image = {post.image}
                        headline={post.title}
                    />
                    <PostBody
                        content={post.content}
                        userName={post.user.name}
                        date={post.createdAt}
                    />
                    <div className="w-full">
                        <CommentSection/>
                    </div>
                </BlogLayout>
                : <div className= 'h-screen w-screen flex justify-center items-center'>
                    <TailSpin
                        color='#51C9E4'
                    />
                </div>}
        </>
    )
}
