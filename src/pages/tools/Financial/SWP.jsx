import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass,} from "lucide-react";
import { ArrowLeftRight, ArrowLeft,  Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Lightbulb, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


function SWP() {

  const navigate = useNavigate();
   
    const [mode, setMode] = useState("add"); 
    
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

const Field = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[11px] text-[var(--text-secondary)]">{label}</p>
    <input
      className="w-full px-3 py-2 text-sm border border-[var(--border-color)] rounded-md outline-none bg-[var(--card-bg)] text-[var(--text-primary)] focus:border-yellow-500"
      defaultValue={value}
      placeholder="Optional"
    />
  </div>
);

const MiniField = ({ label, value, placeholder }) => (
  <div>
    <p className="mb-1 text-xs text-gray-400">{label}</p>
    <input
      className="text-sm input"
      defaultValue={value}
      placeholder={placeholder}
    />
  </div>
);

const SmallInput = ({ value }) => (
  <input
    className="w-full px-1 py-1 text-xs text-center border border-[var(--border-color)] rounded bg-[var(--card-bg)] text-[var(--text-primary)]"
    defaultValue={value}
  />
);

const Badge = ({ text, highlight }) => (
  <span
    className={`
      px-3 py-1 text-xs rounded-md
      ${
        highlight
          ? "border border-yellow-500 text-yellow-400 bg-yellow-500/10"
          : "border border-[var(--border-color)] text-gray-400 bg-black/50"
      }
    `}
  >
    {text}
  </span>
);

const Theme = ({ name, color }) => (
  <div className="flex items-center gap-2 p-2 border border-[var(--border-color)] rounded-md cursor-pointer hover:border-gray-500">
    
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    />

    <span className="text-xs text-gray-300">{name}</span>
  </div>
);

const tools = [
  { name: "Invoice Generator", tag: "Powerful" },
  { name: "EMI Calculator" },
  { name: "Loan Prepayment Calculator" },
  { name: "SIP Calculator" },
  { name: "SWP Calculator" },
  { name: "PPF Calculator" },
  { name: "EPF Calculator" },
  { name: "Sukanya Samriddhi Calculator" },
  { name: "RD Calculator" },
  { name: "Compound Interest Calculator" },
  { name: "Simple Interest Calculator" },
  { name: "GST Calculator" },
  { name: "Percentage Calculator" },
];
const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is an SWP better than a simple Fixed Deposit (FD) for regular income?",
      a: "SWP can potentially offer better returns than FD as it is market-linked. However, it comes with risk. FD provides fixed and safe returns, while SWP offers flexibility and growth potential."
    },
    {
      q: "How is an SWP taxed in India?",
      a: "SWP withdrawals are treated as capital gains. Tax depends on the type of fund (equity/debt) and holding period. Long-term gains have lower tax compared to short-term gains."
    },
    {
      q: "What is a safe withdrawal rate?",
      a: "A commonly used safe withdrawal rate is around 3–4% annually. However, it depends on market conditions, return expectations, and investment duration."
    }
  ];
const steps = [
  {
    title: "Enter",
    desc: "your business details.",
  },
  {
    title: "Add",
    desc: "client and project information.",
  },
  {
    title: "Add",
    desc: "line items with descriptions and rates.",
  },
  {
    title: "Share",
    desc: "the quote for client review.",
  },
  {
    title: "Get approval",
    desc: "client can approve online.",
  },
];
  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />


     <div
    className="max-w-5xl px-5 py-4 mx-auto border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
       <button
                      onClick={() => {
                        if (window.history.length > 1) {
                          navigate(-1);
                        } else {
                          navigate("/tools/digital");
                        }
                      }}
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
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools/Financial"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
   Finance Tools

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
  
        SWP Calculator
      </span>

    </div>
    

    
  </div>


        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
          SWP Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
      Plan your retirement income withdrawals.
          </p>
        </div>

        {/* ================= BREADCRUMB ================= */}
     <div
    className="max-w-5xl px-5 py-4 mx-auto border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
       <button
                      onClick={() => {
                        if (window.history.length > 1) {
                          navigate(-1);
                        } else {
                          navigate("/tools/digital");
                        }
                      }}
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
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools/Financial"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
   Finance Tools

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
  
        SWP Calculator
      </span>

    </div>
    

    
  </div>
        {/* ================= INTRO SECTION ================= */}
        <div className="text-center">

          <h2 className="text-5xl max-w-3xl mx-auto font-bold text-[#F3A412]">
          Systematic Withdrawal Plan (SWP) Calculator
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
            Plan a regular income stream from your investments. Calculate how your corpus will perform with monthly withdrawals.</p>        </div>
        
<section className="px-6 py-16 ">
  <div className="max-w-5xl mx-auto space-y-6 bg-[var(--bg-primary)]">
<div className="
+   max-w-5xl mx-auto space-y-6
+   p-6 rounded-2xl
+    bg-[var(--card-bg)]
+   border border-[#2a2f3a]
+ ">
    {/* HEADER */}
    <h2 className="flex items-center gap-2 text-2xl font-semibold text-[var(--text-primary)] ">
      <span className="text-yellow-400">↪</span> SWP Calculator
    </h2></div>

    {/* TABS */}
    <div className="flex p-1 border rounded-lg bg-[var(--card-bg)] border-[var(--border-color)]">
      <button className="flex-1 py-2 text-sm text-[var(--text-primary)] bg-[var(--bg-primary)] rounded-md shadow">
        Calculator
      </button>
      <button className="flex-1 py-2 text-sm text-[var(--text-secondary)]">
        Schedule
      </button>
      <button className="flex-1 py-2 text-sm text-[var(--text-secondary)]">
        Chart
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* LEFT */}
      <div className="p-5 space-y-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {[
          ["Total Investment (₹)", "10000000"],
          ["Withdrawal per Month (₹)", "50000"],
          ["Expected Annual Return (%)", "8"],
          ["Time Period (Years)", "20"]
        ].map(([label, value], i) => (
          <div key={i} className="space-y-2">

            <div className="flex justify-between">
              <p className="text-sm text-[var(--text-primary)]">{label}</p>

              <input
                defaultValue={value}
                className="
                  w-32 px-3 py-1 text-sm text-center
                  rounded-md border
                  bg-[var(--bg-primary)]
                  border-[var(--border-color)]
                  text-[var(--text-primary)]
                "
              />
            </div>

            {/* SLIDER */}
            <input
              type="range"
              className="w-full accent-yellow-400"
            />
          </div>
        ))}

      </div>

      {/* RIGHT */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)] text-center flex flex-col justify-center">

        <p className="text-sm text-[var(--text-secondary)]">
          Final Value After 20 years
        </p>

        <h3 className="mt-3 text-3xl font-bold text-yellow-400">
          ₹ 1,91,52,392.86
        </h3>

        <div className="flex justify-between mt-6 text-sm">

          <div>
            <p className="text-[var(--text-secondary)]">Total Withdrawn</p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 1,20,00,000.00
            </p>
          </div>

          <div>
            <p className="text-[var(--text-secondary)]">Total Interest Earned</p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 2,11,52,392.86
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>
<section className="px-6 py-16 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto space-y-10">

    {/* ================= TOP CONTENT ================= */}
    <div>

      <h2 className="mb-4 text-3xl font-bold text-yellow-400">
        What is a Systematic Withdrawal Plan (SWP)?
      </h2>

      <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

        <p>
          A Systematic Withdrawal Plan (SWP) is a facility that allows an investor to withdraw a fixed amount of money from their mutual fund scheme at regular intervals (e.g., monthly, quarterly). It is essentially the reverse of a Systematic Investment Plan (SIP). Instead of investing money, you are systematically redeeming it.
        </p>

        <p>
          SWPs are an excellent tool for retirees or anyone looking to create a regular cash flow from their accumulated investments while allowing the remaining capital to continue growing.
        </p>

        <p className="font-medium text-[var(--text-primary)]">
          How Our SWP Calculator Helps You Plan
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Income Planning:
          </span>{" "}
          Determine how much you can safely withdraw each month without depleting your corpus too quickly.
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Investment Longevity:
          </span>{" "}
          See how long your investment will last based on your withdrawal rate and expected market returns.
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Visualize Growth & Withdrawal:
          </span>{" "}
          The chart and schedule help you understand the interplay between your withdrawals and the growth of your remaining investment over time.
        </p>

      </div>
    </div>

   <div className="divide-y divide-[var(--border-color)]">

      {faqs.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="py-4">

            {/* QUESTION */}
            <div
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center justify-between cursor-pointer group"
            >
              <p className="text-[var(--text-primary)] text-sm md:text-base">
                {item.q}
              </p>

              <span
                className={`transition-transform duration-300 text-[var(--text-secondary)] ${
                  isOpen ? "rotate-180 text-yellow-400" : ""
                }`}
              >
                ▾
              </span>
            </div>

            {/* ANSWER */}
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-40 mt-3" : "max-h-0"}
              `}
            >
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.a}
              </p>
            </div>

          </div>
        );
      })}

    </div>

  </div>
</section>

 <div className="max-w-5xl mx-auto mt-16">
      
      <div className="
        p-6 rounded-xl
        border border-[var(--border-color)]
        bg-[var(--card-bg)]
      ">

        {/* TITLE */}
        <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
          More Tools in Financial Tools
        </h2>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool, i) => (
            <div
              key={i}
              className="
                flex items-center justify-between
                px-4 py-3 rounded-lg
                border border-[var(--border-color)]
                bg-[var(--bg-primary)]
                hover:border-yellow-500/50
                transition-all cursor-pointer
              "
            >

              {/* LEFT */}
              <div className="flex items-center gap-3">

                {/* ICON */}
                <div className="flex items-center justify-center text-sm text-yellow-400 rounded-full w-9 h-9 bg-yellow-500/10">
                  %
                </div>

                {/* TEXT */}
                <div className="flex flex-col">

                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {tool.name}
                    </p>

                    {tool.tag && (
                      <span className="
                        px-2 py-0.5 text-[10px]
                        rounded-full
                        bg-yellow-500 text-black font-medium
                      ">
                        {tool.tag}
                      </span>
                    )}
                  </div>

                </div>
              </div>

              {/* ARROW */}
              <span className="text-[var(--text-secondary)] text-sm">
                →
              </span>

            </div>
          ))}

        </div>
      </div>
    </div>
<div className="space-y-12">

  {/* ================= TITLE ================= */}
  <div>
    <h2 className="text-3xl font-bold text-[#F3A412]">
What is SWP?
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount monthly from your investment. It's useful for retirement income planning. </p>
  </div>


 <section className="px-6 pt-16 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-400 rounded-full">
        1
      </div>
      <h2 className="text-2xl font-bold text-yellow-400">
        Step-by-Step: How to Use This Tool
      </h2>
    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-[var(--border-color)]"></div>

      {/* STEPS */}
      {[
        ["Enter", "your total investment amount."],
        ["Set", "the monthly withdrawal amount."],
        ["Choose", "the expected return rate."],
        ["View", "how long your investment will last."]
      ].map(([title, desc], i) => (
        <div key={i} className="relative flex items-start gap-6 mb-6">

          {/* CIRCLE */}
          <div className="z-10 flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-400 rounded-full">
            {i + 1}
          </div>

          {/* CARD */}
          <div className="
            flex-1 p-5 rounded-xl
            bg-[var(--card-bg)]
            border border-[var(--border-color)]
          ">

            <p className="font-semibold text-[var(--text-primary)]">
              {title}
            </p>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

  {/* ================= BEST PRACTICES ================= */}
  <div>
    <h3 className="mb-6 text-xl font-semibold text-[#F3A412]">
      💡 Best Practices for Best Results
    </h3>
    <div className="grid gap-4 md:grid-cols-2">

      {[
        ["Be detailed", "include scope of work."],
        ["Valid dates", " mention quote validity."],
        ["Payment terms", "specify deposit or full payment."],
        ["Follow up", " send reminders if needed."],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="
            flex items-start gap-3
            p-4 rounded-lg
            border border-[var(--border-color)]
            bg-[var(--card-bg)]
          "
        >
          {/* ICON */}
          <div className="flex items-center justify-center w-6 h-6 text-xs text-yellow-400 border border-yellow-500 rounded-full ">
            ✓
          </div>

          {/* TEXT */}
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {title}
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              — {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </div>    
      <Footer />
    </div>
  );
}

export default SWP;