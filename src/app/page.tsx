"use client";
import { IMAGE_BACKGROUND } from "@/constants";
export default function Home() {

  return (
    <main className="flex-1 bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: `url(${IMAGE_BACKGROUND})`,
    }}>
    </main>
  );
}
