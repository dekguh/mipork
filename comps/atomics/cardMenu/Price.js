const Price = ({ price, discount }) => {
    return (
        <div className='card__menubox-price-wrap'>
            <span className='card__menubox-price'>
                {!discount && Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
                {discount && Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
            </span>
            {discount && <span className='card__menubox-discounted'>
                {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
            </span>}
        </div>
    )
}

export default Price
