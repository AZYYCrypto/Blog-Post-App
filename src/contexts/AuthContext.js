import { createContext, useContext, useState } from "react";
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
  const [postList, setPostList] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        createUser,
        signIn,
        postList,
        setPostList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
