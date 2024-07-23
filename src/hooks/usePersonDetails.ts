import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import Person from "../entities/Person"



const usePersonDetails = (id: string) => {
    const apiClient = new ApiClient<Person>(`/person/${id}`)

    return useQuery({
        queryKey: ['detail', id],
        queryFn: () => apiClient.get()
    })
}

export default usePersonDetails