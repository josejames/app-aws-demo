// Common
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Components
import ColoredText from '@components/ColoredText/ColoredText'
import Countdown from '@components/Countdown/Countdown'
// Layout
import InnerContainer from '@layouts/InnerContainer'
// Icons
import { IoPlayCircleOutline, IoChevronForwardOutline } from 'react-icons/io5'
// Utils
import getEventDate from '@utils/constants/eventDate'
// Styles
import styles from './styles.module.sass'
// Framer Motion
import { useScroll, useMotionValueEvent } from 'framer-motion'

export default function Hero() {
    const { scrollY } = useScroll()
    const [logoScale, setLogoScale] = useState(1)
    const [opacity, setOpacity] = useState(1)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setLogoScale(1 + Math.pow(latest, 4) * 0.000001)
        if (1 + Math.pow(latest, 4) * 0.0000001 > 1.1) {
            setOpacity(0)
        } else {
            setOpacity(1)
        }
    })

    return (
        <section className={styles.container}>
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
                    <div style={{ transform: `scale(${logoScale})`, opacity }} className={styles.logo}>
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
