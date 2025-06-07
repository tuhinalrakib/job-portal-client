import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser?.email){
                const userData = { email : currentUser.email}

                axios.post("http://localhost:3000/jwt", userData, {
                    withCredentials : true
                })
                .then(res=>{
                    console.log(res.data)

                })
                .catch(e=>{
                    console.log(e)
                })
            }
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        loading,
        setLoading,
        user,
        setUser,
        signInUser,
        logoutUser,
        googleSignIn
    }

    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;