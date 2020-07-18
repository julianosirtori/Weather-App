import React from 'react';
import { MdNavigation } from 'react-icons/md';
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
  WindDirection,
  Footer,
  PlaceholderDayContent,
  PlaceholderHighlight,
} from './styles';

function NextDays() {
  const { weather } = useWeather();
  const { loading } = useLoading();

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
          : weather.consolidated_weather.map((day) => (
            <DayContent key={day.applicable_date}>
              <Day>05 de 2020</Day>
              {/* <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt="rainDay" /> */}
              <MaxAndMin>
                <span>
                  10°C
                </span>
                <span>
                  10°C
                </span>
              </MaxAndMin>
            </DayContent>
          )) }

      </Days>
      <h2>Today’s Highlights </h2>

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
              <span>Wind status</span>
              <div>
                <strong>10</strong>
                <span>mph</span>
              </div>
              <WindDirection>
                <MdNavigation size={28} color="#FFF" />
                SNw
              </WindDirection>
            </Highlight>
            <Highlight>
              <span>Humidity</span>
              <div>
                <strong>10</strong>
                <span>%</span>
              </div>
            </Highlight>
            <Highlight>
              <span>Visibility</span>
              <div>
                <strong>10</strong>
                <span>miles</span>
              </div>
            </Highlight>
            <Highlight>
              <span>Air Pressure</span>
              <div>
                <strong>10</strong>
                <span> mb</span>
              </div>
            </Highlight>
          </TodayHighlights>
        )}

      <Footer>Juliano Sirtori @ DevChallenges.io</Footer>
    </Container>
  );
}

export default NextDays;
