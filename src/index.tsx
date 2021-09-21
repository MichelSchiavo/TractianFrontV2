import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TractianContextProvider } from './context/TractianContext';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

ReactDOM.render(
  <>
    <TractianContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </TractianContextProvider>
  </>,
  document.getElementById('root')
);
