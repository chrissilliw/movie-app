import { IMovie } from "@/models/IMovie";
import { Container, Grid } from "@mui/material";
import React from "react";
import SideMovieCard from "../SideMovieCard/SideMovieCard";
import SeeAllBtn from "../Buttons/SeeAllBtn";

interface SideMovieGridProps {
  movies: IMovie[];
}

const SideMovieGrid = ({ movies }: SideMovieGridProps) => {
  const firstFiveMovies = movies.slice(0, 3);

  return (
    <>
      <Container>
        <Grid>
          {firstFiveMovies.map((movie) => (
            <SideMovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
        <SeeAllBtn />
      </Container>
    </>
  );
};

export default SideMovieGrid;
