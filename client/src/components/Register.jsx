import React, { useState } from 'react'
import './Register.css'
import { useNavigate,Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        username:'',
        password:'',
        email:''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('пользователь успешно зарегистрирован');
        navigate('/profile');
    }


    return (
        <div>
            <h2>Страница регистрации</h2>
            <form className='registerblock' onSubmit={handleSubmit}> 
                <div className='registerdesing'>
                    <label htmlFor="">Имя пользователя</label>
                    <input 
                    value={form.username}
                    onChange={(e) => setForm({...form,username:e.target.value})}
                    placeholder='Имя пользователя'/>
                </div>
                <div className='registerdesing'>
                    <label htmlFor="">Email</label>
                    <input
                    value={form.email}
                    onChange={(e) => setForm({...form,email:e.target.value})} 
                    placeholder='Email' />
                </div>
                <div className='registerdesing'>
                    <label htmlFor="">Password</label>
                    <input
                    value={form.password}
                    onChange={(e) => setForm({...form,password:e.target.value})} 
                    placeholder='Password' />
                </div>
                {/* <div className='registerdesing'>
                    <label htmlFor="">Password2</label>
                    <input 
                    placeholder='Подтвердите ваш пассворд' />
                </div> */}
                <button type='submit'>Зарегистрироваться</button>
            </form>
            <div>
                <p>У вас уже есть аккаунт? <a href="">Войти?</a></p>
            </div>

        </div>
    )
}

export default Register