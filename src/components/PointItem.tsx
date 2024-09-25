"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { Point } from "@/lib/db/getPoints";
import { motion } from "framer-motion";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import FingerPrint from "./icons/FingerPrint";

type Props = {
  pointSelected: Point | null;
  point: Point;
  setPointSelected: Dispatch<SetStateAction<Point | null>>;
};

const PointItem = ({ pointSelected, point, setPointSelected }: Props) => {
  const { width, height } = useScreenSize();

  const handleClickSelected: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setPointSelected(point);
  };

  return (
    <motion.div
      animate={{
        scale: pointSelected ? (pointSelected?.id === point.id ? 1 : 0) : 1,
        opacity: pointSelected ? (pointSelected?.id === point.id ? 1 : 0) : 1,
      }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClickSelected}
      key={point.id}
      className="absolute p-3 bg-gray-700 z-20 before:absolute before:scale-90 before:inset-0 before:border before:border-gray-50 before:rounded-full before:m-auto rounded-full cursor-pointer"
      style={{
        top: (height * point.coordY) / 94,
        left: (width * point.coordX) / 98,
      }}
    >
      <FingerPrint className="text-white size-6" />
    </motion.div>
  );
};

export default PointItem;
