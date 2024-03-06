import { API_KEY } from "@/app/services/api-client";
import { IMovie } from "@/models/IMovie";
import { IShow } from "@/models/IShow";
import requests from "@/utils/requests";

interface Props {
  params: { id: number };
}

const MovieDetailPage = async ({ params: { id } }: Props) => {
  const movieId = id;

  const res = await fetch(
    `${requests.fetchTVDetail}${movieId}?api_key=${API_KEY}`
  );
  const data = await res.json();
  const movie: IShow = data;

  return (
    <>
      <h1> {movie.name} </h1>
      <h1> SHow </h1>
    </>
  );
};

export default MovieDetailPage;
