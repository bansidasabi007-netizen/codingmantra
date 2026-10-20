import { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Mail, Users, Plus } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";


// const correctChars = input.split("").filter((char, i) => char === currentText[i]).length;
const paragraphs = [
  `Technology has revolutionized the way we live and work. From smartphones to artificial intelligence, innovation continues to push the boundaries of what is possible.`,
  `Typing is an essential skill in the digital world. Improving your speed and accuracy can significantly boost productivity and efficiency.`,
  `React makes it painless to create interactive UIs. Design simple views for each state in your application.`
];

function Typing() {

  const navigate = useNavigate()
  const changeTheme = (mode) => {
  const root = document.documentElement;

  if (mode === "dark") root.classList.add("dark");
  else if (mode === "light") root.classList.remove("dark");
  else {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", systemDark);
  }
};

  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);

const resetTest = () => {
  const newText = paragraphs[Math.floor(Math.random() * paragraphs.length)];

  setCurrentText(newText);
  setInput("");
  setTimeLeft(60);
  setStarted(false);
  setErrors(0);
  setWpm(0);
  setAccuracy(100);
};



useEffect(() => {
  if (!started || timeLeft === 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [started, timeLeft]);
const [currentText, setCurrentText] = useState(
  paragraphs[Math.floor(Math.random() * paragraphs.length)]
);

useEffect(() => {
  const correctChars = input.split("").filter((char, i) => char === currentText[i]).length;

  const totalChars = input.length;
  const err = totalChars - correctChars;

  const acc = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;

  const words = input.trim().split(/\s+/).length;
  const timeSpent = 60 - timeLeft || 1;

  const calculatedWPM = Math.round((words / timeSpent) * 60);

  setErrors(err > 0 ? err : 0);
  setAccuracy(acc);
  setWpm(calculatedWPM || 0);
}, [input, timeLeft, currentText]);

const typingRef = useRef(null);
useEffect(() => {
  typingRef.current?.focus();
}, []);

const data = [
    { rank: 1, name: "Sulay Sumaria", score: 74, img: "https://i.pravatar.cc/40?img=1" },
    { rank: 2, name: "Bhaumik Panchal", score: 69, img: "https://i.pravatar.cc/40?img=2" },
    { rank: 3, name: "Harry Rialdi", score: 68, img: null },
    { rank: 4, name: "Abdullah", score: 57, img: "https://i.pravatar.cc/40?img=3" },
    { rank: 5, name: "Disha Mehta", score: 51, img: "https://i.pravatar.cc/40?img=4" },
    { rank: 6, name: "Param Mehta", score: 50, img: "https://i.pravatar.cc/40?img=5" },
    { rank: 7, name: "Coding Mantra", score: 48, img: null },
    { rank: 8, name: "Sunay Yadav", score: 42, img: "https://i.pravatar.cc/40?img=6" },
    { rank: 9, name: "Shehzad Lakhani", score: 30, img: null },
  ];


  
  return (
    <div className="flex flex-col min-h-screen dark:bg-black text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />
      <div className="w-full max-w-4xl px-4 mx-auto my-6">

  <div className="mx-auto max-w-7xl">

    <div
      className="
        flex items-center
        gap-4

        px-5
        py-4

        rounded-2xl

        border

        border-[#E5E7EB]
        dark:border-[#232531]

        bg-white
        dark:bg-[#121218]

        shadow-[0_2px_10px_rgba(0,0,0,0.04)]
        dark:shadow-none

        transition-all duration-300
      "
    >

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="
          text-[#666]
          dark:text-gray-400

          transition-all duration-300

          hover:text-[#F3A412]
        "
      >
        <RiArrowLeftLine className="text-[20px]" />
      </button>

      {/* HOME */}
      <Link
        to="/"
        className="
          text-[#666]
          dark:text-gray-400

          hover:text-[#F3A412]

          transition-all duration-300
        "
      >
        <RiHome5Line className="text-[18px]" />
      </Link>

      <span
        className="
          text-[#B0B0B8]
          dark:text-[#4B5563]
        "
      >
        &gt;
      </span>

      {/* TOOLS */}
      <Link
        to="/tools"
        className="
          text-[15px]

          text-[#666]
          dark:text-gray-400

          hover:text-[#F3A412]

          transition-all duration-300
        "
      >
        Tools
      </Link>

      <span
        className="
          text-[#B0B0B8]
          dark:text-[#4B5563]
        "
      >
        &gt;
      </span>

      {/* IMAGE TOOLS */}
      <Link
        to="/tools/learning"
        className="
          text-[15px]

          text-[#666]
          dark:text-gray-400

          hover:text-[#F3A412]

          transition-all duration-300
        "
      >
        Learning Tools 
      </Link>

      <span
        className="
          text-[#B0B0B8]
          dark:text-[#4B5563]
        "
      >
        &gt;
      </span>

      {/* CURRENT */}
      <span
        className="
          text-[15px]
          font-semibold

          text-[#111111]
          dark:text-white
        "
      >
           Typing Speed Test
      </span>

    </div>

  </div>

</div>


{/* Title */}
<div className="mt-6 mb-12 text-center">

  {/* TITLE */}
  <h1 className="text-5xl font-bold text-[#F3A412]">
    Typing Speed Test
  </h1>

  {/* DESCRIPTION */}
  <p className="max-w-2xl mx-auto mt-4 text-[var(--text-secondary)] leading-relaxed">
    Find out how fast you can type. Start the test, type the sample text, and see your Words Per Minute (WPM) score.
  </p>

</div>


 <div className="w-full px-6 mt-10">
      <div className="max-w-3xl mx-auto">

        {/* CARD */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

          {/* HEADER */}
          <h2 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
            ⚡ Test Your Speed
          </h2>

          <p className="mb-6 text-sm text-[var(--text-secondary)]">
            Type the text below. The test will begin when you start typing and will last for 60 seconds or until you finish.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-4 mb-6 text-center">
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Time Left</p>
              <p className="text-2xl font-bold text-yellow-500">{timeLeft}s</p>
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">WPM</p>
              <p className="text-2xl font-bold text-yellow-500">{wpm}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Accuracy</p>
              <p className="text-2xl font-bold text-yellow-500">{accuracy}%</p>
            </div>
            <div>
              <p className="text-sm text-[var(--text-secondary)]">Errors</p>
              <p className="text-2xl font-bold text-yellow-500">{errors}</p>
            </div>
          </div>


{/* INPUT */}
<div
  ref={typingRef}
  tabIndex={0}
onKeyDown={(e) => {
  if (timeLeft === 0) return;

  // 🚫 STOP SPACE SCROLL
  if (e.code === "Space") {
    e.preventDefault();
  }

  // 🚫 STOP ENTER SCROLL
  if (e.key === "Enter") {
    e.preventDefault();
    return;
  }

  if (!started) setStarted(true);

  if (e.key === "Backspace") {
    setInput((prev) => prev.slice(0, -1));
    return;
  }

  // ignore special keys
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  if (e.key.length === 1) {
    const expectedChar = currentText[input.length];

    // ✅ ONLY allow correct char (including space)
    if (e.key === expectedChar) {
      setInput((prev) => prev + e.key);
    }
  }
}}
  className="p-5 mb-6 font-mono text-2xl leading-loose 
             bg-[var(--bg-primary)] border border-[var(--border-color)] 
             rounded-lg cursor-text outline-none"
>
  {currentText.split("").map((char, index) => {
    let color = "text-gray-400";

    if (index < input.length) {
      color =
        input[index] === char
          ? "text-green-400"
          : "text-red-400";
    }

    return (
      <span key={index} className={color}>
        {char}
      </span>
    );
  })}

  <span className="inline-block w-[2px] h-5 ml-1 bg-yellow-500 animate-pulse"></span>
</div>
{/* BUTTON */}
<div className="flex justify-center">
  <button
    onClick={resetTest}
    className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-black bg-yellow-500 rounded-md hover:bg-yellow-400"
  >
    <RotateCcw size={16} />
    New Test
  </button>
</div>
    

{/* ✅ ADD THIS */}
</div>   {/* closes CARD */}
</div>   {/* closes container */}
</div>

  <div className="w-full px-6 mt-6">
      <div className="max-w-3xl mx-auto">

        {/* CARD */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Trophy className="text-yellow-500" size={18} />
              <h2 className="text-lg font-semibold">
                Leaderboard (Top 10)
              </h2>
            </div>

            <button className="px-4 py-2 text-sm border rounded-md 
                               border-[var(--border-color)] 
                               hover:border-yellow-500">
              View Full Leaderboard
            </button>
          </div>

          {/* TABLE HEADER */}
          <div className="grid grid-cols-3 pb-2 text-sm text-[var(--text-secondary)] border-b border-[var(--border-color)]">
            <p>Rank</p>
            <p>Player</p>
            <p className="text-right">Score (WPM)</p>
          </div>

          {/* LIST */}
          <div className="mt-2">
            {data.map((item) => (
              <div
                key={item.rank}
                className="grid items-center grid-cols-3 py-3 border-b border-[var(--border-color)]"
              >
                {/* Rank */}
                <p className="text-[var(--text-primary)] font-medium">
                  {item.rank}
                </p>

                {/* Player */}
                <div className="flex items-center gap-3">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 text-sm text-white bg-yellow-500 rounded-full">
                      {item.name.charAt(0)}
                    </div>
                  )}

                  <span className="text-[var(--text-primary)] text-sm">
                    {item.name}
                  </span>
                </div>

                {/* Score */}
                <p className="font-semibold text-right text-yellow-500">
                  {item.score}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>


      {/* Content Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20">

        <h2 className="text-3xl font-bold text-[#F3A412]">
Why Typing Speed Matters
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
In a world dominated by digital communication, typing is a fundamental skill. Whether you're a student writing an essay, a developer writing code, or a professional responding to emails, your typing speed directly impacts your productivity. Improving your Words Per Minute (WPM) allows you to get more done in less time.</p>

        <p className=" text-[var(--text-secondary)] leading-relaxed">
How is Typing Speed Measured?</p>
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Words Per Minute (WPM): This is the standard metric. A "word" is typically defined as five characters, including spaces. The formula is (Total Characters Typed / 5) / Time in Minutes.</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Accuracy: Speed is important, but not if it's full of errors. Accuracy measures the percentage of correctly typed characters. Our test highlights errors in real-time so you can correct them.</p>            
      </div>


      {/* FAQ Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-4 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
What is Good WPM score?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

An average typing speed is around 40 WPM. A speed of 60-70 WPM is considered good, and professional typists often exceed 100 WPM. The key is to find a balance between speed and accuracy. </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
How Can I improve My typing speed?  
      <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

Consistent practice is the most effective way. Focus on touch typing (typing without looking at the keys) and maintaining proper posture. Use tools like this one to regularly test yourself and track your progress over time. </p>
          </details>


  <div className="w-full px-6 mt-17">
      <div className="max-w-6xl mx-auto">

        {/* CONTAINER */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

          {/* TITLE */}
          <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
            More Tools in Learning Tools
          </h2>

          {/* TOOL CARD */}
          <div className="w-full max-w-sm p-4 transition border rounded-lg cursor-pointer 
                          border-[var(--border-color)] bg-[var(--bg-primary)] 
                          hover:border-yellow-500 hover:scale-[1.02]">

            <div className="flex items-center justify-between">

              {/* LEFT */}
              <div className="flex items-center gap-5">

                {/* ICON */}
                <div className="flex items-center justify-center w-10 h-10 text-[#F3A412] bg-[#F3A412]/20 rounded-full">
                  ⚡
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                   Learning pathaway Generated (AI)
                  </p>
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">

                {/* BADGE */}
                <span className="px-3 py-1 text-xs font-semibold text-black bg-yellow-500 rounded-full">
                  Powerful
                </span>

                {/* ARROW */}
                <ArrowRight size={16} className="text-[var(--text-secondary)]" />

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

        </div>

      </div>

      <Footer />
    </div>



  );
}

export default Typing;