import NotifSection from "../../comps/organisms/NotifSection"
import Head from 'next/head';

const NotificationPage = () => {
    return (
    <>
        <Head>
            <title>Mipork - Pemberitahuan</title>
        </Head>
        <div className='container margin-top-20 margin-bottom-80'>
            <NotifSection />
        </div>
    </>
    )
}

export default NotificationPage
