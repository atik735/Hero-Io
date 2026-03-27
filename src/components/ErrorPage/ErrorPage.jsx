import React from 'react'
import error from "../../assets/error-404.png"
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
   <div>
     <div className='flex justify-center items-center min-h-screen'>
     <img src={error} />
      
     
    </div>

    
   <div className='flex justify-center'>
    <Link to="/" className=' px-5 py-2 bg-violet-600 text-white rounded-xl'>
            Back Home
          </Link>
   </div>
    
   </div>
  )
}

