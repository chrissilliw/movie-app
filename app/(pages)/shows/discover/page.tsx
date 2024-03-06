import React from "react";
import MovieGrid from "../../../components/MovieGrid/MovieGrid";
import Banner from "../../../components/Banner/Banner";
import { Container } from "@mui/material";
import { getDiscoveredShows } from "../../../services/apiFetch";

const TrendingShowsPage = async () => {
  const movies = await getDiscoveredShows();

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Banner movies={movies} />
        <MovieGrid movies={movies} />
      </Container>
    </>
  );
};

export default TrendingShowsPage;
