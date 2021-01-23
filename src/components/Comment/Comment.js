import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Comment.sass'

function Comment(props) {
    const [comment, setComment] = useState('Тут кто-нибудь есть?')
    if (!comment) {
        getComment()
    }
    function getComment() {
        fetch(props.url + 'getComment.php')
            .then(response => response.json())
            .then(message => setComment(message || 'Напиши что-нибудь, прошу.'))
            .catch(error => console.error(error))
    }

    function handleOnClick() {
        getComment()
    }

    return (
        <div className='comment'>
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

Comment.propTypes = {
    url: PropTypes.string
}

export default Comment