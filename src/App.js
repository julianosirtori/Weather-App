import React from 'react';

import WeathersProvider from './context/Weathers';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <WeathersProvider>
      <GlobalStyle/>
      <Home/>
    </WeathersProvider>
  );
}

export default App;
