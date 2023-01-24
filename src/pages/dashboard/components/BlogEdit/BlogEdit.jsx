
import { useState } from 'react'
import styles from './styles.module.sass'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
export default function BlogEdit({ blogId }) {
    const [content, setContent] = useState()
    return <div className={styles.container}>
        <h1>Add New Post</h1>
        <form>
            <input type='text'></input>
            <div className={styles.editorContainer}>
                <ReactQuill theme="snow" value={content} onChange={setContent} style={{ height: '100%' }} />
            </div>
            <button type={'submit'}>Save</button>
        </form>
    </div>
}
