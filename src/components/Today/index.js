import React from 'react';
import { MdMyLocation, MdLocationOn } from 'react-icons/md';
import api from '../../services/api';
import getCurrentPosition from '../../utils/getCurrentPosition';
import { useLoading } from '../../context/Loading';

import {
  Container,
  PlaceholderContainer,
  Header,
  WeatherImages,
  Temperature,
  Footer,
  Location,
} from './styles';

import Clouds from '../../assets/clouds.svg';

function Today({ callBackButtonSearchForPlaces }) {
  const { loading } = useLoading();

  function setWeatherLocation() {
    getCurrentPosition(async (latitude, longitude) => {
      const response = await api.get('/data/2.5/forecast', {
        params: {
          lon: longitude,
          lat: latitude,
        },
      });
      console.log(response);
    });
  }

  return loading
    ? <PlaceholderContainer />
    : (
      <Container>

        <Header>
          <button type="button" onClick={callBackButtonSearchForPlaces}>Search for places</button>
          <button type="button" onClick={setWeatherLocation} className="location">
            <MdMyLocation size={22} color="#E7E7EB" />
          </button>
        </Header>
        <WeatherImages>
          <img className="clounds" src={Clouds} alt="clounds" />
          {/* <img src={`https://www.metaweather.com/static/img/weather/${today.weather_state_abbr}.svg`} alt="rainDay" /> */}
        </WeatherImages>
        <Temperature>
          <div>
            <span>10</span>
            <strong>℃</strong>
          </div>

          <strong>
            Tempo

          </strong>
        </Temperature>

        <Footer>
          <div>
            <span>Today</span>
            <span>•</span>
            <span>C</span>
          </div>

          <Location>
            <MdLocationOn size={24} color="#88869D" />
            Maringa
          </Location>
        </Footer>

      </Container>
    );
}

export default Today;
