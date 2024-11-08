export type BoardArrayProps = Array<Array<string | null>>;

export type BoardProps = {
  board: Array<Array<string | null>>;
  handleClick: (row: number, col: number) => void;
};

export type PlayerType = "X" | "O";
export type ModeType = "easy" | "hard";
