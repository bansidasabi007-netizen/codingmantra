import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";

function Tictok() {

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const [showGameOver, setShowGameOver] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const [winningCells, setWinningCells] = useState([]);

  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const checkWinner = (newBoard) => {

    for (let pattern of winPatterns) {

      const [a,b,c] = pattern;

      if(newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]){

        setWinner(newBoard[a]);
        setWinningCells(pattern);
        setShowGameOver(true);

        if(newBoard[a] === "X") setXWins(prev => prev + 1);
        else setOWins(prev => prev + 1);

        return;
      }
    }

    if(newBoard.every(cell => cell !== null)){
      setDraw(true);
      setShowGameOver(true);
    }

  };

  const handleClick = (index) => {

    if(board[index] || winner || draw) return;

    const newBoard = [...board];

    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);

    checkWinner(newBoard);

    setXTurn(!xTurn);
  };

  const resetGame = () => {

    setBoard(Array(9).fill(null));
    setWinner(null);
    setDraw(false);
    setWinningCells([]);
    setXTurn(true);
    setShowGameOver(false);

  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
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
           Tic Tac Toe
         </span>
     
       </div>
     </div>
     

      {/* Title */}
      <div className="mt-10 text-center">

        <h1 className="text-5xl font-bold text-[#F3A412]">
          Tic Tac Toe
        </h1>

        <p className="max-w-3xl mx-auto mt-3 text-xl text-[var(--text-secondary)]">
          A classic game of Xs and Os. Get three in a row to win.
        </p>

      </div>

      {/* Game Container */}
      <div className="max-w-xl mx-auto mt-10">

        {/* Mode Buttons */}
        <div className="flex gap-4 mb-6">

          <button className="flex-1 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)]">
            Play Offline
          </button>

          <button
            onClick={() => setShowLoginPopup(true)}
            className="flex-1 py-3 font-semibold text-black bg-yellow-500 rounded-lg"
          >
            Play With Friends
          </button>

        </div>

        {/* Game Board */}
        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          <p className="mb-6 text-center text-[var(--text-secondary)]">
            Turn: Player {xTurn ? "X" : "O"}
          </p>
<div className="grid grid-cols-3 gap-4">

  {board.map((cell,index)=>{

    const isWin = winningCells.includes(index);

    return(
      <div
        key={index}
        onClick={()=>handleClick(index)}
        className={`h-32 flex items-center justify-center cursor-pointer rounded-lg border border-[var(--border-color)]
        ${
          isWin
            ? "bg-yellow-400 dark:bg-yellow-900"
            : cell === "X"
            ? "bg-blue-100 dark:bg-blue-900/40"
            : cell === "O"
            ? "bg-red-100 dark:bg-red-900/40"
            : "bg-gray-100 dark:bg-[var(--card-bg)]"
        }
        transition`}
      >

        {cell === "X" && (
          <span className="font-bold text-blue-500 dark:text-blue-400 text-7xl">
            X
          </span>
        )}

        {cell === "O" && (
          <span className="font-bold text-red-500 dark:text-red-400 text-7xl">
            O
          </span>
        )}

      </div>
    )

  })}

</div>

        </div>

        {/* Leaderboard */}
        <div className="p-6 mt-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          <h3 className="mb-6 text-lg text-center">
            🏆 Session Leaderboard
          </h3>

          <div className="flex justify-around text-center">

            <div>
              <p className="mb-2">Player X Wins</p>
              <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-[var(--card-bg)] border border-[var(--border-color)]">
                {xWins}
              </div>
            </div>

            <div>
              <p className="mb-2">Player O Wins</p>
              <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full bg-[var(--card-bg)] border border-[var(--border-color)]">
                {oWins}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* GAME OVER POPUP */}
      {showGameOver && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/70">

          <div className="p-8 text-center rounded-xl w-80 bg-[var(--card-bg)] border border-[var(--border-color)]">

            <h2 className="mb-4 text-2xl font-bold text-yellow-500">
              Game Over
            </h2>

            {winner && <p className="mb-4 text-lg">🎉 Player {winner} Wins!</p>}
            {draw && <p className="mb-4 text-lg">🤝 Match Tied</p>}

            <button
              onClick={resetGame}
              className="w-full py-2 font-semibold text-black bg-yellow-500 rounded-lg"
            >
              Play Again
            </button>

          </div>

        </div>

      )}

      {/* LOGIN REQUIRED POPUP */}
      {showLoginPopup && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/70">

          <div className="p-8 text-center rounded-xl w-80 bg-[var(--card-bg)] border border-[var(--border-color)]">

            <h2 className="mb-4 text-2xl font-bold text-yellow-500">
              Login Required
            </h2>

            <p className="mb-6 text-[var(--text-secondary)]">
              Please login to play with friends.
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => setShowLoginPopup(false)}
                className="flex-1 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)]"
              >
                Cancel
              </button>

              <button
                className="flex-1 py-2 font-semibold text-black bg-yellow-500 rounded-lg"
              >
                Login
              </button>

            </div>

          </div>

        </div>

      )}

      <Footer />

    </div>
  );
}

export default Tictok;