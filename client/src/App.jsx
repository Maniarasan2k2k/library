import React from 'react'
import Login from './pages/Login.jsx'
import {Navigate, Route, Routes} from "react-router-dom"
import BookList from './pages/BookList.jsx'
import Layouts from './Components/Layouts.jsx'
import MemberList from './pages/MemberList.jsx'
import MemberForm from './pages/MemberForm.jsx'
import BookForm from './pages/BookForm.jsx'


const App = () => {
  return (

  

<Routes>
    <Route  path='/login' element={<Login />}/>


    <Route path='/' element={<Layouts />}>
        <Route index element={<Navigate to="/books" replace/>}/>
        <Route path='books' element={<BookList />}/>
        <Route path='members' element={<MemberList />}/>
        <Route path='members/add' element={<MemberForm />}/>
        <Route path='members/edit/:id' element={<MemberForm />}/>
        <Route path='books/add' element={<BookForm />}/>
        <Route path='books/edit/:id' element={<BookForm />}/>
    </Route>
</Routes>
    
  )
}

export default App