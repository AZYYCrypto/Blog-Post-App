import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../configs/firebase";

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
export const logOut = () => {
  signOut(auth);
};
