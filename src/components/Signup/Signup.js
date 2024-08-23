import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {

    const [email,setEmail] = useState ('')
    const [password,setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
         createUserWithEmailAndPassword(auth, email,password)
            alert('user has been created')
        }catch (err){
            console.log(err)
        }
    } 

  return (
    <div>
        <div className='Signup'>
            <form  onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' 
                    placeholder='write your email'
                     name='email' 
                     onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password'
                     placeholder='write your password' 
                     name='paswword' 
                     onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <button type='submit'>Signup</button>
                <p>already register? <Link to ="/login">Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup