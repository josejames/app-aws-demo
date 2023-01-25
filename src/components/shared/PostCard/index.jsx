// Common
import Image from 'next/image'
import Link from 'next/link'
// Icons
import { IoPersonCircle } from 'react-icons/io5'
// Styles
import styles from './styles.module.sass'

export default function PostCard({ title, content, banner = '/assets/images/og.png', author, url = '#' }) {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <Image src={ banner } alt='Mavie global' fill />
            </div>
            <div className={styles.containerContent}>
                <p className={styles.title}>{ title }</p>
                <p className={styles.content}>{ content } ...</p>
                <div className={styles.author}>
                    <IoPersonCircle />
                    <span>{ author }</span>
                </div>
                <div className={styles.button}>
                    <Link href={`post/${url}`} >
                        <div>
                            Read more
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
