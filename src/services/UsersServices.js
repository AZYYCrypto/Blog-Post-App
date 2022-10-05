import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../configs/firebase";

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const logOut = () => {
  signOut(auth);
};

export { createUser, signIn, googleSignIn, logOut };
