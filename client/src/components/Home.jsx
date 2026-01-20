import React from 'react'

const Home = ({user}) => {
    return (
        <div>
            <h1>Главная</h1>            
            {user ? (
                <div>
                    <h3>Вы авторизованы</h3>
                    <p>Имя {user.username}</p>
                    <p>Email {user.email}</p>
                </div>
            ) : (
                <p>Войдите или зарегистрируйтесь</p>
            )}            
        </div>
    )
}

export default Home