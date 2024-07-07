import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Search from "../entities/Search"



const apiClient = new ApiClient<Search>('/search/multi')

const useSearch = () => useQuery({
    queryKey: ['search'],
    queryFn: () => apiClient.getAll({
        params:{
            query: 'cill'
        }
    })
})
export default useSearch