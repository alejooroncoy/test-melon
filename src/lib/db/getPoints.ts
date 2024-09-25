import { collection, getDocs } from "firebase/firestore";
import firestore from "../firestore";
import { COLLECTION_POINTS } from "@/constants";

export type Point = {
  coordX: number;
  coordY: number;
  name: string;
  id: string;
};

const getPoints = async () => {
  const pointsColRef = collection(firestore, COLLECTION_POINTS);
  const points = await getDocs(pointsColRef);
  return points.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Point[];
}

export default getPoints;