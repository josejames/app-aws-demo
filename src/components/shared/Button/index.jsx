// Scroll
import { Link as ScrollLink } from 'react-scroll'

const Button = ({ children }) => {
    return (
        <ScrollLink
            to='newsletter'
            smooth
            spy={true}
            className='cursor-pointer'
        >
            <div
                href='#'
                className='w-auto bg-main-gradient p-[1px] rounded-full'
            >
                <div className='w-full h-full bg-black hover:bg-opacity-0 text-sm md:text-base font-light hover:text-black hover:font-normal py-1 md:py-2 px-3.5 md:px-7 rounded-full transition-all ease-in-out'>
                    { children }
                </div>
            </div>
        </ScrollLink>
    )
}

export default Button
