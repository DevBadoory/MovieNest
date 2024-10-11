import { useMutation } from "@tanstack/react-query"
import { signInAuth, signUpAuth } from "../services/auth";


export const useAuth = () => {

    const signUpMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signUpAuth(email, password)
        },
        onSuccess: () => console.log("signed up")
    })

    const signInMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signInAuth(email, password)
        },
    })

    return{
        signUpMutation,
        signInMutation,
    }
}