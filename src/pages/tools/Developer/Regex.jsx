import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Regex() {

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
    question: "What do the 'g', 'i', and 'm' flags mean?",
    answer:
      'Parsing JSON means analyzing and validating JSON data to ensure the syntax is correct and converting it into a usable JavaScript object.',
  },
  {
    question: 'Is my data secure?',
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
Regex Tester
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
  Regex Tester
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
 Build and test your regular expressions in real-time with instant match highlighting.
</p>
          </div>
</section>


<section className="mx-auto mt-10 max-w-7xl">

  <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      {/* REGEX INPUT */}
      <div
        className="
          rounded-[20px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#111218]
          p-6
        "
      >
        <h2
          className="
            text-[18px]
            font-[600]
            mb-6
            text-zinc-900
            dark:text-white
          "
        >
          Regular Expression
        </h2>

        <div className="flex flex-col gap-5 xl:flex-row xl:items-center">

          {/* INPUT */}
          <input
            type="text"
            value="\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"
            readOnly
            className="
              flex-1
              h-[42px]
              rounded-[10px]
              border
              border-zinc-200
              dark:border-[#2a2d35]
              bg-zinc-50
              dark:bg-black
              px-4
              outline-none
              text-[14px]
              font-mono
              text-zinc-800
              dark:text-white
            "
          />

          {/* CHECKBOXES */}
          <div className="flex flex-wrap items-center gap-5">

            {[
              "Global (g)",
              "Insensitive (i)",
              "Multiline (m)",
            ].map((item, index) => (
              <label
                key={index}
                className="
                  flex
                  items-center
                  gap-2
                  cursor-pointer
                  text-[14px]
                  font-[500]
                  text-zinc-700
                  dark:text-zinc-200
                "
              >
                <input
                  type="checkbox"
                  defaultChecked={index !== 2}
                  className="
                    w-4
                    h-4
                    accent-[#f4a000]
                  "
                />

                {item}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* TEST STRING */}
      <div
        className="
          rounded-[20px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#111218]
          p-6
        "
      >
        <h2
          className="
            text-[18px]
            font-[600]
            mb-6
            text-zinc-900
            dark:text-white
          "
        >
          Test String
        </h2>

        {/* HIGHLIGHT BOX */}
        <div
          className="
            rounded-[12px]
            border
            border-zinc-200
            dark:border-[#252832]
            bg-zinc-100
            dark:bg-[#23242b]
            p-4
            mb-5
            min-h-[200px]
          "
        >
          <p
            className="
              text-[15px]
              leading-8
              font-mono
              text-zinc-800
              dark:text-white
            "
          >
            Contact us at{" "}
            <span className="bg-[#8b6a22] text-black px-1">
              support@example.com
            </span>{" "}
            or for sales, email{" "}
            <span className="bg-[#8b6a22] text-black px-1">
              sales@example.org
            </span>
            .
            <br />
            Invalid: user@.com
          </p>
        </div>

        {/* OUTPUT TEXTAREA */}
        <textarea
          className="
            w-full
            min-h-[220px]
            rounded-[12px]
            border
            border-zinc-200
            dark:border-[#252832]
            bg-zinc-50
            dark:bg-black
            p-4
            outline-none
            resize-none
            font-mono
            text-[14px]
            text-zinc-800
            dark:text-white
          "
          defaultValue={`Contact us at support@example.com or for sales, email sales@example.org. Invalid: user@.com`}
        />
      </div>

      {/* MATCH INFO */}
      <div
        className="
          rounded-[20px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#111218]
          p-6
        "
      >
        <h2
          className="
            text-[18px]
            font-[600]
            mb-6
            text-zinc-900
            dark:text-white
          "
        >
          Match Information
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">

            <thead>
              <tr
                className="
                  border-b
                  border-zinc-200
                  dark:border-[#262932]
                "
              >
                {["#", "Match", "Index"].map((item, index) => (
                  <th
                    key={index}
                    className="
                      text-left
                      py-4
                      text-[14px]
                      font-[500]
                      text-zinc-500
                      dark:text-zinc-400
                    "
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              {[
                {
                  no: 1,
                  match: "support@example.com",
                  index: 14,
                },
                {
                  no: 2,
                  match: "sales@example.org",
                  index: 54,
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="
                    border-b
                    border-zinc-100
                    dark:border-[#1e2129]
                  "
                >
                  <td
                    className="
                      py-6
                      text-[14px]
                      text-zinc-700
                      dark:text-zinc-200
                    "
                  >
                    {item.no}
                  </td>

                  <td
                    className="
                      py-6
                      text-[14px]
                      font-mono
                      text-zinc-800
                      dark:text-white
                    "
                  >
                    {item.match}
                  </td>

                  <td
                    className="
                      py-6
                      text-[14px]
                      text-zinc-700
                      dark:text-zinc-200
                    "
                  >
                    {item.index}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div
      className="
        rounded-[20px]
        border
        border-zinc-200
        dark:border-[#1c1f27]
        bg-white
        dark:bg-[#111218]
        p-6
        h-fit
      "
    >
      <h2
        className="
          text-[18px]
          font-[600]
          mb-8
          text-zinc-900
          dark:text-white
        "
      >
        Regex Cheat Sheet
      </h2>

      {[
        {
          title: "Common Tokens",
          items: [
            [".", "Any character except newline"],
            ["\\w", "Any word character"],
            ["\\W", "Any non-word character"],
            ["\\d", "Any digit (0-9)"],
            ["\\D", "Any non-digit"],
            ["\\s", "Any whitespace character"],
            ["\\S", "Any non-whitespace character"],
          ],
        },
        {
          title: "Anchors",
          items: [
            ["^", "Start of the string"],
            ["$", "End of the string"],
            ["\\b", "Word boundary"],
            ["\\B", "Non-word boundary"],
          ],
        },
        {
          title: "Quantifiers",
          items: [
            ["*", "0 or more times"],
            ["+", "1 or more times"],
            ["?", "0 or 1 time"],
          ],
        },
      ].map((section, index) => (
        <div key={index} className="mb-8">

          <h3
            className="
              text-[16px]
              font-[600]
              mb-4
              text-zinc-900
              dark:text-white
            "
          >
            {section.title}
          </h3>

          <div className="space-y-3">

            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between gap-4"
              >
                <span
                  className="
                    min-w-[36px]
                    h-[28px]
                    rounded-[6px]
                    border
                    border-zinc-200
                    dark:border-[#2b2e36]
                    bg-zinc-100
                    dark:bg-[#23242b]
                    flex
                    items-center
                    justify-center
                    font-mono
                    text-[13px]
                    text-zinc-800
                    dark:text-white
                  "
                >
                  {item[0]}
                </span>

                <span
                  className="
                    text-right
                    text-[14px]
                    leading-6
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {item[1]}
                </span>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  </div>
</section>


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
  What Are Regular Expressions (Regex)?
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
   A regular expression (or regex) is a sequence of characters that specifies a search pattern. It's like a super-powered version of the "Find" command you use in a word processor. Developers use regex to validate user input (like checking if an email address is in a valid format), parse text, perform advanced find-and-replace operations, and much more.
How This Tool Helps
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

export default Regex;


 