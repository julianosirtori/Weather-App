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

  h2{
    max-width: 720px;
    margin-top: 72px;
    color: #E7E7EB;
    font-size: 24px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonUnitTemperature = styled.button`
  width: 40px;
  height: 40px;
  color: ${props => props.active ? '#110E3C' : '#E7E7EB'} ;
  font-size: 18px;
  font-weight: bold;
  background: ${props => props.active ? '#E7E7EB' : '#585676'} ;
  border-radius: 50px;
  margin-left: 12px;
  border: none;

  &:hover{
    background:  ${props => darken(0.1, props.active ? '#E7E7EB' : '#585676')}
  }
`;

export const Days = styled.div`
  display: flex;
  max-width: 720px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 56px;
`;

export const DayContent = styled.div`
  max-width: 120px;
  width: 100%;
  background: #1E213A;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div + div{
    margin-left: 16px;
  }

  img{
    margin: 0 auto;
    width: 60px;
    margin-bottom: 32px;
  }
`;

export const Day = styled.div`
  text-align: center;
  color: #E7E7EB;
  font-size: 16px;
  font-weight: 500px;
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
  max-width: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 48px;
`;

export const Highlight = styled.div`
  background: #1E213A;
  max-width: 328px;
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

export const Footer = styled.p`
  margin-top: 64px;
  font-weight: 600;
  font-size: 14px;
  color: #616475;
`;
