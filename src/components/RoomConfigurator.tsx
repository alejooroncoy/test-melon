import { Point } from "@/lib/db/getPoints"
import Points from "./Points"
import { useState } from "react"

const RoomConfigurator = () => {
  const [, setPointSelected] = useState<Point | null>(null)

  return (
    <div>
      <Points setPointSelected={setPointSelected} />
    </div>
  )
}

export default RoomConfigurator