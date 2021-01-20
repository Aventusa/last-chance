import React, {useState} from 'react'
import './Comment.sass'

function Comment() {
    const [comment, setComment] = useState('Тут кто-нибудь есть?')
    if (!comment) {
        getComment()
    }
    function getComment() {
        fetch('http://last-chance/getComment.php')
            .then(response => response.json())
            .then(message => setComment(message || 'Напиши что-нибудь, прошу.'))
            .catch(error => console.error(error))
    }

    function handleOnClick() {
        getComment()
    }

    return (
        <div className='Comment'>
            <p>Коментарии</p>
            <div className="comment-display">
                {comment}
            </div>
            <button
                className='next-btn'
                onClick={handleOnClick}
            >
                Следующий
            </button>
        </div>
    )
}

export default Comment