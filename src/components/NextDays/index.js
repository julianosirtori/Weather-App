import React from 'react';
import { MdNavigation } from 'react-icons/md';
import { format } from 'date-fns';
import { useWeather } from '../../context/Weathers';
import {
  Container,
  Header,
  ButtonUnitTemperature,
  Days,
  DayContent,
  Day,
  MaxAndMin,
  TodayHighlights,
  Highlight,
  WindDirection,
  Footer
} from './styles';


function NextDays() {
  const { weather } = useWeather();

  const today = weather.consolidated_weather[0];

  function formatDate(date){
    return format(new Date(date), '	EEE, dd MMM')
  }

  return (
    <Container>
      <Header>
        <ButtonUnitTemperature active={true}>℃</ButtonUnitTemperature>
        <ButtonUnitTemperature active={false}>℉</ButtonUnitTemperature>
      </Header>
      <Days>
        { weather.consolidated_weather.map(day => (
          <DayContent key={day.applicable_date}>
            <Day>{formatDate(day.applicable_date)}</Day>
            <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt="rainDay"/>
            <MaxAndMin>
            <span>{parseInt(day.max_temp)}°C</span>
              <span>{parseInt(day.min_temp)}°C</span>
            </MaxAndMin>
          </DayContent>
        )) }

      </Days>
      <h2>Today’s Highlights </h2>
      <TodayHighlights>
        <Highlight>
          <span>Wind status</span>
          <div>
            <strong>{parseInt(today.wind_speed)}</strong>
            <span>mph</span>
          </div>
          <WindDirection>
            <MdNavigation size={28} color="#FFF" />
            {today.wind_direction_compass}
          </WindDirection>
        </Highlight>
        <Highlight>
          <span>Humidity</span>
          <div>
            <strong>{today.humidity}</strong>
            <span>%</span>
          </div>
        </Highlight>
        <Highlight>
          <span>Visibility</span>
          <div>
            <strong>{today.visibility.toFixed(1).replace('.', ',')}</strong>
            <span>miles</span>
          </div>
        </Highlight>
        <Highlight>
          <span>Air Pressure</span>
          <div>
            <strong>{parseInt(today.air_pressure)}</strong>
            <span> mb</span>
          </div>
        </Highlight>
      </TodayHighlights>
      <Footer>Juliano Sirtori @ DevChallenges.io</Footer>
    </Container>
  );
}

export default NextDays;
