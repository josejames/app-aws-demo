// Common
import Link from 'next/link'
// Hooks
import { useAuth } from '@utils/auth-provider'
// Icons
import { IoPersonCircle } from 'react-icons/io5'

export default function HeaderUser() {
    const { user } = useAuth()

    if (user) {
        return (
            <div className='flex flex-row-reverse md:flex-row items-center gap-4 md:gap-10'>
                <span>User name</span>
                <IoPersonCircle className='text-4xl' />
            </div>
        )
    }

    return (
        <Link href='/login' className='w-full bg-main-gradient p-[1px] rounded-md' >
            <div className='w-full h-full flex justify-center items-center bg-black hover:bg-opacity-0 text-sm hover:text-black font-light hover:font-normal py-2 rounded-md transition-all ease-in-out'>
                Login
            </div>
        </Link>
    )
}
