import Banner from "@/app/components/Banner/Banner";
import MovieGrid from "@/app/components/MovieGrid/MovieGrid";
import { getDiscoveredMovies } from "@/app/services/apiFetch";
import { Container } from "@mui/material";
import React from "react";

const MoviesPage = async () => {
  const movies = await getDiscoveredMovies();

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Banner movies={movies} />
        <MovieGrid movies={movies} />
      </Container>
    </>
  );
};

export default MoviesPage;
