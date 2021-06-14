import Head from 'next/head';
import CategoryListSection from '../comps/organisms/CategoryListSection';
import FlashDealSection from '../comps/organisms/FlashDealSection';
import HomeSearch from '../comps/organisms/HomeSearch';
import LatestMenuSection from '../comps/organisms/LatestMenuSection';
import { JsonDataMenu } from '../comps/utils/data/fake';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mipork - Beranda</title>
      </Head>
      <div>
        <div className='container margin-top-20 margin-bottom-80'>
          <HomeSearch />
          <FlashDealSection totalShow={2} dataMenu={JsonDataMenu} classes='margin-top-20' />
          <CategoryListSection classes='margin-top-20' />
          <LatestMenuSection totalShow={3} dataMenu={JsonDataMenu} classes='margin-top-20' />
        </div>
      </div>
    </>
  )
}
