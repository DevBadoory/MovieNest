import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Search from "../entities/Search"
import  useSearchStore  from '../store'



const apiClient = new ApiClient<Search>('/search/multi')

const useSearch = () => {
    const searchQuery = useSearchStore(s => s.searchQuery)
    return useQuery({
        queryKey: ['search', searchQuery],
        queryFn: () => apiClient.getAll({
            params:{
                query: searchQuery
    
            }
        })
    })
}
export default useSearch