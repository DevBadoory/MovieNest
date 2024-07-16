import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Person from "../entities/Person"

const apiClient = new ApiClient<Person>('/person/')


const usePersonDetails = (id: string) => {
    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.getDetails(id)
    })
}

export default usePersonDetails