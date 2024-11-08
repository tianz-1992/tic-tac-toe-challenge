import Navigation from "@/components/Navigation";
import ScrollGame from "@/components/ScrollGame";
import { TicTacToeBoard } from "@/components/TicTacToeGame";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 justify-center min-h-screen text-context gap-y-8">
      <div className="text-center text-2xl font-semibold">Tic Tac Toe</div>
      <ScrollGame />

      <TicTacToeBoard />

      <Navigation />
    </div>
  );
}
