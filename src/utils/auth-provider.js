
import React, { useState, useEffect, createContext, useContext } from 'react'
import apiClient from './api-client'

const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = useAuthProvider()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export function useAuth() {
    return useContext(authContext)
}

export function useAuthProvider() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [fetchingUser, setFetchingUser] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            (async () => {
                try {
                    const user = await getUser(token)
                    setUser(user)
                    setToken(token)
                } catch (error) {
                    setUser(null)
                    setToken(null)
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                } finally {
                    setFetchingUser(false)
                }
            })()
        } else {
            setFetchingUser(false)
        }
    }, [])

    const getUser = async (token) => {
        const response = await apiClient.get('/auth/profile', {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        return response.data
    }

    const revalidate = async () => {
        const response = await apiClient.post('/auth/refresh', null, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const { token: newToken, expiration } = response.data
        if (newToken) {
            const userUpdated = { ...user }
            userUpdated.session = { ...user.session, expiration }
            setUser(userUpdated)
            setToken(newToken)
            localStorage.setItem('token', newToken)
            localStorage.setItem('user', JSON.stringify(user))
        }
        return response.data
    }

    const refresh = async () => {
        if (token) {
            try {
                setFetchingUser(true)
                const user = await getUser(token)
                localStorage.setItem('user', JSON.stringify(user))
                setUser(user)
            } catch (error) {
                const data = error.response?.data
                if (data) {
                    throw data
                }
                throw error
            } finally {
                setFetchingUser(false)
            }
        }
    }

    const signin = async (credentials) => {
        setFetchingUser(true)
        try {
            const response = await apiClient.post('/auth/login', credentials)
            const token = response.data.token
            const user = await getUser(token)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setToken(token)
            return user
        } catch (error) {
            const data = error.response?.data
            if (data) {
                throw data
            }
            throw error
        } finally {
            setFetchingUser(false)
        }
    }

    const registerUser = async (credentials) => {
        setFetchingUser(true)
        try {
            const response = await apiClient.post('/auth/register', credentials)
            const token = response.data.token
            const user = await getUser(token)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setToken(token)
            return user
        } catch (error) {
            const data = error.response?.data
            if (data) {
                throw data
            }
            throw error
        } finally {
            setFetchingUser(false)
        }
    }

    const signout = async () => {
        const response = await apiClient.post('/auth/logout', null, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return response.data
    }

    const hasPermission = (path, permission) => {
        return true
    }

    return { user, token, signin, registerUser, signout, revalidate, refresh, fetchingUser, hasPermission }
}
