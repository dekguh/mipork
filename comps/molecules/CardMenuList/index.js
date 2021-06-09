import Price from '../../atomics/cardMenu/Price'
import LabelCustom from '../../atomics/LabelCustom'
import Title from '../../atomics/Title';
import Button from '../../atomics/form/Button';

const CardMenuList = ({ classes, link, onClickCart, id, title, price, discount, bestseller, image  }) => {
    return (
        <div className={classes ? `card__menulist ${classes}` : 'card__menulist'}>
            <div className='card__menulist-heading'>
                <img src={image} />
            </div>

            <div className='card__menulist-body'>
                <div className='card__menulist-body-left'>
                    {discount > 0 && <LabelCustom classes='card__menulist-label-discount margin-right-4' text={`-${discount}%`} />}
                    {bestseller && <LabelCustom classes='card__menulist-label-bestseller' text='terlaris' />}
                    <Title
                        component='h5'
                        href={link}
                        classes='margin-bottom-0 margin-top-4'
                        text={title}
                        classesLink='card__menulist-link'
                    />
                    <Price price={price} discount={discount} />
                </div>
                <div className='card__menulist-body-right'>
                    <Button text='+' onClick={onClickCart} />
                </div>
            </div>
        </div>
    )
}

export default CardMenuList
