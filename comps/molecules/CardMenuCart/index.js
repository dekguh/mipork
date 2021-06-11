import Price from '../../atomics/cardMenu/Price';
import Title from '../../atomics/Title';
import QuantityCart from '../QuantityCart';

const CardMenuCart = ({ classes, link, id, title, price, discount }) => {
    return (
        <div className={classes ? `card__menucart ${classes}` : 'card__menucart'}>
            <div className='card__menucart-body'>
                <div className='card__menucart-body-left'>
                    <Title
                        component='h5'
                        href={link}
                        classes='margin-bottom-0 margin-top-4'
                        text={title}
                        classesLink='card__menucart-link'
                    />
                    <Price price={price} discount={discount} />
                </div>
                <div className='card__menucart-body-right'>
                    <QuantityCart id={id} />
                </div>
            </div>
        </div>
    )
}

export default CardMenuCart
