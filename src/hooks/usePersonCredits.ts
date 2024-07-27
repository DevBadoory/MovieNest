import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import PersonCredits from "../entities/PersonCredits";

const usePersonCredits = (id: string) => {
  const apiClient = new ApiClient<PersonCredits>(`/person/${id}/combined_credits`);
  
  return useQuery({
    queryKey: ['credits', id],
    queryFn: () => apiClient.get()

})
}

export default usePersonCredits;
