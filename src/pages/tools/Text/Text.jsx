import { Copy, Trash2, Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function Text() {

    
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

  const [original, setOriginal] = useState("");
  const [changed, setChanged] = useState("");
  const [result, setResult] = useState("");

  // 🔥 COMPARE LOGIC (simple highlight)
  const handleCompare = () => {
    const origWords = original.split(" ");
    const changedWords = changed.split(" ");

    let output = "";

    origWords.forEach((word, i) => {
      if (word !== changedWords[i]) {
        output += `<span class="bg-red-500/30 text-red-500 px-1">${word}</span> `;
      } else {
        output += `<span>${word}</span> `;
      }
    });

    changedWords.forEach((word, i) => {
      if (word !== origWords[i]) {
        output += `<span class="bg-green-500/30 text-green-500 px-1">${word}</span> `;
      }
    });

    setResult(output);
  };

  const copyText = (text) => navigator.clipboard.writeText(text);
  const clearText = (type) => {
    if (type === "original") setOriginal("");
    else setChanged("");
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


  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does the highlighting work?",
      a: "Our tool uses a standard 'diff' algorithm. Text that has been added in the second panel is typically highlighted in green, while text that has been removed is highlighted in red. Unchanged text remains with no special background."
    },
    {
      q: "Is my data secure?",
      a: "Yes. All comparisons are performed directly in your browser. Your data is never uploaded or stored on any server, ensuring complete privacy and security."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  
  const navigate = useNavigate();

  const tools = [
    {
      title: "Case Converter & Word Counter",
      icon: "Aa",
      path: "/tools/text"
    },
    {
      title: "Lorem Ipsum Generator",
      icon: "✍️",
      path: "/tools/lorem"
    }
  ];


  return (
<div className="min-h-screen transition-colors duration-300 dark:bg-black text-[var(--text-primary)]">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}

                  <div className="px-4 mx-auto my-6 max-w-8xl">
            
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
   Text & File Comparator
                  </span>
            
                </div>
            
              </div>
            
            </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Text & File Comparator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
A powerful "diff checker" to easily compare two files or blocks of text and see the differences highlighted.    </p>
      </div>


    <div className="min-h-screen px-6 py-10 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-7xl">

        {/* CARD */}
        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          {/* TITLE */}
          <h2 className="flex items-center gap-2 mb-2 text-xl font-semibold">
            🔗 Text & File Comparator
          </h2>
          <p className="mb-6 text-sm text-[var(--text-secondary)]">
            Paste your text into the two panels or upload files to see the differences highlighted.
          </p>

          {/* INPUT PANELS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* ORIGINAL */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Original Text</p>

                <div className="flex gap-2">
                  <button className="btn-icon"><Upload size={14} /> Upload</button>
                  <button onClick={() => copyText(original)} className="btn-icon"><Copy size={14} /> Copy</button>
                  <button onClick={() => clearText("original")} className="btn-danger"><Trash2 size={14} /> Clear</button>
                </div>
              </div>

              <textarea
                value={original}
                onChange={(e) => setOriginal(e.target.value)}
                className="w-full h-48 p-3 text-sm border rounded bg-[var(--bg-primary)] border-[var(--border-color)] outline-none"
              />
            </div>

            {/* CHANGED */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Changed Text</p>

                <div className="flex gap-2">
                  <button className="btn-icon"><Upload size={14} /> Upload</button>
                  <button onClick={() => copyText(changed)} className="btn-icon"><Copy size={14} /> Copy</button>
                  <button onClick={() => clearText("changed")} className="btn-danger"><Trash2 size={14} /> Clear</button>
                </div>
              </div>

              <textarea
                value={changed}
                onChange={(e) => setChanged(e.target.value)}
                className="w-full h-48 p-3 text-sm border rounded bg-[var(--bg-primary)] border-[var(--border-color)] outline-none"
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleCompare}
              className="px-6 py-2 font-medium text-black bg-[#F3A412] rounded-md hover:bg-yellow-400"
            >
              Compare
            </button>
          </div>

          {/* RESULT */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">Comparison Result</h3>

            <div
              className="p-4 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)] min-h-[150px]"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          </div>

        </div>

      </div>
    </div>


<div className="w-full px-6 ">
  <div className="mx-auto max-w-7xl">

    {/* TITLE */}
    <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
      Why Use a Text Comparator?
    </h2>

    {/* DESCRIPTION */}
    <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
      A text comparator, often called a "diff checker," is a tool that analyzes two pieces of text and highlights the differences between them. This is an incredibly useful utility for developers, writers, editors, and anyone who needs to track changes between two versions of a document.
    </p>

    {/* SUB TITLE */}
    <p className="mb-2 font-semibold text-[var(--text-primary)]">
      Common Use Cases
    </p>

    {/* LIST */}
    <ul className="space-y-2 text-[var(--text-secondary)]">

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Code Reviews:
        </span>{" "}
        Developers can easily see what changes have been made to a file between two versions, making code reviews faster and more accurate.
      </li>

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Document Editing:
        </span>{" "}
        Writers and editors can compare drafts of an article or document to see what has been added, removed, or altered.
      </li>

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Configuration Files:
        </span>{" "}
        System administrators can compare configuration files to troubleshoot issues or verify changes.
      </li>

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Checking for Plagiarism:
        </span>{" "}
        Educators and content creators can compare documents to check for similarities.
      </li>

    </ul>

  </div>
</div>

  <div className="w-full px-6 mt-6">
      <div className="mx-auto max-w-7xl">

        {/* TITLE */}
        <h2 className="mb-6 text-2xl font-bold text-[#F3A412]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-2">

          {faqs.map((item, index) => (
            <div key={index} className="pb-4 border-b border-[var(--border-color)]">

              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {item.q}
                </p>

                <ChevronDown
                  size={18}
                  className={`text-[var(--text-secondary)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>

      <div className="w-full px-6 mt-16">
      <div className="mx-auto max-w-7xl">

        {/* CONTAINER */}
        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          {/* TITLE */}
          <h2 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
            More Tools in Text & Content Tools
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => navigate(tool.path)}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer group bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[#F3A412] transition"
              >

                {/* LEFT */}
                <div className="flex items-center gap-3">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-[#F3A412] rounded-full bg-[#F3A412]/10">
                    {tool.icon}
                  </div>

                  {/* TITLE */}
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {tool.title}
                  </p>

                </div>

                {/* RIGHT ARROW */}
                <ArrowRight
                  size={18}
                  className="text-[var(--text-secondary)] group-hover:text-[#F3A412]"
                />

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>

      <Footer />
    </div>
  );
}

export default Text;