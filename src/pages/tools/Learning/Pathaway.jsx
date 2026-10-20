import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Mail, Users, Plus } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {RiArrowRightLine, RiSearchLine, } from "react-icons/ri";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";


function Pathaway() {

    const navigate = useNavigate();


  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };
  const [level, setLevel] = useState("Beginner");
  const [tech, setTech] = useState("");
const levels = ["Beginner", "Intermediate", "Advanced"];



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
            Create Your Learning Pathway
      </span>

    </div>

  </div>

</div>

      {/* Title */}
   <div className="mt-6 text-center mb-14">

  {/* ICON */}
  <div className="flex justify-center mb-4">
    <i className="text-6xl text-[#F3A412] ri-lightbulb-line"></i>
  </div>

  {/* TITLE */}
  <h1 className="text-[25px] font-bold text-[#F3A412]">
    Create Your Learning Pathway
  </h1>

  {/* DESCRIPTION */}
  <p className="max-w-2xl mx-auto mt-4 text-gray-400">
    Select your current coding knowledge level and technology of interest to generate a customized learning plan with modules and challenges designed just for you.
  </p>

</div>

   <div className="w-full px-6 mt-10">
      <div className="max-w-4xl mx-auto">

        {/* CARD */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

          {/* TITLE */}
          <h2 className="mb-6 text-xl font-semibold text-center text-[var(--text-primary)]">
            Create Your Custom Pathway
          </h2>

          {/* EXPERIENCE */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium text-[var(--text-secondary)]">
              Select Your Experience Level
            </p>

            <div className="grid grid-cols-3 gap-4">
              {levels.map((item) => (
                <button
                  key={item}
                  onClick={() => setLevel(item)}
                  className={`py-3 rounded-lg border text-sm font-medium transition dark:bg-black
                    ${
                      level === item
                        ? "border-yellow-500 text-[var(--text-primary)] "
                        : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-yellow-500 dark:bg-black "
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium text-[var(--text-secondary)]">
              Technology of Interest
            </p>

            <input
              type="text"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              placeholder="e.g., React, Python, Next.js"
              className="w-full px-4 py-3 text-sm border rounded-lg outline-none
                         bg-[var(--bg-primary)] border-[var(--border-color)] 
                         text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
          </div>

          {/* BUTTON */}
          <button
            className="w-full py-3 font-medium text-black transition bg-yellow-500 rounded-lg hover:bg-yellow-400"
          >
            Generate Pathway
          </button>

        </div>
      </div>
    </div>

    
      {/* Content Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20">

        <h2 className="text-3xl font-bold text-[#F3A412]">
Why Use a Personalized Learning Pathway?
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Learning a new technology can be overwhelming. With countless tutorials, courses, and articles available, it's hard to know where to start or what to learn next. A personalized learning pathway cuts through the noise by providing a structured, step-by-step guide tailored to your specific goals and experience level.</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
How Our AI Generates Your Pathway
This tool uses a powerful AI model trained to understand programming concepts and educational progression. When you provide your experience level and technology of interest, the AI:</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Analyzes the Topic: It breaks down the technology into its core components and prerequisite knowledge.
Filters by Level: It filters out concepts that are too basic for an advanced user or too complex for a beginner.</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Structures the Content: It organizes the topics into a logical sequence of modules, from fundamental concepts to more advanced applications.</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Finds Resources: It suggests relevant, high-quality learning resources and practical coding challenges for each module to reinforce your learning.</p>       
      </div>


      {/* FAQ Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
How accurate are the generated pathway?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

The AI generates pathways based on common educational structures for a given technology. While they provide an excellent and logical starting point, they are a guide, not a rigid curriculum. Feel free to adapt the path based on your interests and what you find most challenging.      </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
CAn I use this for non-coding  topics?              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

The model is primarily optimized for programming languages, frameworks, and software development concepts. While it might provide plausible-sounding results for other topics, the quality and relevance of the modules and links may not be as high.       </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
Why are coding Challenges inclded?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Passive learning (watching videos, reading articles) is only half the battle. Active learning, which involves solving real problems through coding challenges, is essential for truly internalizing concepts and building practical skills. It's the difference between knowing the path and walking the path.    </p>
          </details>


  <div className="w-full px-6 mt-17">
      <div className="max-w-5xl mx-auto">

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
              <div className="flex items-center gap-3">

                {/* ICON */}
                <div className="flex items-center justify-center w-10 h-10 text-[#F3A412] bg-[#F3A412]/20 rounded-full">
                  ⚡
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                    Typing <br /> Speed <br /> Test
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

export default Pathaway;