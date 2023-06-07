import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const singUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            //setLoading(false)
            setUser(currentUser)
            if(currentUser){
                const loggedUser = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt', loggedUser)
                .then(res => {
                    console.log(res.data.token);
                    localStorage.setItem('access-token', res.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        loading,
        user,
        singUp,
        updateUser,
        signIn,
        logOut,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;