import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUser,
  signIn,
  googleSignIn,
  logOut,
} from "../services/UsersServices";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, createUser, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
