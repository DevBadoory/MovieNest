import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Movie from "../entities/Movie"

const apiClient = new ApiClient<Movie>('/movie/')


const useMovieDetails = (id: string) => {
    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.getMovieDetails(id)
    })
}

export default useMovieDetails