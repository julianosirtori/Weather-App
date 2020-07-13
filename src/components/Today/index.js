import React from 'react';
import {MdMyLocation, MdLocationOn} from 'react-icons/md';
import {
  Container,
  Header,
  WeatherImages,
  Temperature,
  Footer,
  Location
} from './styles';

import RainDay from '../../assets/rainDay.png';

function Today({callBackButtonSearchForPlaces}) {
  return(
  <Container>
    <Header>
      <button onClick={callBackButtonSearchForPlaces}>Search for places</button>
      <button className="location"><MdMyLocation size={22} color="#E7E7EB" /></button>
    </Header>
    <WeatherImages>
      <img src={RainDay} alt="rainDay"/>
    </WeatherImages>
    <Temperature>
      <div>
        <span>15</span>
        <strong>℃</strong>
      </div>

      <strong> Shower </strong>
    </Temperature>

    <Footer>
      <div>
        <span>Today</span>
        <span>•</span>
        <span>Fri, 5 Jun</span>
      </div>

      <Location>
       <MdLocationOn size={24} color="#88869D"/>
       Helsinki
    </Location>
    </Footer>

  </Container>);
}

export default Today;
