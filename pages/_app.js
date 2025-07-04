import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // If the component has its own layout, use it
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // For pages that don't specify their own layout, don't wrap them
  // since they'll use Layout internally if needed
  return <Component {...pageProps} />;
}

export default MyApp;