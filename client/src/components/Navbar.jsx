import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

   const navigate = useNavigate()

  // const handleClick = ()=>{
  //   localStorage.removeItem("admin");
  //   console.log("token Remove SuccessFully")
  //   navigate("/login")
  // }

  return (
    <nav className='bg-white  border-b border-gray-200 shadow-sm sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <Link><span className='font-bold'>LibrisAdmin</span></Link>

          <div className='flex space-x-6 items-center'>
            <Link to="/books">Books</Link>
            <Link to="/members">Members</Link>
            <button onClick={()=>{
              localStorage.removeItem("admin")
              console.log("remove Successfully")
              navigate("/login")
            }} className='px-3.5 py-1.5 bg-red-600 hover:bg-red-800 text-white rounded text-xs font-semibold cursor-pointer transition-all'>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar