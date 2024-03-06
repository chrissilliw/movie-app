

export interface IMovie {
    title: string;
    release_date?: string;
    genre_ids: number[];
    id: number;
    name: string;
    original_country: string[];
    production_companies: {
        origin_country: string;
    }[];
    spoken_languages: {
        english_name: string
    }[];
    overview: string;
    poster_path: string;
    backdrop_path: string;
    tagline: string;
}