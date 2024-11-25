"use client";

import useGameStore from "@/stores/game.store";
import { cn } from "@/utils";
import { IconArrowLeft, IconRefresh } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const resetBoard = useGameStore((state) => state.resetBoard);
  const isLoading = useGameStore((state) => state.isLoading);

  const handlerGoBack = () => {
    if (isLoading) return;
    router.push("/");
    resetBoard();
  };

  return (
    <div className="flex justify-between items-center w-full max-w-md">
      <button
        className={cn(
          "flex items-center gap-x-2 border duration-150 px-4 py-1 rounded-md shadow",
          isLoading
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-500/20 hover:bg-gray-500 hover:text-white"
        )}
        type="button"
        disabled={isLoading}
        onClick={handlerGoBack}
      >
        <IconArrowLeft size={16} />
        <span>ย้อนกลับ</span>
      </button>

      <button
        className={cn(
          "flex items-center gap-x-2 border duration-150 px-4 py-1 rounded-md shadow",
          "bg-primary/20 hover:bg-primary hover:text-white"
        )}
        type="button"
        disabled={isLoading}
        onClick={resetBoard}
      >
        <IconRefresh size={16} />
        <span>เริ่มใหม่</span>
      </button>
    </div>
  );
};

export default Navigation;
