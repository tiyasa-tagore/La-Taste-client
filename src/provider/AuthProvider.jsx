import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from  "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
// Google Provider
const provider = new GoogleAuthProvider();
// GIthub provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    // Declaring the states;
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userUpdate = (currentUser, displayName, photoURL) => {
        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        })
    }
    // Signin using Email & Password;
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Github Sign In Provider
    

    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    // SignIn with Google Account
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    // Signout for all user;
    const signOutGoogle = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // Store the Signin user info
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    // All the components passed through this;
    const authInfo = {
        googleSignIn,
        signOutGoogle,
        createUser,
        userUpdate,
        userLogin,
        githubLogin,
        user,
        error,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;