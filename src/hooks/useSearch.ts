import { useQuery } from "@tanstack/react-query"
import Search from "../entities/Search"
import ApiClient from "../services/api-client"



const apiClient = new ApiClient<Search>('/search/multi')

const useSearch = (slug: string) => {
    return useQuery({
        queryKey: ['search', slug],
        queryFn: () => apiClient.getAll({
            params:{
                query: slug
            }
        })
    })
}
export default useSearch