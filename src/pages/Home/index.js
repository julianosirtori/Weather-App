import React, {useState, useEffect} from 'react';

import api from '../../services/api';
import data from '../../mock/data.json';
import { useWeather } from '../../context/Weathers';
import NextDays from '../../components/NextDays';
import Today from '../../components/Today';
import SearchLocation from '../../components/SearchLocation';


import { Container } from './styles';

function Home() {
  const [showSearchLocation, setShowSearchLocation] = useState(false);
  const { setWeather } = useWeather();

  useEffect(()=> {
    async function fetchWeather(){
      // const response = await api.get('/api/location/44418/');
      // const { data } = response;
      setWeather(data);
    }

    fetchWeather();
  }, []);



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
