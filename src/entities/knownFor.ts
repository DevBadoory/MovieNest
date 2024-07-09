export default interface KnownFor {
    backdrop_path: string;
    id: number;
    name?: string;
    title: string // Optional, used for TV shows
    original_name?: string; // Optional, used for TV shows
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date?: string; // Optional, used for TV shows
    vote_average: number;
    vote_count: number;
    origin_country?: string[]; // Optional, used for TV shows
  }