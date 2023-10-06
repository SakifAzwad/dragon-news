/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthCon=createContext(null);
const auth = getAuth(app);

const AuthProv = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createuser = (email,pass)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const login = (email,pass)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const logout=()=>
    {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>
    {
        const unsubs=onAuthStateChanged(auth,(curuser)=>
        {
            
            setUser(curuser);
            setLoading(false);
        });
        return ()=>
            {
                unsubs();
            }
    },[])

    const authinfo = {user,createuser,logout,login,loading};

    return (
        <AuthCon.Provider value={authinfo}>
            {children}
        </AuthCon.Provider>
    );
};

export default AuthProv;