import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export default function Paginator({ page = 1, onPrev, onNext, disableNext }) {
    const handlePrev = () => {
        onPrev()
    }

    const handleNext = () => {
        onNext()
    }

    return (
        <div className='bg-main-gradient p-[1px] rounded-lg'>
            <div className='flex items-center gap-[1px] rounded-lg overflow-hidden'>
                <button
                    disabled={page <= 1}
                    onClick={handlePrev}
                    className='w-10 h-10 flex justify-center items-center bg-brand-black hover:bg-transparent disabled:bg-brand-black transition-all ease-in-out'
                >
                    <IoChevronBack />
                </button>
                <div className='w-20 h-10 flex justify-center items-center bg-brand-black select-none'>{ page }</div>
                <button
                    disabled={disableNext}
                    onClick={handleNext}
                    className='w-10 h-10 flex justify-center items-center bg-brand-black hover:bg-transparent disabled:bg-brand-black transition-all ease-in-out'
                >
                    <IoChevronForward />
                </button>
            </div>
        </div>
    )
}
