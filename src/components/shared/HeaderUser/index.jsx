// Icons
import { IoPersonCircle } from 'react-icons/io5'

export default function HeaderUser() {
    return (
        <div className='flex flex-row-reverse md:flex-row items-center gap-4 md:gap-10'>
            <span>User name</span>
            <IoPersonCircle className='text-4xl' />
        </div>
    )
}
