import Head from 'next/head';
import CategoryListSection from '../comps/organisms/CategoryListSection';
import FlashDealSection from '../comps/organisms/FlashDealSection';
import FormSearch from '../comps/organisms/FormSearch';
import LatestMenuSection from '../comps/organisms/LatestMenuSection';
import { JsonDataMenu } from '../comps/utils/data/fake';

export default function Home() {
  return (
    <div>
      <div className='container margin-bottom-80'>
        <FormSearch />
        <FlashDealSection totalShow={2} dataMenu={JsonDataMenu} classes='margin-top-20' />
        <CategoryListSection classes='margin-top-20' />
        <LatestMenuSection totalShow={3} dataMenu={JsonDataMenu} classes='margin-top-20' />
      </div>
    </div>
  )
}
