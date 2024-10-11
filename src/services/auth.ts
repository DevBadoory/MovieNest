import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/Firebase"



export const signUpAuth = async(email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuth = async(email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const userIdAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                resolve(user?.uid)
            }else{
                resolve(undefined)
            }
        }, reject)
    })
}