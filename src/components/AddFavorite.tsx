import React, { useContext } from "react";
import { GeneralContext } from "../context/generalContext";

import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const AddFavorite: React.FC<{ id: string }> = (props) => {
  const ctx = useContext(GeneralContext);

  const addFavoriteHandler = () => {
    const isAlreadyAdded = ctx.favoriteLaunches.some((launch) => launch === +props.id);

    if (isAlreadyAdded) return;

    ctx.addFavorite(+props.id);
  };

  return (
    <Button
      startIcon={<StarIcon />}
      onClick={addFavoriteHandler}
      color="secondary"
      variant="outlined"
    >
      Favorite
    </Button>
  );
};

export default AddFavorite;
