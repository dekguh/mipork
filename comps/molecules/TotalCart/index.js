import { useEffect, useState } from 'react';
import Button from '../../atomics/form/Button';
import Title from "../../atomics/Title";

const TotalCart = ({ dataCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const reduceTotal = dataCart.reduce((acc, curr) => {
            if(curr.discount > 0) return acc + ((curr.price - ((curr.discount/100) * curr.price)) * curr.quantity);
            return acc + curr.price * curr.quantity;
        }, 0);

        setTotalPrice(reduceTotal);
    }, [dataCart]);

    return (
        <div className='total__cart margin-top-20'>
            <div className='total__cart-money'>
                <div className='total__cart-money-title'>
                    <Title component='h6' text='Total Pembayaran:' classes='margin-bottom-0' />
                </div>
                <div className='total__cart-money-number'>
                    <span>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</span>
                </div>
            </div>

            <div className='total__cart-checkout'>
                <Button classes='margin-top-12' text='Checkout' style={{ display: 'block', width: '100%' }} />
            </div>
        </div>
    )
}

export default TotalCart
