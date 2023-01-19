import { useEffect } from 'react'

export default function ParagraphSection () {
    const text = 'text-gray-800'
    const highlightText = 'text-white'

    useEffect(() => {
        console.log(text, highlightText)
    }, [])

    return (
        <section className= "relative z-0 top-24 h-auto overflow-hidden text-white">
            <div>
                <h2 className= "text-[120px]">
                    All for One.
                </h2>
                <p className= "text-[96px] leading-[100px]">
                    <span className= "text-gray-800">
                        MaVie empowers anyone with access to life changing opportunities, unconditional support of a business-driven community and an open path to financial freedom.
                    </span>
                    <span>
                        There is an extraordinary potential of a community that aligns and pulls together.
                    </span>
                    <span>
                        MaVie believes that people can achieve greatness when they share values of trust and unity, and work towards a common goal by utilizing the power of many.
                    </span>
                </p>
            </div>
        </section>)
}
