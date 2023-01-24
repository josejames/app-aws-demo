
import { useCallback, useState } from 'react'
import apiClient from 'utils/api-client'

export function useBlogList() {
    const [list, setList] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const fetch = useCallback(async (filter) => {
        try {
            setLoading(true)
            setList(null)
            const result = await fetchAsync(filter)
            setList(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchAsync = useCallback(async (filter) => {
        let url = '/posts'
        if (filter?.userId != null) {
            url = `/users/${filter.userId}/posts`
        }
        const response = await apiClient.get(url, {
            params: filter
        })
        return response.data
    }, [])

    return { list, loading, error, fetch, fetchAsync }
}

export function useBlog() {
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const fetch = useCallback(async (blogId) => {
        try {
            setLoading(true)
            const result = await fetchAsync()
            setBlog(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])
    const fetchAsync = useCallback(async (blogId) => {
        const response = await apiClient.get(`/posts/${blogId}`)
        return response.data
    }, [])
    return { blog, loading, error, fetch, fetchAsync }
}
