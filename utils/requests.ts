import { API_KEY } from "@/app/services/api-client";


export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrendingAll: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // Movies
    fetchTrendingMovies: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNowPlayingMovies: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,    
    fetchDiscoverMovie: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,

    fetchMovieVideo: `${BASE_URL}/movie/`,
    
    // Shows
    fetchTrendingShows: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchDiscoverShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchPopularShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUpcomingShows: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
    fetchNowPlayingShows: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US`,


    fetchMovieDetail: `${BASE_URL}/movie/`,
    fetchTVDetail: `${BASE_URL}/tv/`,
    fetchGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language?en-US`,
}

export default requests;