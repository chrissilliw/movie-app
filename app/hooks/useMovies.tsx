// "use client";
// import React, { useEffect, useState } from "react";
// import { IMovie } from "@/models/IMovie";
// import requests from "@/utils/requests";
// import { API_KEY } from "../services/api-client";
// requests;

// interface IMoviesProps {
//   endpoint: string;
// }

// interface fetchMovieResponse {
//   count: number;
//   results: IMovie[];
// }

// interface MovieDetailProps {
//   params: { id: number };
// }

// /************/

// /**************/

// export const useMovies = ({ endpoint }: IMoviesProps) => {
//   const [movies, setMovies] = useState<IMovie[]>([]);
//   //   const [endpoint, setEndpoint] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(endpoint);
//         const data = await res.json();
//         setMovies(data.results);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, [endpoint]);
//   return { movies };
// };

// export const useMovieDetail = ({ params: { id } }: MovieDetailProps) => {
//   const [movieDetails, setMovieDetails] = useState<IMovie | null>(null);
//   const movieId = id;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `${requests.fetchMovieDetail}${movieId}?api_key= ${API_KEY}`
//         );
//         const data = await res.json();

//         setMovieDetails(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };
//     fetchData();
//   }, [movieId]);
//   console.log(movieId);
//   return { movieId };
// };

// export default { useMovies, useMovieDetail };
