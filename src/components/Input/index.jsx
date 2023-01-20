import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
// Input Component receives
export default function Input({
    placeholder = 'Enter Your Email.'
}) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form)
        console.log(formData)
        try {
            setLoading(true)
            // eslint-disable-next-line no-unused-vars
            const res = await axios.post('/api/newsletters', formData)
            setError(null)
            e.target.reset()
        } catch (error) {
            setSuccess(false)
            setError(error)
        } finally {
            setLoading(false)
            setSuccess(true)
        }
    }
    return (
        <div className="relative w-fit">

            { success
                ? error ? <p>An error has occurred, try again.</p> : <p>You&apos;re on the waitlist now</p>
                : loading
                    ? <div>
                        <Image className='animate-spin-slow' src="/assets/images/gear.svg" alt='gear' width='100' height='100'/>
                    </div>
                    : <div>
                        <form onSubmit={handleSubmit}>
                            <p className="my-2 italic">join the waitlist</p>
                            <input
                                type='email'
                                name='email'
                                className="bg-black w-72 border border-white px-5 pr-16 py-5 rounded-full relative"
                                placeholder={placeholder}
                                required
                            />
                            <div className="absolute right-5 bottom-5 bg-main-gradient w-10 h-7 flex justify-center items-center rounded-full text-black">
                                <button
                                    className="h-full w-full flex items-center justify-center font-extrabold">
                                    <HiArrowLongRight />
                                </button>
                            </div>
                        </form>
                    </div>
            }

        </div>)
}
