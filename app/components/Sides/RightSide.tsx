import React from "react";
import SideMovieGrid from "../SideMovieGrid/SideMovieGrid";
import { IMovie } from "@/models/IMovie";
import requests from "@/utils/requests";
import { IGenre } from "@/models/IGenre";
import { Container, List, ListSubheader } from "@mui/material";

const sideWidth = 380;

interface MoviesProps {
  page: number;
  results: IMovie[];
  endpoint: string;
}

const RightSide = async ({ endpoint, results }: MoviesProps) => {
  const getTopRatedMovies = async () => {
    const res = await fetch(requests.fetchTopRatedMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
  };

  const getGenres = async () => {
    const res = await fetch(requests.fetchGenres);
    const data = await res.json();
    const genres: IGenre[] = data;
    return genres;
  };

  const movies = await getTopRatedMovies();
  const genres = await getGenres();
  return (
    <>
      <Container disableGutters sx={{ width: sideWidth }}>
        <List sx={{ px: 0 }}>
          <ListSubheader sx={{ mt: 4 }}>TopFilmer</ListSubheader>
          <SideMovieGrid movies={movies} />
        </List>
      </Container>
    </>
  );
};

export default RightSide;
