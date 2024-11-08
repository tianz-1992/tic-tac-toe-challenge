"use client";

import { cn } from "@/utils";
import { IconCircle, IconX } from "@tabler/icons-react";
import { useState } from "react";

const SwitchXO = () => {
  const [player, setPlayer] = useState<string>("x");
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center bg-gray-100 h-[60px] w-full space-x-4 rounded-lg shadow-inner px-4 py-2">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            player === "x" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setPlayer("x")}
        >
          <IconX size={32} stroke={4} />
        </div>
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-lg w-full h-full cursor-pointer",
            player === "y" && "text-white bg-primary shadow-lg"
          )}
          onClick={() => setPlayer("y")}
        >
          <IconCircle size={32} stroke={4} />
        </div>
      </div>
    </div>
  );
};

export default SwitchXO;
