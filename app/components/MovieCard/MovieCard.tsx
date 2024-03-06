"use client";
import { IMovie } from "@/models/IMovie";
import { CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const pathname = usePathname();

  const basePath = pathname.includes("/movies") ? "/movies/" : "/shows/";

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link href={`${basePath}${movie.id}`}>
          <Card sx={{ borderRadius: 4 }}>
            <CardMedia
              component="img"
              image={imageUrl + movie.poster_path}
              title={movie.title}
            ></CardMedia>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default MovieCard;
