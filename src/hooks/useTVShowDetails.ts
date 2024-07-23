import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import { TVShow } from "../entities/TvShows"



const useMovieDetails = (id: string) => {
    const apiClient = new ApiClient<TVShow>(`/tv/${id}`)

    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.get()
    })
}

export default useMovieDetails