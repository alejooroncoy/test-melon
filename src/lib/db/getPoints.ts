import { collection, getDocs } from "firebase/firestore";
import firestore from "../firestore";
import { COLLECTION_POINTS } from "@/constants";

const getPoints = async () => {
  const pointsColRef = collection(firestore, COLLECTION_POINTS);
  const points = await getDocs(pointsColRef);
  return points.docs.map((doc) => doc.data());
}

export default getPoints;