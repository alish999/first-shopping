import React from 'react'
import { Link } from 'react-router-dom' 

 function Home() {
  return (
    <div>
        <button type='submit'> <Link to = '/login'>Login</Link> </button>
        <button type='submit'> <Link to = '/signup'>Signup</Link></button>
    </div>
    
  )
}

export default Home