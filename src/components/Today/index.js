import React, { useState, useEffect } from 'react';
import { MdMyLocation, MdLocationOn } from 'react-icons/md';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { fetchWeather } from '../../services/api';
import findIconByCode from '../../utils/findIcon';
import getCurrentPosition from '../../utils/getCurrentPosition';
import { useLoading } from '../../context/Loading';
import { useWeather } from '../../context/Weathers';

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
  const { loading, setLoading } = useLoading();
  const { weather, setWeather } = useWeather();
  const [dateFormatted, setDateFormatted] = useState();

  useEffect(() => {
    setDateFormatted(format(new Date(), "EEE, dd 'de' MMMM", {
      locale: pt,
    }));
  }, []);

  function setWeatherLocation() {
    getCurrentPosition(async (latitude, longitude) => {
      setLoading(true);
      const data = await fetchWeather({ lon: longitude, lat: latitude });
      setWeather(data);
      setLoading(false);
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
          <img src={Clouds} alt="clouds" />
          <i className={findIconByCode(weather.weather[0].id)} />
        </WeatherImages>
        <Temperature>
          <div>
            <span>{parseInt(weather.main.temp, 10)}</span>
            <strong>℃</strong>
          </div>

          <strong>
            {weather.weather[0].description}
          </strong>
        </Temperature>

        <Footer>
          <div>
            <span>hoje</span>
            <span>•</span>
            <span>{dateFormatted}</span>
          </div>

          <Location>
            <MdLocationOn size={24} color="#88869D" />
            {weather.name}
          </Location>
        </Footer>

      </Container>
    );
}

export default Today;
