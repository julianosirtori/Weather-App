import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  max-width: 460px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: 5;

`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 46px;

  button{
    height: 40px;
    background: #6E707A;
    border: none;
    font-size: 16px;
    padding: 10px 18px;
    color: #E7E7EB;

    &:hover{
      cursor: pointer;
      background: ${darken(0.1, '#6E707A')}
    }
  }

  .location{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      padding: 9px;
      svg{
        margin: auto;
      }
    }

`;

export const WeatherImages  = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .clounds{
    position: absolute;
    left: 0px;
  }
`;

export const Temperature = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #E7E7EB;

    span{
      font-size: 144px;
    font-weight: 500;
    }

    strong{
      padding-top: 48px;
      font-size: 48px;
      font-weight: 500;
      color: #A09FB1;
    }
  }

  strong{
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin-top: 24px;
    color: #A09FB1;
  }
`;


export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #88869D;
  padding: 46px;


  div{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-top: 32px;

    span{
      font-size: 18px;
      font-weight: 500;

      margin-right: 16px;
    }
  }


`;

export const Location = styled.div`
  svg{
    margin-right: 4px;
  }
`;
