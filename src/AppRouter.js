import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Add from './Add'
import Edit from './Edit'
import AppTable from './comps/AppTable'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          
            <Route path='/' element={<App />} />
            <Route path='create' element={<Add />} />
            <Route path='update/:id' element={<Edit />} />

            <Route path='/table' element={<AppTable />} />

        </Routes>
    </BrowserRouter>
  )
} 

export default AppRouter