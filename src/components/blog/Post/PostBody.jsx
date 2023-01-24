// Icons
import { IoPersonCircle } from 'react-icons/io5'
// HTML parser
import HtmlParser from 'html-react-parser'
// Components
import CommentSection from '@components/blog/Comments/CommentSection'

export default function PostBody ({ content = '', userName = '', date = '' }) {
    return <div className = " flex flex-col items-center w-full" >
        <div className = "max-w-[70%] flex flex-col items-center gap-10">
            <div className= "flex w-full justify-between">
                <div className="flex items-center gap-3">
                    <IoPersonCircle className='text-5xl' />
                    <p className = "text-[24px] leading-7 font-normal">
                        {userName}
                    </p>
                </div>
                <div>
                    <p className = "text-[24px] leading-7 font-normal text-brand-cyan">
                        {date}
                    </p>
                </div>
            </div>
            <p className = "text-[24px] leading-7 font-normal">
                {HtmlParser(content)}
            </p>
            <div className= 'w-full'>
                <CommentSection/>
            </div>
        </div>
    </div>
}
