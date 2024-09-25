import useMaterials from "@/hooks/useMaterials";
import { Point } from "@/lib/db/getPoints";
import MaterialItem from "./MaterialItem";
import { useState } from "react";
import { Material } from "@/lib/db/getMaterials";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Props = {
  pointSelected: Point | null;
};

export type MaterialsSelectectedAllPoints = {
  [key: string]: Material;
};

const ImageAnimated = motion(Image);

const Materials = ({ pointSelected }: Props) => {
  const materials = useMaterials(pointSelected?.id);
  const [materialsSelectectedAllPoints, setMaterialsSelectectedAllPoints] =
    useState<MaterialsSelectectedAllPoints>({});

  const setMaterialSelected = (material: Material) => {
    setMaterialsSelectectedAllPoints((prev) => {
      return {
        ...prev,
        [pointSelected?.id as string]: material,
      };
    });
  };

  return (
    <section className="absolute right-0 flex flex-col gap-2 mt-10 mx-4">
      <AnimatePresence mode="wait">
        {materials.map((material) => (
          <MaterialItem
            materialsSelectectedAllPoints={materialsSelectectedAllPoints}
            setMaterialSelected={setMaterialSelected}
            key={material.id}
            material={material}
          />
        ))}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {Object.values(materialsSelectectedAllPoints).map((material) => (
          <ImageAnimated
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={material.id}
            src={material.layers[pointSelected?.id as string]}
            className="fixed inset-0 object-cover w-full h-full"
            width={1000}
            height={1000}
            alt="Material"
          />
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Materials;
