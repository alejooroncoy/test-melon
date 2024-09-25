import { getFirestore } from "firebase/firestore";
import { getFirebase } from "./firebase";

const firebase = getFirebase();
const firestore = getFirestore(firebase);

export default firestore;
