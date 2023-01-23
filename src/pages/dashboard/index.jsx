import BlogLayout from '@layouts/BlogLayout'
import { useAuth } from '@utils/auth-provider'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoAdd, IoGrid } from 'react-icons/io5'
import BlogEdit from './components/BlogEdit/BlogEdit'
import BlogList from './components/BlogList/BlogList'
import styles from './styles.module.sass'
const items = [
    { title: 'List Posts', icon: <IoGrid />, component: <BlogList/> },
    { title: 'Add Post', icon: <IoAdd/>, component: <BlogEdit/> }
]
export default function Dashboard () {
    const [itemSelected, setItemSelected] = useState(items[0])
    const auth = useAuth()
    useEffect(() => {
        auth.signin({
            username: 'xmbeat',
            password: 'asd123'
        })
    }, [])
    return <BlogLayout>
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.profileInfo}>
                    <div className={styles.avatarContainer}>
                        <Image alt="avatar" src='https://ui-avatars.com/api/?background=0D8ABC&color=fff' fill={true}/>
                    </div>
                    <div className={styles.name}>
                        Juan Hebert Chable
                    </div>
                </div>
                <div className={styles.menu}>
                    {items.map((item, index) => <div
                        key={index}
                        className={`${styles.item} ${item === itemSelected ? styles.selected : ''}`}
                        onClick={() => setItemSelected(items[index])}>
                        <div className={styles.icon}>
                            {item.icon}
                        </div>
                        <div className={styles.title}>{item.title}</div>
                    </div>)}
                </div>
            </div>
            <div className={styles.content}>
                {itemSelected.component}
            </div>
        </div>
    </BlogLayout>
}
