import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../config/Firebase"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"

export interface Username{
    username: string;
    email: string;
}


export const userIdAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                resolve(user?.uid)
            }else{
                resolve(null)
            }
        }, reject)
    })
}

export const signUpAuth = async(username: string, email: string, password: string) => {
    const userCardential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCardential.user

    await setDoc(doc(db, 'users', user.uid), {
        username: username,
        email: email,
        userId: user.uid
    })
}

export const signInAuth = async(email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuth = async() => {
    await signOut(auth)
}

const usernamesCollectionRef = collection(db, 'users')

export const getUsernamesAuth = async() => {
    const usernames: Username[] = []
    const querySnapshot = await getDocs(usernamesCollectionRef)

    querySnapshot.forEach((user) => {
        const userData = user.data()
        usernames.push({
            username: userData.username,
            email: userData.email
        })
    })
    return usernames
}