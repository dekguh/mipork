import CartListSection from "../../comps/organisms/CartListSection";
import Head from 'next/head';

const CartPage = () => {
    return (
    <>
        <Head>
            <title>Mipork - Keranjang</title>
        </Head>
        <div className='container margin-top-20 margin-bottom-80'>
            <CartListSection />
        </div>
    </>
    )
}

export default CartPage
