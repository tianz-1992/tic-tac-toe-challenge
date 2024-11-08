"use client";

import useGameStore from "@/stores/game.store";
import { cn } from "@/utils";

const ModeBot = () => {
  const mode = useGameStore((state) => state.mode);
  const setMode = useGameStore((state) => state.setMode);

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center bg-gray-100 h-[60px] w-full space-x-4 rounded-lg shadow-inner px-4 py-2">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            mode === "easy" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setMode("easy")}
        >
          ง่าย
        </div>
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            mode === "hard" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setMode("hard")}
        >
          ยาก
        </div>
      </div>
    </div>
  );
};

export default ModeBot;
