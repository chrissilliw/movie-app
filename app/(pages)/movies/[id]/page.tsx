import TrailerBanner from "@/app/components/TrailerBanner/TrailerBanner";
import { API_KEY } from "@/app/services/api-client";
import { IMovie } from "@/models/IMovie";
import { IMovieVideo, IMovieVideos } from "@/models/IMovieVideo";
import requests from "@/utils/requests";
import { Container, Stack, Typography } from "@mui/material";
import YouTube from "react-youtube";

interface Props {
  params: { id: number };
}

const MovieDetailPage = async ({ params: { id } }: Props) => {
  const movieId = id;
  let trailerKey = "";
  const sideWidth = 280;

  const res = await fetch(
    `${requests.fetchMovieDetail}${movieId}?api_key=${API_KEY}`
  );
  const data = await res.json();
  const movie: IMovie = data;

  const resVideo = await fetch(
    `${requests.fetchMovieDetail}${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  const dataVideo = await resVideo.json();
  const videos: IMovieVideo[] = dataVideo.results || [];

  const getTrailer = () => {
    if (videos.length > 0) {
      const trailerVideos: IMovieVideo[] = videos.filter(
        (video: IMovieVideo) => {
          return video.type === "Trailer";
        }
      );

      // trailerVideos.map((trailerVideo: IMovieVideo) => {
      //   console.log(trailerVideo);
      // });

      const trailer: IMovieVideo = trailerVideos[0];
      trailerKey = trailer.key;
      return trailerKey;
    }
  };

  getTrailer();
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        {/* <h1> {movie.title} </h1> */}
        <TrailerBanner trailerKey={trailerKey} />
        <Typography component="div" variant="h4">
          {movie.title}
        </Typography>
        <Typography component="div" variant="body1">
          {movie.overview}
        </Typography>
        <Stack direction="row">
          <Typography component="div" variant="h6">
            Land:{"  "}
          </Typography>
          <Typography variant="h6">
            {movie.production_companies.length > 0
              ? movie.production_companies
                  .map((company) => company.origin_country)
                  .join(", ")
              : "N/A"}
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default MovieDetailPage;
