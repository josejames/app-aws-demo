import Counter from '@components/Landing/Counter/Counter'
import styles from './styles.module.sass'
export default function Dashboard () {
    return <div className={styles.container}>
        <Counter></Counter>
    </div>
}
