import React, {useState} from 'react';

import NextDays from '../../components/NextDays';
import Today from '../../components/Today';
import SearchLocation from '../../components/SearchLocation';

import { Container } from './styles';

function Home() {
  const [showSearchLocation, setShowSearchLocation] = useState(false);

  function callBackButtonSearchForPlaces(){
    setShowSearchLocation(!showSearchLocation);
  }

  return (
  <Container>
    { showSearchLocation ?
      ( <SearchLocation callBackToClose={callBackButtonSearchForPlaces}></SearchLocation> ):
      ( <Today callBackButtonSearchForPlaces={callBackButtonSearchForPlaces} ></Today> ) }
    <NextDays></NextDays>
  </Container>);
}

export default Home;
