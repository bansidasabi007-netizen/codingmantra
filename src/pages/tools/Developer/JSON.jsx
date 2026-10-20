import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function JSON() {

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
const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    question: 'What does "parsing" JSON mean?',
    answer:
      'Parsing JSON means analyzing and validating JSON data to ensure the syntax is correct and converting it into a usable JavaScript object.',
  },
  {
    question: 'Is my data safe? Is it sent to your server?',
    answer:
      'No. Your JSON data is processed directly in your browser and is not stored or sent to any server, ensuring complete privacy.',
  },
];
  
const moreTools = [
  {
    title: "Planning Poker",
    icon: <Scale size={18} />,
    powerful: true,
  },
  {
    title: "Random Password Generator",
    icon: <Lock size={18} />,
    powerful: true,
  },
  {
    title: "RSA Key Generator",
    icon: <FileKey size={18} />,
  },
  {
    title: "SSH Key Generator",
    icon: <FileCode2 size={18} />,
  },
  {
    title: "UUID/GUID Generator",
    icon: <Fingerprint size={18} />,
  },
  {
    title: "Color Theme Generator",
    icon: <Palette size={18} />,
  },
  {
    title: "JSON Formatter",
    icon: <FileJson size={18} />,
  },
  {
    title: "Regex Tester",
    icon: <Asterisk size={18} />,
  },
  {
    title: "Code Minifier",
    icon: <Zap size={18} />,
  },
  {
    title: "JavaScript Obfuscator",
    icon: <Shield size={18} />,
  },
  {
    title: "JWT Decoder",
    icon: <Lock size={18} />,
  },
  {
    title: "Base64 Encoder/Decoder",
    icon: <Shield size={18} />,
  },
  {
    title: "PDF Merger",
    icon: <GitFork size={18} />,
  },
];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar changeTheme={changeTheme} />

      <section className="w-full px-4 pt-6">
  <div
    className="px-5 py-4 mx-auto border max-w-7xl rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
      <button
        className="transition hover:opacity-80"
        style={{ color: "var(--text-secondary)" }}
      >
        <ArrowLeft size={18} />
      </button>

      {/* HOME */}
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Home
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* CATEGORY */}
      <Link
        to="/tools/developer"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Developer & Productivity Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* CURRENT */}
      <span
        className="text-sm font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
JSON Formatter & Parser
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
   Online JSON Formatter & Parser (Beautify, Validate & View)
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
  A powerful online tool to validate, parse, format, and beautify your JSON data. Instantly view your JSON in a clean, readable format or a collapsible tree view.
</p>
          </div>
</section>


{/* MAIN WRAPPER */}
<div className="grid grid-cols-1 xl:grid-cols-[1.2fr_210px_1.2fr] gap-4 mt-8 max-w-7xl mx-auto">

  {/* LEFT PANEL */}
  <div className="
    rounded-[22px]
    overflow-hidden
    border
    border-[#1a1d26]
    dark:border-[#1a1d26]
    border-zinc-200
    bg-[#05060a]
    dark:bg-[#05060a]
    bg-white
  ">

    {/* HEADER */}
    <div className="
      flex
      items-center
      justify-between
      px-5
      py-4
      border-b
      border-[#171922]
      dark:border-[#171922]
      border-zinc-200
    ">
      <h3 className="
        text-[18px]
        font-[600]
        text-white
        dark:text-white
        text-zinc-900
      ">
        Input
      </h3>

      <div className="
        flex
        items-center
        gap-2
        px-3
        py-[7px]
        rounded-full
        bg-[#25090d]
        dark:bg-[#25090d]
        bg-red-50
        border
        border-[#3d1118]
        dark:border-[#3d1118]
        border-red-200
      ">
        <div className="w-[8px] h-[8px] rounded-full bg-[#d22d3d]" />

        <span className="
          text-[14px]
          text-[#d44957]
          dark:text-[#d44957]
          text-red-600
          font-[500]
        ">
          Invalid JSON
        </span>
      </div>
    </div>

    {/* TEXTAREA */}
    <textarea
      className="
        w-full
        min-h-[520px]
        bg-transparent
        resize-none
        outline-none
        p-5
        font-mono
        text-[15px]
        leading-8
        text-[#f3f4f6]
        dark:text-[#f3f4f6]
        text-zinc-800
        placeholder:text-zinc-500
      "
      placeholder="Paste JSON..."
    />
  </div>

  {/* CENTER BUTTONS */}
  <div className="flex gap-4 xl:flex-col">

    {/* Upload */}
    <button className="
      h-[54px]
      rounded-[12px]
      bg-[#f4b11a]
      hover:bg-[#ffc635]
      text-black
      font-[600]
      text-[15px]
      flex
      items-center
      justify-center
      gap-3
      transition-all
    ">
      <i className="ri-upload-line text-[18px]" />
      Upload Data
    </button>

    {/* Format */}
    <button className="
      h-[54px]
      rounded-[12px]
      bg-[#9d6d12]
      hover:bg-[#b88014]
      text-black
      font-[600]
      text-[15px]
      flex
      items-center
      justify-center
      gap-3
      transition-all
    ">
      <i className="ri-magic-line text-[18px]" />
      Format
    </button>

    {/* Select */}
    <select className="
      h-[54px]
      rounded-[12px]
      px-4
      outline-none
      border
      border-[#1b1d25]
      dark:border-[#1b1d25]
      border-zinc-200
      bg-[#06070b]
      dark:bg-[#06070b]
      bg-white
      text-white
      dark:text-white
      text-zinc-900
    ">
      <option>2 Tab Space</option>
      <option>4 Tab Space</option>
    </select>

    {/* Buttons */}
    {[
      { icon: "ri-flashlight-line", text: "Minify" },
      { icon: "ri-code-s-slash-line", text: "Stringify" },
      { icon: "ri-file-copy-line", text: "Copy Output" },
      { icon: "ri-download-2-line", text: "Download JSON" },
    ].map((item, index) => (
      <button
        key={index}
        className="
          h-[54px]
          rounded-[12px]
          border
          border-[#1a1c24]
          dark:border-[#1a1c24]
          border-zinc-200
          bg-[#06070b]
          dark:bg-[#06070b]
          bg-white
          text-[#f4f4f5]
          dark:text-[#f4f4f5]
          text-zinc-800
          font-[600]
          text-[15px]
          flex
          items-center
          justify-center
          gap-3
          hover:border-[#f4b11a55]
          transition-all
        "
      >
        <i className={`${item.icon} text-[18px]`} />
        {item.text}
      </button>
    ))}

    {/* Clear */}
    <button className="
      h-[54px]
      rounded-[12px]
      bg-[#991b1b]
      hover:bg-[#b91c1c]
      text-white
      font-[600]
      text-[15px]
      flex
      items-center
      justify-center
      gap-3
      transition-all
    ">
      <i className="ri-close-line text-[18px]" />
      Clear All
    </button>
  </div>

  {/* RIGHT PANEL */}
  <div className="
    rounded-[22px]
    overflow-hidden
    border
    border-[#1a1d26]
    dark:border-[#1a1d26]
    border-zinc-200
    bg-[#05060a]
    dark:bg-[#05060a]
    bg-white
  ">

    {/* TOPBAR */}
    <div className="
      flex
      flex-col
      lg:flex-row
      lg:items-center
      justify-between
      gap-4
      px-4
      py-4
      border-b
      border-[#171922]
      dark:border-[#171922]
      border-zinc-200
    ">

      {/* Tabs */}
      <div className="
        flex
        items-center
        rounded-[12px]
        bg-[#191b22]
        dark:bg-[#191b22]
        bg-zinc-100
        p-[4px]
        w-fit
      ">
        <button className="
          h-[42px]
          px-6
          rounded-[10px]
          bg-[#06070b]
          dark:bg-[#06070b]
          bg-white
          text-white
          dark:text-white
          text-zinc-900
          font-[600]
        ">
          Text
        </button>

        <button className="
          h-[42px]
          px-6
          rounded-[10px]
          text-[#6f727c]
          font-[600]
        ">
          Tree
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Search tree..."
          className="
            h-[46px]
            w-full
            lg:w-[280px]
            rounded-[10px]
            border
            border-[#1a1d25]
            dark:border-[#1a1d25]
            border-zinc-200
            bg-[#06070b]
            dark:bg-[#06070b]
            bg-white
            px-4
            outline-none
            text-white
            dark:text-white
            text-zinc-900
            placeholder:text-[#6f727c]
          "
        />

        <button className="
          w-[46px]
          h-[46px]
          rounded-[10px]
          bg-[#f4b11a]
          hover:bg-[#ffc635]
          flex
          items-center
          justify-center
          text-black
          transition-all
        ">
          <i className="ri-search-line text-[20px]" />
        </button>
      </div>
    </div>

    {/* OUTPUT */}
    <div className="
      min-h-[520px]
      p-5
      font-mono
      text-[15px]
      text-[#d4d4d8]
      dark:text-[#d4d4d8]
      text-zinc-700
    ">
      Formatted output will appear here
    </div>
  </div>
</div>

<section
  className="mx-auto mt-10 max-w-7xl"
>
  {/* HEADING */}
  <h2
    className="
      text-[20px]
      sm:text-[22px]
      font-[500]
      leading-tight
      mb-2
      text-[#f4a000]
      dark:text-[#f4a000]
    "
  >
    What is a JSON Formatter & Parser?
  </h2>

  {/* DESCRIPTION */}
  <div
    className="
      space-y-1
      text-[13px]
      sm:text-[14px]
      leading-[1.55]
      text-zinc-700
      dark:text-zinc-300
    "
  >
    <p>
      A JSON Formatter & Parser is an essential developer utility that takes JSON
      (JavaScript Object Notation) data as input and helps you make sense of it.
      "Parsing" validates the syntax for correctness, while "Formatting" (or
      "Beautifying") transforms it into a clean, indented structure that's easy
      for humans to read.
    </p>

    <p
      className="
        pt-1
        font-[500]
        text-zinc-900
        dark:text-white
      "
    >
      Why Do You Need This Tool?
    </p>

    <p>
      Developers constantly work with JSON data from APIs. This data is often sent
      in a compact, unformatted string to save bandwidth. Our online tool helps you:
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
        Validate:
      </span>{" "}
      Instantly check if your JSON data is syntactically correct, catching errors
      like missing commas or brackets.
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
        Format (Beautify):
      </span>{" "}
      Convert a single line of messy JSON into a clean, indented, and human-readable format.
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
        Navigate:
      </span>{" "}
      Use the interactive tree view to easily explore and understand the structure
      of complex, nested JSON objects.
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
        Minify:
      </span>{" "}
      Remove all whitespace to make the JSON as compact as possible for transmission.
    </p>
  </div>

  {/* FAQ SECTION */}
  <div className="mt-10">

    <h3
      className="
        text-[20px]
        sm:text-[22px]
        font-[500]
        mb-4
        text-[#f4a000]
        dark:text-[#f4a000]
      "
    >
      Frequently Asked Questions (FAQs)
    </h3>

    {faqs.map((faq, index) => (
      <div
        key={index}
        className="
          border-b
          border-zinc-200
          dark:border-[#1d1f27]
        "
      >
        {/* QUESTION */}
        <button
          onClick={() =>
            setOpenFaq(openFaq === index ? null : index)
          }
          className="flex items-center justify-between w-full gap-4 py-5 text-left "
        >
          <span
            className="
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            {faq.question}
          </span>

          <i
            className={`
              ri-arrow-down-s-line
              text-[18px]
              transition-all
              duration-300
              text-zinc-500
              dark:text-zinc-400
              ${openFaq === index ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* ANSWER */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${
              openFaq === index
                ? "max-h-[200px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <p
            className="
              text-[13px]
              leading-[1.7]
              pr-10
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


{/* MORE TOOLS SECTION */}
<div
  className="p-6 mx-auto mt-20 border md:p-8 rounded-2xl max-w-7xl"
  style={{
    background: "var(--card-bg)",
    borderColor: "var(--border-color)",
  }}
>

  {/* TITLE */}
  <h2
    className="mb-8 text-3xl font-bold"
    style={{ color: "var(--text-primary)" }}
  >
    More Tools in Developer & Productivity Tools
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

    {moreTools.map((tool, index) => (

      <button
        key={index}
        className="flex items-center justify-between w-full px-5 py-5 transition-all border group rounded-2xl hover:-translate-y-1"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
        }}
      >

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* ICON */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: "rgba(255,176,0,0.10)",
              color: "#ffb000",
            }}
          >
            {tool.icon}
          </div>

          {/* TITLE */}
          <div className="flex items-center gap-3">

            <span
              className="text-lg font-semibold text-left"
              style={{ color: "var(--text-primary)" }}
            >
              {tool.title}
            </span>

            {/* BADGE */}
            {tool.powerful && (
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
                style={{
                  background: "#ffb000",
                  color: "#000",
                }}
              >
                Powerful
              </span>
            )}

          </div>

        </div>

        {/* ARROW */}
        <ArrowRight
          size={20}
          className="transition-all group-hover:translate-x-1"
          style={{
            color: "var(--text-primary)",
          }}
        />

      </button>

    ))}

  </div>

</div>


      <Footer />
    </div>
  );
}

export default JSON;


 