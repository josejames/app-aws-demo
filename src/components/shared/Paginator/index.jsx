import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export default function Paginator({ page, onPrev, onNext }) {
    const handlePrev = () => {
        onPrev()
    }

    const handleNext = () => {
        onNext()
    }

    return (
        <div className='bg-main-gradient p-[1px] rounded-lg'>
            <div className='flex items-center gap-[1px] rounded-lg overflow-hidden'>
                <button className='w-10 h-10 flex justify-center items-center bg-brand-black hover:bg-transparent transition-all ease-in-out' onClick={handlePrev}>
                    <IoChevronBack />
                </button>
                <div className='w-20 h-10 flex justify-center items-center bg-brand-black'>{ page }</div>
                <button className='w-10 h-10 flex justify-center items-center bg-brand-black hover:bg-transparent transition-all ease-in-out' onClick={handleNext}>
                    <IoChevronForward />
                </button>
            </div>
        </div>
    )
}
