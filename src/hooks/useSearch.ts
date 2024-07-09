import { useQuery } from "@tanstack/react-query"
import Search from "../entities/Search"
import ApiClient from "../services/api-client"



const apiClient = new ApiClient<Search>('/search/')

const useSearch = (slug: string, category: string) => {
    return useQuery({
        queryKey: ['search', slug, category],
        queryFn: () => apiClient.get({params: {query: slug}}, category)
    })
}
export default useSearch