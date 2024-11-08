import { BoardArrayProps, ModeType, PlayerType } from "@/types";
import { CheckWinner, MakeComputerMove, MakeSmartMove } from "@/utils";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type GameStoreType = {
  isLoading: boolean;
  board: BoardArrayProps;
  player: PlayerType;
  result: string | null;
  mode: ModeType;
  setIsLoading: (val: boolean) => void;
  setPlayer: (val: PlayerType) => void;
  setMode: (val: ModeType) => void;
  updateGame: (board: BoardArrayProps) => Promise<void>;
  setBoard: (board: BoardArrayProps) => void;
  resetBoard: () => void;
};

const initialBoard = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => null)
);

const useGameStore = create<GameStoreType>()(
  immer((set, get) => ({
    isLoading: false,
    board: initialBoard,
    mode: "easy",
    player: "X",
    result: null,
    resetBoard: () => {
      set((state) => {
        state.result = null;
        state.board = initialBoard;
      });
    },
    setIsLoading: (val: boolean) => {
      set((state) => {
        state.isLoading = val;
      });
    },
    setMode: (val: ModeType) => {
      set((state) => {
        state.mode = val;
      });
    },
    setPlayer: (val: PlayerType) => {
      set((state) => {
        state.player = val;
      });
    },
    updateGame: async (board: BoardArrayProps) => {
      set((state) => {
        state.isLoading = true;
        state.board = board;
      });

      const currentWinner = CheckWinner(board);
      set((state) => {
        state.result = currentWinner;
      });

      const hasEmptyCell = board.some((row) =>
        row.some((cell) => cell === null)
      );

      if (!hasEmptyCell && !currentWinner) {
        set((state) => {
          state.result = "D";
          state.isLoading = false;
        });
        return;
      }

      if (!currentWinner) {
        const botMark = get().player === "X" ? "O" : "X";
        const botMove =
          get().mode === "easy"
            ? MakeComputerMove(board)
            : MakeSmartMove(board, botMark, get().player);

        const [computerRow, computerCol] = botMove;
        const updatedBoard = board.map((row, rowIndex) =>
          row.map((cell, cellIndex) =>
            rowIndex === computerRow && cellIndex === computerCol
              ? botMark
              : cell
          )
        );

        setTimeout(() => {
          const botWinner = CheckWinner(updatedBoard);
          set((state) => {
            state.board = updatedBoard;
            state.result = botWinner;
            state.isLoading = false;
          });
        }, 1000);
      } else {
        set((state) => {
          state.isLoading = false;
        });
      }
    },
    setBoard: (board: BoardArrayProps) => {
      set((state) => {
        state.board = board;
      });
    },
  }))
);

export default useGameStore;
