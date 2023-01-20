// Common
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Components
import ColoredText from '@components/ColoredText'
import Countdown from '@components/Countdown/Countdown'
// Layout
import InnerContainer from '@layouts/InnerContainer'
// Framer Motion
import { useScroll, useMotionValueEvent } from 'framer-motion'
// Icons
import { IoPlayCircleOutline, IoChevronForwardOutline } from 'react-icons/io5'
// Utils
import getEventDate from '@utils/constants/eventDate'
// Styles
import styles from './styles.module.sass'

export default function Hero() {
    const heroRef = useRef()
    const { scrollY } = useScroll()
    const [logoScale, setLogoScale] = useState({
        scale: 1,
        opacity: 1
    })

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const relativeOffset = latest * 100 / heroRef.current.offsetHeight
        const scale = 1 + Math.pow(relativeOffset, 2) * 0.008
        setLogoScale({
            scale,
            opacity: (scale > 1.6) ? 0 : 1
        })
    })

    return (
        <section ref={heroRef} className={styles.container}>
            <InnerContainer>
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <span className={styles.littleHeading}>Dubai grand event</span>
                        <div className={styles.counter}>
                            <ColoredText>
                                <Countdown targetDate={getEventDate()} />
                            </ColoredText>
                        </div>
                        <h1>Own your future</h1>
                    </div>
                    <div style={{ transform: `scale(${logoScale.scale})`, opacity: `${logoScale.opacity}` }} className={styles.logo}>
                        <Image src='/assets/images/landing/hero-logo.png' alt='MaVie logo' priority fill />
                    </div>
                    <div className={styles.containerLinks}>
                        <div>
                            <ColoredText>
                                MaVie Dubai
                            </ColoredText>
                            <Link href='#'>Watch the event <IoPlayCircleOutline /></Link>
                        </div>
                        <div>
                            <ColoredText>
                                MaVie x Ultron
                            </ColoredText>
                            <Link href='#'>The next steps <IoChevronForwardOutline /></Link>
                        </div>
                    </div>
                </div>
            </InnerContainer>
        </section>
    )
}
