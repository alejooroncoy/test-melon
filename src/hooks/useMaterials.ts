import getMaterials, { Material } from "@/lib/db/getMaterials";
import { useCallback, useEffect, useState } from "react";

const useMaterials = (pointId?: string) => {
  const [materials, setMaterials] = useState<Material[]>([]);

  const searchMaterials = useCallback(async () => {
    if (!pointId) return;
    const materials = await getMaterials(pointId);
    setMaterials(materials);
  }, [pointId]);

  useEffect(() => {
    searchMaterials();
  }, [searchMaterials]);

  return materials;
}

export default useMaterials;
