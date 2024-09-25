import { collection, getDocs, query, where } from "firebase/firestore";
import firestore from "../firestore";
import { COLLECTION_MATERIALS } from "@/constants";

export type Material = {
  id: string;
  layers: {
    [key: string]: string
  };
  materialPreview: string;
  name: string;
  points: string[]
};

const getMaterials = async (pointId: string): Promise<Material[]> => {
  const materialsColRef = collection(firestore, COLLECTION_MATERIALS);
  const materialsFilter = query(materialsColRef, where("points", "array-contains", pointId));
  const material = await getDocs(materialsFilter);
  return material.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Material[];
}

export default getMaterials;