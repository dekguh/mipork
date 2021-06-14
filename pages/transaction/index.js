import TrasanctionSection from '../../comps/organisms/TransactionSection';
import Head from 'next/head';

const TransactionPage = () => {
    return (
    <>
        <Head>
            <title>Mipork - Transaksi</title>
        </Head>
        <div className='container margin-top-20 margin-bottom-80'>
            <TrasanctionSection />
        </div>
    </>
    )
}

export default TransactionPage
