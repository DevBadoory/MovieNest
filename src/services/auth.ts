import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/Firebase"


export const signUpAuth = async(email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuth = async(email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
}