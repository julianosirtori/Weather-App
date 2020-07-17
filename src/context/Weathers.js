import React, { createContext, useState, useContext } from 'react';

import api from '../services/api';
import data from '../mock/data.json';

const WeathersContext = createContext();

export default function WeathersProvider({ children }){
  const [weather, setWeather] = useState(data);

  async function fetchWeatherByLocation({location = 455827}){
      const response = await api.get(`/api/location/${location}`);
      const { data } = response;
      setWeather(data);
  }

  return (
    <WeathersContext.Provider
      value={{weather, setWeather, fetchWeatherByLocation}}
    >
      {children}
    </WeathersContext.Provider>
  );
}

export function useWeather(){
  const context = useContext(WeathersContext)
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { weather, setWeather, fetchWeatherByLocation } = context;
  return { weather, setWeather, fetchWeatherByLocation };
}
