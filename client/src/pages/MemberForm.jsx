import React from 'react'
import { Link } from 'react-router-dom'

const MemberForm = () => {
  return (
     <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex items-center justify-between  border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Register New Member</h2>
        <Link className=' text-blue-600 hover:underline text-sm font-medium'>Back to List</Link>
      </div>

        <form action="" className='space-y-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='md:col-span-2'>
              <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Full Name*</label>
              <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
            </div>

            <div>
               <label htmlFor=""  className='block text-gray-700 font-semibold mb-1'>Email Address*</label>
               <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500'/>
            </div>

            <div>
               <label htmlFor=""  className='block text-gray-700 font-semibold mb-1'>Phone Number*</label>
               <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500'/>
            </div>

            <div>
               <label htmlFor=""  className='block text-gray-700 font-semibold mb-1'>Department / Class</label>
              <input type="text" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500'/>
            </div>


            <div>
              <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Member Type *</label>
              <select name="" id="" className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500'>
                <option value="">Students</option>
                <option value="">Faculty</option>
              </select>
            </div>

          </div>
          <div className='pt-4 flex justify-end gap-3'>
            <Link className='bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded' transition-all font-medium border border-gray-300>Cancel</Link>
            <button className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-medium'>Add Members</button>
          </div>
        </form>
    </div>
  )
}

export default MemberForm