import React, { useEffect, useState } from 'react'
import { Link, Links, useParams } from 'react-router-dom'
import api from '../Api/Api'

const BookList = () => {

  const [books, setBooks] = useState([])

  const { id } = useParams()



  const fetchBooks = async () => {
    try {
      const res = await api.get("/books")
      const book = res.data.books
      //  console.log(book)
      setBooks(book)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleDelete = (id) => {
    try {
      const res = api.delete(`/books/${id}`)
      fetchBooks()
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className='max-w-5xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4'>
        <h2 className='text-2xl font-bold text-gray-500'>Manage Books</h2>
        <Link to="/books/add" className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors whitespace-nowrap'> + Add New Books</Link>
      </div>

      <div className='coverflow-x-auto border border-gray-200 rounded-md'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100 border border-gray-200 '>
              <th className='p-4 font-semibold text-gray-700'>Book Details</th>
              <th className='p-4 font-semibold text-gray-700'>ISBN & Category</th>
              <th className='p-4 font-semibold text-gray-700'>Stock Status</th>
              <th className='p-4 font-semibold text-gray-700'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {books.length > 0 ? books.map((b) => (

              <tr key={b._id} className='hover:bg-gray-100'>
                <td className='p-4'>
                  <div className=' font-bold text-gray-800'>{b.title}</div>
                  <div className='text-sm text-gray-500'>by {b.author}</div>
                </td>

                <td>
                  <div className=' font-bold text-gray-800'>{b.isbn}</div>
                  <div>{b.genr}</div>
                </td>

                <td>
                  <span>Available</span>
                  <div>of {b.totalCopies} Total</div>
                </td>

                <td>
                  <Link to={`/books/edit/${b._id}`}>Edit</Link>
                  <button onClick={() => {
                    handleDelete(b._id)
                  }}>Delete</button>
                </td>
              </tr>

            )) : (

              <tr className=''>
                <td colSpan="4" className='p-8 text-center text-gray-500'>No books registered in the catalogue yet.</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookList