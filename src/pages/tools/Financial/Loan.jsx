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
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, Lightbulb, ChevronRight } from "lucide-react";


function Loan() {

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

      {/* Breadcrumb */}
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
        
Loan Prepayment Calculator
      </span>

    </div>
    

    
  </div>

        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
           Loan Prepayment Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
         Calculate interest savings from prepayments.
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
        
Loan Prepayment Calculator
      </span>

    </div>
    

    
  </div>
        {/* ================= INTRO SECTION ================= */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-[#F3A412]">
           Loan Prepayment Calculator
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
Discover how making extra payments on your loan can save you thousands in interest and shorten your repayment period.</p>        </div>
        
<section className="px-6 pt-16 bg-[var(--bg-primary)]">
<div className="
  p-6 rounded-2xl 
  border border-[var(--border-color)] 
  bg-[var(--card-bg)]/80 
  backdrop-blur-md
">

    {/* HEADER */}
    <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[var(--text-primary)]  bg-[var(--bg-primary)]">
      <span className="text-yellow-400">🏛</span> Prepayment Calculator
    </h2>

    {/* TABS */}
    <div className="flex p-1 mb-6 border rounded-lg bg-[var(--card-bg)] border-[var(--border-color)]">
      <button className="flex-1 py-2 text-sm text-white bg-black rounded-md">
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

      {/* LEFT SIDE */}
      <div className="space-y-6">

        {/* LOAN DETAILS */}
        <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <h3 className="mb-4 font-semibold text-[var(--text-primary)]">
            Loan Details
          </h3>

          {[
            ["Loan Amount (₹)", "3000000"],
            ["Interest Rate (%)", "8.5"],
            ["Loan Tenure (Years)", "20"],
          ].map(([label, value], i) => (
            <div key={i} className="mb-4 space-y-2">

              <div className="flex justify-between">
                <p className="text-sm">{label}</p>
                <input
                  defaultValue={value}
                  className="w-28 input"
                />
              </div>

              <input type="range" className="w-full accent-yellow-400" />
            </div>
          ))}
        </div>

        {/* PREPAYMENT DETAILS */}
        <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <h3 className="mb-4 font-semibold text-[var(--text-primary)]">
            Prepayment Details
          </h3>

          <div className="space-y-4">

            <select className="w-full input">
              <option>Periodic Prepayment</option>
            </select>

            <div>
              <p className="mb-1 text-sm">Prepayment Amount (₹)</p>
              <input defaultValue="50000" className="w-full input" />
            </div>

            <div>
              <p className="mb-1 text-sm">Frequency</p>
              <select className="w-full input">
                <option>Yearly</option>
              </select>
            </div>

          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full py-3 text-sm font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-500">
          ↗ Recalculate Savings
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">

        {/* ORIGINAL SUMMARY */}
        <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <h3 className="mb-4 font-semibold text-[var(--text-primary)]">
            Original Loan Summary
          </h3>

          <div className="grid grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-[var(--text-secondary)]">Monthly EMI</p>
              <p className="font-medium text-[var(--text-primary)]">₹ 26,034.70</p>
            </div>

            <div>
              <p className="text-[var(--text-secondary)]">Loan Tenure</p>
              <p className="font-medium text-[var(--text-primary)]">20y 0m</p>
            </div>

            <div>
              <p className="text-[var(--text-secondary)]">Total Interest</p>
              <p className="font-medium text-[var(--text-primary)]">₹ 32,48,327.28</p>
            </div>

            <div>
              <p className="text-[var(--text-secondary)]">Total Payment</p>
              <p className="font-medium text-[var(--text-primary)]">₹ 62,48,327.28</p>
            </div>

          </div>
        </div>

        {/* NEW LOAN BOX */}
        <div className="p-5 text-blue-900 bg-blue-100 rounded-xl">
          <h3 className="mb-4 font-semibold">
            New Loan with Prepayments
          </h3>

          <div className="flex justify-between text-sm">
            <div>
              <p>New Tenure</p>
              <p className="font-semibold">14y 8m</p>
            </div>

            <div>
              <p>New Total Interest</p>
              <p className="font-semibold">₹ 22,57,412.54</p>
            </div>
          </div>
        </div>

        {/* SAVINGS BOX */}
        <div className="p-6 text-center text-green-900 bg-green-100 rounded-xl">
          
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-white bg-green-600 rounded-full">
            💾
          </div>

          <h3 className="text-lg font-semibold">Total Savings</h3>

          <div className="mt-4 space-y-2 text-sm">
            <p>Interest Saved <span className="font-semibold">₹ 9,90,914.74</span></p>
            <p>Time Saved <span className="font-semibold">5y 4m</span></p>
          </div>

          <p className="mt-3 text-sm font-medium">
            30.51% of original interest
          </p>

        </div>

      </div>

    </div>
  </div>
</section>

<section className="px-6 py-16 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto space-y-10">

    {/* ================== TOP CONTENT ================== */}
    <div>

      {/* TITLE */}
      <h2 className="mb-4 text-3xl font-bold text-yellow-400">
        The Hidden Power of Loan Prepayment
      </h2>

      {/* TEXT */}
      <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

        <p>
          Making a prepayment on your loan is one of the most effective ways to reduce your financial burden and build equity faster. A prepayment is any payment you make that is over and above your regular Equated Monthly Installment (EMI). Because this extra amount goes directly towards reducing your outstanding principal, its impact on your loan is significant.
        </p>

        <p className="font-medium text-[var(--text-primary)]">
          How Prepayments Work to Your Advantage:
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Reduces Principal:
          </span>{" "}
          The extra amount you pay is deducted directly from the principal loan amount.
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Lowers Future Interest:
          </span>{" "}
          Since future interest is calculated on the reduced principal, the total interest you pay over the life of the loan decreases dramatically.
        </p>

        <p>
          <span className="font-semibold text-[var(--text-primary)]">
            Shortens Loan Tenure:
          </span>{" "}
          By clearing the principal faster, you can pay off your loan years ahead of schedule, freeing up your cash flow for other investments.
        </p>

      </div>
    </div>

    {/* ================== FAQ ================== */}
    <div>

      {/* TITLE */}
      <h2 className="mb-6 text-2xl font-bold text-yellow-400">
        Frequently Asked Questions (FAQs)
      </h2>

      {/* FAQ LIST */}
      <div className="divide-y divide-[var(--border-color)]">

        {[
          "What's the difference between a one-time and a periodic prepayment?",
          "Should I choose to reduce my EMI or my tenure after prepayment?",
          "Are there any charges for making a prepayment?"
        ].map((q, i) => (
          <div key={i} className="py-4 cursor-pointer group">

            <div className="flex items-center justify-between">

              <p className="text-[var(--text-primary)] text-sm md:text-base">
                {q}
              </p>

              <span className="text-[var(--text-secondary)] group-hover:text-yellow-400 transition">
                ▾
              </span>

            </div>

          </div>
        ))}

      </div>

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
Why Prepay Your Loan?
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
Making prepayments reduces your principal faster, saving interest and shortening your loan tenure. Even small extra payments add up significantly over time.   </p>
  </div>


    <div className="max-w-5xl mx-auto mt-16">

      {/* TITLE */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-black bg-yellow-500 rounded-full">
          1
        </div>
        <h2 className="text-xl font-semibold text-yellow-400">
          Step-by-Step: How to Use This Tool
        </h2>
      </div>

      <div className="relative">

        {/* VERTICAL LINE */}
        <div className="
          absolute left-3 top-0 bottom-0
          w-[1px] bg-[var(--border-color)]
        " />

        {/* STEPS */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6">

              {/* LEFT SIDE (NUMBER CIRCLE) */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-500 rounded-full">
                {i + 1}
              </div>

              {/* CARD */}
              <div className="
                flex-1 p-5 rounded-lg
                border border-[var(--border-color)]
                bg-[var(--card-bg)]
              ">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {step.title}
                </p>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>

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

export default Loan;