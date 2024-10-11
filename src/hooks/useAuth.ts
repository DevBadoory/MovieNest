import { useMutation } from "@tanstack/react-query"
import { signUpAuth } from "../services/auth";


export const useAuth = () => {


    const signUpMutation = useMutation({
        mutationFn: ({email, password}: {email: string; password: string}) => {
            return signUpAuth(email, password)
        },
        onSuccess: () => console.log("signed up")
    })

    return{
        signUpMutation
    }
}