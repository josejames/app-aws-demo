// Components
import VideoBg from '@components/VideoBg'
import ColoredText from '@components/ColoredText'
import InnerContainer from '@layouts/InnerContainer'
// React
import { useEffect, useRef, useState } from 'react'
// Framer-Motion
import {
    motion,
    useScroll,
    useTransform
} from 'framer-motion'

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

export default function AnimatedText () {
    const PARAGRAPHS = [
        'MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom.',
        ' There is an extraordinary potential of a community that aligns and pulls together.',
        ' MaVie believes that people can achieve greatness when they share values of trust and unity,',
        ' and work towards a common goal by utilizing the power of many.'
    ]

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 200)

    return (
        <section className= "relative z-0 h-fit min-h-screen">
            <VideoBg ref={ref}/>
            <InnerContainer>
                <div
                    className= "relative px-32 z-10 top-10 "
                    style={{ y }}
                >
                    <motion.h2
                        className= "text-[120px]  font-light italic"
                        transition={{ duration: 1.3 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        All for{' '}
                        <ColoredText>
                            One.
                        </ColoredText>
                    </motion.h2>
                    <motion.p
                        className= "text-[4rem] md:text-[3.5vw] leading-tight "
                        transition={{ duration: 1.3 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        { PARAGRAPHS.map((element, id) => {
                            return <Paragraph key={id}>
                                {element}
                            </Paragraph>
                        })}
                    </motion.p>
                </div>

            </InnerContainer>

        </section>)
}

const Paragraph = ({ children, props }) => {
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
            color: isInView ? 'white' : 'gray'
        }}
        className='ease-in-out duration-500'
    >
        {children}
    </span>
}
