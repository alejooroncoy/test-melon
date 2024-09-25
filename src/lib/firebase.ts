import { FirebaseApp, initializeApp } from "firebase/app";
import firebaseConfig from "@/config/firebaseConfig";

let firebase: FirebaseApp | null = null;

export const getFirebase = (): FirebaseApp => {
  if (firebase) return firebase;

  firebase = initializeApp(firebaseConfig);
  return firebase;
};
