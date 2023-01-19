import Countdown from '@components/Countdown/Countdown'
import getEventDate from '@utils/constants/eventDate'
import { networks } from '@utils/constants/networks'
import Link from 'next/link'
import styles from './styles.module.sass'
export default function Counter() {
    return <section className={styles.container}>
        <div className={styles.bg}>

        </div>
        <div className={styles.dataContainer}>
            <h2 className={styles.counterContainer}>
                <Countdown targetDate={getEventDate()}/>
            </h2>
            <div className={styles.message}>
                See you soon
            </div>

            <div className={styles.networks}>
                {networks.map(network => <Link key={network.name} href={network.href}>
                    <span>{network.icon}</span>
                </Link>)}
            </div>
        </div>
    </section>
}
