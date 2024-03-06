import { IMovie } from "@/models/IMovie";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface TopRatedCardProps {
  movie: IMovie;
  count: number;
}

const TopRatedCard = ({ movie, count }: TopRatedCardProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <Grid item direction="row" xs={12} sm={6} md={4} lg={3}>
        <Link href={`/movies/${movie.id}`}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3" sx={{ mr: 1 }}>
              {count++}
            </Typography>
            <Typography variant="body2">{movie.title}</Typography>
          </Box>
          <Card sx={{ borderRadius: 4 }}>
            <CardMedia
              component="img"
              image={imageUrl + movie.backdrop_path}
              title={movie.title}
            ></CardMedia>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default TopRatedCard;
