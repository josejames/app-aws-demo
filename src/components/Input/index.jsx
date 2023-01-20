import { useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

// Input Component receives
export default function Input({
    action = () => {},
    placeholder = 'Enter Your Email.'
}) {
    const [cambio, setCambio] = useState(false)
    const handleSubmit = () => {
        setCambio(true)
    }
    return (
        <div className="relative w-fit">
            {
                cambio
                    ? <p>You&apos;re on the waitlist now</p>
                    : <div>
                        <p className="my-2 italic">join the waitlist</p>
                        <input
                            type="email"
                            className="bg-black w-72 border border-white px-5 pr-16 py-5 rounded-full relative"
                            placeholder={placeholder}
                        />
                        <div className="absolute right-5 bottom-5 bg-main-gradient w-10 h-7 flex justify-center items-center rounded-full text-black">
                            <button
                                onClick={handleSubmit}
                                className="h-full w-full flex items-center justify-center font-extrabold">
                                <HiArrowLongRight />
                            </button>
                        </div>
                    </div>
            }
        </div>)
}
