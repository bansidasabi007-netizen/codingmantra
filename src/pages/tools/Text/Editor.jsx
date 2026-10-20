import { Copy, Trash2, Download } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";



function Editor() {

  const [acceptReturns, setAcceptReturns] = useState(true);
    


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
 

   const [text, setText] = useState(
    "Hello World! This is a sample text to demonstrate the features of this awesome online tool. You can try editing this text."
  );

  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    sentences: 0,
    paragraphs: 0,
  });

  // 🔥 LIVE STATS
  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;

    setStats({ words, chars, sentences, paragraphs });
  }, [text]);

  // 🔥 CASE FUNCTIONS
  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());

  const toTitle = () =>
    setText(
      text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    );

  const toSentence = () =>
    setText(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
    );

  // 🔥 ACTIONS
  const copyText = () => navigator.clipboard.writeText(text);
  const clearText = () => setText("");

const downloadText = () => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "text.txt";
  a.click();

  URL.revokeObjectURL(url);
};

const [activeTab, setActiveTab] = useState("case");
const [findText, setFindText] = useState("");
const [replaceText, setReplaceText] = useState("");

const faqss = [
  {
    q: "Is my text secure?",
    a: "Yes, all processing happens in your browser. Your text is not stored or shared."
  },
  {
    q: "How is 'Title Case' different from just capitalizing words?",
    a: "Title Case capitalizes the first letter of each major word, while simple capitalization may not follow proper grammar rules."
  },
  {
    q: "How does the sentence counter work?",
    a: "It detects sentence-ending punctuation like periods, question marks, and exclamation points."
  }
];

  const navigate = useNavigate();

  const tools = [
    {
      title: "Lorem Ipsum Generator",
      link: "/lorem-generator",
      icon: "ri-file-text-line",
    },
    {
      title: "Text & File Comparator",
      link: "/text-comparator",
      icon: "ri-git-compare-line",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is my text secure?",
      a: "Yes. All operations are performed directly in your browser. Your text is never sent to our servers, ensuring your data remains completely private and secure.",
    },
    {
      q: 'How is "Title Case" different from just capitalizing words?',
      a: "Title Case follows proper grammar rules by capitalizing major words while leaving small words lowercase when appropriate.",
    },
    {
      q: "How does the sentence counter work?",
      a: "It detects sentence-ending punctuation like periods, question marks, and exclamation marks to count sentences.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-black text-[var(--text-primary)]">

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
     Online Text Editor & Utilities
                  </span>
            
                </div>
            
              </div>
            
            </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
      Online Text Editor & Utilities
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
A powerful all-in-one tool to convert text case, count words, clean formatting, and generate placeholder text instantly.    </p>
      </div>
<div className="w-full px-6 mt-10 bg-black">
  <div className="mx-auto max-w-7xl">

    <div className="overflow-hidden border rounded-xl border-gray-700 bg-[#0d0d0d]">

      {/* TEXTAREA */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 p-4 text-white bg-black outline-none resize-none"
        />

        {/* ACTION BUTTONS */}
        <div className="absolute flex gap-2 top-3 right-3">
          <button onClick={downloadText} className="p-2 bg-black border border-gray-600 rounded">
            <Download size={16} />
          </button>

          <button onClick={copyText} className="p-2 bg-black border border-gray-600 rounded">
            <Copy size={16} />
          </button>

          <button onClick={clearText} className="p-2 text-white bg-red-600 rounded">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 py-3 text-sm text-center text-gray-400 border-t border-gray-700 bg-[#111]">
        <p><b className="text-white">{stats.words}</b> Words</p>
        <p><b className="text-white">{stats.chars}</b> Characters</p>
        <p><b className="text-white">{stats.sentences}</b> Sentences</p>
        <p><b className="text-white">{stats.paragraphs}</b> Paragraphs</p>
      </div>

      {/* TABS 🔥 */}
      <div className="flex justify-center py-3 border-t border-gray-700 bg-[#111]">
        <div className="flex gap-3 p-2 bg-[#1a1a1a] rounded-md">

          <button
            onClick={() => setActiveTab("case")}
            className={`px-4 py-2 text-sm rounded-md ${
              activeTab === "case"
                ? "border border-[#F3A412] text-[#F3A412] bg-black"
                : "text-gray-400"
            }`}
          >
            Aa Case Converter
          </button>

          <button
            onClick={() => setActiveTab("find")}
            className={`px-4 py-2 text-sm rounded-md ${
              activeTab === "find"
                ? "border border-[#F3A412] text-[#F3A412] bg-black"
                : "text-gray-400"
            }`}
          >
            Find & Replace
          </button>

          <button
            onClick={() => setActiveTab("clean")}
            className={`px-4 py-2 text-sm rounded-md ${
              activeTab === "clean"
                ? "border border-[#F3A412] text-[#F3A412] bg-black"
                : "text-gray-400"
            }`}
          >
            Cleaner
          </button>

        </div>
      </div>

      {/* DYNAMIC CONTENT 🔥 */}
      <div className="p-4 border-t border-gray-700 bg-[#111]">

        {/* CASE */}
        {activeTab === "case" && (
          <div className="grid grid-cols-4 gap-3">
            <button onClick={toUpper} className="btn-dark">UPPERCASE</button>
            <button onClick={toLower} className="btn-dark">lowercase</button>
            <button onClick={toTitle} className="btn-dark">Title Case</button>
            <button onClick={toSentence} className="btn-dark">Sentence case</button>
          </div>
        )}

        {/* FIND */}
        {activeTab === "find" && (
          <div className="flex flex-col items-center gap-4">

            <div className="grid w-full max-w-2xl grid-cols-2 gap-4">
              <input
                placeholder="Find"
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
                className="input"
              />

              <input
                placeholder="Replace With"
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
                className="input"
              />
            </div>

            <button
              onClick={() =>
                setText(text.split(findText).join(replaceText))
              }
              className="px-6 py-2 text-black bg-[#F3A412] rounded-md"
            >
              Replace All
            </button>
          </div>
        )}

        {/* CLEANER */}
        {activeTab === "clean" && (
          <div className="flex flex-col items-center gap-4 text-center">

            <p className="text-gray-400">
              Remove extra spaces and line breaks from your text.
            </p>

            <button
              onClick={() =>
                setText(text.replace(/\s+/g, " ").trim())
              }
              className="px-6 py-2 text-black bg-[#F3A412] rounded-md"
            >
              Clean Text
            </button>

          </div>
        )}

      </div>

    </div>

  </div>
</div>

<div className="w-full px-6 mt-16">
  <div className="mx-auto max-w-7xl">

    <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
      One Tool for All Your Text Needs
    </h2>

    <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
      Whether you're a writer, a developer, a student, or a marketer, you often need to perform small but important operations on your text. Instead of juggling multiple browser tabs for different utilities, our all-in-one text tool provides the most common functionalities in a single, convenient interface.
    </p>

    <p className="mb-2 text-[var(--text-primary)] font-semibold">
      Key Features of Our Text Tool
    </p>

    <ul className="space-y-2 text-[var(--text-secondary)]">
      <li><span className="font-semibold text-[var(--text-primary)]">Case Converter:</span> Easily switch your text between UPPERCASE, lowercase, Title Case (where the first letter of each word is capitalized), and Sentence case (where only the first letter of each sentence is capitalized).</li>

      <li><span className="font-semibold text-[var(--text-primary)]">Real-time Word & Character Counter:</span> As you type or paste text, the tool instantly updates the counts for words, characters, sentences, and paragraphs, giving you immediate feedback for essays, social media posts, or meta descriptions.</li>

      <li><span className="font-semibold text-[var(--text-primary)]">Text Cleaner:</span> With one click, remove unnecessary extra spaces between words and redundant line breaks to standardize your text formatting.</li>

      <li><span className="font-semibold text-[var(--text-primary)]">Lorem Ipsum Generator:</span> Quickly generate placeholder text for your design mockups. You can specify the exact number of paragraphs, sentences, or words you need.</li>
    </ul>

  </div>
</div>

    <div className="w-full px-6 mt-16">
      <div className="mx-auto max-w-7xl">

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
                <p className="text-sm font-medium text-white">
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


  <div className="w-full px-6 mt-12 mb-20">
      <div className="mx-auto max-w-7xl">

        {/* CONTAINER */}
        <div className="p-6 border rounded-xl bg-[#121215] border-[#2a2a2e]">

          {/* TITLE */}
          <h2 className="mb-6 text-xl font-semibold text-white">
            More Tools in Text & Content Tools
          </h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => navigate(tool.link)}
                className="flex items-center justify-between p-4 transition border rounded-lg cursor-pointer bg-black border-[#2a2a2e] hover:border-[#F3A412]"
              >

                {/* LEFT */}
                <div className="flex items-center gap-3">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-10 h-10 text-[#F3A412] rounded-full bg-[#F3A412]/20">
                    <i className={tool.icon}></i>
                  </div>

                  {/* TEXT */}
                  <p className="text-sm font-medium text-white">
                    {tool.title}
                  </p>

                </div>

                {/* RIGHT ARROW */}
                <ArrowRight size={18} className="text-gray-400" />

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

export default Editor;