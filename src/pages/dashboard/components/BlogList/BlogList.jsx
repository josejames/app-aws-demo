import { useAuth } from '@utils/auth-provider'
import { useBlogDeleter, useBlogList } from 'hooks/connectors/useBlog'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { ColorRing } from 'react-loader-spinner'
import BlogEdit from '../BlogEdit/BlogEdit'
import styles from './styles.module.sass'
import { Player } from '@lottiefiles/react-lottie-player'
export default function BlogList() {
    const auth = useAuth()
    const blogList = useBlogList()
    const blogDeleter = useBlogDeleter()
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
        const doDelete = async () => {
            try {
                await blogDeleter.delSync(blog.id)
                blogList.setList(blogList.list.filter(item => {
                    return item.id !== blog.id
                }))
            } catch (error) {
                console.log('Cant delete the blog', error)
            }
        }
        doDelete()
    }, [blogList.list])

    const handleEditClick = useCallback((blog) => {
        setSelectedBlog(blog)
    }, [])

    return <div className={styles.container}>
        {
            blogList.loading
                ? <div className={styles.loader}><ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    colors={['#51C9E4', '#CF6597', '#515051', '#51C9E4', '#CF6597']}
                /></div>
                : selectedBlog
                    ? <BlogEdit blogId={selectedBlog.id} onClose={() => setSelectedBlog(null)} onSave={() => setSelectedBlog(null)}/>
                    : blogList.list?.length > 0
                        ? blogList.list.map((blog, index) =>
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
                        : <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_0s6tfbuc.json"
                            style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
        }

    </div>
}
