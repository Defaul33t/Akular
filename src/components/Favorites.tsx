import React, { useContext } from "react";
import { GeneralContext } from "../context/generalContext";

const Favorites: React.FC = () => {
  const ctx = useContext(GeneralContext);

  return <div>{JSON.stringify(ctx.favoriteLaunches)}</div>;
};

export default Favorites;
