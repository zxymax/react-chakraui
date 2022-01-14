#### chakra-ui

> install packages
- npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5

> theme.js
```js
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme
```

> index.js
```js
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
```
