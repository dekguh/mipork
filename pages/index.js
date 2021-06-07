import Head from 'next/head';
import { Search } from 'react-bootstrap-icons';
import Button from '../comps/atomics/form/Button';
import Input from '../comps/atomics/form/Input';
import Label from '../comps/atomics/form/Label';
import FormGroupIcon from '../comps/molecules/FormGroupIcon';
import Navigation from '../comps/organisms/Navigation';

export default function Home() {
  return (
    <div>
      <FormGroupIcon icon={Search} classesInput='border-rounded-full' placeholder='pencarian' />
      <Navigation />
    </div>
  )
}
