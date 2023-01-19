
// Input Component receives
export default function Input ({ action = () => { }, placeholder = 'Enter Your Email.' }) {
    return (
        <div className='relative'>
            <input
                type='email'
                className='bg-black w-72 border border-white px-5 pr-16 py-5 rounded-full relative'
                placeholder={placeholder}
            />
            <Button />
        </div>
    )
}

const Button = () => {
    return (
        <div className='absolute right-5 bottom-5 bg-maveigrad w-10 h-7 flex justify-center items-center rounded-full text-black'>
            <button
                className='h-full w-full'
            >
                {'->'}
            </button>
        </div>
    )
}
