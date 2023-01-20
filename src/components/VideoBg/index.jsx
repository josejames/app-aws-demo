import styles from './styles.module.sass'

export default function VideoBg () {
    return <>
        <div className={styles.overlay}></div>
        <video
            autoPlay
            muted
            loop
            className={styles.video}
        >
            <source src="/assets/videos/Background-video.mp4" type="video/mp4" />
        </video>
    </>
}