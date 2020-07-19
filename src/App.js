import React from 'react';

import WeathersProvider from './context/Weathers';
import LoadingProvider from './context/Loading';
import GlobalStyle from './styles/global';
import './assets/css/weather-icons.css';
import Home from './pages/Home';

function App() {
  return (
    <LoadingProvider>
      <WeathersProvider>
        <GlobalStyle />
        <Home />
      </WeathersProvider>
    </LoadingProvider>

  );
}

export default App;
