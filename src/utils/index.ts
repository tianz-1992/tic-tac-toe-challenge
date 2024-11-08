import { BoardArrayProps } from "@/types";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(...input));
};

export const CheckWinner = (board: BoardArrayProps): string | null => {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }

  if (
    board[0][0] &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  return null;
};

export const MakeComputerMove = (board: BoardArrayProps): [number, number] => {
  const emptyCells: [number, number][] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (!cell) {
        emptyCells.push([rowIndex, cellIndex]);
      }
    });
  });

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};

export const MakeSmartMove = (
  board: BoardArrayProps,
  computerMark: string,
  playerMark: string
): [number, number] => {
  const winningMove = (mark: string): [number, number] | null => {
    const lines: [number, number][][] = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const line of lines) {
      const values = line.map(([row, col]) => board[row][col]);
      if (
        values.filter((v) => v === mark).length === 2 &&
        values.includes(null)
      ) {
        return line[values.indexOf(null)] as [number, number];
      }
    }
    return null;
  };

  const computerWinningMove = winningMove(computerMark);
  if (computerWinningMove) return computerWinningMove;

  const playerWinningMove = winningMove(playerMark);
  if (playerWinningMove) return playerWinningMove;

  if (!board[1][1]) return [1, 1];

  const corners: [number, number][] = [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2],
  ];
  const emptyCorners = corners.filter(([row, col]) => !board[row][col]);
  if (emptyCorners.length > 0) {
    const randomCornerIndex = Math.floor(Math.random() * emptyCorners.length);
    return emptyCorners[randomCornerIndex];
  }

  const emptyCells: [number, number][] = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (!cell) emptyCells.push([rowIndex, cellIndex]);
    });
  });

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};
