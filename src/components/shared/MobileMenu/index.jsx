// Common
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
// Components
import HeaderUser from '../HeaderUser'
// Framer motion
import { motion as m, AnimatePresence } from 'framer-motion'
// Styles
import styles from './styles.module.sass'

const Menu = ({ isOpen, onClick }) => (
    <AnimatePresence>
        { isOpen && (
            <m.div
                key='menu'
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ type: 'just', duration: 0.25 }}
                className={styles.containerOptions}
            >
                <ul>
                    <li className={styles.user}>
                        <HeaderUser />
                    </li>
                    <li>
                        <Link href='/' onClick={() => onClick()}>Event</Link>
                    </li>
                    <li>
                        <Link href='/' onClick={() => onClick()}>Blog</Link>
                    </li>
                </ul>
            </m.div>
        )}
    </AnimatePresence>
)

export default function MobileMenu() {
    const buttonRef = useRef()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body')
        const header = document.querySelector('header')
        const menuLines = buttonRef.current.childNodes
        if (isOpen) {
            body.classList.add('fixed', 'overflow-y-hidden', 'h-screen')
            header.classList.add('bg-brand-black')
            menuLines[0].classList.add('rotate-45')
            menuLines[1].classList.add('opacity-0')
            menuLines[2].classList.add('-rotate-45')
        } else {
            body.classList.remove('fixed', 'overflow-y-hidden', 'h-screen')
            header.classList.remove('bg-brand-black')
            menuLines[0].classList.remove('rotate-45')
            menuLines[1].classList.remove('opacity-0')
            menuLines[2].classList.remove('-rotate-45')
        }

        return () => {}
    }, [isOpen])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.container}>
            <button ref={buttonRef} onClick={handleClick}>
                <div className={styles.menuLines} />
                <div className={styles.menuLines} />
                <div className={styles.menuLines} />
            </button>
            <Menu isOpen={isOpen} onClick={handleClick} />
        </div>
    )
}
