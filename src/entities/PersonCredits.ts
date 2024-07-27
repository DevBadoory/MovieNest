export interface PersonCastMember {
  adult: boolean;
  backdrop_path: string | null;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface PersonCrewMember {
  adult: boolean;
  backdrop_path: string | null;
  credit_id: string;
  department: string;
  genre_ids: number[];
  id: number;
  job: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface PersonCredits {
  cast: PersonCastMember[];
  crew: PersonCrewMember[];
  id: number;
}

export default PersonCredits