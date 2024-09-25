import { Point } from "@/lib/db/getPoints"
import Materials from "./Materials"
import { useState } from "react"
import dynamic from "next/dynamic"

const Points = dynamic(() => import('./Points'), {
  loading: () => <p>Cargando puntos...</p>,
  ssr: false
})

const RoomConfigurator = () => {
  const [pointSelected, setPointSelected] = useState<Point | null>(null)

  return (
    <div>
      <Points setPointSelected={setPointSelected} />
      <Materials pointSelected={pointSelected} />
    </div>
  )
}

export default RoomConfigurator