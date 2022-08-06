import React from "react";

import { Button, Card, Stack, Typography, Link, Box } from "@mui/material";

import { LaunchType } from "../../types/types";
import AddFavorite from "../AddFavorite";

const RocketDetails: React.FC<LaunchType> = ({ launch }) => {
  return (
    <Card
      sx={{ background: "#323232", padding: "1rem", margin: "1rem 0" }}
      style={{ minHeight: "100%" }}
      variant="outlined"
    >
      <Stack spacing={1}>
        <Typography color="primary.contrastText" variant="caption">
          First flight: {new Date(launch?.rocket.rocket.first_flight).toLocaleDateString("en-gb")}
        </Typography>
        <Typography color="primary.light" variant="h4">
          {launch?.rocket.rocket.company}
        </Typography>
        <Typography color="primary.contrastText" variant="h5">
          {launch?.rocket.rocket.country}
        </Typography>
        <iframe
          width="560"
          height="315"
          style={{ maxWidth: "100%", marginBottom: "1rem" }}
          src={
            "https://www.youtube.com/embed/" +
            launch.links.video_link.replace("https://youtu.be/", "")
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {launch.links.article_link && (
            <Button variant="contained">
              <Link color="primary.contrastText" href={launch?.links.article_link}>
                Link to an article
              </Link>
            </Button>
          )}
          {launch.links.video_link && (
            <Button variant="contained">
              <Link color="primary.contrastText" href={launch?.links.video_link}>
                Link to a video
              </Link>
            </Button>
          )}
          <AddFavorite id={launch.id} />
        </Box>
      </Stack>
    </Card>
  );
};

export default RocketDetails;
