import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedText () {
    const paragraphs = [
        'MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom.',
        'There is an extraordinary potential of a community that aligns and pulls together.',
        'MaVie believes that people can achieve greatness when they share values of trust and unity, and work towards a common goal by utilizing the power of many.'
    ]

    return (
        <section
            className= "relative z-0 top-24 h-auto overflow-hidden "
            initial="offscreen"
            whileInView="onscreen"
        >
            <div className='px-5'>
                <h2 className= "text-[120px] font-light">
                    All for One.
                </h2>
                <p className= "text-[96px] font-medium leading-[100px]">
                    {paragraphs.map((element, id) => {
                        return <Paragraph key={id}>
                            {element}
                        </Paragraph>
                    })}
                </p>
            </div>
        </section>)
}

const Paragraph = ({ children, props }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.6 })

    return <span
        {...props}
        ref = {ref}
        style={{
            color: isInView ? 'white' : 'gray',
            // opacity: isInView ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}

    >
        {children}
    </span>
}
