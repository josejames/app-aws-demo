import { IoPerson } from 'react-icons/io5'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi'
import TextBox from '../TextBox/TextBox'
import { useState } from 'react'

const Comment = ({
    erase,
    text,
    children,
    likes = 0,
    dislikes = 0,
    response = true
}) => {
    const [write, setWrite] = useState(false)
    const handleTextbox = () => {
        setWrite(!write)
    }
    return (
        <div className='flex flex-col w-full min-h-[120px] h-fit my-4 p-2 justify-between'>
            <div className="flex flex-row">
                <IoPerson className="w-12 h-12 rounded-full bg-slate-300 p-2"/>
                <div className='w-[90%] ml-auto mr-0 mb-6'>
                    {text}
                </div>
            </div>
            <div className="flex flex-row w-[50%] h-[40px] ml-auto mr-0 justify-end items-center">
                <AiOutlineLike className='text-brand-pink text-3xl mx-2'/><p>{likes}</p>
                <AiOutlineDislike className='text-brand-pink text-3xl mx-2'/><p>{dislikes}</p>
                {erase && <HiOutlineTrash className='text-brand-cyan text-3xl mx-2'/>}
                {response &&
                    <button
                        onClick={handleTextbox}
                        className='flex cursor-pointer'>
                        <FiEdit className='text-brand-cyan text-2xl mx-2'/>
                        <p className='text-brand-cyan underline'>Response</p>
                    </button>}
            </div>
            {children && <div className='w-[95%] ml-auto mr-0'>
                {children}
            </div> }
            {write &&
            <div className='w-[95%] ml-auto mr-0 my-6 transition-transform duration-500'>
                <TextBox/>
            </div>}
        </div>
    )
}

export default Comment
