import Head from 'next/head';
import CounterDown from '../comps/atomics/CounterDown';
import CardMenuBox from '../comps/molecules/CardMenuBox';
import TitleSection from '../comps/molecules/TitleSection';
import FormSearch from '../comps/organisms/FormSearch';
import Navigation from '../comps/organisms/Navigation';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <FormSearch />
        <TitleSection classes='margin-top-16 margin-bottom-12' title='Flash Deal'>
          <CounterDown timestamp={1623640142000} />
        </TitleSection>
        <CardMenuBox
          image='/images/food/hamburger-cheese.jpg'
          price={15000}
          discount={20}
          bestseller={true}
          title='Hamburger Cheese'
          link='#'
        />
      </div>
      <Navigation />
    </div>
  )
}
