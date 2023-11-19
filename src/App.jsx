import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Login, Signup } from './container';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
