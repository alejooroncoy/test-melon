import { collection, getDocs } from "firebase/firestore";
import firestore from "../firestore";
import { COLLECTION_MATERIALS } from "@/constants";

const getMaterials = async () => {
  const materialsColRef = collection(firestore, COLLECTION_MATERIALS);
  const material = await getDocs(materialsColRef);
  return material.docs.map((doc) => doc.data());
}

export default getMaterials;