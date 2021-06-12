import React from 'react'
import { CreditCard } from 'react-bootstrap-icons'
import Title from '../../atomics/Title'

const CardTransaction = ({ classes, title, id, status, date, total }) => {
    return (
        <div className={ classes ? `card__transaction ${classes}` : 'card__transaction'}>
            <div className='card__transaction-icon'>
                <span>
                    <CreditCard fontSize={30} />
                </span>
            </div>
            <div className='card__transaction-content'>
                <Title component='h5' text={title} style={{ marginBottom: '2px' }} />
                <ul className='card__transaction-list'>
                    <li><span className='card__transaction-date'>{date}</span></li>
                    <li>status: <span className='card__transaction-date'>{status}</span></li>
                    <li>total: <span className='card__transaction-date'>
                        {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardTransaction
