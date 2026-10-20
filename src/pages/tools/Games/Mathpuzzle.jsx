import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";

function Puzzle() {

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const [difficulty, setDifficulty] = useState("medium");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // 🔥 Generate Question
  const generateQuestion = () => {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let c = Math.floor(Math.random() * 10) + 1;

    let result = Math.floor((a * b) / c);
    if (result === 0) result = 1;

    const correctC = Math.floor((a * b) / result);

    const hideIndex = Math.floor(Math.random() * 3);

    let display = [];
    let correctAnswer;

    if (hideIndex === 0) {
      display = ["?", "×", b, "÷", correctC, "=", result];
      correctAnswer = a;
    } else if (hideIndex === 1) {
      display = [a, "×", "?", "÷", correctC, "=", result];
      correctAnswer = b;
    } else {
      display = [a, "×", b, "÷", "?", "=", result];
      correctAnswer = correctC;
    }

    setQuestion({ display, correctAnswer });
  };

  // ▶️ Start Game
  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setTime(10);
    generateQuestion();
  };

  // ⏱ Timer
  useEffect(() => {
    if (isPlaying && time > 0) {
      const t = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(t);
    } else if (time === 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
    }
  }, [time, isPlaying]);

  // ✅ Submit Answer
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question) return;

    if (parseInt(answer) === question.correctAnswer) {
      setScore((prev) => prev + 1);
      setTime((prev) => prev + 2);
      generateQuestion();
    }

    setAnswer("");
  };

  return (
   <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">

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
        Math Puzzle
      </span>
  
    </div>
  </div>
  

      {/* Title */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
       Math Puzzle: Arithmetic Challenge
        </h1>

        <p className="max-w-3xl mx-auto mt-3 text-xl text-[var(--text-secondary)]">
        How fast can you solve for the missing number? Test your mental math speed and accuracy against the clock.
        </p>
      </div>


      <div className="max-w-4xl mx-auto mt-10 text-center">
        

        {/* MAIN CARD */}
<div className="p-8 bg-white dark:bg-[#121218] rounded-2xl shadow-md dark:shadow-none border border-gray-200 dark:border-[#2A2A35] transition-colors duration-300">

          <h1 className="mb-2 text-3xl font-bold text-yellow-400">
            🧠 Arithmetic Challenge
          </h1>

       <p className="mb-6 text-gray-500 dark:text-gray-400">
            Solve for '?' before the time runs out!
          </p>

          {/* 🎯 Difficulty */}
          {!isPlaying && !gameOver && (
            <>
              <h2 className="mb-4 text-lg">Choose Difficulty</h2>

              <div className="flex justify-center gap-4 mb-6">
                {["easy", "medium", "hard"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                 className={`px-6 py-3 rounded-xl border transition-all duration-200
${
  difficulty === level
    ? "border-yellow-400 text-yellow-400 bg-yellow-50 dark:bg-[#2A2112]"
    : "border-gray-300 dark:border-[#2A2A35] bg-white dark:bg-[#1A1A22] hover:border-yellow-400"
}`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={startGame}
                className="px-8 py-3 font-semibold text-black bg-yellow-500 rounded-lg"
              >
                Start Game
              </button>
            </>
          )}

          {/* 🎮 GAME UI */}
          {isPlaying && question && (
            <div className="mt-6">

              <div className="flex justify-between mb-2">
                <span>Score: {score}</span>
                <span>Time: {time}s</span>
              </div>

             <div className="w-full h-2 mb-6 bg-gray-200 dark:bg-[#2A2A35] rounded">
                <div
                  className="h-2 bg-yellow-400 rounded"
                  style={{ width: `${(time / 10) * 100}%` }}
                />
              </div>

              <div className="mb-6 text-4xl">
                {question.display.map((item, i) => (
                  <span key={i} className={item === "?" ? "text-yellow-400" : ""}>
                    {item}{" "}
                  </span>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex justify-center gap-2">
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A22] border border-gray-300 dark:border-[#2A2A35] text-black dark:text-white focus:outline-none focus:border-yellow-400"
                />

                <button className="px-6 py-2 text-black bg-yellow-500 rounded">
                  Submit
                </button>
              </form>
            </div>
          )}

          {/* 🏁 GAME OVER */}
          {gameOver && (
            <div className="mt-6 text-center">

              <h2 className="mb-2 text-2xl font-bold text-red-400">
                Game Over
              </h2>

              <p className="mb-4 text-lg">
                Your Score: <span className="text-yellow-400">{score}</span>
              </p>

              <button
                onClick={() => {
                  setGameOver(false);
                  setIsPlaying(false);
                }}
                className="px-6 py-2 font-semibold text-black bg-yellow-500 rounded"
              >
                Play Again
              </button>

            </div>
          )}

        </div>

        {/* LEADERBOARD */}
        <div className="mt-6 p-6 bg-white dark:bg-[#121218] rounded-2xl border border-gray-200 dark:border-[#2A2A35] shadow-md dark:shadow-none">
          <h2 className="text-xl text-yellow-400">🏆 Leaderboard</h2>
         <p className="mt-4 text-gray-500 dark:text-gray-400">Login to save your score.</p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
export default Puzzle;