import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div>
            <h2>Страница регистрации</h2>
            <form className='registerblock'> 
                <div className='registerdesing'>
                    <label htmlFor="">Имя пользователя</label>
                    <input type="text" />
                </div>
                <div className='registerdesing'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Email' />
                </div>
                <div className='registerdesing'>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Password' />
                </div>
                <div className='registerdesing'>
                    <label htmlFor="">Password2</label>
                    <input type="text" placeholder='Подтвердите ваш пассворд' />
                </div>
                <button>Зарегистрироваться</button>
            </form>
            <div>
                <p>У вас уже есть аккаунт? <a href="">Войти</a></p>
            </div>

        </div>
    )
}

export default Register