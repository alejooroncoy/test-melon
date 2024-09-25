"use client";

import usePoints from "@/hooks/usePoints";
import useScreenSize from "@/hooks/useScreenSize";
import { Point } from "@/lib/db/getPoints";
import FingerPrint from "./icons/FingerPrint";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setPointSelected: Dispatch<SetStateAction<Point | null>>;
}

const Points: FC<Props> = ({ setPointSelected }) => {
  const points = usePoints();
  const { width, height } = useScreenSize();

  return (
    <div className="fixed inset-0">
      {points.map((point: Point) => {
        return (
          <div
            onClick={() => setPointSelected(point)}
            key={point.name}
            className="absolute p-3 bg-gray-700 before:absolute before:scale-90 before:inset-0 before:border before:border-gray-50 before:rounded-full before:m-auto rounded-full cursor-pointer"
            style={{
              top: (height * point.coordY) / 92,
              left: (width * point.coordX) / 98,
            }}
          >
            <FingerPrint className="text-white size-6" />
          </div>
        );
      })}
    </div>
  );
};

export default Points;
