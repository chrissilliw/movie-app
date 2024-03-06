import React from "react";
import MovieGrid from "../../../components/MovieGrid/MovieGrid";
import Banner from "../../../components/Banner/Banner";
import { Container } from "@mui/material";
import { getPopularMovies, getPopularShows } from "../../../services/apiFetch";

const MoviesPage = async () => {
  const movies = await getPopularShows();

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
