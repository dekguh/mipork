import Price from '../../atomics/cardMenu/Price'
import LabelCustom from '../../atomics/LabelCustom'
import Title from '../../atomics/Title';
import Button from '../../atomics/form/Button';

const CardMenuBox = ({ classes, link, onClickCart, id, title, price, discount, bestseller, image  }) => {
    return (
        <div className={classes ? `card__menubox ${classes}` : 'card__menubox'}>
            <div className='card__menubox-heading'>
                {discount && <LabelCustom classes='card__menubox-label-discount' text={`-${discount}%`} />}
                {bestseller && <LabelCustom classes='card__menubox-label-bestseller' text='terlaris' />}
                <img src={image} />
            </div>

            <div className='card__menubox-body'>
                <div className='card__menubox-body-left'>
                    <Title
                        component='h5'
                        href={link}
                        classes='margin-bottom-0'
                        text={title}
                        classesLink='card__menubox-link'
                    />
                    <Price price={price} discount={discount} />
                </div>
                <div className='card__menubox-body-right'>
                    <Button text='+' onClick={onClickCart} />
                </div>
            </div>
        </div>
    )
}

export default CardMenuBox
