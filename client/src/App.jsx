import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import {Link, link, useNavigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate();

  return (
    <>
      <h2>Главная страница</h2>
      <div>
        <Link to='/'>Главная страница</Link>
        <Link to='/register'>регистрация</Link>
      </div>
    </>
  )
}

export default App
