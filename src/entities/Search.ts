import KnownFor from "./knownFor";

export default interface Search {
    backdrop_path: string;
    profile_path: string
    genre_ids: number[];
    id: number;
    media_type: string;
    known_for_department?: string
    known_for?: KnownFor[]
    original_language: string;
    original_title?: string; // optional
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: string; // optional
    title?: string; // optional
    name?: string; // optional for TV series
    first_air_date?: string; // optional for TV series
    original_name?: string; // optional for TV series
    video?: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  