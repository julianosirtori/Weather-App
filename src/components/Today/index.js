import React, {useEffect} from 'react';
import { format } from 'date-fns';
import api from '../../services/api';
import getCurrentPosition from '../../utils/getCurrentPosition';
import { MdMyLocation, MdLocationOn } from 'react-icons/md';
import { useWeather } from '../../context/Weathers';
import {
  Container,
  Header,
  WeatherImages,
  Temperature,
  Footer,
  Location
} from './styles';

import Clouds from '../../assets/clouds.svg';

function Today({callBackButtonSearchForPlaces}) {
  const { weather, fetchWeatherByLocation } = useWeather();
  const today = {
    ...weather.consolidated_weather[0],
    todayFormatted: format(new Date(), '	EEE, dd MMM')
  };


  useEffect(()=> {
    fetchWeatherByLocation({});
  }, []);

  async function searchLocationByPosition(position){
    const response = await api.get(`/api/location/search/?lattlong=${position}`);
    const {data} = response;
    if(data.length > 0){
      fetchWeatherByLocation(data[0].woeid);
    }
  }

  function setWeatherLocation(){
    getCurrentPosition((latitude, longitude)=> {
      searchLocationByPosition(`${latitude},${longitude}`);
    })
  }

  return(
  <Container>

    <Header>
      <button onClick={callBackButtonSearchForPlaces}>Search for places</button>
      <button onClick={setWeatherLocation} className="location"><MdMyLocation size={22} color="#E7E7EB" /></button>
    </Header>
    <WeatherImages>
      <img className="clounds" src={Clouds} alt="clounds"/>
      <img src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`} alt="rainDay"/>
    </WeatherImages>
    <Temperature>
      <div>
        <span>{parseInt(today.the_temp)}</span>
        <strong>℃</strong>
      </div>

      <strong>{today.weather_state_name} </strong>
    </Temperature>

    <Footer>
      <div>
        <span>Today</span>
        <span>•</span>
        <span>{today.todayFormatted}</span>
      </div>

      <Location>
       <MdLocationOn size={24} color="#88869D"/>
       { weather.title }
    </Location>
    </Footer>

  </Container>);
}

export default Today;
