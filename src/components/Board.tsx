"use client";
import useGameStore from "@/stores/game.store";
import { BoardProps } from "@/types";
import { cn } from "@/utils";

export const Board = ({ board, handleClick }: BoardProps) => {
  const isLoading = useGameStore((state) => state.isLoading);
  return (
    <div className="flex items-center justify-center flex-col ">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-[10px]">
          {row.map((cell, cellIndex) => (
            <button
              key={cellIndex}
              className={cn(
                "w-[100px] h-[100px] rounded-none border-none text-center align-middle text-[50px] font-bold bg-gray-200",
                "outline-none mb-[10px] hover:text-inherit rounded-md",
                isLoading && "bg-gray-200/80 cursor-not-allowed",
                cell && `cell_${cell.toLowerCase()}`
              )}
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
