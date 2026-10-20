import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Merger() {

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
    question: "Is there a limit on the number or size of files I can merge?",
    answer:
      "Because all processing happens on your computer, the main limitation is your browser's memory. For best performance, we recommend working with a reasonable number of files (e.g., up to 20-30 at a time) and avoiding extremely large individual PDFs (over 100MB).",
  },
  {
    question: 'Will the quality of my PDFs be affected?',
    answer:
      'No. The merging process does not re-compress or alter the original quality of your PDF pages. The content, images, and formatting of each page will be preserved exactly as they were in the original files.',
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
PDF Merger
      </span>

    </div>

  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
PDF Merger
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Combine multiple PDF documents into a single file. Drag and drop to reorder, then merge and download.</p>
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

        <i className="ri-scissors-cut-line text-[#f4a000] text-[24px]" />

        <h2
          className="
            text-[20px]
            sm:text-[22px]
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          PDF Merger
        </h2>
      </div>

      <p
        className="
          text-[14px]
          leading-7
          text-zinc-600
          dark:text-zinc-400
        "
      >
        Upload your PDF files, drag to reorder them, then click merge.
      </p>
    </div>

    {/* DROPZONE */}
    <div
      className="
        min-h-[145px]
        rounded-[18px]
        border-2
        border-dashed
        border-zinc-200
        dark:border-[#2a2d35]
        bg-zinc-50/50
        dark:bg-[#14151c]
        flex
        items-center
        justify-center
        px-6
        transition-all
      "
    >

      <div className="text-center">

        {/* BUTTON */}
        <button
          className="
            h-[40px]
            px-5
            rounded-[10px]
            bg-[#f4a000]
            hover:bg-[#ffb41f]
            flex
            items-center
            justify-center
            gap-2
            text-[14px]
            font-[600]
            text-black
            transition-all
            mx-auto
          "
        >
          <i className="ri-upload-line text-[16px]" />
          Select Files
        </button>

        {/* TEXT */}
        <p
          className="
            mt-4
            text-[14px]
            text-zinc-600
            dark:text-zinc-400
          "
        >
          or drag and drop PDFs here
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mx-auto mt-12 max-w-7xl">

  {/* CONTENT */}
  <div className="space-y-10">

    {/* BLOCK */}
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
       Secure, Private, and Client-Side
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
       Unlike many online PDF tools, our PDF Merger operates entirely within your web browser. This means your sensitive documents are never uploaded to our servers. The entire process of combining files happens locally on your computer, ensuring your data remains completely private and secure.

        </p>

        <p>
        How to Merge PDF Files
        </p>


        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
        Upload Your PDFs:  
          </span>{" "}
Click the upload button to select the PDF files you want to combine. You can select multiple files at once.
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
    Arrange the Order:
          </span>{" "}
Once uploaded, you'll see a list of your files. Simply drag and drop the files to arrange them in the desired order for the final document.
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
      Merge & Download: 
          </span>{" "}
Click the "Merge PDFs" button. The tool will process the files and generate a single, combined PDF for you to download instantly.        </p>
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

export default Merger;


 