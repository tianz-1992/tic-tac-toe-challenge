import ModeBot from "@/components/ModeBot";
import ScrollGame from "@/components/ScrollGame";
import SwitchXO from "@/components/SwitchXO";
import { cn } from "@/utils";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default async function HomePage() {

  return (
    <div className="flex flex-col items-center flex-1 justify-center min-h-screen text-context gap-y-8">
      <label
        htmlFor="title"
        className="flex justify-center font-semibold text-2xl"
      >
        Challenge - Tic Tac Toe
      </label>

      <ScrollGame />
      <div className="flex flex-col gap-y-6 border-2 w-full max-w-md p-4 rounded-lg shadow-lg">
        <div className="font-semibold text-center">
          เลือกสัญลักษณ์สำหรับผู้เล่น
        </div>

        <SwitchXO />
        <small className="text-center text-gray-400">
          หมายเหตุ: <span className="text-bold">X</span> จะเป็นผ่ายเริ่มก่อน
        </small>

        <hr />
        <label htmlFor="mode" className="flex justify-center font-semibold">
          ระดับความยาก
        </label>
        <ModeBot />
      </div>

      <Link
        href={"/game"}
        className={cn(
          "flex items-center space-x-2 justify-center",
          "cursor-pointer px-4 py-2 rounded-md bg-primary/50 text-white",
          "duration-150 hover:bg-primary hover:text-white hover:shadow-lg"
        )}
      >
        <span>เริ่มเกม</span>
        <IconArrowRight size={18} />
      </Link>
    </div>
  );
}
