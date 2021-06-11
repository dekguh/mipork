import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from "../../atomics/form/Button";
import { increaseQtyAct, decreaseQtyAct, removeFromCartAct } from '../../utils/reducers/CartAction';

const QuantityCart = ({ id, dispatchIncreaseQty, dispatchDecreaseQty, dispatchRemoveFromCart, dataCart }) => {
    const [totalQty, setTotalQty] = useState(0);

    const handleClickDecrease = e => {
        return dispatchDecreaseQty(id, dataCart);
    }

    const handleClickIncrease = e => {
        return dispatchIncreaseQty(id, dataCart);
    }

    const handleClickDeleteCart = e => {
        return dispatchRemoveFromCart(id, dataCart);
    }

    useEffect(() => {
        const findItem = dataCart.find(data => data.id == id);
        setTotalQty(findItem.quantity);
    }, [dataCart]);

    return (
        <>
            <ul className='quantity__cart-list'>
                <li className='quantity__cart-btn'>
                    <Button
                        text='-'
                        style={{ padding: '4px 10px' }}
                        onClick={handleClickDecrease}
                    />
                </li>
                <li className='quantity__cart-number'>
                    {totalQty}
                </li>
                <li className='quantity__cart-btn'>
                    <Button
                        text='+'
                        style={{ padding: '4px 8px' }}
                        onClick={handleClickIncrease}
                    />
                </li>
            </ul>
            <div style={{ textAlign: 'center' }} className='margin-top-4'>
                <Button
                    text='hapus'
                    classes='btn-cart-delete'
                    onClick={handleClickDeleteCart}
                />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        dataCart: state.cart.dataCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchIncreaseQty: (id, data) => dispatch(increaseQtyAct(id, data)),
        dispatchDecreaseQty: (id, data) => dispatch(decreaseQtyAct(id, data)),
        dispatchRemoveFromCart: (id, data) => dispatch(removeFromCartAct(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuantityCart)
