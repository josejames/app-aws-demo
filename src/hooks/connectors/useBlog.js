
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

    return { list, setList, loading, error, fetch, fetchAsync }
}

export function useBlog() {
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const fetch = useCallback(async (blogId) => {
        try {
            setLoading(true)
            const result = await fetchAsync(blogId)
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

export function useBlogDeleter() {
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const del = useCallback(async (blogId) => {
        try {
            setLoading(true)
            const result = await delSync(blogId)
            setBlog(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])
    const delSync = useCallback(async (blogId) => {
        const response = await apiClient.delete(`/posts/${blogId}`)
        return response.data
    }, [])
    return { blog, loading, error, del, delSync }
}

export function useBlogCreator() {
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const createOrUpdate = useCallback(async (blog) => {
        try {
            setLoading(true)
            const result = await createOrUpdateSync(blog)
            setBlog(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }, [])
    const createOrUpdateSync = useCallback(async(blog) => {
        let response
        if (blog.id) {
            response = await apiClient.put(`/posts/${blog.id}`, blog)
        } else {
            response = await apiClient.post('/posts', blog)
        }
        return response.data
    }, [])
    return {
        blog, loading, error, createOrUpdate, createOrUpdateSync
    }
}
