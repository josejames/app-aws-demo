import styles from './styles.module.sass'
export default function ColoredText({ children }) {
    return <div className={styles.gradientText}>
        {children}
    </div>
}
