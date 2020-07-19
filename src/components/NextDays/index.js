import React from 'react';
import { format } from 'date-fns';
import findIconByCode from '../../utils/findIcon';
import { useWeather } from '../../context/Weathers';
import { useLoading } from '../../context/Loading';
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
  Footer,
  PlaceholderDayContent,
  PlaceholderHighlight,
} from './styles';

function NextDays() {
  const { weather } = useWeather();
  const { loading } = useLoading();

  function formattedDate(dt) {
    return format(new Date(dt * 1000), "dd 'de' yyyy");
  }

  return (
    <Container>
      <Header>
        <ButtonUnitTemperature active>℃</ButtonUnitTemperature>
        <ButtonUnitTemperature active={false}>℉</ButtonUnitTemperature>
      </Header>

      <Days>

        { loading
          ? (
            <>
              <PlaceholderDayContent />
              <PlaceholderDayContent />
              <PlaceholderDayContent />
              <PlaceholderDayContent />
              <PlaceholderDayContent />
            </>
          )
          : weather.daily.map((day) => (
            <DayContent key={day.dt}>
              <Day>{formattedDate(day.dt)}</Day>
              <i className={findIconByCode(day.weather[0].id)} />
              <MaxAndMin>
                <span>
                  {`${parseInt(day.temp.max, 10)}°C`}
                </span>
                <span>
                  {`${parseInt(day.temp.min, 10)}°C`}
                </span>
              </MaxAndMin>
            </DayContent>
          )) }

      </Days>
      <h2>Destaques de hoje</h2>

      { loading
        ? (
          <TodayHighlights>
            <PlaceholderHighlight />
            <PlaceholderHighlight />
            <PlaceholderHighlight />
            <PlaceholderHighlight />
          </TodayHighlights>
        ) : (
          <TodayHighlights>
            <Highlight>
              <span>Status do vento</span>
              <div>
                <strong>{parseInt(weather.wind.speed, 10)}</strong>
                <span>km/h</span>
              </div>
            </Highlight>
            <Highlight>
              <span>Umidade</span>
              <div>
                <strong>{weather.main.humidity}</strong>
                <span>%</span>
              </div>
            </Highlight>
            <Highlight>
              <span>Nuvens</span>
              <div>
                <strong>{weather.clouds.all}</strong>
                <span>%</span>
              </div>
            </Highlight>
            <Highlight>
              <span>Pressão do ar</span>
              <div>
                <strong>{weather.main.pressure}</strong>
                <span>hPa</span>
              </div>
            </Highlight>
          </TodayHighlights>
        )}

      <Footer>Juliano Sirtori @ DevChallenges.io</Footer>
    </Container>
  );
}

export default NextDays;
