import React from "react";
import MovieGrid from "../../../components/MovieGrid/MovieGrid";
import Banner from "../../../components/Banner/Banner";
import { Container } from "@mui/material";
import { getTopRatedMovies } from "../../../services/apiFetch";
import TopRatedBanner from "@/app/components/TopRatedBanner/TopRatedBanner";

const MoviesPage = async () => {
  const movies = await getTopRatedMovies();

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <TopRatedBanner movies={movies} />
        <MovieGrid movies={movies} />
      </Container>
    </>
  );
};

export default MoviesPage;
