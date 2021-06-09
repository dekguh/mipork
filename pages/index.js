import Head from 'next/head';
import CardMenuList from '../comps/molecules/CardMenuList';
import CategoryListSection from '../comps/organisms/CategoryListSection';
import FlashDealSection from '../comps/organisms/FlashDealSection';
import FormSearch from '../comps/organisms/FormSearch';
import LatestMenuSection from '../comps/organisms/LatestMenuSection';
import Navigation from '../comps/organisms/Navigation';
import { JsonDataMenu } from '../comps/utils/data/fake';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <FormSearch />
        <FlashDealSection totalShow={2} dataMenu={JsonDataMenu} classes='margin-top-20' />
        <CategoryListSection classes='margin-top-20' />
        <LatestMenuSection totalShow={3} dataMenu={JsonDataMenu} classes='margin-top-20 margin-bottom-40' />
      </div>
      <Navigation />
    </div>
  )
}
