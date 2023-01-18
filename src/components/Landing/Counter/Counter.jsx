import Countdown from '@components/Countdown/Countdown'
import getEventDate from '@utils/constants/eventDate'
import styles from './styles.module.sass'
export default function Counter() {
    return <section className={styles.container}>
        <h1 className={styles.counterContainer}>
            <Countdown targetDate={getEventDate()}/>
        </h1>
        <div className={styles.message}>

        </div>
    </section>
}
