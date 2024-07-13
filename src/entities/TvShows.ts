// TVShowInterface.ts
export interface TVShow {
    id: number;
    name: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
    first_air_date: string;
    last_air_date: string;
    genres: { id: number; name: string }[];
    episode_run_time: number[];
    vote_average: number;
    tagline: string;
    overview: string;
    status: string;
    number_of_seasons: number;
    number_of_episodes: number;
    in_production: boolean;
    languages: string[];
    networks: { id: number; name: string; logo_path: string }[];
    created_by: { id: number; name: string; profile_path: string }[];
    production_companies: { id: number; name: string; logo_path: string }[];
    seasons: {
      id: number;
      name: string;
      episode_count: number;
      poster_path: string;
      season_number: number;
      air_date: string;
    }[];
    last_episode_to_air: {
      id: number;
      name: string;
      air_date: string;
      episode_number: number;
      season_number: number;
      overview: string;
    };
    next_episode_to_air: {
      id: number;
      name: string;
      air_date: string;
      episode_number: number;
      season_number: number;
      overview: string;
    } | null;
  }