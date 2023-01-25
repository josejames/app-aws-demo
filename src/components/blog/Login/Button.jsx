
export default function Button ({ props, children }) {
    return <button
        href='#'
        className='w-full bg-main-gradient p-[1px] relative rounded-xl'
        {...props}
    >
        <div className='w-full flex justify-center items-center cursor-pointer h-full bg-black hover:bg-opacity-0 text-sm md:text-base font-light hover:text-black hover:font-normal py-3 rounded-xl transition-all duration-300 ease-in-out'>
            { children }
        </div>
    </button>
}
