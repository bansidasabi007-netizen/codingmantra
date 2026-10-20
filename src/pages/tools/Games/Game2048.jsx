import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";

function Game2048() {

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };
  const size = 4;

  const createBoard = () => {
    const board = Array(size)
      .fill(0)
      .map(() => Array(size).fill(0));

    addRandom(board);
    addRandom(board);

    return board;
  };

  const addRandom = (board) => {
    const empty = [];

    board.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell === 0) empty.push({ r, c });
      })
    );

    if (empty.length === 0) return;

    const { r, c } = empty[Math.floor(Math.random() * empty.length)];

    board[r][c] = Math.random() > 0.5 ? 2 : 4;
  };

  const [board, setBoard] = useState(createBoard());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(
    Number(localStorage.getItem("best2048")) || 0
  );

  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const clone = (b) => b.map((row) => [...row]);

  const slide = (row) => row.filter((v) => v);

  const combine = (row) => {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        row[i] *= 2;
        row[i + 1] = 0;

        setScore((s) => s + row[i]);

        if (row[i] === 2048) setWin(true);
      }
    }
    return row;
  };

  const operate = (row) => {
    row = slide(row);
    row = combine(row);
    row = slide(row);

    while (row.length < size) row.push(0);

    return row;
  };

  const moveLeft = () => {
    let newBoard = board.map((row) => operate(row));
    updateBoard(newBoard);
  };

  const moveRight = () => {
    let newBoard = board.map((row) =>
      operate([...row].reverse()).reverse()
    );
    updateBoard(newBoard);
  };

  const moveUp = () => {
    let newBoard = clone(board);

    for (let c = 0; c < size; c++) {
      let col = newBoard.map((r) => r[c]);
      col = operate(col);
      col.forEach((v, r) => (newBoard[r][c] = v));
    }

    updateBoard(newBoard);
  };

  const moveDown = () => {
    let newBoard = clone(board);

    for (let c = 0; c < size; c++) {
      let col = newBoard.map((r) => r[c]).reverse();
      col = operate(col).reverse();
      col.forEach((v, r) => (newBoard[r][c] = v));
    }

    updateBoard(newBoard);
  };

  const updateBoard = (newBoard) => {
    const prev = clone(board);

    addRandom(newBoard);

    setHistory((h) => [...h, prev]);
    setBoard(newBoard);

    if (score > best) {
      setBest(score);
      localStorage.setItem("best2048", score);
    }

    if (!canMove(newBoard)) setGameOver(true);
  };

  const canMove = (b) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (b[r][c] === 0) return true;

        if (b[r][c] === b[r][c + 1]) return true;
        if (b[r][c] === b[r + 1]?.[c]) return true;
      }
    }
    return false;
  };
  const handleKey = (e) => {

    if (gameOver) return;

    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
    }

    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowUp") moveUp();
    if (e.key === "ArrowDown") moveDown();
  };


  const newGame = () => {
    setBoard(createBoard());
    setScore(0);
    setGameOver(false);
    setWin(false);
    setHistory([]);
  };

  const undo = () => {
    if (history.length === 0) return;

    const prev = history[history.length - 1];

    setBoard(prev);
    setHistory((h) => h.slice(0, -1));
  };

  const colors = {
    0: "bg-gray-200 dark:bg-gray-700 text-transparent",
    2: "bg-[#eee4da] text-black",
    4: "bg-[#ede0c8] text-black",
    8: "bg-[#f2b179] text-white",
    16: "bg-[#f59563] text-white",
    32: "bg-[#f67c5f] text-white",
    64: "bg-[#f65e3b] text-white",
    128: "bg-[#edcf72] text-white",
    256: "bg-[#edcc61] text-white",
    512: "bg-[#edc850] text-white",
    1024: "bg-[#edc53f] text-white",
    2048: "bg-[#edc22e] text-white",
  };

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
            2048Game

          </span>

        </div>
      </div>


      {/* Title */}
      <div className="mt-10 text-center">

        <h1 className="text-5xl font-bold text-[#F3A412]">
          2048 Game
        </h1>

        <p className="max-w-3xl mx-auto mt-3 text-xl text-[var(--text-secondary)]">
          Join the numbers and get to the 2048 tile!
        </p>

      </div>

      <div className="max-w-md mx-auto mt-10">

        {/* Score */}
        {/* Game Header */}
        <div className="flex items-center justify-between mb-4">

          {/* 2048 Title */}
          <h2 className="text-4xl font-bold text-[#F3A412]">
            2048
          </h2>

          {/* Score Boxes */}
          <div className="flex gap-3">

            <div className="px-5 py-2 text-center rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
              <p className="text-xs text-[var(--text-secondary)]">
                SCORE
              </p>
              <p className="text-lg font-bold">
                {score}
              </p>
            </div>

            <div className="px-5 py-2 text-center rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
              <p className="text-xs text-[var(--text-secondary)]">
                BEST
              </p>
              <p className="text-lg font-bold">
                {best}
              </p>
            </div>

          </div>

        </div>

        {/* Board */}
        <div
          tabIndex={0}
          onKeyDown={handleKey}
          className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] focus:outline-none"
        >

          <div className="grid grid-cols-4 gap-3">

            {board.flat().map((cell, i) => (

              <div
                key={i}
                className={`h-20 flex items-center justify-center text-2xl font-bold rounded ${colors[cell]}`}
              >
                {cell !== 0 && cell}
              </div>

            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={newGame}
            className="px-6 py-2 font-semibold text-black bg-yellow-500 rounded"
          >
            New Game
          </button>

          <button
            onClick={undo}
            className="px-6 py-2 rounded border border-[var(--border-color)]"
          >
            Undo
          </button>

        </div>

      </div>

      {/* Leaderboard */}
      <div className="max-w-md p-6 mx-auto mt-14 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h3 className="flex items-center gap-2 text-xl font-bold">
            🏆 Leaderboard
          </h3>

          <button className="px-4 py-1 text-sm font-semibold text-white bg-black rounded hover:opacity-80">
            View Full Leaderboard
          </button>

        </div>

        {/* Table Header */}
        <div className="grid grid-cols-3 pb-3 mb-3 text-sm font-semibold border-b border-[var(--border-color)] text-[var(--text-secondary)] ">

          <span>Rank</span>
          <span>Player</span>
          <span className="text-right">Score</span>

        </div>

        {/* Player Row */}
        <div className="grid items-center grid-cols-3 py-3 ">

          <span className="font-bold">1</span>

          <div className="flex items-center gap-2">
            <img
              src="https://api.dicebear.com/7.x/bottts/svg?seed=coding"
              alt="avatar"
              className="rounded-full w-7 h-7"
            />
            <span>Coding Mantra</span>
          </div>

          <span className="font-bold text-right">
            1,980
          </span>

        </div>

        {/* Login Message */}
        <p className="mt-6 text-sm text-center text-[var(--text-secondary)]">

          <span className="font-semibold text-yellow-500 cursor-pointer">
            Login
          </span>{" "}
          to save your score.

        </p>

      </div>

      {/* Game Over Popup */}
      {gameOver && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <div className="w-[350px] p-8 text-center rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl animate-scale">

            <h2 className="mb-3 text-3xl font-bold text-red-500">
              Game Over
            </h2>

            <p className="mb-4 text-[var(--text-secondary)]">
              Better luck next time!
            </p>

            <div className="flex justify-center gap-6 mb-6">

              <div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Your Score
                </p>
                <p className="text-2xl font-bold text-yellow-500">
                  {score}
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Best
                </p>
                <p className="text-2xl font-bold">
                  {best}
                </p>
              </div>

            </div>

            <div className="flex flex-col gap-3">

              <button
                className="w-full py-2 font-semibold text-black transition bg-yellow-500 rounded-lg hover:scale-105"
              >
                Submit Score
              </button>

              <button
                onClick={newGame}
                className="w-full py-2 font-semibold transition rounded-lg border border-[var(--border-color)] hover:bg-[var(--hover-bg)]"
              >
                Try Again
              </button>

            </div>

          </div>

        </div>

      )}

      {/* Win Popup */}
      {win && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/70">

          <div className="p-8 text-center rounded-xl bg-[var(--card-bg)]">

            <h2 className="mb-4 text-2xl font-bold text-green-400">
              🎉 You reached 2048!
            </h2>

            <button
              onClick={() => setWin(false)}
              className="px-6 py-2 font-semibold text-black bg-yellow-500 rounded"
            >
              Continue
            </button>

          </div>

        </div>

      )}

      <Footer />

    </div>
  );
}

export default Game2048;