import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home/Home'
import Students from '../pages/Students/Students'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/students' element={<Students />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Router
