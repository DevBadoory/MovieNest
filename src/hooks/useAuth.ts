import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { signInAuth, signUpAuth, userIdAuth } from "../services/auth";


export const useAuth = () => {

    const queryClient = useQueryClient()

    const signUpMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signUpAuth(email, password)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey:['userId']})
    })

    const signInMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signInAuth(email, password)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey:['userId']})

    })

    const userIdQuery = useQuery({
        queryKey: ['userId'],
        queryFn: userIdAuth
    })

    return{
        signUpMutation,
        signInMutation,
        userId: userIdQuery.data,
    }
}