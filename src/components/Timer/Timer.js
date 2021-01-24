import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Moment from 'react-moment'
import './Timer.sass'

const defaultCurrentDate = moment()

function Timer({url, endDate}) {
    const [currentDate, setCurrentDate] = useState(defaultCurrentDate)

    useEffect(() => {
        fetch(url + 'getCurrentDate.php')
            .then(response => response.json())
            .then(date => setCurrentDate(moment(String(date))))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment())
        }, 1000)
        return () => clearInterval(interval)
    }, [currentDate])

    return (
        <div className='timer'>
            <Moment
                duration={currentDate}
                date={endDate}
                format='hh:mm:ss'
            >
            </Moment>
        </div>
    );
}

Timer.propTypes = {
    url: PropTypes.string,
    endDate: PropTypes.string
}

export default Timer