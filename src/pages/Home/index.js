import React, { useState, useEffect } from 'react';

import { fetchWeather } from '../../services/api';
import { useWeather } from '../../context/Weathers';
import { useLoading } from '../../context/Loading';
import NextDays from '../../components/NextDays';
import Today from '../../components/Today';
import SearchLocation from '../../components/SearchLocation';

import { Container } from './styles';

function Home() {
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const { setWeather } = useWeather();
  const { setLoading } = useLoading();

  useEffect(() => {
    async function loadWeather() {
      setLoading(true);
      const data = await fetchWeather({ q: 'Maringa' });
      setWeather(data);
      setLoading(false);
    }
    loadWeather();
  }, [setWeather, setLoading]);

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
