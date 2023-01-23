// Icons
import { IoPersonCircle } from 'react-icons/io5'

export default function HeaderUser() {
    return (
        <div className='flex items-center gap-10'>
            <span>User name</span>
            <IoPersonCircle className='text-4xl' />
        </div>
    )
}
