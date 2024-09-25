"use client";
import RoomConfigurator from "@/components/RoomConfigurator";
import { IMAGE_BACKGROUND } from "@/constants";

export default function Home() {
  return (
    <main
      className="flex-1 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGE_BACKGROUND})`,
      }}
    >
      <RoomConfigurator />
    </main>
  );
}
