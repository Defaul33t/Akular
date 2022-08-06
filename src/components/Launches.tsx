import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { useQuery } from "urql";
import { SpacexQuery } from "../queries/queries";
import AddFavorite from "./AddFavorite";

import { LaunchesType } from "../types/types";

const Launches: React.FC = () => {
  const [result, reexecuteQuery] = useQuery({
    query: SpacexQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Grid container alignItems="stretch" spacing={2} sx={{ marginBottom: "5rem" }}>
      {data &&
        data.launchesPast.map((launch: LaunchesType) => {
          return (
            <Grid xs={12} md={6} item key={launch.id}>
              <Card style={{ minHeight: "100%" }} variant="outlined">
                <CardContent>
                  <Typography sx={{ display: "block", textAlign: "right" }} variant="caption">
                    Launch ID: {launch.id}
                  </Typography>
                  <Typography variant="body1">
                    <b>Date: </b>
                    {new Date(launch.launch_date_local).toLocaleDateString("en-gb")}
                  </Typography>
                  <Typography variant="h5">
                    <b>Mission {launch.mission_name} </b>
                  </Typography>
                  <Typography variant="h5">
                    <b>Rocket:</b> {launch.rocket.rocket_name}
                  </Typography>
                  <Typography variant="body1">
                    <b>The launch site:</b> {launch.launch_site?.site_name}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", gap: "1rem" }}>
                  <Link to={`/details/${launch.id}`}>
                    <Button variant="contained">Details</Button>
                  </Link>
                  <AddFavorite id={launch.id} />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Launches;
