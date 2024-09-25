import { collection, getDocs } from "firebase/firestore";
import firestore from "../firestore";
import { COLLECTION_MATERIALS } from "@/constants";

export type Material = {
  layers: {
    [key: string]: string
  };
  materialPreview: string;
  name: string;
  points: string[]
};

const getMaterials = async (): Promise<Material[]> => {
  const materialsColRef = collection(firestore, COLLECTION_MATERIALS);
  const material = await getDocs(materialsColRef);
  return material.docs.map((doc) => doc.data()) as Material[];
}

export default getMaterials;