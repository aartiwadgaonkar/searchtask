import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Search'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />}></Route>
      </Routes>

    </BrowserRouter>
  )
}
