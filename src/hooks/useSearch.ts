import { useQuery } from "@tanstack/react-query"
import Search from "../entities/Search"
import ApiClient from "../services/api-client"



const apiClient = new ApiClient<Search>('/search/')

const useSearch = (slug: string, type: string) => {
    return useQuery({
        queryKey: ['search', slug, type],
        queryFn: () => apiClient.get({params: {query: slug}}, type)
    })
}
export default useSearch