import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SIZE = 9;

const emptyGrid = () =>
  Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

function Sudoku() {
  const [grid, setGrid] = useState(emptyGrid());
  const [solution, setSolution] = useState(emptyGrid());
  const solutionRef = useRef([]); // ✅ FIX

  const [selected, setSelected] = useState(null);
  const [difficulty, setDifficulty] = useState(35);
  const [status, setStatus] = useState("");

  const [fixedCells, setFixedCells] = useState([]);
  const [errors, setErrors] = useState([]);

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const isSafe = (grid, r, c, num) => {
    for (let x = 0; x < 9; x++) {
      if (grid[r][x] === num || grid[x][c] === num) return false;
    }

    const startRow = r - (r % 3);
    const startCol = c - (c % 3);

    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (grid[i + startRow][j + startCol] === num) return false;

    return true;
  };

  const solve = (grid) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] === 0) {
          for (let num of shuffle([1,2,3,4,5,6,7,8,9])) {
            if (isSafe(grid, r, c, num)) {
              grid[r][c] = num;
              if (solve(grid)) return true;
              grid[r][c] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const generatePuzzle = () => {
    let newGrid = emptyGrid();
    solve(newGrid);

    let solved = newGrid.map((row) => [...row]);
    let puzzle = newGrid.map((row) => [...row]);

    let remove = 81 - difficulty;

    while (remove > 0) {
      let r = Math.floor(Math.random() * 9);
      let c = Math.floor(Math.random() * 9);

      if (puzzle[r][c] !== 0) {
        puzzle[r][c] = 0;
        remove--;
      }
    }

    setGrid(puzzle);
    setSolution(solved);
    solutionRef.current = solved; // ✅ IMPORTANT FIX

    setStatus("");

    const fixed = puzzle.map(row => row.map(cell => cell !== 0));
    setFixedCells(fixed);

    setErrors([]);
    setHintsLeft(3);
  };

  useEffect(() => {
    generatePuzzle();
  }, [difficulty]);

  // ✅ FIXED WIN CHECK
  const checkWin = (currentGrid) => {
    const sol = solutionRef.current;

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (currentGrid[r][c] !== sol[r][c]) return false;
      }
    }
    return true;
  };

  // ✅ FIXED VALIDATION
const validateGrid = (currentGrid) => {
  const sol = solutionRef.current; // ✅ USE REF
  const newErrors = [];

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (
        currentGrid[r][c] !== 0 &&
        currentGrid[r][c] !== sol[r][c] // ✅ FIXED
      ) {
        newErrors.push(`${r}-${c}`);
      }
    }
  }

  setErrors(newErrors);
};

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selected) return;

      const [r, c] = selected;
      if (fixedCells[r]?.[c]) return;

      const num = parseInt(e.key);

      if (num >= 1 && num <= 9) {
        const newGrid = grid.map(row => [...row]);
        newGrid[r][c] = num;

        setGrid(newGrid);
        validateGrid(newGrid);

        if (checkWin(newGrid)) setStatus("You Win 🎉");
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        const newGrid = grid.map(row => [...row]);
        newGrid[r][c] = 0;

        setGrid(newGrid);
        validateGrid(newGrid);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selected, grid, fixedCells]);

  const handleInput = (num) => {
    if (!selected) return;

    const [r, c] = selected;
    if (fixedCells[r]?.[c]) return;

    const newGrid = grid.map(row => [...row]);
    newGrid[r][c] = num;

    setGrid(newGrid);
    validateGrid(newGrid);

    if (checkWin(newGrid)) setStatus("You Win 🎉");
  };

 

const checkSolutionNow = () => {
  validateGrid(grid);
  const hasEmpty = grid.some(row => row.includes(0));

  if (hasEmpty) {
    setStatus("Incomplete Puzzle ⚠️");
    return;
  }

  if (checkWin(grid)) {
    setStatus("Correct Solution ✅");
  } else {
    setStatus("Incorrect Solution ❌");
  }
};
const giveHint = () => {
  if (hintsLeft <= 0) {
  setStatus("No Hints Left ❌");
  return;
}
  let targetCell = selected;

  // If no cell selected, find first empty cell
  if (!targetCell) {
    outerLoop:
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (grid[r][c] === 0) {
          targetCell = [r, c];
          break outerLoop;
        }
      }
    }
  }

  // If puzzle already full
  if (!targetCell) {
    setStatus("Puzzle Already Complete ✅");
    return;
  }

  const [r, c] = targetCell;

  // Prevent editing fixed cells
  if (fixedCells[r]?.[c]) {
    setStatus("Cannot Hint Fixed Cell ⚠️");
    return;
  }

  const newGrid = grid.map(row => [...row]);

  // Fill correct answer
  newGrid[r][c] = solutionRef.current[r][c];

  setGrid(newGrid);
  setHintsLeft(prev => prev - 1);

  // Remove error if existed
  setErrors(prev =>
    prev.filter(err => err !== `${r}-${c}`)
  );

  // Mark hinted cell as fixed
  const updatedFixed = fixedCells.map(row => [...row]);
  updatedFixed[r][c] = true;
  setFixedCells(updatedFixed);

  // Auto select next empty cell
  let nextSelected = null;

  outerLoop:
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (newGrid[row][col] === 0) {
        nextSelected = [row, col];
        break outerLoop;
      }
    }
  }

  setSelected(nextSelected);

  // Win check
  if (checkWin(newGrid)) {
    setStatus("You Win 🎉");
  } else {
    setStatus("Hint Used 💡");
  }
};

const [hintsLeft, setHintsLeft] = useState(3);
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      <div className="px-4 mx-auto mt-6 max-w-7xl">
  <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-sm overflow-x-auto">

    <button
      onClick={() => window.history.back()}
      className="text-[var(--text-secondary)] hover:text-[#F3A412] transition"
    >
      ←
    </button>

    <Link
      to="/"
      className="text-[var(--text-secondary)] hover:text-[#F3A412]"
    >
      Home
    </Link>

    <span className="text-[var(--text-secondary)]">›</span>

    <Link
      to="/Games"
      className="text-[var(--text-secondary)] hover:text-[#F3A412]"
    >
      Games
    </Link>

    <span className="text-[var(--text-secondary)]">›</span>

    <span className="font-semibold text-[#F3A412]">
      Sudoku
    </span>

  </div>
</div>

      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">Sudoku</h1>
        <p className="max-w-3xl mx-auto mt-3 text-[var(--text-secondary)]">
          A classic logic puzzle. Fill the 9×9 grid correctly.
        </p>
      </div>

     <div className="max-w-xl p-6 mx-auto mt-10 rounded-2xl bg-white dark:bg-[#121218] border border-gray-200 dark:border-[#2A2A35] shadow-md dark:shadow-none">

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">
            Difficulty (Filled Squares): {difficulty}
          </span>

          <button
            onClick={generatePuzzle}
            className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-400"
          >
            New Game
          </button>
        </div>

        <input
          type="range"
          min="20"
          max="60"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
          className="w-full mb-6"
        />

     <div className="grid grid-cols-9 gap-1 mb-6 p-2 rounded-xl bg-gray-100 dark:bg-[#111118]">
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => setSelected([r, c])}
              className={`h-10 flex items-center justify-center text-lg font-semibold cursor-pointer border transition-all duration-150
border-gray-300 dark:border-[#2A2A35]

${
  selected &&
  selected[0] === r &&
  selected[1] === c

    ? `border-2 border-[#F3A412] shadow-sm ${
        cell
          ? "text-[#F3A412] bg-white dark:bg-[#181820]"
          : "bg-white dark:bg-[#181820] text-black dark:text-white"
      }`

    : errors.includes(`${r}-${c}`)

    ? "bg-red-100 dark:bg-red-500 text-red-700 dark:text-white"

    : fixedCells[r]?.[c]

    ? "bg-gray-200 dark:bg-[#24242E] text-black dark:text-white"

    : "bg-white dark:bg-[#181820] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#20202A]"
}
`}
              >
                {cell || ""}
              </div>
            ))
          )}
        </div>

        {status && (
          <div className="mb-4 font-semibold text-center text-green-500">
            {status}
          </div>
        )}

        <div className="grid grid-cols-9 gap-2">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button
              key={num}
              onClick={() => handleInput(num)}
              className="py-2 text-sm sm:text-base rounded-lg font-semibold bg-white dark:bg-[#1C1C24] border border-gray-300 dark:border-[#2A2A35] hover:bg-yellow-400 hover:text-black transition"            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={giveHint}
            className="flex-1 py-2 rounded-lg bg-white dark:bg-[var(--card-bg)] border border-gray-200 dark:border-[var(--border-color)] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
           💡 Hint ({hintsLeft})
          </button>

          <button
            onClick={checkSolutionNow}
           className={`flex-1 py-2 rounded-lg transition
${
  hintsLeft <= 0
    ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed opacity-60"
    : "bg-white dark:bg-[var(--card-bg)] border border-gray-200 dark:border-[var(--border-color)] hover:bg-gray-100 dark:hover:bg-gray-800"
}`}
          >
            Check Solution
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Sudoku;