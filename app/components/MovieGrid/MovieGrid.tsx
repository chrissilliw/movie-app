import MovieCard from "../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { IMovie } from "@/models/IMovie";
import { lightBlue, lightGreen } from "@mui/material/colors";

interface MovieGridProps {
  movies: IMovie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <>
      <Container disableGutters sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MovieGrid;
