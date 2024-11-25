"use client";

import useGameStore from "@/stores/game.store";
import { MakeComputerMove, MakeSmartMove } from "@/utils";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { toast } from "sonner";
import { Board } from "./Board";

export const TicTacToeBoard = () => {
  const resultGame = useGameStore((state) => state.result);
  const isLoading = useGameStore((state) => state.isLoading);
  const player = useGameStore((state) => state.player);
  const board = useGameStore((state) => state.board);
  const mode = useGameStore((state) => state.mode);
  const setBoard = useGameStore((state) => state.setBoard);
  const updateGame = useGameStore((state) => state.updateGame);
  const setIsLoading = useGameStore((state) => state.setIsLoading);
  const resetBoard = useGameStore((state) => state.resetBoard);

  const { user } = useUser();

  useEffect(() => {
    if (player === "O" && !resultGame) {
      activeBotFirst();
    }
  }, [player, resultGame]);

  useEffect(() => {
    if (!resultGame || !user) return;
    setIsLoading(true);

    let showToast = true;

    let { points, bonus } = user.unsafeMetadata as {
      points: number;
      bonus: number;
    };

    if (resultGame !== "D") {
      const scoreChange = resultGame === player ? 1 : points > 0 ? -1 : 0;
      points += scoreChange;
    }

    if (points >= 3) {
      points = 0;
      bonus += 1;
      toast.success("ยินดีด้วย คุณชนะ", {
        description: "คุณได้ชนะ ครบ 3 ครั้ง - ได้รับคะแนนพิเศษ 1 คะแนน",
      });
      showToast = false;
    }

    user.update({
      unsafeMetadata: { points, bonus },
    });

    if (resultGame === "D") {
      toast.warning("ไม่มีผู้ชนะในเกมนี้ !");
    } else {
      if (resultGame === player) {
        if (showToast) {
          toast.success("ยินดีด้วย คุณชนะ", {
            description: "คุณได้รับคะแนนเพิ่ม 1 คะแนน",
          });
        }
      } else {
        if (points > 0) {
          toast.error("คุณได้รับความพ้ายแพ้", {
            description: "คุณเสียคะแนน 1 คะแนน",
          });
        } else {
          toast.error("คุณได้รับความพ้ายแพ้");
        }
      }
    }

    setTimeout(() => {
      resetBoard();
    }, 2000);
  }, [resultGame]);

  const activeBotFirst = () => {
    setIsLoading(true);

    const bot = player === "X" ? "O" : "X";

    const [computerRow, computerCol] =
      mode === "easy"
        ? MakeComputerMove(board)
        : MakeSmartMove(board, bot, player);

    const updatedComputerBoard = board.map((newRow, rowIndex) =>
      newRow.map((cell, cellIndex) =>
        rowIndex === computerRow && cellIndex === computerCol ? "X" : cell
      )
    );
    setTimeout(() => {
      setBoard(updatedComputerBoard);
      setIsLoading(false);
    }, 1000);
  };

  const handleOnClick = async (row: number, col: number) => {
    if (board[row][col] || resultGame || isLoading) {
      return;
    }

    const updatedPlayerBoard = board.map((newRow, rowIndex) =>
      newRow.map((cell, cellIndex) =>
        rowIndex === row && cellIndex === col ? player : cell
      )
    );

    await updateGame(updatedPlayerBoard);
  };

  return <Board board={board} handleClick={handleOnClick} />;
};
