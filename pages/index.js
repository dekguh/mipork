import Head from 'next/head';
import FlashDealSection from '../comps/organisms/FlashDealSection';
import FormSearch from '../comps/organisms/FormSearch';
import Navigation from '../comps/organisms/Navigation';
import { JsonDataMenu } from '../comps/utils/data/fake';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <FormSearch />
        <FlashDealSection totalShow={2} dataMenu={JsonDataMenu} classes='margin-top-20' />
      </div>
      <Navigation />
    </div>
  )
}
