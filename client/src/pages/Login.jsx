import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from "react-toastify"


const Login = () => {

  const navigate=  useNavigate()

     const [formData, setFormdata] = useState({username:"", password:""})

     const handleChange = (e) => {
    // console.log("...formData, [e.target.name] : e.target.value")
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(formData)
    // navigate('/books')
    


    if(
        formData.username === "admin",
        formData.password === "password123"

    ){
        localStorage.setItem("admin",JSON.stringify({
            username : formData.username,
            password : formData.password
        }))

        toast.success("Login Succcessfull")
        
        setTimeout(()=>{
            navigate("/books")
        },1000)
    } else{
        console.log("invalid UserName and Password")
    }

  }

 
  return (
    <div className='min-h-screen bg-gray-200 flex flex-col justify-center items-center px-4'>
       
       <ToastContainer position='top-right' autoClose={1000} theme='colored'/>

        <div className='w-full max-w-md bg-white border border-gray-200 p-8 rounded-xl shadow-md'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold'>Libris Admin Panel</h1>
                <p className='text-gray-600 text-sm mt-1'>Simple Library Management</p>
            </div>

            <form action="" className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className='block text-gray-600 text-sm  font-semibold mb-1'>Username</label>
                    <input type="text" onChange={handleChange} name='username' placeholder='e.g Ashwin' value={formData.username} className='w-full p-2.5 border border-gray-500 rounded-lg font-semibold text-gray-600' focus:ring-1 focus:ring-blue-500 focus:outline-none/>
                </div>

                <div>
                    <label htmlFor="" className='block text-gray-600 text-sm  font-semibold mb-1'>Password</label>
                    <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder='e.g password123' className='w-full p-2.5 border border-gray-500 rounded-lg font-semibold text-gray-600'  focus:ring-1 focus:ring-blue-500 focus:outline-none/>
                </div>

                <button className='w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sembold rounded-lg transition-all cursor-pointer '>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login