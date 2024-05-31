

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Posts crud/Home'
import Read from './Posts crud/Read'
import Update from './Posts crud/Update'
import Create from './Posts crud/Create'

function App() {
   return (
   <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
             <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
