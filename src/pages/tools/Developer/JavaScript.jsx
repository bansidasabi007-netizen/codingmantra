import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";



function JavaScript() {

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
JavaScript, CSS & HTML Minifier
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
JavaScript, CSS & HTML Minifier
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Paste your code to instantly compress and optimize it for production, reducing file sizes and improving website performance.
</p>
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
    <div className="mb-7">

      <div className="flex items-center gap-3 mb-2">

        <i className="ri-flashlight-line text-[#f4a000] text-[24px]" />

        <h2
          className="
            text-[18px]
            sm:text-[20px]
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Code Minifier
        </h2>
      </div>

      <p
        className="
          text-[14px]
          text-zinc-600
          dark:text-zinc-400
        "
      >
        Select the code type, paste your content, and click minify.
      </p>
    </div>

    {/* TABS */}
    <div
      className="
        w-full
        rounded-[12px]
        bg-zinc-100
        dark:bg-[#23242b]
        p-[4px]
        flex
        items-center
        mb-6
      "
    >

      {["JavaScript", "CSS", "HTML"].map((tab, index) => (
        <button
          key={index}
          className={`
            flex-1
            h-[36px]
            rounded-[9px]
            text-[14px]
            font-[600]
            transition-all
            ${
              index === 0
                ? "bg-white dark:bg-black text-zinc-900 dark:text-white"
                : "text-zinc-500 dark:text-zinc-400"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* CODE SECTION */}
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

      {/* LEFT */}
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
            Original Code
          </h3>

          <button
            className="
              h-[38px]
              px-4
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

        {/* TEXTAREA */}
        <textarea
          placeholder="// Your code here"
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
            placeholder:text-zinc-500
          "
        />
      </div>

      {/* RIGHT */}
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
            Minified Code
          </h3>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">

            {[
              "ri-file-download-line",
              "ri-file-copy-line",
              "ri-delete-bin-line",
            ].map((icon, index) => (
              <button
                key={index}
                className={`
                  w-[38px]
                  h-[38px]
                  rounded-[10px]
                  border
                  flex
                  items-center
                  justify-center
                  transition-all
                  ${
                    index === 2
                      ? "bg-[#991b1b] border-[#991b1b] text-white hover:bg-[#b91c1c]"
                      : "border-zinc-200 dark:border-[#2a2d35] bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300 hover:border-[#f4a00066]"
                  }
                `}
              >
                <i className={`${icon} text-[16px]`} />
              </button>
            ))}
          </div>
        </div>

        {/* OUTPUT */}
        <textarea
          placeholder="Minified output will appear here..."
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
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-6">

      <button
        className="
          h-[42px]
          px-7
          rounded-[10px]
          bg-[#f4a000]
          hover:bg-[#ffb41f]
          text-black
          text-[15px]
          font-[700]
          flex
          items-center
          gap-2
          transition-all
        "
      >
        <i className="ri-flashlight-line text-[16px]" />
        Minify
      </button>
    </div>
  </div>
</section>


<section
  className="mx-auto mt-10 max-w-7xl"
>
  {/* HEADING */}
  <h2
    className="
      text-[25px]
      sm:text-[22px]
      font-[500]
      leading-tight
      mb-2
      text-[#f4a000]
      dark:text-[#f4a000]
    "
  >
Why You Should Minify Your Code
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
Minification is the process of removing all unnecessary characters from source code without altering its functionality. This includes whitespace, newlines, comments, and block delimiters. It's a critical step in web development for optimizing your site's performance.
    </p>

    <p
      className="
        pt-1
        font-[500]
        text-zinc-900
        dark:text-white
      "
    >
    The Core Benefits of Minification
    </p>



    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
     Faster Page Load Times:
      </span>{" "}
     Smaller file sizes mean faster downloads for your users. This directly improves the user experience and is a key factor in Google's Core Web Vitals.
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
     Reduced Bandwidth Costs:
      </span>{" "}
   By serving smaller files, you reduce your overall bandwidth consumption, which can lead to cost savings on your hosting bill.
    </p>

    <p>
      <span
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
      Improved SEO Rankings: 
      </span>{" "}
    Site speed is a known ranking signal for search engines. A faster, optimized site is more likely to rank higher than a slow one.

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

export default JavaScript;


 