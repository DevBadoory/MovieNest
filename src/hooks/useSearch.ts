import { useQuery } from "@tanstack/react-query";
import Search from "../entities/Search";
import ApiClient from "../services/api-client";


const useSearch = (slug: string, category: string) => {
  const apiClient = new ApiClient<Search>(`/search/${category}`);
  
  return useQuery({
    queryKey: ['search', slug, category],
    queryFn: () => apiClient.getAll({ params: { query: slug } })
  });
};

export default useSearch;
