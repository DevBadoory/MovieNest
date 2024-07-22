import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import TvCredits from "../entities/TvShowCredits";


const apiclient = new ApiClient<TvCredits>('/tv/')

const useTvShowsCredits = (id: string) => {
    return useQuery({
        queryKey: ['credits', id],
        queryFn: () => apiclient.getTvShowCredits(id)
    })
}

export default useTvShowsCredits 