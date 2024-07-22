import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import MovieCredits from "../entities/MovieCredits";


const apiclient = new ApiClient<MovieCredits>('/movie/')

const useMovieCredits = (id: string) => {
    return useQuery({
        queryKey: ['credits', id],
        queryFn: () => apiclient.getMovieCredits(id)
    })
}

export default useMovieCredits 