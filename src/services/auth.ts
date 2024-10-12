import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../config/Firebase";

export interface Username{
    username: string;
    email: string;
}

export interface WatchLater {
    title: string;
    overview: string;
    poster: string | null;
    date: string;
    id: number;
    userId: string;
    sort: number
    type: string;
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

export const deleteUserAuth = async() => {
    const user = auth.currentUser;

    if (user) {
        const userId = user.uid;
        await deleteDoc(doc(db, 'users', userId));
        await user.delete();
    }
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

export const addWatchLaterAuth = async(title: string, poster: string | null, overview:string, date: string, id: number, userId: string, sort: number, type: string) => {
    await setDoc(doc(db, 'watchLater', String(id) + userId),{ 
        title: title,
        poster: poster,
        overview: overview,
        date: date,
        id: id,
        userId: userId,
        sort: sort,
        type: type
    })
}

export const deleteWatchLaterItemAuth = async(id: number, userId: string) => {

    await deleteDoc(doc(db, 'watchLater', String(id) + userId))

}

const watchLaterCollectionRed = collection(db, 'watchLater')

export const getWatchLaterAuth = async(userId: string) => {

    const WatchLaterList: WatchLater[] = []
    const q = query(watchLaterCollectionRed, where("userId", "==", userId))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        const docData = doc.data()
        WatchLaterList.push({
            title: docData.title,
            poster: docData.poster,
            overview: docData.overview,
            date: docData.date,
            userId: docData.userId,
            sort: docData.sort,
            id: docData.id,
            type: docData.type
        })
    })
    return WatchLaterList
}
