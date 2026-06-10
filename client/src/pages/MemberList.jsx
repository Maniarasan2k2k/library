import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MemberList = () => {

  const [members, setmembers]= useState([])

  return (
     <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <h2 className='text-2xl font-bold text-gray-500'>Manage Members</h2>
        <Link to="/members/add" className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors whitespace-nowrap'> + Add New Member</Link>
      </div>

      <div className='coverflow-x-auto border border-gray-200 rounded-md'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100 border border-gray-200 '>
              <th className='p-4 font-semibold text-gray-700'>Member Details</th>
              <th className='p-4 font-semibold text-gray-700'>	Classification</th>
              <th className='p-4 font-semibold text-gray-700'> Status</th>
              <th className='p-4 font-semibold text-gray-700'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {members.length > 0 ? members.map((m)=>(

              <tr className='hover:bg-gray-100'>
              <td className='p-4'>
                <div className=' font-bold text-gray-800'></div>
                <div className='text-sm text-gray-500'>by</div>
              </td>

              <td>
                <div className=' font-bold text-gray-800'></div>
                <div></div>
              </td>

              <td>
                <span>Available</span>
                
                <div>of Total</div>
              </td>

              <td>
                <Link>Edit</Link>
                <button>Delete</button>
              </td>
            </tr>

            )) :(

            <tr className=''>
              <td colSpan="4" className='p-8 text-center text-gray-500'>No members registered yet.</td>
            </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MemberList




// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 