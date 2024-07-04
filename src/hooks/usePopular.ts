import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Trends from "../entities/Trends"



const apiClient = new ApiClient<Trends>('/movie/popular')

const usePopular = () => useQuery({
    queryKey: ['popular'],
    queryFn: apiClient.getAll
})
export default usePopular