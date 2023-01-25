// Icons
import { IoPersonCircle } from 'react-icons/io5'
// HTML parser
import HtmlParser from 'html-react-parser'

export default function PostBody ({ content = '', userName = '', date = '' }) {
    const formatDate = (date) => {
        const d = new Date('2021-04-30T21:30:15.697Z')
        return d.toLocaleDateString()
    }
    console.log(formatDate(date))

    return <div className = " flex flex-col items-center w-full" >
        <div className = "lg:max-w-[75ch] max-w-[90vw] min-w-[300px] flex flex-col items-center gap-10">
            <div className= "flex w-full justify-between items-center">
                <div className="flex items-center gap-3">
                    <IoPersonCircle className='text-5xl left-[-4px] relative' />
                    <p className = "text-[24px] leading-7 font-normal">
                        {userName}
                    </p>
                </div>
                <div>
                    <p className = "text-[24px] leading-7 font-normal text-brand-cyan">
                        {formatDate(date)}
                    </p>
                </div>
            </div>
            <div className = "text-base md:text-[24px] leading-7 font-normal flex flex-col gap-10">
                {HtmlParser(content)}
            </div>
        </div>
    </div>
}
