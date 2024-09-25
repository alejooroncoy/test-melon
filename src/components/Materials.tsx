import useMaterials from "@/hooks/useMaterials";
import { Point } from "@/lib/db/getPoints";
import MaterialItem from "./MaterialItem";
import { useState } from "react";
import { Material } from "@/lib/db/getMaterials";
import { AnimatePresence } from "framer-motion";

type Props = {
  pointSelected: Point | null;
};

const Materials = ({ pointSelected }: Props) => {
  const materials = useMaterials(pointSelected?.id);
  const [materialSelected, setMaterialSelected] = useState<Material | null>(
    null,
  );

  return (
    <section className="absolute right-0 flex flex-col gap-2 mt-10 mx-4">
      <AnimatePresence mode="wait">
        {materials.map((material) => (
          <MaterialItem
            materialSelected={materialSelected}
            setMaterialSelected={setMaterialSelected}
            key={material.id}
            material={material}
          />
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Materials;
