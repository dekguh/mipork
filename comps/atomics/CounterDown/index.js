import { useState } from 'react';
import Countdown from "react-countdown"

const CounterDown = ({ timestamp }) => {
    return (
        <Countdown date={timestamp} renderer={({days, hours, minutes, seconds, completed}) => {
            return !completed && <ul className='countdown__list'>
                    <li><span suppressHydrationWarning={true} className='countdown__list-text'>{days}</span></li>
                    <li><span suppressHydrationWarning={true} className='countdown__list-text'>{hours}</span></li>
                    <li><span suppressHydrationWarning={true} className='countdown__list-text'>{minutes}</span></li>
                    <li><span suppressHydrationWarning={true} className='countdown__list-text'>{seconds}</span></li>
                </ul>
        }} />
    )
}

export default CounterDown
