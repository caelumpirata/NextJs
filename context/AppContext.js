import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    variable1: '',
    variable2: '',
  });

  const updateState = (newValues) => {
    setState((prevState) => {
      const updatedState = { ...prevState, ...newValues };
      console.log('Updated State in Context:', updatedState);
      return updatedState;
    });
  };

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);