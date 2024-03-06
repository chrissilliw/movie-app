import { Container } from "@mui/material";
import { getTrendingAll } from "./services/apiFetch";
import Banner from "./components/Banner/Banner";
import MovieGrid from "./components/MovieGrid/MovieGrid";

const Home = async () => {
  const movies = await getTrendingAll();

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Banner movies={movies} />
        <MovieGrid movies={movies} />
      </Container>
    </>
  );
};

export default Home;
