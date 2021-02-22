import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/index';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
