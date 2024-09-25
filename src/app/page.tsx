"use client";
import RoomConfigurator from "@/components/RoomConfigurator";
import { IMAGE_BACKGROUND } from "@/constants";

export default function Home() {
  return (
    <main className="flex-1 bg-no-repeat">
      <div
        className="bg-cover bg-center bg-no-repeat fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${IMAGE_BACKGROUND})`,
        }}
      ></div>
      <RoomConfigurator />
    </main>
  );
}
