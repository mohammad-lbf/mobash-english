import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
