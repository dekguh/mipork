import { useEffect, useState } from 'react';
import CardNotif from '../../molecules/CardNotif';
import TitleSection from '../../molecules/TitleSection';
import { JsonDataNotif } from '../../utils/data/fake';
import BlockMessage from '../../molecules/BlockMessage';
import Button from '../../atomics/form/Button';
import { useRouter } from 'next/router';

const NotifSection = () => {
    const Router = useRouter();
    const [dataNotif, setDataNotif] = useState([]);

    useEffect(() => {
        const dataSort = JsonDataNotif.sort((a, b) => b.id - a.id);
        setDataNotif(dataSort);
    }, []);

    const handleBackHomePage = e => {
        Router.push('/');
    }

    return (
        <div>
            <TitleSection classes='margin-bottom-12' title='Notifikasi'></TitleSection>
            {dataNotif.length <= 0 && <BlockMessage text='tidak ada notifikasi'>
                <div style={{ textAlign: 'center' }}>
                    <img src='/images/notif/empty-notif.png' className='block__message-empty-cart' />
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Button text='kembali' onClick={handleBackHomePage} />
                </div>
            </BlockMessage>}
            {dataNotif.length > 0 && dataNotif.map((data, i) => (
                <CardNotif key={i} text={data.description} date={data.published_at} classes='margin-top-8' />
            ))}
        </div>
    )
}

export default NotifSection
