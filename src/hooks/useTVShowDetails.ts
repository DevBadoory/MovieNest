import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import { TVShow } from "../entities/TvShows"

const apiClient = new ApiClient<TVShow>('/tv/')


const useMovieDetails = (id: string) => {
    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.getTvDetails(id)
    })
}

export default useMovieDetails