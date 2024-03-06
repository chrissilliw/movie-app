export interface IMovieVideos {
    videos: IMovieVideo[];
}

export interface IMovieVideo {
    key: string;
    size: number;
    type: string; 
    published_at: string; 
    id: string;
}