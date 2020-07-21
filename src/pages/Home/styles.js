import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media(max-width: 990px){
    flex-direction: column;
    height: auto;
  }

`;
