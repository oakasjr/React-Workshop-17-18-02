import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/stocks/Layout'
import Product from './components/stocks/Product'
import Sale from './components/stocks/Sale'
import Login from './components/login/Login'



const App = () => {
  const token = localStorage.getItem('token')
  return (
    <div>
      {token ? (
        <Routes>
          <Route path='/admin' element={<Layout />} >
            <Route index element={<Navigate to="/admin" />} />
            <Route path='/admin/product' element={<Product />} />
            <Route path='/admin/sale' element={<Sale />} />
          </Route>

          <Route path='/' element={<Navigate to="/admin" />} />
          <Route path='*' element={<Navigate to="/admin" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      )}
    </div>
  )
}

export default App