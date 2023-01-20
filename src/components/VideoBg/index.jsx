import styles from './styles.module.sass'
import {
    motion
} from 'framer-motion'

export default function VideoBg ({ props }) {
    return <motion.div
        {...props}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, top: '200px' }}
        whileInView={{ opacity: 1, top: '0' } }
        // variants={translationY}
        // viewport={{ once: true, amount: 0.8 }}
        className='absolute'
    >
        <div className={styles.overlay}></div>
        <video
            autoPlay
            muted
            loop
            className={styles.video}
        >
            <source src="/assets/videos/Background-video.mp4" type="video/mp4" />
        </video>
    </motion.div>
}
