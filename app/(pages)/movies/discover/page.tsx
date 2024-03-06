import React from "react";
// import MovieGrid from "../../../components/MovieGrid/MovieGrid";
// import Banner from "../../../components/Banner/Banner";
import { Container } from "@mui/material";
import { getDiscoveredMovies } from "../../../services/apiFetch";
import MovieGrid from "@/app/components/MovieGrid/MovieGrid";
import Banner from "@/app/components/Banner/Banner";

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
