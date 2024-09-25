import getPoints, { Point } from "@/lib/db/getPoints";
import { useEffect, useState } from "react";

const usePoints = () => {
  const [points, setPoints] = useState<Point[]>([]);

  const gettingPoints = async () => {
    const points = await getPoints();
    setPoints(points);
  }

  useEffect(() => {
    gettingPoints();
  }, []);

  return points;
}

export default usePoints;
