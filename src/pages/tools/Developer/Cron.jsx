import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";

function Cron() {

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

  const faqData = [
  {
    question:
      "What does 'Day of Month' vs 'Day of Week' mean if both are set?",
    answer:
      "When both fields are restricted (not '*'), cron usually triggers when either field matches depending on the cron implementation. Always verify behavior on your system.",
  },
  {
    question:
      "Can I schedule a job to run every 90 minutes?",
    answer:
      "Cron does not directly support every 90 minutes with a single value, but you can approximate it using step values or multiple cron expressions.",
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
Cron Expression Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
   Cron Expression Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
     An intuitive tool to build, edit, and understand cron job schedules.

</p>
          </div>
</section>

{/* CRON EDITOR */}
<div
  className="p-6 mx-auto border md:p-8 rounded-2xl max-w-7xl"
  style={{
    background: "var(--card-bg)",
    borderColor: "var(--border-color)",
  }}
>

  {/* HEADER */}
  <div className="flex items-start gap-3 mb-8">

    <div
      className="flex items-center justify-center w-10 h-10 rounded-full"
      style={{
        background: "rgba(255,176,0,0.12)",
        color: "#ffb000",
      }}
    >
      <Clock3 size={18} />
    </div>

    <div>
      <h2
        className="text-3xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        Schedule Editor
      </h2>

      <p
        className="mt-1 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Use the fields below to build your cron expression.
      </p>
    </div>

  </div>

  {/* SELECTS */}
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">

    {/* Minute */}
    <div>
      <label
        className="block mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Minute
      </label>

      <select
        className="w-full px-4 py-3 border outline-none rounded-xl"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <option>Every minute</option>
      </select>
    </div>

    {/* Hour */}
    <div>
      <label
        className="block mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Hour
      </label>

      <select
        className="w-full px-4 py-3 border outline-none rounded-xl"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <option>Every hour</option>
      </select>
    </div>

    {/* Day Month */}
    <div>
      <label
        className="block mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Day (Month)
      </label>

      <select
        className="w-full px-4 py-3 border outline-none rounded-xl"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <option>Every day (month)</option>
      </select>
    </div>

    {/* Month */}
    <div>
      <label
        className="block mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Month
      </label>

      <select
        className="w-full px-4 py-3 border outline-none rounded-xl"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <option>Every month</option>
      </select>
    </div>

    {/* Day Week */}
    <div>
      <label
        className="block mb-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        Day (Week)
      </label>

      <select
        className="w-full px-4 py-3 border outline-none rounded-xl"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <option>Every day (week)</option>
      </select>
    </div>

  </div>

  {/* RESET BUTTON */}
  <div className="flex justify-center mt-8">

    <button
      className="flex items-center gap-3 px-6 py-3 font-semibold transition-all border rounded-xl hover:opacity-90"
      style={{
        background: "var(--tool-card-bg)",
        borderColor: "var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <RotateCcw size={18} />
      Reset
    </button>

  </div>

  {/* DIVIDER */}
  <div
    className="my-8 border-t"
    style={{
      borderColor: "rgba(255,255,255,0.08)",
    }}
  />

  {/* RESULT */}
  <div>

    <h3
      className="mb-5 text-2xl font-bold"
      style={{ color: "var(--text-primary)" }}
    >
      Result
    </h3>

    {/* CRON BOX */}
    <div
      className="flex items-center justify-between px-5 py-5 border rounded-xl"
      style={{
        background: "var(--tool-card-bg)",
        borderColor: "var(--border-color)",
      }}
    >

      <span
        className="text-2xl font-semibold tracking-[10px]"
        style={{ color: "var(--text-primary)" }}
      >
        * * * * *
      </span>

      <button
        className="transition-all hover:opacity-80"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        <Copy size={20} />
      </button>

    </div>

    {/* DESCRIPTION */}
    <p
      className="mt-6 text-lg italic text-center"
      style={{
        color: "var(--text-secondary)",
      }}
    >
      Every minute
    </p>

  </div>

</div>

{/* INFO SECTION */}
<div className="mx-auto mt-20 max-w-7xl">

  <h2
    className="mb-4 text-2xl font-bold md:text-5xl"
    style={{ color: "#ffb000" }}
  >
    What is a Cron Expression?
  </h2>

  <div
    className="space-y-2 text-[17px] leading-9"
    style={{ color: "var(--text-primary)" }}
  >

    <p>
      A cron expression is a string of characters that defines a schedule for a
      "cron job," which is an automated task that runs at a specific time or
      interval on Unix-like computer operating systems. The expression consists
      of five fields (Minute, Hour, Day of Month, Month, Day of Week) that tell
      the system precisely when to execute a command or script.
    </p>

    <p>
      Understanding the 5 Fields of a Cron Expression
    </p>

  </div>

  {/* CODE BOX */}
  <div
    className="p-6 mt-4 overflow-x-auto border rounded-2xl"
    style={{
      background: "var(--tool-card-bg)",
      borderColor: "var(--border-color)",
    }}
  >

    <pre
      className="text-sm leading-8 whitespace-pre-wrap md:text-base"
      style={{
        color: "var(--text-primary)",
      }}
    >
{`┌──────────── minute (0 - 59) │ ┌──────────── hour (0 - 23) │ │ ┌──────────── day of the month (1 - 31) │ │ │ ┌──────────── month (1 - 12) │ │ │ │ ┌──────────── day of the week (0 - 6) (Sunday to Saturday) │ │ │ │ │ * * * * *`}
    </pre>

  </div>

  {/* POINTS */}
  <div
    className="mt-6 space-y-3 text-[17px] leading-8"
    style={{
      color: "var(--text-primary)",
    }}
  >

    <p>
      <span className="font-bold">
        * (Asterisk):
      </span>{" "}
      Represents "every". An asterisk in the Hour field means the task will run
      every hour.
    </p>

    <p>
      <span className="font-bold">
        , (Comma):
      </span>{" "}
      Used to specify a list of values. For example, 1,15,30 in the Minute
      field means the task runs at 1, 15, and 30 minutes past the hour.
    </p>

    <p>
      <span className="font-bold">
        - (Hyphen):
      </span>{" "}
      Defines a range of values. 1-5 in the Day of Week field means the task
      runs from Monday to Friday.
    </p>

    <p>
      <span className="font-bold">
        / (Slash):
      </span>{" "}
      Specifies step values. */15 in the Minute field means "every 15 minutes."
    </p>

  </div>

</div>


{/* FAQ SECTION */}
<div className="mx-auto mt-20 max-w-7xl">

  <h2
    className="mb-8 text-3xl font-bold"
    style={{ color: "#ffb000" }}
  >
    Frequently Asked Questions (FAQs)
  </h2>

  <div className="space-y-1">

    {faqData.map((faq, index) => (
      <div
        key={index}
        className="border-b"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >

        {/* QUESTION */}
        <button
          onClick={() =>
            setOpenFaq(openFaq === index ? null : index)
          }
          className="flex items-center justify-between w-full py-6 text-left"
        >

          <span
            className="text-[15px] md:text-[17px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {faq.question}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              openFaq === index ? "rotate-180" : ""
            }`}
            style={{ color: "var(--text-secondary)" }}
          />

        </button>

        {/* ANSWER */}
        <div
          className={`grid transition-all duration-300 ${
            openFaq === index
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">

            <div
              className="pb-6 text-[15px] leading-8"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {faq.answer}
            </div>

          </div>
        </div>

      </div>
    ))}

  </div>

</div>


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

export default Cron;


 