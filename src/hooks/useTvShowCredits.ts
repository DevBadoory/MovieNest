import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import TvCredits from "../entities/TvShowCredits";



const useTvShowsCredits = (id: string) => {
    const apiclient = new ApiClient<TvCredits>(`/tv/${id}/aggregate_credits`)

    return useQuery({
        queryKey: ['credits', id],
        queryFn: () => apiclient.get()
    })
}

export default useTvShowsCredits 