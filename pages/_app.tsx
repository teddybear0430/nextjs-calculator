import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/index';

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <style jsx global>
      {`
        html,body {
          font-family: 'Oswald',sans-serif;
          padding: 0;
          margin: 0;
        }
      `}
    </style>
    <Component {...pageProps} />
  </Provider>
);

export default App;
