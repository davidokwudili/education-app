import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Login, Signup } from './container';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
