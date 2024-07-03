import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Movie from "../entities/Movie"



const apiClient = new ApiClient<Movie>('/trending/movie/day')

const useTrending = () => useQuery({
    queryKey: ['trending'],
    queryFn: apiClient.getAll
})
export default useTrending