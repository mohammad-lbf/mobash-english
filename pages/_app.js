import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import '../styles/fonts.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [search , setSearch] = useState("hello")
  return (
    <Layout search={search} setSearch={setSearch} >
        <Component search={search} setSearch={setSearch} {...pageProps} />
    </Layout>
  )
}

export default MyApp
