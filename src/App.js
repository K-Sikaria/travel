import React from 'react'
import './app.css'
import Main from './Components/Main'
import Login from './Components/Login'
import Register from './Components/Register'

import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/main',
    element: <div><Main /></div>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App