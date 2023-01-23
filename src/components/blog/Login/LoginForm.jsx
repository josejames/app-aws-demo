
// Styles
import styles from './login.module.sass'
// Icons
import { IoPersonOutline } from 'react-icons/io5'
import { FiMail, FiLock } from 'react-icons/fi'
// React
import { useState } from 'react'
// Components
import Button from '@components/blog/Login/Button'

export default function LoginForm () {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {

    }

    return <div className={styles.formBox}>
        <form onSubmit={onSubmit}>
            <div className={styles.inputBox}>
                <div className= "relative">
                    <label>Username</label>
                    <input
                        placeholder='Username'
                        // type="text"
                        name="username"
                        autoComplete="off"
                        required
                        value={user}
                        onChange = {e => setUser(e.target.value)}
                    />
                    <div className= 'absolute right-1 bottom-3 text-[#909090]'>
                        <IoPersonOutline/>
                    </div>
                </div>
                <div className= "relative">
                    <label>Email address</label>
                    <input
                        placeholder='Email address'
                        // type="text"
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
                <div className= "relative">
                    <label>Password</label>
                    <input
                        placeholder='Enter your backoffice password'
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
        </form>
        <Button>
                Register
        </Button>
    </div>
}
