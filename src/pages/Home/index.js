import React, { useState, useEffect } from 'react';

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
    async function fetchWeather() {
      const response = await api.get('/data/2.5/forecast', {
        params: {
          lon: -51.94,
          lat: -23.43,
        },
      });
      const { data } = response;
      setWeather(data);
    }
    fetchWeather();
  }, [setWeather]);

  function callBackButtonSearchForPlaces() {
    setShowSearchLocation(!showSearchLocation);
  }

  return (
    <Container>
      { showSearchLocation
        ? (<SearchLocation callBackToClose={callBackButtonSearchForPlaces} />)
        : (<Today callBackButtonSearchForPlaces={callBackButtonSearchForPlaces} />) }
      <NextDays />
    </Container>
  );
}

export default Home;
