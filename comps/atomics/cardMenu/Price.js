const Price = ({ price, discount }) => {
    return (
        <div className='card__menubox-price-wrap'>
            <span className='card__menubox-price'>
                {discount <= 0 && Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
                {discount > 0 && Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price - ((discount/100) * price))}
            </span>
            {discount > 0 && <span className='card__menubox-discounted'>
                {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
            </span>}
        </div>
    )
}

export default Price
