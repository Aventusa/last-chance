import React from 'react'
import './Footer.sass'

function Footer() {
    const d = new Date()

    return (
        <div className='Footer'>
            <p>Сайт не собирает информацию о пользователях. По истечению таймера все комментарии удаляться</p>
            <a href="mailto:AventusA@yandex.ru">Aventusa {d.getFullYear()}</a>
        </div>
    )
}

export default Footer