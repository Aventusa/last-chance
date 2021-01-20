import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Moment from 'react-moment'
import './Timer.sass'

function Timer(props) {

    const [currentDate, setCurrentDate] = useState(null)

    if (!currentDate) {
        fetch('http://last-chance/getCurrentDate.php')
            .then(response => response.json())
            .then(date => setCurrentDate(moment(String(date))))
    }

    useEffect(() => {
            let secTimer = setInterval(() => {
                if (currentDate) {
                    setCurrentDate(moment(currentDate + moment.duration().add(1, "s")))
                }
            }, 1000)
            return () => clearInterval(secTimer);
    }, [currentDate]);

    return (
        <div className='Timer'>
            <Moment
                duration={currentDate}
                date={props.end}
                format='hh:mm:ss'
            >
            </Moment>

        </div>
    );
}

Timer.propTypes = {
    end: PropTypes.string,
}

export default Timer