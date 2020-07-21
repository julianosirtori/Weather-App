import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #100E1D;
  padding: 32px;
  z-index: 10;

  h2{
    max-width: 860px;
    margin-top: 72px;
    color: #E7E7EB;
    font-size: 24px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 860px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonUnitTemperature = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props) => (props.active ? '#110E3C' : '#E7E7EB')} ;
  font-size: 18px;
  font-weight: bold;
  background: ${(props) => (props.active ? '#E7E7EB' : '#585676')} ;
  border-radius: 50px;
  margin-left: 12px;
  border: none;

  &:hover{
    background:  ${(props) => darken(0.1, props.active ? '#E7E7EB' : '#585676')}
  }
`;

export const Days = styled.div`
  display: flex;
  max-width: 860px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;

  @media(max-width: 990px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DayContent = styled.div`
  max-width: 128px;
  width: 100%;
  background: #1E213A;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  i{
    font-size: 48px;
    padding-bottom: 16px;
    padding-top: 16px;
  }

  @media(max-width: 990px){
    margin-bottom: 16px;
    max-width: 320px;
  }

`;

export const Day = styled.div`
  text-align: center;
  color: #E7E7EB;
  font-size: 16px;
  font-weight: 500px;
  width: 100%;
  white-space: nowrap;
  margin-bottom: 10px;
`;

export const MaxAndMin = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > span + span{
    color: #A09FB1;
  }

  span{
    font-size: 16px;
    font-weight: 500px;
  }
`;

export const TodayHighlights = styled.div`
  width: 100%;
  max-width: 860px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 48px;

  @media(max-width: 990px){
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr ;
    justify-items: center;
  }
`;

export const Highlight = styled.div`
  background: #1E213A;
  max-width: 428px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px;

  span{
    font-size: 16px;
    font-weight: 500;
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    line-height: 75px;

    strong{
      font-size: 64px;
      margin-right: 8px;

    }

    span{
      font-size: 36px;
    }
  }

`;

export const WindDirection = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  font-size: 14px;

  svg{
    margin-right: 8px;
    background: #616375;
    padding: 8px;
    border-radius: 50%;
    transform: rotate(-150deg);
  }

`;

export const Footer = styled.p`
  margin-top: 64px;
  font-weight: 600;
  font-size: 14px;
  color: #616475;
`;

export const PlaceholderDayContent = styled.div`
  position: relative;
  background: #1E213A;
  overflow: hidden;
  max-width: 128px;
  width: 100%;
  height: 160px;

  &::before{
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #2f3359 50%, transparent 100%);
    animation: load infinite 1s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  @media(max-width: 990px){
    max-width: 320px;

    &::before{
      left: -320px;
      width: 320px;
    }
  }

`;

export const PlaceholderHighlight = styled.div`
 position: relative;
  overflow: hidden;
  background: #1E213A;
  max-width: 428px;
  padding: 22px;
  width: 100%;
  height: 160px;

  &::before{
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #2f3359 50%, transparent 100%);
    animation: load infinite 1s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
`;
