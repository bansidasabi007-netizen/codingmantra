import { Copy, Trash2, Download } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

const faqs = [
  {
    q: "Why not just copy and paste real text?",
    a: "Using real content can be distracting and may not represent the final layout properly. Lorem Ipsum keeps focus on design and structure."
  },
  {
    q: "How do I use the generated text?",
    a: "Simply generate the text, copy it, and paste it into your design, website, or document wherever placeholder content is needed."
  }
];

function Lorem() {

    const navigate = useNavigate()


  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

    const [count, setCount] = useState(3);
  const [type, setType] = useState("paragraphs");
  const [output, setOutput] = useState("");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  // 🔥 GENERATE LOGIC
  const generateText = () => {
    let result = "";

    if (type === "paragraphs") {
      result = Array(count)
        .fill(lorem)
        .join("\n\n");
    } else if (type === "sentences") {
      result = Array(count)
        .fill(lorem)
        .join(" ");
    } else {
      result = Array(count)
        .fill("Lorem")
        .join(" ");
    }

    setOutput(result);
  };

  const copyText = () => navigator.clipboard.writeText(output);
  const clearText = () => setOutput("");

 
const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why not just copy and paste real text?",
      a: "Using readable text (like a news article) can be distracting. Stakeholders and clients might start reading the content and providing feedback on it, rather than focusing on the design and layout, which is the purpose of a mockup."
    },
    {
      q: "How do I use the generated text?",
      a: "Simply generate the text, copy it, and paste it into your design, website, or document wherever placeholder content is needed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
                  <div className="max-w-5xl px-4 mx-auto my-6">
            
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
                   to="/tools/content"
                    className="
                      text-[15px]
            
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                    Text & Content Tools

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
           Lorem Ipsum Generator
                  </span>
            
                </div>
            
              </div>
            
            </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Lorem Ipsum Generator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
Create placeholder text for your designs and mockups in seconds.    </p>
      </div>


<div className="w-full px-6 mt-10">
  <div className="max-w-5xl mx-auto">

    {/* MAIN CARD */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      {/* TITLE */}
      <h2 className="flex items-center gap-2 mb-4 text-lg font-semibold text-[var(--text-primary)]">
        📄 Generator Controls
      </h2>

      {/* CONTROL BOX */}
      <div className="p-6 mb-6 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)] text-center">

        <p className="mb-4 text-sm text-[var(--text-secondary)]">
          Generate placeholder text and copy it to your clipboard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">

          <span className="text-sm text-[var(--text-primary)]">
            Generate
          </span>

          <input
            type="number"
            className="w-16 px-3 py-2 bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded outline-none"
          />

          <select
            className="px-3 py-2 bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded outline-none"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>

          <button
            onClick={generateText}
            className="px-5 py-2 font-medium text-black bg-[#F3A412] rounded-md hover:bg-yellow-400 transition"
          >
            Generate
          </button>

        </div>
      </div>

      {/* OUTPUT BOX */}
      <div className="relative p-4 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)] min-h-[200px]">

        {/* ACTION BUTTONS */}
        <div className="absolute flex gap-2 top-3 right-3">

          <button
            onClick={copyText}
            className="p-2 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[#F3A412]"
          >
            <Copy size={16} className="text-[var(--text-primary)]" />
          </button>

          <button
            onClick={clearText}
            className="p-2 text-white bg-red-600 rounded hover:bg-red-500"
          >
            <Trash2 size={16} />
          </button>

        </div>

        {/* OUTPUT TEXT */}
        <textarea
          placeholder="Generated text will appear here..."
          className="w-full h-40 text-sm bg-transparent text-[var(--text-primary)] outline-none resize-none"
        />

      </div>

    </div>

  </div>
</div>


    <div className="w-full px-6 mt-16">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
      What is Lorem Ipsum?
    </h2>

    {/* CONTENT */}
    <p className="mb-3 leading-relaxed text-[var(--text-secondary)]">
      "Lorem ipsum" is the common name for a type of placeholder text used in the design and publishing industries. It's used to fill space in a document or a mockup before the final content is available. Using placeholder text allows designers to focus on the visual layout and typography without being distracted by the meaning of the content.
    </p>

    <p className="leading-relaxed text-[var(--text-secondary)]">
      The text itself is derived from a 1st-century BC Latin text by Cicero, but it has been scrambled and modified over the centuries to the point where it is now nonsensical, which is precisely why it works so well as a placeholder.
    </p>

  </div>
</div>

   <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-6 text-2xl font-bold text-[#F3A412]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-2">

          {faqs.map((item, index) => (
            <div key={index} className="pb-4 border-b border-[#2a2a2e]">

              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer"
              >
<p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.q}
                </p>

                <ChevronDown
                  size={18}
                  className={`text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>

      <Footer />
    </div>
  );
}

export default Lorem;