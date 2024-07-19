import axios, { AxiosRequestConfig } from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;


export interface FetchResponse<T> {
  page: number;
  results: T[];
}

const instanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return instanceAxios.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data.results);
  }

  get = (config: AxiosRequestConfig, category: string) => {
    return instanceAxios.get<FetchResponse<T>>(this.endpoint + category, config);
  }

  getDetails = (id: string) => {
    return instanceAxios.get<T>(this.endpoint + id).then(res => res.data);
  }
}

export default ApiClient;
