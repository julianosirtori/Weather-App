import React, {useState, useEffect } from 'react';

import api from '../../services/api';
import { useWeather } from '../../context/Weathers';
import NextDays from '../../components/NextDays';
import Today from '../../components/Today';
import SearchLocation from '../../components/SearchLocation';


import { Container } from './styles';

function Home() {
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const { setWeather } = useWeather();

  useEffect(() => {
    async function fetchWeather(){
      const response = await api.get('/data/2.5/weather', {
        params: {
          lon: -51.94,
          lat: -23.43
        }
      });
      console.log(response);
    }
    fetchWeather();

  }, [setWeather])

  function callBackButtonSearchForPlaces(){
    setShowSearchLocation(!showSearchLocation);
  }

  return (
  <Container>
    { showSearchLocation ?
      ( <SearchLocation callBackToClose={callBackButtonSearchForPlaces}></SearchLocation> ):
      ( <Today callBackButtonSearchForPlaces={callBackButtonSearchForPlaces} ></Today> ) }
    <NextDays></NextDays>
  </Container>);
}

export default Home;
