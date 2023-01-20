import VideoBg from '@components/VideoBg'
import InnerContainer from '@layouts/InnerContainer'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedText () {
    const paragraphs = [
        'MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom.',
        ' There is an extraordinary potential of a community that aligns and pulls together.',
        ' MaVie believes that people can achieve greatness when they share values of trust and unity,',
        ' and work towards a common goal by utilizing the power of many.'

    ]

    return (
        <section
            className= "relative z-0 top-24 h-auto min-h-screen overflow-hidden "
            initial="offscreen"
            whileInView="onscreen"
        >
            <InnerContainer>
                <VideoBg/>
                <div className= "relative z-10">
                    <h2 className= "text-[120px]  font-light italic">
                        All for One.
                    </h2>
                    <p className= "text-[4rem] md:text-[3.5vw] leading-tight ">
                        {paragraphs.map((element, id) => {
                            return <Paragraph key={id}>
                                {element}
                            </Paragraph>
                        })}
                    </p>
                </div>

            </InnerContainer>

        </section>)
}

const Paragraph = ({ children, props }) => {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    // to listen for scroll events, and use the getBoundingClientRect() method to check if the component is in the center of the screen.
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const componentTop = ref.current.getBoundingClientRect().top
            const componentBottom = ref.current.getBoundingClientRect().bottom
            if (
                componentTop < windowHeight / 2 && componentBottom > windowHeight / 2
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
            color: isInView ? 'white' : 'gray',
            fontWeight: isInView ? '400' : '300'
        }}
        className='ease-in-out duration-300'
    >
        {children}
    </span>
}
