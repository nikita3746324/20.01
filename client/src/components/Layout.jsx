import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <h1>Мой сайт</h1>
            <nav>
                <Link to='/'>Главная</Link>
                <Link to='/Login'>Вход</Link>
                <Link to='/register'>Регистрация</Link>
                <Link to='/profile'>Профиль</Link>
                <Link to='/about'>О нас</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout