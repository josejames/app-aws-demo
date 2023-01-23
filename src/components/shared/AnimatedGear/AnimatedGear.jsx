
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.sass'
const variants = {
    visible: progress => ({
        y: -progress * 300,
        rotate: -progress * 90,
        scale: 1 + Math.sin(progress * Math.PI) / 2,
        opacity: 1 - Math.sin((progress * progress) * Math.PI / 2)

    })
}
export default function AnimatedGear() {
    const containerRef = useRef()
    const [animationProgress, setAnimationProgress] = useState(0)

    useEffect(() => {
        const listener = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                let visiblePercent = (((window.innerHeight ||
                     document.documentElement.clientHeight) - rect.top) / rect.height)
                visiblePercent = Math.max(0, visiblePercent)
                visiblePercent = Math.min(1, visiblePercent)
                setAnimationProgress(visiblePercent)
            }
        }
        document.addEventListener('scroll', listener)
        document.addEventListener('resize', listener)
        listener()
        return () => {
            document.removeEventListener('scroll', listener)
            document.removeEventListener('resize', listener)
        }
    }, [])
    return <div ref={containerRef} className={styles.container}>
        <motion.div className={styles.gear}
            custom={animationProgress}
            animate="visible"
            transition={{ duration: 0 }}
            variants={variants}
        >
            <Image src='/assets/images/gear.svg' alt='gear' fill={true} />

        </motion.div>
    </div>
}
