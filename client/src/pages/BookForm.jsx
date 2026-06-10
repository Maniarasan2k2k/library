import React, { useEffect, useState } from 'react'
import { Link, Links, useNavigate, useParams } from 'react-router-dom'
import api from '../Api/Api.js'

const BookForm = () => {

  const [formData, setFormdata] = useState({ title: '', author: "", isbn: "", genr: "", totalCopies: "", publishYear: '' })

  const navigate = useNavigate()
  const { id } = useParams()
  const ediMode = !!id

  const handleChange = (e) => {
    // console.log("...formData, [e.target.name] : e.target.value")
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (ediMode) {
        const res = api.put(`/books/${id}`, formData)
      } else {
        await api.post("/books", formData)
      }
      navigate("/books")

    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    if (ediMode) {
      const fetchBook = async () => {
        try {
          const res = await api.get(`/books/${id}`)
          const book = res.data.book
          setFormdata({
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            genr: book.genr,
            publishYear: book.publishYear,
            totalCopies: book.totalCopies
          })

        } catch (error) {
          console.log(error.message)
        }
      }
      fetchBook()
    }
  }, [id, ediMode])






  return (
    <div className='max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-200'>
      <div className='flex items-center justify-between  border-b pb-4'>
        <h2 className='text-2xl font-bold text-gray-800'>{ediMode ? "Edit Book Details" : "Add Book Details"}</h2>
        <Link className=' text-blue-600 hover:underline text-sm font-medium'>Back to List</Link>
      </div>

      <form action="" className='space-y-5' onSubmit={HandleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='md:col-span-2'>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Book Title *</label>
            <input type="text" onChange={handleChange} value={formData.title} name='title' className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>

          <div>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Author*</label>
            <input type="text" name='author' onChange={handleChange} value={formData.author} className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>

          <div>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>ISBN *</label>
            <input type="text" name='isbn' onChange={handleChange} value={formData.isbn} className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>

          <div>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Genre / Category</label>
            <input type="text" name='genr' onChange={handleChange} value={formData.genr} className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>


          <div>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Published Year</label>
            <input type="number" name='publishYear' value={formData.publishYear} onChange={handleChange} className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>

          <div>
            <label htmlFor="" className='block text-gray-700 font-semibold mb-1'>Total Copies *</label>
            <input type="number" name='totalCopies' onChange={handleChange} value={formData.totalCopies} className='w-full border border-gray-300 p-2.5 rounded focus:outline-none focus-border-blue-500' />
          </div>
        </div>

        <div className='pt-4 flex justify-end gap-3'>
          <Link className='bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded' transition-all font-medium border border-gray-300>Cancel</Link>
          <button className='bg-blue-600 hover:bg-blue-800 text-white px-5 py-2.5 rounded font-medium'>{ediMode ? "Update Book" : "Add a Book"}</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm