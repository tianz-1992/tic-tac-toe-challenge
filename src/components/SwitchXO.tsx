"use client";

import useGameStore from "@/stores/game.store";
import { cn } from "@/utils";
import { IconCircle, IconX } from "@tabler/icons-react";

const SwitchXO = () => {
  const player = useGameStore((state) => state.player);
  const setPlayer = useGameStore((state) => state.setPlayer);

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center bg-gray-100 h-[60px] w-full space-x-4 rounded-lg shadow-inner px-4 py-2">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            player === "X" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setPlayer("X")}
        >
          <IconX size={32} stroke={4} />
        </div>
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            player === "O" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setPlayer("O")}
        >
          <IconCircle size={32} stroke={4} />
        </div>
      </div>
    </div>
  );
};

export default SwitchXO;
