import axios, { AxiosError } from 'axios'

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use((req) => {
    req.headers.token = `${localStorage.getItem('token') ?? ''}`
    return req
})

apiClient.interceptors.response.use(res => {
    return res
}, async (error) => {
    if (error instanceof AxiosError) {
        const { response: { status } } = error

        if (status === 401 && !window.location.pathname.includes('/login')) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.replace('/login')
            return
        }
    }
    return Promise.reject(error)
})

export default apiClient
