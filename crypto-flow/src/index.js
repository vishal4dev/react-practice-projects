import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, theme,ColorModeScript} from '@chakra-ui/react'; 

import ColorModeSwitcher from './ColorModeSwitcher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

//Key Features of React.StrictMode:
// Identifies Unsafe Lifecycles: It warns about deprecated lifecycle methods like componentWillMount, componentWillReceiveProps, etc.
// Detects Side Effects: It runs certain functions like useEffect and useState setters twice (in development) to help catch unintended side effects.
// Checks Legacy APIs: It warns about the usage of older React APIs that may no longer be the best practice.

