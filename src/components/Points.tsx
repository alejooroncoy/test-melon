"use client";

import usePoints from "@/hooks/usePoints";
import { Point } from "@/lib/db/getPoints";
import { Dispatch, FC, SetStateAction } from "react";
import dynamic from "next/dynamic";

type Props = {
  setPointSelected: Dispatch<SetStateAction<Point | null>>;
  pointSelected: Point | null;
};

const PointItem = dynamic(() => import('./PointItem'), {
  loading: () => <p>Cargando punto...</p>,
  ssr: false
})

const Points: FC<Props> = ({ setPointSelected, pointSelected }) => {
  const points = usePoints();

  return (
    <div onClick={() => setPointSelected(null)} className={"fixed inset-0 z-20".concat(pointSelected ? " cursor-pointer" : "")}>
      {points.map((point: Point) => (
        <PointItem
          key={point.id}
          point={point}
          pointSelected={pointSelected}
          setPointSelected={setPointSelected}
        />
      ))}
    </div>
  );
};

export default Points;
