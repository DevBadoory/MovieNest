import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import MovieCredits from "../entities/MovieCredits";

const useMovieCredits = (id: string) => {
  const apiClient = new ApiClient<MovieCredits>(`/movie/${id}/credits`);
  
  return useQuery({
    queryKey: ['credits', id],
    queryFn: () => apiClient.get()

})
}

export default useMovieCredits;
