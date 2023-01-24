import { useState, useEffect } from 'react'

const useApi = (fetcher, revalidate) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchApi = async () => {
        try {
            setLoading(true)
            const response = await fetcher()
            setData(response)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
        return () => {}
    }, [JSON.stringify(revalidate)])

    return {
        data,
        loading,
        error
    }
}

export default useApi
