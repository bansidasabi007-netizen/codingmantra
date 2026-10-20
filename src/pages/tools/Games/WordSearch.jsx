import { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";

const WORD_CATEGORIES = {
  Animals: ["ELEPHANT","LION","TIGER","ZEBRA","MONKEY","BEAR","WOLF"],
  Food: ["PIZZA","BURGER","PASTA","RICE","BREAD","CAKE"],
  Space: ["PLANET","STAR","GALAXY","MOON","COMET","ROCKET"],
  Sports: ["CRICKET","FOOTBALL","TENNIS","HOCKEY","GOLF"],
  Programming: ["REACT","JAVASCRIPT","PYTHON","JAVA","HTML","CSS"],
  Science: ["ATOM","GRAVITY","ENERGY","FORCE","MOTION"]
};

const GRID_SIZE = 12;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const directions = [
  [0,1],[1,0],[1,1],[-1,1],
  [0,-1],[-1,0],[-1,-1],[1,-1]
];

const createGrid = () =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => "")
  );

const placeWords = (grid, words) => {
  words.forEach(word => {
    let placed = false;

    while (!placed) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);

      let fits = true;

      for (let i = 0; i < word.length; i++) {
        const r = row + dir[0] * i;
        const c = col + dir[1] * i;

        if (
          r < 0 || c < 0 ||
          r >= GRID_SIZE || c >= GRID_SIZE ||
          (grid[r][c] && grid[r][c] !== word[i])
        ) {
          fits = false;
          break;
        }
      }

      if (fits) {
        for (let i = 0; i < word.length; i++) {
          grid[row + dir[0] * i][col + dir[1] * i] = word[i];
        }
        placed = true;
      }
    }
  });

  return grid;
};

const fillGrid = (grid) =>
  grid.map(row =>
    row.map(cell => cell || letters[Math.floor(Math.random() * 26)])
  );

const findWordCells = (grid, word) => {
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      for (let [dr, dc] of directions) {
        let cells = [];
        let match = true;

        for (let i = 0; i < word.length; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;

          if (
            nr < 0 || nc < 0 ||
            nr >= GRID_SIZE || nc >= GRID_SIZE ||
            grid[nr][nc] !== word[i]
          ) {
            match = false;
            break;
          }

          cells.push([nr, nc]);
        }

        if (match) return cells;
      }
    }
  }
  return [];
};

export default function WordSearch() {
  const [category, setCategory] = useState("Animals");
  const [grid, setGrid] = useState([]);
  const [words, setWords] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [foundCells, setFoundCells] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(null);
  const [hints, setHints] = useState(3);

  const changeTheme = (mode) => {
    const root = document.documentElement;
    mode === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  };

  // 🔥 shuffle function
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const generateGame = () => {
    const allWords = WORD_CATEGORIES[category];

    // ✅ random words every time
    const newWords = shuffleArray(allWords).slice(0, 6);

    let g = createGrid();
    g = placeWords(g, newWords);
    g = fillGrid(g);

    setGrid(g);
    setWords(newWords);
    setFoundWords([]);
    setFoundCells([]);
    setSelected([]);
    setHints(3);
  };

  useEffect(() => {
    generateGame();
  }, [category]);

  const getWord = (cells) =>
    cells.map(([r,c]) => grid[r][c]).join("");
const handleMove = (r, c) => {
  if (!isDragging) return;

  const last = selected[selected.length - 1];
  if (!last) return;

  const dr = r - last[0];
  const dc = c - last[1];

  // must be adjacent
  if (Math.abs(dr) > 1 || Math.abs(dc) > 1) return;

  const norm = [Math.sign(dr), Math.sign(dc)];

  // set direction on first move
  if (!direction) {
    setDirection(norm);
  } else {
    // enforce STRICT straight line (no skipping / bending)
    const expectedR = last[0] + direction[0];
    const expectedC = last[1] + direction[1];

    if (r !== expectedR || c !== expectedC) return;
  }

  // prevent reselect
  if (selected.some(([sr, sc]) => sr === r && sc === c)) return;

  setSelected(prev => [...prev, [r, c]]);
};

  const handleStart = (r,c) => {
    setIsDragging(true);
    setSelected([[r,c]]);
    setDirection(null);
  };

  const handleEnd = () => {
    setIsDragging(false);

    const word = getWord(selected);
    const reversed = word.split("").reverse().join("");

    let found = null;

    if (words.includes(word)) found = word;
    else if (words.includes(reversed)) found = reversed;

    if (found && !foundWords.includes(found)) {
      setFoundWords(prev => [...prev, found]);
      setFoundCells(prev => [...prev, ...selected]);
    }

    setSelected([]);
    setDirection(null);
  };

  const useHint = () => {
    if (hints === 0) return;

    const remaining = words.filter(w => !foundWords.includes(w));
    if (remaining.length === 0) return;

    const word = remaining[Math.floor(Math.random() * remaining.length)];
    const cells = findWordCells(grid, word);

    if (cells.length > 0) {
      setFoundWords(prev => [...prev, word]);
      setFoundCells(prev => [...prev, ...cells]);
      setHints(prev => prev - 1);

      setSelected(cells);
      setTimeout(() => setSelected([]), 700);
    }
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition">

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
          WordSearch
        </span>
    
      </div>
    </div>
    
     {/* Title */}
      <div className="mt-10 text-center">

        <h1 className="text-5xl font-bold text-[#F3A412]">
       Word Search
        </h1>

        <p className="max-w-3xl mx-auto mt-3 text-xl text-[var(--text-secondary)]">
       Find all the hidden words in the grid. Words can be placed horizontally, vertically, or diagonally.
        </p>

      </div>

<div className="flex flex-col gap-6 px-2 mx-auto mt-10 lg:flex-row sm:px-4 max-w-7xl">

  {/* GRID */}
  <div
    onMouseLeave={handleEnd}
    onMouseUp={handleEnd}
    className="w-full lg:w-[70%] bg-[var(--card-bg)] border border-[var(--border-color)] p-3 sm:p-6 rounded-2xl select-none"
  >

    <div>
      <span className="pl-2 text-xl font-bold root:text-black sm:text-2xl md:text-3xl sm:pl-6">
        <i className="ri-search-line text-[yellow] "></i> Find The words
      </span>
    </div>

    <div className="grid grid-cols-12 gap-2 sm:gap-3 md:gap-5 w-full md:w-[70%] mx-auto pt-6 sm:pt-10 md:pt-[50px]">

      {grid.map((row, r) =>
        row.map((cell, c) => {
          const isSelected = selected.some(([sr,sc]) => sr===r && sc===c);
          const isFound = foundCells.some(([fr,fc]) => fr===r && fc===c);

          return (
            <div
              key={`${r}-${c}`}

              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleStart(r,c);
              }}

              onMouseEnter={() => handleMove(r,c)}

              className={`flex items-center justify-center rounded-full font-bold transition
              
              text-[10px] sm:text-xs md:text-base
              w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11

                ${
                  isFound
                    ? "bg-green-500 text-black"
                    : isSelected
                    ? "bg-green-300 scale-110"
                    : "bg-[var(--card-bg)] border border-[var(--border-color)]"
                }
              `}
            >
              {cell}
            </div>
          );
        })
      )}
    </div>

  </div>

  {/* SIDE */}
  <div className="space-y-4 w-full lg:w-[30%]">

    {/* WORD LIST */}
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] p-3 sm:p-4 rounded-2xl">
      <h2 className="mb-2 text-sm sm:text-base">Word List</h2>

      <div className="grid grid-cols-2 gap-1 sm:gap-2">
        {words.map(word => (
          <div
            key={word}
            className={`text-center text-[10px] sm:text-sm px-1 sm:px-2 py-1 rounded transition
              ${
                foundWords.includes(word)
                  ? "bg-green-500 text-black line-through font-bold"
                  : "bg-[var(--bg-primary)] border border-[var(--border-color)]"
              }
            `}
          >
            {word}
          </div>
        ))}
      </div>
    </div>

    {/* CATEGORY */}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-2 sm:px-3 py-2 text-sm bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] rounded"
    >
      {Object.keys(WORD_CATEGORIES).map(cat => (
        <option key={cat} className="dark:text-white root:text-black">{cat}</option>
      ))}
    </select>

    {/* NEW GAME */}
    <button
      onClick={generateGame}
      className="w-full py-2 text-sm font-semibold text-black transition bg-yellow-400 sm:py-3 sm:text-base hover:bg-yellow-300 rounded-xl"
    >
      🔄 New Game
    </button>

    {/* HINT */}
    <button
      onClick={useHint}
      className="w-full py-2 sm:py-3 text-sm sm:text-base text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl"
    >
      💡 Hint ({hints} left)
    </button>

    {/* PDF */}
    <button
      onClick={downloadPDF}
      className="w-full py-2 sm:py-3 text-sm sm:text-base text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl"
    >
      📄 Download as PDF
    </button>

  </div>
</div>

      <Footer />
    </div>
  );
}

// export default Word;