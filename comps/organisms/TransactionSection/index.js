import { useEffect, useState } from 'react';
import Button from '../../atomics/form/Button';
import BlockMessage from '../../molecules/BlockMessage';
import CardTransaction from '../../molecules/CardTransaction';
import TitleSection from '../../molecules/TitleSection';
import { JsonDataTransaction } from '../../utils/data/fake';
import { useRouter } from 'next/router';

const TrasanctionSection = () => {
    const [dataTransaction, setDataTransaction] = useState([]);
    const Router = useRouter();

    useEffect(() => {
        const dataSort = JsonDataTransaction.sort((a, b) => b.id - a.id);
        setDataTransaction(dataSort);
    }, []);

    const handleBackHomePage = e => {
        Router.push('/');
    }

    return (
        <div>
            <TitleSection classes='margin-bottom-12' title='Transaksi'></TitleSection>
            <div className='transaction__list'>
                {dataTransaction.length <= 0 && <BlockMessage text='tidak ada transaksi'>
                    <div style={{ textAlign: 'center' }}>
                        <img src='/images/transaction/empty-transaction.png' className='block__message-empty-cart' />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Button text='kembali' onClick={handleBackHomePage} />
                    </div>
                </BlockMessage>}

                {dataTransaction.length > 0 && dataTransaction.map((data, i) => (
                    <CardTransaction
                        key={i}
                        classes='margin-bottom-8'
                        title={`pesanan #${data.id}`}
                        date={data.published_at}
                        status={data.status}
                        total={data.total}
                    />
                ))}
            </div>
        </div>
    )
}

export default TrasanctionSection
