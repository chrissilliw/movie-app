"use client";
import { IMovie } from "@/models/IMovie";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface BannerProps {
  movies: IMovie[];
}

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white",
  },
};

const Banner = ({ movies }: BannerProps) => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <Link href={`/movies/${randomMovie.id}`}>
        <Card sx={{ borderRadius: "20px", width: "xl" }}>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              sx={{ height: 450 }}
              image={imageUrl + randomMovie?.backdrop_path}
              title={randomMovie?.title}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(0, 0, 0, 0.34)",
                color: "white",
                padding: "10px",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateX",
                left: 20,
                width: "100%",
                color: "white",
                padding: "10px",
              }}
            >
              <CardContent>
                <Typography component="div" variant="h4">
                  {randomMovie?.title}
                </Typography>
                {/* <Typography variant="body2">{randomMovie.overview}</Typography> */}
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Link>
    </>
  );
};

export default Banner;
