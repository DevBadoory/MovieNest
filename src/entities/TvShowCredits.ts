interface Roles{
  character: string;
  credit_id: string;
  episode_count: number;
}

export interface TvCastMember{
  adult: boolean;
  gender: number;
  known_for_department: string;
  name: string;
  id: number;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  roles: Roles[];
}

interface Jobs{
  job: string;
  credit_id: string;
  episode_count: number;
}

export interface TvCrewMember{
  adult: boolean;
  gender: number;
  known_for_department: string;
  name: string;
  id: number;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  jobs: Jobs[];
  total_episode_count: number;
}

interface TvCredits{
  id: number;
  cast: TvCastMember[];
  crew: TvCrewMember[];
}


export default TvCredits
