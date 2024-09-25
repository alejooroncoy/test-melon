import { Material } from "@/lib/db/getMaterials";
import React, {  FC } from "react";
import { motion } from "framer-motion";
import { MaterialsSelectectedAllPoints } from "./Materials";
import Image from "next/image";

type Props = {
  material: Material;
  setMaterialSelected: (material: Material) => void;
  materialsSelectectedAllPoints: MaterialsSelectectedAllPoints;
};

const MaterialItem: FC<Props> = ({
  material,
  setMaterialSelected,
  materialsSelectectedAllPoints,
}) => {
  const handleClickSelect = () => setMaterialSelected(material);

  const materialisSelected = Object.values(materialsSelectectedAllPoints).some(
    ({ id }) => id === material.id,
  );
  

  return (
    <motion.article
      exit={{
        opacity: 0,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      key={material.id}
      className="flex flex-row-reverse w-72 rounded-lg z-20"
    >
      <header
        onClick={handleClickSelect}
        className="size-28 p-2 bg-white/65 rounded-lg rounded-l-none cursor-pointer"
      >
        <Image
          width={200}
          height={200}
          className="object-cover w-full h-full"
          src={material.materialPreview}
          alt={`Preview imagen de ${material.name}`}
        />
      </header>
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: materialisSelected ? "9rem" : 0,
        }}
        className="bg-white/65  flex rounded-lg rounded-r-none items-center justify-center overflow-hidden"
      >
        <h2 className="text-gray-800 text-nowrap">{material.name}</h2>
      </motion.div>
    </motion.article>
  );
};

export default MaterialItem;
