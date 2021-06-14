import CategoryMenuListSection from '../../comps/organisms/CategoryMenuListSection'
import FormSearch from '../../comps/organisms/FormSearch';
import Head from 'next/head';

const MenuPage = () => {
    return (
    <>
        <Head>
            <title>Mipork - Menu</title>
        </Head>
        <div className='container margin-top-20 margin-bottom-80'>
            <CategoryMenuListSection
                titleSection='Makanan'
                typeMenu='food'
                classes='margin-bottom-16 margin-top-16'
            />

            <CategoryMenuListSection
                titleSection='Minuman'
                typeMenu='drink'
                classes='margin-bottom-16'
            />

            <CategoryMenuListSection
                titleSection='Jajanan'
                typeMenu='snack'
                classes='margin-bottom-16'
            />
        </div>
    </>
    )
}

export default MenuPage
