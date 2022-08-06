import React from "react";
import { Card, Stack, Typography, Chip } from "@mui/material";

import { LaunchType } from "../../types/types";

const LaunchDetails: React.FC<LaunchType> = ({ launch }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        background: "#323232",
        padding: "1rem",
        margin: "1rem 0",
        flexWrap: "wrap",
      }}
      style={{ minHeight: "100%" }}
      variant="outlined"
    >
      <Stack spacing={1}>
        <Typography color="primary.contrastText" variant="caption">
          {new Date(launch?.launch_date_local).toLocaleDateString("en-gb")}
        </Typography>
        <Typography color="primary.light" variant="h5">
          Mission: <b>{launch?.mission_name}</b>
        </Typography>
        <Typography color="primary.contrastText" variant="h6">
          Launch site: {launch?.launch_site.site_name}
        </Typography>
      </Stack>
      <Chip
        color="primary"
        label={launch?.launch_success ? "Succesful flight" : "Unsuccessful flight"}
        variant="filled"
      />
    </Card>
  );
};

export default LaunchDetails;
