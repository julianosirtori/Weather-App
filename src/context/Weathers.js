import React, { createContext, useState, useContext } from 'react';

import data from '../mock/data.json';

const WeathersContext = createContext();

export default function WeathersProvider({ children }){
  const [weather, setWeather] = useState(data);

  return (
    <WeathersContext.Provider
      value={{weather, setWeather}}
    >
      {children}
    </WeathersContext.Provider>
  );
}

export function useWeather(){
  const context = useContext(WeathersContext)
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { weather, setWeather } = context;
  return { weather, setWeather };
}
