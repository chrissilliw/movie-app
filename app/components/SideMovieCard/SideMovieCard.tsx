"use client";
import { IGenre } from "@/models/IGenre";
import { IMovie } from "@/models/IMovie";
import requests from "@/utils/requests";
import { CardContent, Typography } from "@mui/joy";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { AspectRatio } from "@mui/icons-material";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface SideMovieCard {
  movie: IMovie;
}

const SideMovieCard = ({ movie }: SideMovieCard) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const getGenres = async () => {
    const res = await fetch(requests.fetchGenres);
    const data = await res.json();
    const genres: IGenre[] = data;
    return genres;
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await getGenres();
      setGenres(genresData);
    };
    fetchGenres();
  }, []);

  const findGenres = async () => {
    const genresData = await getGenres();
    // return movie.genre_ids.map((genreId) =>
    //   genres.find((g) => g.id === genreId)
    // );
  };

  const movieGenres = findGenres();

  return (
    <>
      <Link href={`/movies/${movie.id}`}>
        <Grid item xs={8} sm={8} md={11}>
          <Card sx={{ maxWidth: 250, flexGrow: 1 }}>
            {/* <AspectRatio ratio="9/16" sx={{ width: 100 }}>
              <img
                src={imageUrl + movie.poster_path}
                srcSet={imageUrl + movie.poster_path}
              />
            </AspectRatio> */}
            <CardContent>
              <Typography>{movie.title}</Typography>
              <Typography>{}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Link>
    </>
  );
};

export default SideMovieCard;
