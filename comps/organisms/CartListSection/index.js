import { connect } from 'react-redux';
import Button from '../../atomics/form/Button';
import BlockMessage from '../../molecules/BlockMessage';
import CardMenuCart from '../../molecules/CardMenuCart';
import TitleSection from '../../molecules/TitleSection';
import { useRouter } from 'next/router';
import TotalCart from '../../molecules/TotalCart';

const CartListSection = ({ dataCart }) => {
    const Router = useRouter();

    const handleBackHomePage = e => {
        Router.push('/');
    }

    return (
        <div>
            <TitleSection classes='margin-bottom-12' title='Keranjang'>
                <div className='cart__item-total'>
                    <span>{dataCart.length >= 1 ? dataCart.length : 0} item</span>
                </div>
            </TitleSection>

            <div className='list__cart'>
                {dataCart.length <= 0 && <BlockMessage text='keranjang masih kosong'>
                    <div style={{ textAlign: 'center' }}>
                        <img src='/images/cart/empty-cart.png' className='block__message-empty-cart' />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Button text='kembali' onClick={handleBackHomePage} />
                    </div>
                </BlockMessage>}

                {dataCart && dataCart.map((data, i) => (
                    <CardMenuCart
                        key={i}
                        classes='margin-bottom-8'
                        image={data.imageUrl}
                        price={data.price}
                        discount={data.discount}
                        bestseller={data.bestseller}
                        title={data.name}
                        link='#'
                        id={data.id}
                    />
                ))}
            </div>

            {dataCart.length > 0 && <TotalCart dataCart={dataCart} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataCart: state.cart.dataCart
    }
}

export default connect(mapStateToProps, null)(CartListSection)
