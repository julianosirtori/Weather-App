import React from 'react';

import NextDays from '../../components/NextDays';
import Today from '../../components/Today';

import { Container } from './styles';

function Home() {
  return (
  <Container>
    <Today></Today>
    <NextDays></NextDays>
  </Container>);
}

export default Home;
