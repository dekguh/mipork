import Head from 'next/head';
import CounterDown from '../comps/atomics/CounterDown';
import TitleSection from '../comps/molecules/TitleSection';
import FormSearch from '../comps/organisms/FormSearch';
import Navigation from '../comps/organisms/Navigation';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <FormSearch />
        <TitleSection classes='margin-top-16' title='Flash Deal'>
          <CounterDown timestamp={1623640142000} />
        </TitleSection>
      </div>
      <Navigation />
    </div>
  )
}
