import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-lime-100 h-screen'>
      <Header />
      <Outlet />

      <h1>Footer</h1>
    </div>
  )
}

export default Layout