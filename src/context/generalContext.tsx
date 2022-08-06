import React, { useState } from "react";

export const GeneralContext = React.createContext<{
  favoriteLaunches: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}>({
  favoriteLaunches: [],
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
});

const GeneralContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [launches, setLaunches] = useState<number[]>([]);

  const addFavoriteHandler = (id: number) => {
    setLaunches((prev) => {
      return [...prev, id];
    });
  };

  const removeFavoriteHandler = (id: number) => {
    setLaunches((prev) => {
      return prev.filter((launch) => launch !== id);
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        favoriteLaunches: launches,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
