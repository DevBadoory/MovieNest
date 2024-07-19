import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export interface FetchResponse<T> {
  page: number;
  results: T[];
}

const instanceAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
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
