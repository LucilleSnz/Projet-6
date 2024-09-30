import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  return (
    <AppContext.Provider value={{ showSlideshow, setShowSlideshow }}>
      {children}
    </AppContext.Provider>
  );
};
