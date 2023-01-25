
// Styles
import styles from './login.module.sass'
// Icons
import { IoPersonOutline } from 'react-icons/io5'
import { FiMail, FiLock } from 'react-icons/fi'
// React
import { useState } from 'react'
// Components
import Button from '@components/blog/Login/Button'
import { useAuth } from '@utils/auth-provider'
// Next Js
import { useRouter } from 'next/router'
// Spinners
import { TailSpin } from 'react-loader-spinner'

export default function LoginForm () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [error, setError] = useState(false)
    const auth = useAuth()
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegister) {
            try {
                const loginData = { username, password }
                await auth.signin(loginData)
                router.push('/blog')
            } catch (error) {
                setError(true)
                console.log(error)
            }
        } else {
            try {
                const registerData = { username, email, password, name: firstName, lastName }
                await auth.registerUser(registerData)
                router.push('/blog')
            } catch (error) {
                console.log('Error on the registration process')
            }
        }
    }

    const toggleForm = () => {
        setIsRegister(!isRegister)
        setUsername('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return <div className={styles.formBox}>
        <form onSubmit={onSubmit} onChange={() => setError(false)}>
            <div className={styles.inputBox}>
                <div className= "relative">
                    <label>Username</label>
                    <input
                        placeholder='Username'
                        type="text"
                        name="username"
                        autoComplete="off"
                        required
                        value={username}
                        onChange = {e => setUsername(e.target.value)}
                    />
                    <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                        <IoPersonOutline/>
                    </div>
                </div>
                {isRegister && <>
                    <div className= "relative">
                        <label>First Name</label>
                        <input
                            placeholder='First Name'
                            type="text"
                            name="username"
                            autoComplete="off"
                            required
                            value={firstName}
                            onChange = {e => setFirstName(e.target.value)}
                        />
                        <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                            <IoPersonOutline/>
                        </div>
                    </div>
                    <div className= "relative">
                        <label>Last Name</label>
                        <input
                            placeholder='Last Name'
                            type="text"
                            name="username"
                            autoComplete="off"
                            required
                            value={lastName}
                            onChange = {e => setLastName(e.target.value)}
                        />
                        <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                            <IoPersonOutline/>
                        </div>
                    </div>
                    <div className= "relative">
                        <label>Email address</label>
                        <input
                            placeholder='Email address'
                            type="email"
                            name="username"
                            autoComplete="off"
                            required
                            value={email}
                            onChange = {e => setEmail(e.target.value)}
                        />
                        <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                            <FiMail/>
                        </div>
                    </div>
                </>}
                <div className= "relative">
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        name="password"
                        autoComplete="off"
                        required
                        value={password}
                        onChange = {e => setPassword(e.target.value)}
                    />
                    <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                        <FiLock/>
                    </div>
                </div>
            </div>
            <Button htmlType="submit">
                { isRegister ? 'Register' : 'Login'}
                {auth.fetchingUser && <TailSpin
                    color='#51C9E4'
                    width="24"
                    height="24"
                    wrapperStyle={{ position: 'absolute', left: '60%', bottom: '25%' }}
                />}
            </Button>
        </form>
        {error &&
            <ErrorMessage error = 'User not foud'/>
        }
        {
            !isRegister
                ? <a className = "cursor-pointer hover:text-brand-cyan" onClick={toggleForm}>
                    {" Don't have an account "}
                    <span className='underline'>
                        {'Sign Up'}
                    </span>
                </a>
                : <a className = "cursor-pointer hover:text-brand-cyan" onClick={toggleForm}>
                    {' Log In '}
                </a>
        }
    </div>
}

const ErrorMessage = ({ error }) => {
    if (!error) {
        return null
    }

    return (
        <div className="text-red-400 text-sm font-medium">
            {error}
        </div>
    )
}
