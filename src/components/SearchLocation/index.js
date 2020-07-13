import React from 'react';
import {MdClose, MdSearch, MdKeyboardArrowRight} from 'react-icons/md';

import {
  Container,
  Header,
  Form,
  InputGroup,
  ListLocation,
} from './styles';

function SearchLocation({callBackToClose}) {
  return (
  <Container>
    <Header>
      <button onClick={callBackToClose}><MdClose size={32} color="#E7E7EB"/></button>
    </Header>
    <Form>
      <InputGroup>
        <MdSearch size={24} color="#616475"/>
        <input type="text" placeholder="search location" />
      </InputGroup>
      <button>Search</button>
    </Form>

    <ListLocation>
      <li>
        <span>London</span>
        <MdKeyboardArrowRight size={24} color="#616475" />
      </li>
      <li>
        <span>Barcelona</span>
        <MdKeyboardArrowRight size={24} color="#616475" />
      </li>
    </ListLocation>

  </Container>);
}

export default SearchLocation;
