import { IMovie } from "@/models/IMovie";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import TopRatedCard from "../TopRatedCard/TopRatedCard";

interface TopRatedBannerProps {
  movies: IMovie[];
}

const TopRatedBanner = ({ movies }: TopRatedBannerProps) => {
  let mappedMovies;
  let count = 1;
  return (
    <>
      <Container disableGutters sx={{ mt: 5 }}>
        <Typography component="h2" variant="h5" sx={{ fontWeight: "600" }}>
          Top Rated
        </Typography>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          {
            (mappedMovies = movies.slice(0, 4).map((movie, index) => {
              return (
                <TopRatedCard key={movie.id} movie={movie} count={count++} />
                // <div key={movie.id}>
                //   {count++} {movie.title}
                // </div>
              );
            }))
          }
        </Grid>
      </Container>
    </>
  );
};

export default TopRatedBanner;
