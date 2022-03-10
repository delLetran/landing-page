import { Provider } from 'react-redux'

import globalStyles from 'styles/globals.scss';
import theme from 'theme';
import { ThemeProvider, styled } from '@mui/material/styles';


function MyApp({ Component, pageProps }) {
  return (
    // <Provider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    // </Provider>
  );
}

export default MyApp;
