import { Bell } from "react-bootstrap-icons"

const CardNotif = ({ classes, text }) => {
    return (
        <div className={ classes ? `card__notif ${classes}` : 'card__notif'}>
            <div className='card__notif-icon'>
                <span>
                    <Bell fontSize={30} />
                </span>
            </div>
            <div className='card__notif-content'>
                <p className='card__notif-description'>
                    {text}
                </p>
                <span className='card__notif-date'>25-05-2021</span>
            </div>
        </div>
    )
}

export default CardNotif
