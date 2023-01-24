import { IoPerson } from 'react-icons/io5'

const TextBox = () => {
    return (
        <div className="flex flex-row justify-between">
            <IoPerson className="w-12 h-12 rounded-full bg-slate-300 p-"/>
            <input placeholder="Write your comment" className="ml-6 border-2 border-brand-pink w-[90%] rounded-lg bg-transparent p-6 outline-brand-gray"/>
        </div>
    )
}

export default TextBox
