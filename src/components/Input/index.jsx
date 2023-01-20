import { HiArrowLongRight } from 'react-icons/hi2'

// Input Component receives
export default function Input ({ action = () => { }, placeholder = 'Enter Your Email.' }) {
    return (
        <div className='relative w-fit'>
            <input
                type='email'
                className='bg-black w-72 border border-white px-5 pr-20 py-5 h-[4rem] rounded-full relative font-thin placeholder:text-[#f0f0f06e] placeholder:text-sm'
                placeholder={placeholder}
            />
            <Button />
        </div>
    )
}

const Button = () => {
    return (
        <div className='absolute right-3 bottom-3 bg-main-gradient w-14 h-10 flex justify-center items-center rounded-full text-black'>
            <button
                className='h-full w-full flex items-center justify-center font-extrabold'
            >
                <HiArrowLongRight className= 'h-5 w-5'/>
            </button>
        </div>
    )
}
