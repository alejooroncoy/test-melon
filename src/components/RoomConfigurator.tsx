import { Point } from "@/lib/db/getPoints"
import Materials from "./Materials"
import { useState } from "react"
import Points from "./Points"

const RoomConfigurator = () => {
  const [pointSelected, setPointSelected] = useState<Point | null>(null)

  return (
    <div>
      <Points pointSelected={pointSelected} setPointSelected={setPointSelected} />
      <Materials pointSelected={pointSelected} />
    </div>
  )
}

export default RoomConfigurator