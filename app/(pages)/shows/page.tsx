import Banner from "@/app/components/Banner/Banner";
import MovieGrid from "@/app/components/MovieGrid/MovieGrid";
import { getDiscoveredShows } from "@/app/services/apiFetch";
import { Container } from "@mui/material";
import React from "react";

const ShowsPage = async () => {
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

export default ShowsPage;
