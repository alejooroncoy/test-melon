import useMaterials from "@/hooks/useMaterials";
import { Point } from "@/lib/db/getPoints";
import MaterialItem from "./MaterialItem";
import { useState } from "react";
import { Material } from "@/lib/db/getMaterials";
import { AnimatePresence } from "framer-motion";

type Props = {
  pointSelected: Point | null;
};

export type MaterialsSelectectedAllPoints = {
  [key: string]: Material;
};

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
      {Object.values(materialsSelectectedAllPoints).map((material) => (
        <div
          key={material.id}
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Object.values(material.layers)[0]})`,
          }}
        />
      ))}
    </section>
  );
};

export default Materials;
