import { Material } from "@/lib/db/getMaterials";
import React, { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  material: Material;
  setMaterialSelected: Dispatch<SetStateAction<Material | null>>;
  materialSelected: Material | null;
};

const MaterialItem: FC<Props> = ({
  material,
  setMaterialSelected,
  materialSelected,
}) => {
  const handleClickSelect = () => setMaterialSelected(material);

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
      className="flex flex-row-reverse w-72 rounded-lg"
    >
      <header
        onClick={handleClickSelect}
        className="size-28 p-2 bg-white/65 rounded-lg rounded-l-none cursor-pointer"
      >
        <img
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
          width: material.id === materialSelected?.id ? "9rem" : 0,
        }}
        className="bg-white/65  flex rounded-lg rounded-r-none items-center justify-center overflow-hidden"
      >
        <h2 className="text-gray-800 text-nowrap">{material.name}</h2>
      </motion.div>
    </motion.article>
  );
};

export default MaterialItem;
