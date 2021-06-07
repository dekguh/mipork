import Head from 'next/head';
import FormSearch from '../comps/organisms/FormSearch';
import Navigation from '../comps/organisms/Navigation';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <FormSearch />
      </div>
      <Navigation />
    </div>
  )
}
