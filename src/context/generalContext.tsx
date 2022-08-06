import React, { useState } from "react";

export const GeneralContext = React.createContext<{
  favoriteLaunches: number[];
  addFavorite: (id: number) => void;
}>({
  favoriteLaunches: [],
  addFavorite: (id: number) => {},
});

const GeneralContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [launches, setLaunches] = useState<number[]>([]);

  const favoriteHandler = (id: number) => {
    setLaunches((prev) => {
      return [...prev, id];
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        favoriteLaunches: launches,
        addFavorite: favoriteHandler,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
