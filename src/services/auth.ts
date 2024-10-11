import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/Firebase"


export const signUpAuth = async(email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
}