import requests from "@/utils/requests";
import { IMovie } from "@/models/IMovie";
import { IGenre } from "@/models/IGenre";

export const getTrendingAll = async () => {
    const res = await fetch(requests.fetchTrendingAll);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

/******* Fetch Movies *********/
export const getNowPlayingMovies = async () => {
    const res = await fetch(requests.fetchNowPlayingMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getPopularMovies = async () => {
    const res = await fetch(requests.fetchPopularMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getUpcomingMovies = async () => {
    const res = await fetch(requests.fetchUpcomingMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getTopRatedMovies = async () => {
    const res = await fetch(requests.fetchTopRatedMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getTrendingMovies = async () => {
    const res = await fetch(requests.fetchTrendingMovies);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getDiscoveredMovies = async () => {
    const res = await fetch(requests.fetchDiscoverMovie);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

/******* Fetch TV Shows / Series *********/
export const getDiscoveredShows = async () => {
    const res = await fetch(requests.fetchDiscoverShows);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getPopularShows = async () => {
    const res = await fetch(requests.fetchPopularShows);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getUpcomingShows = async () => {
    const res = await fetch(requests.fetchUpcomingShows);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getTopRatedShows = async () => {
    const res = await fetch(requests.fetchTopRatedShows);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getTrendingShows = async () => {
    const res = await fetch(requests.fetchTrendingShows);
    const data = await res.json();
    const movies: IMovie[] = data.results;
    return movies;
}

export const getGenres = async() => {
    const res = await fetch(requests.fetchGenres);
    const data = await res.json();
    const genres: IGenre[] = data;
    return genres;
}