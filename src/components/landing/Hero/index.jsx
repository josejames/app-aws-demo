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
    const [logoAnimation, setLogoAnimation] = useState({
        scale: 1,
        opacity: 1
    })
    const [titleAnimation, setTitleAnimation] = useState({
        scale: 1,
        opacity: 1
    })
    const [countdownAnimation, setCountdownAnimation] = useState({
        scale: 1
    })

    useMotionValueEvent(scrollY, 'change', (latest) => {
        // Relative offset is a formula to get how much the section has left the viewport, from 0 to 100.
        const relativeOffset = latest * 100 / heroRef.current.offsetHeight
        // Scale is a formula to compute how much the elements should increase.
        const logoScale = 1 + Math.pow(relativeOffset, 2) * 0.008
        const titleScale = 1 + relativeOffset * 0.008
        setLogoAnimation({
            scale: logoScale,
            opacity: (logoScale > 1.6) ? 0 : 1
        })
        setTitleAnimation({
            scale: titleScale,
            opacity: (titleScale > 1.3) ? 0 : 1
        })
        setCountdownAnimation({
            scale: 0.5
        })
    })

    return (
        <section ref={heroRef} className={styles.container}>
            <InnerContainer>
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <span className={styles.littleHeading}>Dubai grand event</span>
                        <div style={{ transform: `scale(${countdownAnimation.scale})` }} className={styles.counter}>
                            <ColoredText>
                                <Countdown targetDate={getEventDate()} />
                            </ColoredText>
                        </div>
                        <h1 style={{ transform: `scale(${titleAnimation.scale})`, opacity: `${titleAnimation.opacity}` }}>Own your future</h1>
                    </div>
                    <div style={{ transform: `scale(${logoAnimation.scale})`, opacity: `${logoAnimation.opacity}` }} className={styles.logo}>
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
