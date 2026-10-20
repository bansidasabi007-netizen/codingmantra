import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Base64() {

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
    question: "Is Base64 a form of encryption?",
    answer:
      'Yes. This tool is completely client-side. All the decoding and verification happens directly in your browser using JavaScript. Your JWT is never sent to our or any other server, ensuring your sensitive information remains secure.',
  },
  {
    question: 'Does Base64 encoding increase file size?',
    answer:
      'The signature is verified using the encoded header, the encoded payload, and a secret key (for HMAC algorithms) or a public/private key pair (for RSA/ECDSA). Our tool can perform this verification if you provide the correct secret or public key. An invalid signature means the token has been tampered with or the wrong key was used.',
  },
  {
    question: 'Is my data sent to your server?',
    answer:
      'The signature is verified using the encoded header, the encoded payload, and a secret key (for HMAC algorithms) or a public/private key pair (for RSA/ECDSA). Our tool can perform this verification if you provide the correct secret or public key. An invalid signature means the token has been tampered with or the wrong key was used.',
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
Base64 Encoder & Decoder
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
Base64 Encoder & Decoder
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Instantly encode text or files into Base64, or decode Base64 strings back to their original format.</p>
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

        <i className="ri-shield-line text-[#f4a000] text-[24px]" />

        <h2
          className="
            text-[20px]
            sm:text-[22px]
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Base64 Encoder / Decoder
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
        Encode and decode Base64 data. Works with text and files. All processing is done in your browser.
      </p>
    </div>

    {/* TOP ACTIONS */}
    <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">

      {/* SELECT */}
      <div className="relative w-full sm:w-fit">

        <select
          className="
            h-[42px]
            min-w-[230px]
            rounded-[10px]
            border
            border-zinc-200
            dark:border-[#2a2d35]
            bg-zinc-50
            dark:bg-black
            pl-12
            pr-10
            outline-none
            appearance-none
            text-[14px]
            font-[600]
            text-zinc-800
            dark:text-white
          "
        >
          <option>Encode to Base64</option>
          <option>Decode from Base64</option>
        </select>

        {/* LEFT ICON */}
        <div
          className="absolute -translate-y-1/2 left-4 top-1/2 text-zinc-700 dark:text-white"
        >
          <i className="ri-arrow-down-line text-[18px]" />
        </div>

        {/* RIGHT ICON */}
        <div
          className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2 text-zinc-500 dark:text-zinc-400"
        >
          <i className="ri-arrow-down-s-line text-[18px]" />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center gap-3">

        {/* ENCODE FILE */}
        <button
          className="
            h-[42px]
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
          Encode File
        </button>

        {/* CLEAR */}
        <button
          className="
            h-[42px]
            px-5
            rounded-[10px]
            bg-[#991b1b]
            hover:bg-[#b91c1c]
            flex
            items-center
            gap-2
            text-[14px]
            font-[600]
            text-white
            transition-all
          "
        >
          <i className="ri-delete-bin-line text-[16px]" />
          Clear
        </button>
      </div>
    </div>

    {/* INPUT */}
    <div className="mb-6">

      <h3
        className="
          text-[15px]
          font-[600]
          mb-3
          text-zinc-900
          dark:text-white
        "
      >
        Input
      </h3>

      <textarea
        defaultValue={`Hello World!`}
        className="
          w-full
          min-h-[180px]
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
    </div>

    {/* OUTPUT */}
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
          Output
        </h3>

        {/* COPY */}
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
          <i className="ri-file-copy-line text-[16px]" />
          Copy
        </button>
      </div>

      {/* OUTPUT BOX */}
      <textarea
        readOnly
        value={`SGVsbG8gV29ybGQh`}
        className="
          w-full
          min-h-[180px]
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
          dark:text-white
        "
      />
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
        What is Base64 Encoding?
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
        Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. In simpler terms, it's a way to convert any kind of data (like an image, a PDF, or even just text) into a safe and readable string of characters.
This is particularly useful when you need to transmit data over media that are designed to handle only plain text, such as embedding image data directly into a CSS file or sending a file within a JSON object.
        </p>

        <p>
         Common Use Cases
        </p>


        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
         Embedding Images: 
          </span>{" "}
You can embed an image directly into an HTML or CSS file using a Base64 data URI which can reduce the number of HTTP requests a browser needs to make.

        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
        Data Transmission: 
          </span>{" "}
        Sending binary files as part of a text-based format like JSON or XML.

        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
          Basic Obfuscation:
          </span>{" "}
       While not a form of encryption, Base64 encoding makes data unreadable at a glance, which can be useful for hiding simple strings.
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

export default Base64;


 