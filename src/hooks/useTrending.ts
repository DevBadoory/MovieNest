import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Trends from "../entities/Trends"



const apiClient = new ApiClient<Trends>('/trending/all/day')

const useTrending = () => useQuery({
    queryKey: ['trending'],
    queryFn: apiClient.getAll
})
export default useTrending