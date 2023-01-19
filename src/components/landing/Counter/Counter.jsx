import Countdown from '@components/Countdown/Countdown'
import getEventDate from '@utils/constants/eventDate'
import { networks } from '@utils/constants/networks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.sass'
export default function Counter() {
    return <section className={styles.container}>
        <div className={styles.bg}>
            <motion.div className={styles.gradientCircle}
                transition={{ duration: 1 }}
                initial={
                    {
                        width: '100%',
                        paddingTop: '100%',
                        background: 'linear-gradient(90deg, #fff 40%, #fff 55%)'
                    }
                }
                whileInView={
                    {
                        width: '500%',
                        paddingTop: '500%',
                        background: 'linear-gradient(90deg, #51C9E4 40%, #CF6597 55%)'
                    }
                }>

            </motion.div>
            <svg
                viewBox="0 0 260 100" width="100%" height="100%">
                <text
                    fill='transparent'
                    stroke="#ffffffa0"
                    strokeDasharray="3"
                    strokeWidth="0.3"
                    fontFamily='inherit'
                    fontWeight="bold"
                    fontSize="100" textAnchor='middle' x="50%" y="50%" dominantBaseline="central">
                    1103
                </text>
            </svg>
        </div>
        <div className={styles.dataContainer}>
            <div className={styles.dataBody}>
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
            <motion.div className={styles.footer}
                transition={{ duration: 1 }}
                initial={{
                    borderRadius: '0 0 0 0'
                }}
                whileInView={{
                    borderRadius: '100% 100% 0 0'
                }}>

                <div className={styles.logoContainer}>
                    <Image src={'/assets/images/logo.svg'}
                        fill={true}
                        alt="logo" />
                </div>
                <div className={styles.disclaimer}>
                    <Link href={'/terms'}>Terms of use </Link>
                    <Link href={'/privacy'}>Privacy policy</Link>
                </div>
                <div className={styles.copyright}>
                    Copyright © 2022 MavVie.global All Rights Reserved
                </div>
            </motion.div>
        </div>
    </section>
}
