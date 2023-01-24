// Components
import LoginForm from '@components/blog/Login/LoginForm'
import InnerContainer from '@layouts/InnerContainer'
// Next js
import Image from 'next/image'

export default function Login() {
    return <InnerContainer>
        <div className="w-full h-full flex items-center justify-center xl:pt-40 relative">
            <div className= "fixed right-0 top-0 flex w-1/4 h-[68vh] items-start">
                <Image priority fill className='object-cover' alt="" src='/assets/images/login/rightBg.png'/>
            </div>
            <div className= "fixed left-0 bottom-0 flex w-1/4 h-[68vh]">
                <Image priority fill className='object-cover' alt="" src='/assets/images/login/leftBg.png'/>
            </div>
            <div className='flex flex-col gap-10 w-full relative items-center'>
                <div className='relative z-5 w-56 md:w-48 h-16'>
                    <Image src='/assets/images/logo-global.png' alt='Mavie global' priority fill className='object-contain' />
                </div>
                <LoginForm/>
            </div>
        </div>
    </InnerContainer>
}
