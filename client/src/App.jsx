import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route element={<Home/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login'element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
