import React from 'react';
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
  Footer
} from './styles';
import RainDay from '../../assets/rainDay.png';


function NextDays() {
  const { weather } = useWeather();

  return (
    <Container>
      <Header>
        <ButtonUnitTemperature active={true}>℃</ButtonUnitTemperature>
        <ButtonUnitTemperature active={false}>℉</ButtonUnitTemperature>
      </Header>
      <Days>
        <DayContent>
          <Day>Sun, 7 Jun</Day>
          <img src={RainDay} alt="imageTemperatura" />
          <MaxAndMin>
            <span>16°C</span>
            <span>11°C</span>
          </MaxAndMin>
        </DayContent>
        <DayContent>
          <Day>Sun, 7 Jun</Day>
          <img src={RainDay} alt="imageTemperatura" />
          <MaxAndMin>
            <span>16°C</span>
            <span>11°C</span>
          </MaxAndMin>
        </DayContent>
        <DayContent>
          <Day>Sun, 7 Jun</Day>
          <img src={RainDay} alt="imageTemperatura" />
          <MaxAndMin>
            <span>16°C</span>
            <span>11°C</span>
          </MaxAndMin>
        </DayContent>
        <DayContent>
          <Day>Sun, 7 Jun</Day>
          <img src={RainDay} alt="imageTemperatura" />
          <MaxAndMin>
            <span>16°C</span>
            <span>11°C</span>
          </MaxAndMin>
        </DayContent>
        <DayContent>
          <Day>Sun, 7 Jun</Day>
          <img src={RainDay} alt="imageTemperatura" />
          <MaxAndMin>
            <span>16°C</span>
            <span>11°C</span>
          </MaxAndMin>
        </DayContent>
      </Days>
      <h2>Today’s Highlights </h2>
      <TodayHighlights>
        <Highlight>
          <span>Wind status</span>
          <div>
            <strong>7</strong>
            <span>mph</span>
          </div>
        </Highlight>
        <Highlight>
          <span>Humidity</span>
          <div>
            <strong>84</strong>
            <span>%</span>
          </div>
        </Highlight>
        <Highlight>
          <span>Visibility</span>
          <div>
            <strong>6,4</strong>
            <span>miles</span>
          </div>
        </Highlight>
        <Highlight>
          <span>Air Pressure</span>
          <div>
            <strong>998</strong>
            <span> mb</span>
          </div>
        </Highlight>
      </TodayHighlights>
      <Footer>Juliano Sirtori @ DevChallenges.io</Footer>
    </Container>
  );
}

export default NextDays;
