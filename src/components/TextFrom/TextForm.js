import React, {useEffect, useRef, useState} from 'react'
import moment from 'moment'
import getRandomInt from '../../utils';
import Timer from '../Timer/Timer';
import './TextFrom.sass'
import PropTypes from 'prop-types';

const defaultEndDate = moment().add(24, 'hours')


function TextForm({url}) {
    const [stylesForm, setStylesForm] = useState({opacity: 1})
    const [endDate, setEndDate] = useState(defaultEndDate)
    const form = useRef()

    useEffect(() => {
        fetch(url + 'getDate.php')
            .then(response => response.json())
            .then(date => setEndDate(moment(String(date))))
            .catch(error => console.log(error))
    }, [])

    function handleOnSubmit(e) {
        e.preventDefault()
        const formData = new FormData(form.current)
        formData.set('date', takeEndDate())
        fetch(url + 'updateDate.php', {
            method: 'POST',
            body: formData
        })
            .then(() => setEndDate(takeEndDate()))
            .catch(error => console.error(error))

        hideForm()
    }

    function hideForm() {
        setStylesForm(
            {
                opacity: 0,
                position: 'relative',
                height: 10,
                zIndex: '-1',
                padding: 0
            }
        )
    }

    function takeEndDate() {
        let d = moment().add(24, 'h').format()
        return d.split('').slice(0, d.length - 6).join('')
    }

    const messages = [
        'Поздравляю! Ты потратил время на какую то чушь.',
        'Герой! Как ты сумел, не понимаю.',
        'Сообщение можно было и поинтереснее написать.',
        'Ну и зачем ты это сделал?'
    ]

    return (
        <div className='text-form'>
            <Timer endDate={endDate} url={url}/>
            <div
                style={{
                    opacity: +!stylesForm.opacity
                }}
                className='ty-message'
            >
                {messages[getRandomInt(messages.length)]}
            </div>
            <form
                style={{...stylesForm}}
                ref={form}
                onSubmit={handleOnSubmit}
            >

            <textarea
                style={{...stylesForm}}
                name="message"
                placeholder='Тут можешь оставить комментарий'
                cols="30"
                rows="10"
                maxLength={1000}
                autoFocus
            />
                <button style={{...stylesForm}} type='submit'>Спасти</button>
            </form>
        </div>
    )
}

TextForm.propTypes = {
    url: PropTypes.string
}


export default TextForm
