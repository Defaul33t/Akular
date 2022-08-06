import React from "react";
import { Stack, Typography, Card, Box, Chip } from "@mui/material";
import LaunchDetails from "./LaunchDetails";
import RocketDetails from "./LaunchRocket";

import { LaunchQuery } from "../../queries/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";

import { LaunchesType } from "../../types/types";

const Details: React.FC = () => {
  let { id } = useParams();

  const [result, reexecuteQuery] = useQuery({
    query: LaunchQuery,
    variables: { id },
  });

  const { data, fetching, error } = result;

  const launch: LaunchesType = data?.launch;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Stack gap="1rem">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "5rem",
          flexWrap: "wrap",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography variant="h4">Launch details</Typography>
          <LaunchDetails launch={launch} />
        </Box>
        <Box>
          <Typography variant="h4">Rocket details</Typography>
          <RocketDetails launch={launch} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Details;
