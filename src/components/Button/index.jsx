// Common
import Link from 'next/link'

const Button = ({ children }) => {
    return (
        <Link
            href='#'
            className='w-auto bg-main-gradient p-[1px] rounded-full'
        >
            <div className='w-full h-full bg-black hover:bg-opacity-0 text-sm font-light hover:text-black hover:font-normal py-1 md:py-2 px-3.5 md:px-7 rounded-full transition-all ease-in-out'>
                { children }
            </div>
        </Link>
    )
}

export default Button
