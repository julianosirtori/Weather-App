import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) throw new Error('useLoading must be used within a LoadingProvider');
  const { loading, setLoading } = context;
  return { loading, setLoading };
}
