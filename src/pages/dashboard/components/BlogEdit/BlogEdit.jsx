
import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.sass'
import dynamic from 'next/dynamic'
import { useBlog, useBlogCreator } from 'hooks/connectors/useBlog'
import { IoClose } from 'react-icons/io5'
import { TailSpin } from 'react-loader-spinner'
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
export default function BlogEdit({ blogId, onClose, onSave }) {
    const [blog, setBlog] = useState({
        title: '',
        slug: '',
        content: '',
        image: ''
    })
    const blogCreator = useBlogCreator()
    const blogFetcher = useBlog()
    const [validationErrors, setValidationErrors] = useState({})
    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        if (blogCreator.loading) {
            return
        }
        const errors = {}
        let hasErrors = false

        if (!blog.title) {
            errors.title = 'Title is required'
            hasErrors = true
        }
        if (!blog.slug) {
            errors.slug = 'Slug is required'
            hasErrors = true
        }
        if (!blog.content) {
            errors.content = 'Content is required'
            hasErrors = true
        }
        setValidationErrors(errors)
        if (!hasErrors) {
            blogCreator.createOrUpdate(blog)
        }
    }, [blog, blogCreator])

    useEffect(() => {
        if (blogCreator.blog) {
            setBlog(blogCreator.blog)
        }
    }, [blogCreator.blog])

    useEffect(() => {
        if (blogId) {
            const fetcher = async() => {
                try {
                    const blog = await blogFetcher.fetchAsync(blogId)
                    setBlog(blog)
                } catch (error) {
                    console.log('error at fetching', error)
                }
            }
            fetcher()
        }
    }, [blogId])

    return <div className={styles.container}>
        <div className={styles.header}>
            <h1>{blog.id ? 'Update Post' : 'Add New Post'}</h1> {onClose && <span onClick={onClose}><IoClose /></span>}</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title {validationErrors.title && <span className={styles.error}>({validationErrors.title})</span>} </label>
            <input type='text' value={blog.title} onChange={(event) => setBlog({ ...blog, title: event.target.value })} name='title'></input>
            <label htmlFor="slug">Slug {validationErrors.slug && <span className={styles.error}>({validationErrors.slug})</span>} </label>
            <input type='text' value={blog.slug} onChange={(event) => setBlog({ ...blog, slug: event.target.value })} name='slug'></input>
            <label htmlFor='image'>Imagen</label>
            <input type={'file'}></input>
            <label>Content {validationErrors.content && <span className={styles.error}>({validationErrors.content})</span>} </label>

            <div className={styles.editorContainer}>
                <ReactQuill theme="snow"
                    value={blog.content}
                    onChange={(value) => setBlog((oldValue) => ({ ...oldValue, content: value }))}
                    style={{ height: '100%' }} />
            </div>
            <button type={'submit'}>{blogCreator.loading
                ? <TailSpin
                    width="24"
                    height="24"
                    color="#000"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                : 'Save'}</button>
        </form>
    </div>
}
