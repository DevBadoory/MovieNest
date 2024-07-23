import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Movie from "../entities/Movie"



const useMovieDetails = (id: number | string) => {
    const apiClient = new ApiClient<Movie>(`/movie/${id}`)

    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.get()
    })
}

export default useMovieDetails