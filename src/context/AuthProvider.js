import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import { createContext } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';




export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return (


        <AuthContext.Provider
        value={{

            user,
            setUser,
            login: async (email, password) => {
                try {
                   await auth().signInWithEmailAndPassword(email, password);
                } catch (e) {
                console.log(e);
                }
            },

            googlelogin: async () => {
                try {
                    const { idToken } = await GoogleSignin.signIn();

                    // Create a Google credential with the token
                    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                  
                    // Sign-in the user with the credential
                    await auth().signInWithCredential(googleCredential);
                  } catch(error) {
                    console.log(error)
                  }
                },

            register: async (email, password) => {
                try {
                    await auth().createUserWithEmailAndPassword(email, password);

                } catch (e) {
                    console.log(e);
                }
            },

            logout: async () => {
                try {
                    await auth().signOut();
                } catch(e) {
                    console.log(e);
                }
            }
         }}>
            {children}
        </AuthContext.Provider>
    )
};



