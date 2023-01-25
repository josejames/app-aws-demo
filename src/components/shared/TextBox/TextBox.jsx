/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState } from 'react'
import { IoPerson } from 'react-icons/io5'

const TextBox = ({ postId }) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form)
        try {
            setLoading(true)
            // eslint-disable-next-line no-unused-vars
            const res = await axios.post(`/posts/${postId}/comments`, formData)
            setError(null)
            e.target.reset()
        } catch (error) {
            setSuccess(false)
            setError(error)
        } finally {
            setLoading(false)
            setSuccess(true)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between w-full">
                <IoPerson className="w-12 h-12 rounded-full bg-slate-300 p-"/>
                <input type='text' name='content' placeholder="Write your comment" className="ml-6 border-2 border-brand-pink rounded-lg bg-transparent p-6 outline-brand-gray w-[90%]"/>
            </div>
        </form>
    )
}

export default TextBox
