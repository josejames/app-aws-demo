import { useAuth } from '@utils/auth-provider'
import { useBlogList } from 'hooks/connectors/useBlog'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import BlogEdit from '../BlogEdit/BlogEdit'
import styles from './styles.module.sass'

export default function BlogList() {
    const auth = useAuth()
    const blogList = useBlogList()
    const [selectedBlog, setSelectedBlog] = useState()
    // Fetch the blog list, when the user is loaded
    useEffect(() => {
        if (auth.user) {
            blogList.fetch({
                userId: auth.user.id
            })
        }
    }, [auth.user])

    const handleBlogClick = useCallback((blog) => {

    }, [])
    const handleTrashClick = useCallback((blog) => {

    }, [])
    const handleEditClick = useCallback((blog) => {
        setSelectedBlog(blog)
    }, [])

    return <div className={styles.container}>
        {
            selectedBlog
                ? <BlogEdit blogId={selectedBlog.id} onClose={() => setSelectedBlog(null)} onSave={() => setSelectedBlog(null)}/>
                : blogList.list?.map((blog, index) =>
                    <div
                        key={blog.id}
                        onClick={() => handleBlogClick(blog)}
                        className={styles.item}>
                        <div className={styles.image}>
                            <Image alt="image"
                                src={blog.image || '/assets/images/no-image.jpeg'}
                                style={{ objectFit: 'cover' }}
                                fill={true}/></div>
                        <div className={styles.title}>{blog.title}</div>
                        <div className={styles.actions}>
                            <div className={styles.action} onClick={() => handleTrashClick(blog)}><FaTrashAlt/></div>
                            <div className={styles.action} onClick={() => handleEditClick(blog)}><FaEdit/></div>
                        </div>
                    </div>)
        }

    </div>
}
