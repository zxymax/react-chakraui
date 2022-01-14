import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme'

const App = () => {
  return (
    <div>ChakraUI</div>
  )
}

ReactDOM.render(
  <ChakraProvider theme={theme}>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);
