import getMaterials, { Material } from "@/lib/db/getMaterials";
import { useEffect, useState } from "react";

const useMaterials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  const gettingMaterials = async () => {
    const materials = await getMaterials();
    setMaterials(materials);
  }

  useEffect(() => {
    gettingMaterials();
  }, []);

  return materials;
}

export default useMaterials;
