import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";





 


function Obfuscator() {

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
    question: "What's the difference between minification and uglification?",
    answer:
      'Minification is a simpler process of removing unnecessary characters. Uglification is a more advanced form of compression, primarily for JavaScript, that also renames variables and functions to shorter names, making the code harder to read but even smaller. Our tool performs minification.',
  },
  {
    question: 'Is my code sent to your server?',
    answer:
      'No. All minification processes are performed directly in your browser using JavaScript. Your code is never uploaded or stored on our servers, ensuring your data remains completely private and secure.',
  },
  {
    question: 'Should I minify my code during development?',
    answer:
      'No, you should only minify your code for the production version of your website. During development, keeping the original, readable code with comments and proper indentation is essential for debugging and collaboration.',
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
const obfuscationOptionsData = [
  {
    key: "compact",
    label: "Compact Code",
    enabled: true,
  },
  {
    key: "selfDefending",
    label: "Self Defending",
    enabled: false,
  },
  {
    key: "renameGlobals",
    label: "Rename Globals",
    enabled: true,
  },
  {
    key: "controlFlow",
    label: "Control Flow Flattening",
    enabled: false,
  },
  {
    key: "deadCode",
    label: "Dead Code Injection",
    enabled: false,
  },
];

const [options, setOptions] = useState(
  obfuscationOptionsData
);

const [encoding, setEncoding] = useState("");

const toggleOption = (key) => {
  setOptions((prev) =>
    prev.map((item) =>
      item.key === key
        ? { ...item, enabled: !item.enabled }
        : item
    )
  );
};

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
        to="/developer"
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
JavaScript Obfuscator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
JavaScript Obfuscator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
A powerful tool to make your JavaScript code difficult to understand and reverse-engineer, protecting your intellectual property.</p>
          </div>
</section>


   <section className="mx-auto mt-10 max-w-7xl">

      <div
        className="
          rounded-[22px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#12131a]
          p-6
        "
      >

        {/* HEADER */}
        <div className="mb-8">

          <div className="flex items-center gap-3 mb-2">

            <i className="ri-shield-line text-[#f4a000] text-[24px]" />

            <h2
              className="
                text-[20px]
                font-[700]
                text-zinc-900
                dark:text-white
              "
            >
              JavaScript Obfuscator
            </h2>
          </div>

          <p
            className="
              text-[14px]
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Paste your JS code, choose your options, and click Obfuscate.
          </p>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-5">

          {/* LEFT SIDE */}
          <div>

            {/* TOPBAR */}
            <div className="flex items-center justify-between mb-3">

              <h3
                className="
                  text-[15px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                Original JavaScript Code
              </h3>

              <button
                className="
                  h-[40px]
                  px-5
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#2a2d35]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  font-[600]
                  text-zinc-800
                  dark:text-white
                  hover:border-[#f4a00066]
                  transition-all
                "
              >
                <i className="ri-upload-line text-[16px]" />
                Upload File
              </button>
            </div>

            {/* INPUT */}
            <textarea
              defaultValue={`function hello(name) {
  console.log("Hello, " + name);
}

hello("World");`}
              className="
                w-full
                min-h-[260px]
                rounded-[12px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                p-4
                outline-none
                resize-none
                font-mono
                text-[14px]
                leading-7
                text-zinc-800
                dark:text-white
              "
            />

            {/* OUTPUT HEADER */}
            <div className="flex items-center justify-between mt-6 mb-3">

              <h3
                className="
                  text-[15px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                Obfuscated Code
              </h3>

              {/* ACTIONS */}
              <div className="flex items-center gap-2">

                {[
                  {
                    icon: "ri-file-download-line",
                    label: "Download",
                    danger: false,
                  },
                  {
                    icon: "ri-file-copy-line",
                    label: "Copy",
                    danger: false,
                  },
                  {
                    icon: "ri-delete-bin-line",
                    label: "Clear",
                    danger: true,
                  },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`
                      h-[38px]
                      px-4
                      rounded-[10px]
                      border
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      font-[600]
                      transition-all
                      ${
                        item.danger
                          ? "bg-[#991b1b] border-[#991b1b] text-white hover:bg-[#b91c1c]"
                          : "border-zinc-200 dark:border-[#2a2d35] bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300 hover:border-[#f4a00066]"
                      }
                    `}
                  >
                    <i className={`${item.icon} text-[15px]`} />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* OUTPUT */}
            <textarea
              placeholder="Obfuscated output will appear here..."
              className="
                w-full
                min-h-[260px]
                rounded-[12px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-100
                dark:bg-[#2a2b31]
                p-4
                outline-none
                resize-none
                font-mono
                text-[14px]
                leading-7
                text-zinc-800
                dark:text-zinc-200
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div
              className="
                rounded-[18px]
                border
                border-zinc-200
                dark:border-[#23262f]
                bg-zinc-50
                dark:bg-[#14151c]
                p-5
              "
            >

              <h3
                className="
                  text-[18px]
                  font-[700]
                  mb-6
                  text-zinc-900
                  dark:text-white
                "
              >
                Obfuscation Options
              </h3>

              {/* OPTIONS */}
              <div className="space-y-5">

                {options.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 "
                  >

                    <span
                      className="
                        text-[15px]
                        font-[600]
                        text-zinc-800
                        dark:text-white
                      "
                    >
                      {item.label}
                    </span>

                    {/* TOGGLE */}
                    <button
                      onClick={() =>
                        toggleOption(item.key)
                      }
                      className={`
                        relative
                        w-[46px]
                        h-[26px]
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          item.enabled
                            ? "bg-[#f4a000]"
                            : "bg-zinc-300 dark:bg-[#2c2d33]"
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute
                          top-[3px]
                          w-[20px]
                          h-[20px]
                          rounded-full
                          bg-black
                          dark:bg-black
                          transition-all
                          duration-300
                          ${
                            item.enabled
                              ? "left-[23px]"
                              : "left-[3px]"
                          }
                        `}
                      />
                    </button>
                  </div>
                ))}

                {/* SELECT */}
                <div className="pt-1">

                  <label
                    className="
                      block
                      mb-2
                      text-[15px]
                      font-[600]
                      text-zinc-800
                      dark:text-white
                    "
                  >
                    String Array Encoding
                  </label>

                  <select
                    value={encoding}
                    onChange={(e) =>
                      setEncoding(e.target.value)
                    }
                    className="
                      w-full
                      h-[46px]
                      rounded-[10px]
                      border
                      border-zinc-200
                      dark:border-[#2a2d35]
                      bg-white
                      dark:bg-black
                      px-4
                      outline-none
                      text-[14px]
                      text-zinc-800
                      dark:text-white
                    "
                  >
                    <option value="">
                      Select Encoding
                    </option>

                    <option value="base64">
                      Base64
                    </option>

                    <option value="rc4">
                      RC4
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                w-full
                h-[48px]
                rounded-[12px]
                bg-[#f4a000]
                hover:bg-[#ffb41f]
                mt-4
                flex
                items-center
                justify-center
                gap-3
                text-black
                text-[15px]
                font-[700]
                transition-all
              "
            >
              <i className="ri-shield-line text-[18px]" />
              Obfuscate Code
            </button>
          </div>
        </div>
      </div>
    </section>

<section className="mx-auto mt-12 max-w-7xl">

  {/* TOP CONTENT */}
  <div className="space-y-10">

    {/* BLOCK 1 */}
    <div>

      <h2
        className="
          text-[24px]
          sm:text-[26px]
          font-[500]
          leading-tight
          mb-2
          text-[#f4a000]
        "
      >
        What is Obfuscation and Why Use It?
      </h2>

      <div
        className="
          space-y-[2px]
          text-[13px]
          sm:text-[14px]
          leading-[1.6]
          text-zinc-700
          dark:text-zinc-300
        "
      >
        <p>
          JavaScript obfuscation is the process of intentionally transforming your
          code into a format that is incredibly difficult for humans to read,
          understand, and analyze. Unlike minification, which simply aims to
          reduce file size, obfuscation actively works to conceal the code's logic
          and purpose.
        </p>

        <p
          className="
            pt-[2px]
            font-[500]
            text-zinc-900
            dark:text-white
          "
        >
          The Difference Between Minification and Obfuscation
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Minification:
          </span>{" "}
          Removes comments, whitespace, and newlines. The goal is performance.
          The code is still readable by a determined developer.
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Obfuscation:
          </span>{" "}
          Renames variables, splits strings, changes control flow, and adds decoy
          code. The goal is security and protection of intellectual property. The
          resulting code is much larger than the original but is extremely hard
          to reverse-engineer.
        </p>
      </div>
    </div>

    {/* BLOCK 2 */}
    <div>

      <h2
        className="
          text-[24px]
          sm:text-[26px]
          font-[500]
          leading-tight
          mb-2
          text-[#f4a000]
        "
      >
        When Should You Obfuscate Your Code?
      </h2>

      <div
        className="
          text-[13px]
          sm:text-[14px]
          leading-[1.6]
          text-zinc-700
          dark:text-zinc-300
        "
      >
        <p>
          You should consider obfuscating your JavaScript when it contains
          valuable business logic or proprietary algorithms that you want to
          protect from being easily copied or stolen by competitors. It's most
          common for commercial software, browser extensions, or any client-side
          code that performs a unique, valuable function.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ SECTION */}
  <div className="mt-12">

    <h3
      className="
        text-[24px]
        sm:text-[26px]
        font-[500]
        mb-4
        text-[#f4a000]
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
                ? "max-h-[220px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <p
            className="
              text-[13px]
              sm:text-[14px]
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

export default Obfuscator;


 