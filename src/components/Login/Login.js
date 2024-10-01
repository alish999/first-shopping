
import './Login.css'
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6"
import { FaLock } from "react-icons/fa6"
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                Navigate("/main")
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (

        <div className='Container'>

            <div className='Form'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='form-group'>
                        <label for="username">Username</label><br />
                        <FaUser size='0.9rem' /><input type='text'
                            placeholder='write your username' name='usename'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label for="password">Password</label><br />
                        <FaLock size='0.9rem' /> <input type='password'
                            placeholder='write password' name='password'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='forget'>
                        <p>forget you password</p>
                    </div>

                    <button type='submit'>Login</button>

                    <div className='Different'>
                        <p>Or signup using</p>
                    </div>
                    <div className='Signup'>
                        <p>Signup</p>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default Login