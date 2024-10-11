import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteUserAuth, getUsernamesAuth, signInAuth, signOutAuth, signUpAuth, userIdAuth } from "../services/auth";


export const useAuth = () => {

    const queryClient = useQueryClient()

    const userIdQuery = useQuery({
        queryKey: ['userId'],
        queryFn: userIdAuth,
    })


    const signUpMutation = useMutation({
        mutationFn: ({username , email, password}: {username: string; email: string; password: string}) => {
            return signUpAuth(username, email, password)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['userId']})
            queryClient.invalidateQueries({queryKey:['username']})
        }
    })

    const signInMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signInAuth(email, password)
        },
        onSuccess: () => queryClient.invalidateQueries({queryKey:['userId']})
    })


    const signOutMutation = useMutation({
        mutationFn: signOutAuth,
        onSuccess: () => queryClient.invalidateQueries({queryKey:['userId']})
    })

    const deleteUserMutation = useMutation({
        mutationFn: deleteUserAuth,
        onSuccess: () => queryClient.invalidateQueries({queryKey:['userId']})
    })

    const usernamesQuery = useQuery({
        queryKey: ['username'],
        queryFn: getUsernamesAuth
    })

    
    return{
        signUpMutation,
        signInMutation,
        signOutMutation,
        deleteUserMutation,
        userId: userIdQuery.data,
        usernames: usernamesQuery.data,
        usernamesIsLoading: usernamesQuery.isLoading
    }
}