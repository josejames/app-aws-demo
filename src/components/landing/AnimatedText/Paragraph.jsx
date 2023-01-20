// React
import { useEffect, useRef, useState } from 'react'

export default function Paragraph ({ children, props }) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    // To listen for scroll events, and use the getBoundingClientRect() method to check if the component is in the center of the screen.
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const componentTop = ref.current.getBoundingClientRect().top
            const componentBottom = ref.current.getBoundingClientRect().bottom
            if (
                (componentTop < windowHeight / 2) && (componentBottom > windowHeight / 2)
            ) {
                setIsInView(true)
            } else {
                setIsInView(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ref])

    return <span
        {...props}
        ref = {ref}
        style={{
            color: isInView ? 'white' : '#515051'
        }}
        className='ease-in-out duration-500'
    >
        {children}
    </span>
}
