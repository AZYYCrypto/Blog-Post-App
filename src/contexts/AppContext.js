import { createContext, useContext, useState } from "react";
import { auth } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUser,
  signIn,
  googleSignIn,
  logOut,
} from "../services/UsersServices";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [postList, setPostList] = useState([]);

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
