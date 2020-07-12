import React from 'react';

import {
  Container,
  Header,
  Days,
  DayContent,
  Day,
  MaxAndMin,
  TodayHightlights
} from './styles';
import RainDay from '../../assets/rainDay.png';


function NextDays() {
  return (
    <Container>
      <Header>
        <button>℃</button>
        <button>℉</button>
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
      </Days>
      <TodayHightlights>

      </TodayHightlights>
    </Container>
  );
}

export default NextDays;
