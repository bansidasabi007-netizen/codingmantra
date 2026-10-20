import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const games = [
  {
    title: "Sudoku",
    desc: "Play unlimited Sudoku puzzles with multiple difficulty levels.",
    icon: "🧩",
    link: "Suduko"
  },
  {
    title: "Tic Tac Toe",
    desc: "A classic game of Xs and Os. Can you get three in a row?",
    icon: "#",
    link: "Tictok"
  },
  {
    title: "2048 Game",
    desc: "Slide and combine tiles to reach the 2048 tile in this addictive puzzle game.",
    icon: "🧩",
    link: "Game2048"
  },

  {
    title: "Word Search",
    desc: "Find all the hidden words in a grid of letters. A relaxing puzzle for all ages.",
    icon: "🧩",
    link: "WordSearch"
  },
  {
    title: "Math Puzzle",
    desc: "Solve the famous water jug riddle, a classic interview logic problem.",
    icon: "🧩",
    link: "Puzzle"
  },
  {
    title: "Brain Teasers",
    desc: "Challenge your mind with a collection of classic logic puzzles and riddles.",
    icon: "🧠",
    link: "Brain"
  },
];


function Games() {
    const changeTheme = (mode) => {
        const root = document.documentElement;

        if (mode === "dark") root.classList.add("dark");
        else if (mode === "light") root.classList.remove("dark");
        else {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", systemDark);
        }
    };


    return (
        <div className="min-h-screen px-6 pb-10 dark:bg-[#09090B] text-[var(--text-primary)]">
            {/* Navbar */}
            <Navbar changeTheme={changeTheme} />




            <div className="w-full p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 mt-[20px]">

                <Link to="/" className="hover:underline">
                    Home
                </Link>

                {" > "}

                <span className="font-semibold text-black dark:text-white">
                    Games
                </span>

            </div>

            {/* Title */}
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold text-[#F3A412]">
                    Brain Games & Puzzles
                </h1>

                <p className="mt-3 max-w-3xl text-[18px] mx-auto text-[var(--text-secondary)]">
                    Take a break and challenge your mind with our collection of free online games.
                </p>


                <p className="mt-3 max-w-6xl text-[15px] mx-auto text-[var(--text-secondary)]">
                    Note: These games are for entertainment purposes only and are completely free to play. They do not involve any monetary transactions, prizes, or gifts.


                </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mb-10">
                <button className="px-6 py-3 font-semibold text-black transition bg-yellow-500 rounded-lg hover:bg-yellow-400">
                    🏆 View All Leaderboards
                </button>
            </div>
<div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">

  {games.map((game, index) => (

    <Link key={index} to={game.link}>

      <div className="p-6 transition border rounded-xl cursor-pointer bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[#F3A412]">

        <div className="flex items-start gap-4">

          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 text-xl text-yellow-500 rounded-full bg-yellow-500/10 shrink-0">
            {game.icon}
          </div>

          {/* Text */}
          <div>
            <h3 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">
              {game.title}
            </h3>

            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {game.desc}
            </p>
          </div>

        </div>

      </div>

    </Link>

  ))}

</div>
            {/* Content Section */}
            <div className="w-full px-1 mt-20">

                <h2 className="text-3xl font-bold text-[#F3A412]">
                    Exercise Your Mind for Fun and Fitness
                </h2>

                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    Welcome to our corner of the internet dedicated to fun and mental fitness. Our collection of games is designed not just to entertain, but to provide a stimulating workout for your brain. Engaging with logic puzzles and strategy games is a proven way to sharpen your cognitive skills and keep your mind active.</p>

            </div>


            {/* FAQ Section */}
            <div className="px-1 mt-20 mb-24">

                <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
                    Frequently Asked Questions
                </h2>
<div className="space-y-4">

  <details className="w-full mx-auto p-4  border-b border-[var(--border-color)] group">
    <summary className="flex items-center justify-between font-medium cursor-pointer">
      Are these games play to free?
      <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
    </summary>

    <p className="mt-3 text-sm text-[var(--text-secondary)]">
      Yes, all the games and puzzles in this section are completely free to play directly in your browser. There are no downloads, sign-ups, or fees required.
    </p>
  </details>

  <details className="w-full mx-auto p-4  border-b border-[var(--border-color)] group">
    <summary className="flex items-center justify-between font-medium cursor-pointer">
      Do I need To be an expert to play?
      <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
    </summary>

    <p className="mt-3 text-sm text-[var(--text-secondary)]">
      Not at all! Our games are designed for all skill levels. Games like Tic-Tac-Toe are classics for everyone, while others like Sudoku and 2048 are easy to learn but offer deep strategic challenges for seasoned players.
    </p>
  </details>

  <details className="w-full mx-auto p-4  border-b border-[var(--border-color)] group">
    <summary className="flex items-center justify-between font-medium cursor-pointer">
      How do brain games help improve cognitive skills?
      <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
    </summary>

    <p className="mt-3 text-sm text-[var(--text-secondary)]">
      Playing logic puzzles is a great way to exercise your brain. They can help improve concentration, pattern recognition, logical thinking, and problem-solving skills.
    </p>
  </details>

  <details className="w-full mx-auto p-4 border-b border-[var(--border-color)] group">
    <summary className="flex items-center justify-between font-medium cursor-pointer">
      Will my progress be saved if I leave the page?
      <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
    </summary>

    <p className="mt-3 text-sm text-[var(--text-secondary)]">
      Currently, game progress is stored only for your current session. If you close or refresh the page, the game will reset.
    </p>
  </details>

</div>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Games;