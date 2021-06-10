import '../styles/globals.css';
import 'reset-css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/main.scss';
import Layout from '../comps/utils/Layout';
import { wrapper } from '../comps/utils/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);
