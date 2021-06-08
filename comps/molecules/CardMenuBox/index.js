import Price from '../../atomics/cardMenu/Price'
import LabelCustom from '../../atomics/LabelCustom'
import Title from '../../atomics/Title'

const CardMenuBox = ({ classes, link, title, price, discount, bestseller, image  }) => {
    return (
        <div className={classes ? `card__menubox ${classes}` : 'card__menubox'}>
            <div className='card__menubox-heading margin-bottom-4'>
                {discount && <LabelCustom classes='card__menubox-label-discount' text={`-${discount}%`} />}
                {bestseller && <LabelCustom classes='card__menubox-label-bestseller' text='terlaris' />}
                <img src={image} />
            </div>

            <div className='card__menubox-body'>
                <Title
                    component='h5'
                    href={link}
                    classes='margin-bottom-0'
                    text={title}
                    classesLink='card__menubox-link'
                />
                <Price price={price} discount={discount} />
            </div>
        </div>
    )
}

export default CardMenuBox
