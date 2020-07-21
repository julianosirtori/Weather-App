import React, { useState, useEffect } from 'react';
import { MdClose, MdSearch, MdKeyboardArrowRight } from 'react-icons/md';
import { setLocations as setLocationsStorage, getLocations } from '../../services/storage';
import { fetchWeather as apiFetchWeather } from '../../services/api';
import { useLoading } from '../../context/Loading';
import { useWeather } from '../../context/Weathers';

import {
  Container,
  Header,
  Form,
  InputGroup,
  ListLocation,
} from './styles';

function SearchLocation({ callBackToClose }) {
  const { setLoading } = useLoading();
  const { setWeather } = useWeather();
  const [newLocation, setNewLocation] = useState('');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(getLocations());
  }, []);

  async function fetchWeather(location) {
    let response = true;
    setLoading(true);
    try {
      const data = await apiFetchWeather({ q: location });
      setWeather(data);
    } catch (err) {
      response = false;
    }
    setLoading(false);
    return response;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const isSuccessful = await fetchWeather(newLocation);
    if (isSuccessful) {
      setLocations([...locations, newLocation]);
      setLocationsStorage([...locations, newLocation]);
    }
    setNewLocation('');
    callBackToClose();
  }

  function handleClickLocation(location) {
    fetchWeather(location);
    callBackToClose();
  }

  return (
    <Container>
      <Header>
        <button type="button" onClick={callBackToClose}>
          <MdClose size={32} color="#E7E7EB" />
        </button>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <MdSearch size={24} color="#616475" />
          <input
            type="text"
            value={newLocation}
            onChange={(event) => { setNewLocation(event.target.value); }}
            placeholder="pesquise uma cidade"
          />
        </InputGroup>
        <button type="submit">Pesquisar</button>
      </Form>

      <ListLocation>
        {
          locations.map((location, index) => (
            <li key={index.toString()}>
              <button type="button" onClick={() => handleClickLocation(location)}>
                <span>{location}</span>
                <MdKeyboardArrowRight size={24} color="#616475" />
              </button>
            </li>
          ))
        }
      </ListLocation>

    </Container>
  );
}

export default SearchLocation;
