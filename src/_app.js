// import StateProvider from 'context/StateProvider';
import Layout from './Components/Layout';
// import Sidenav from './Components/Sidenav/Sidenav';


function MyApp({ Component, pageProps }) {

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }

export default MyApp;
