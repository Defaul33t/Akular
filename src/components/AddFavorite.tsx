import React, { useContext } from "react";
import { GeneralContext } from "../context/generalContext";

import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const AddFavorite: React.FC<{ id: string; isActive: boolean }> = (props) => {
  const ctx = useContext(GeneralContext);

  const addFavoriteHandler = () => {
    const isAlreadyAdded = ctx.favoriteLaunches.some((launch) => launch === +props.id);

    if (isAlreadyAdded) {
      ctx.removeFavorite(+props.id);
    } else {
      ctx.addFavorite(+props.id);
    }
  };

  return (
    <Button
      startIcon={<StarIcon />}
      onClick={addFavoriteHandler}
      color="secondary"
      variant={props.isActive ? "contained" : "outlined"}
    >
      Favorite
    </Button>
  );
};

export default AddFavorite;
