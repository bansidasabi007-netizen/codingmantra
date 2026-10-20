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


function EMI() {

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
        
 EMI Calculator
      </span>

    </div>
    

    
  </div>

        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
            EMI Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
           Calculate your loan EMI and see interest savings.
          </p>
        </div>

        {/* ================= BREADCRUMB ================= */}
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
        
 EMI Calculator
      </span>

    </div>
    

    
  </div>
        {/* ================= INTRO SECTION ================= */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-[#F3A412]">
            EMI Calculator
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
Plan your loans with precision. Calculate your EMI and explore how prepayments and step-up options can accelerate your repayment.          </p>
        </div>
        
<div className="px-6 py-10 bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <div className="max-w-5xl mx-auto space-y-6">

    {/* HEADER */}
  <div className="
  rounded-2xl 
  border border-[#2a2f3a] 
  dark:bg-[#161a23]/80 
  backdrop-blur-md
  p-6
">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <span className="text-yellow-400">🏛</span> EMI Calculator
      </h2>
    </div>

    {/* TABS */}
    <div className="flex p-1 border rounded-lg bg-[var(--card-bg)] border-[var(--border-color)]">
      <button className="flex-1 py-2 text-sm text-white bg-black rounded-md">
        Calculator
      </button>
      <button className="flex-1 py-2 text-sm text-[var(--text-secondary)]">
        Amortization Schedule
      </button>
      <button className="flex-1 py-2 text-sm text-[var(--text-secondary)]">
        Chart
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* LEFT */}
      <div className="p-5 space-y-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {/* INPUT */}
        {[
          "Loan Amount (₹)",
          "Interest Rate (%)",
          "Loan Tenure"
        ].map((label, i) => (
          <div key={i} className="space-y-2">

            <div className="flex justify-between">
              <p className="text-sm">{label}</p>

              {label === "Loan Tenure" ? (
                <div className="flex gap-2">
                  <input className="w-16 input" defaultValue="25" />
                  <select className="input">
                    <option>Years</option>
                  </select>
                </div>
              ) : (
                <input className="w-28 input" defaultValue={i === 0 ? "3000000" : "8.5"} />
              )}
            </div>

            <input
              type="range"
              className="w-full accent-yellow-400"
            />
          </div>
        ))}

        {/* ADVANCED */}
        <div className="pt-4 border-t border-[var(--border-color)]">
          <div className="flex justify-between mb-4">
            <p className="font-medium">📈 Advanced Options</p>
            <span>⌄</span>
          </div>

          {[
            "Annual EMI Increase (%)",
            "Yearly Prepayment",
            "Your Tax Slab (%)",
            "Calculate Tax Saving for Year"
          ].map((label, i) => (
            <div key={i} className="space-y-2">

              <div className="flex justify-between">
                <p className="text-sm">{label}</p>
                <input
                  className="w-28 input"
                  defaultValue={i === 2 ? "10" : "0"}
                  placeholder={i === 3 ? "e.g. 4" : ""}
                />
              </div>

              <input
                type="range"
                className="w-full accent-yellow-400"
              />
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)] text-center flex flex-col justify-center">

        <p className="text-sm text-[var(--text-secondary)]">
          Monthly EMI
        </p>

        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
          ₹ 24,156.81
        </h3>

        <div className="flex justify-between mt-6 text-sm">
          <div>
            <p>Total Interest</p>
            <p>₹ 42,47,043.75</p>
          </div>

          <div>
            <p>Total Payment</p>
            <p>₹ 72,47,043.75</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<div className="space-y-8">

<section className="px-6 py-16 bg-[var(--bg-primary)] transition-colors duration-300">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h2 className="mb-4 text-3xl font-bold text-yellow-400">
      What is an EMI?
    </h2>

    {/* PARAGRAPHS */}
    <div className="space-y-4 leading-relaxed text-[15px] text-[var(--text-secondary)]">

      <p>
        EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
      </p>

      <p>
        In an EMI, the payment is split between the principal component and the interest component. In the initial years of the loan, the interest component is much larger than the principal component. As the loan matures, the principal component increases and the interest portion decreases. Our calculator’s amortization schedule clearly shows this breakdown month by month.
      </p>

      <p className="mt-4 font-medium text-[var(--text-primary)]">
        How is EMI Calculated?
      </p>

      <p>
        The mathematical formula to calculate EMI is:
      </p>

    </div>

    {/* FORMULA BOX */}
    <div className="
      mt-4 mb-6
      px-6 py-4
      rounded-lg
      border
      text-center
      text-sm
      bg-[var(--card-bg)]
      border-[var(--border-color)]
      text-[var(--text-primary)]
    ">
      EMI = P × r × (1 + r)<sup>n</sup> / ((1 + r)<sup>n</sup> − 1)
    </div>

    {/* DEFINITIONS */}
    <div className="space-y-2 text-[var(--text-secondary)] text-[15px]">
      <p><span className="font-semibold text-[var(--text-primary)]">P</span> = Principal loan amount</p>
      <p><span className="font-semibold text-[var(--text-primary)]">r</span> = Monthly rate of interest (annual rate / 12)</p>
      <p><span className="font-semibold text-[var(--text-primary)]">n</span> = Number of monthly installments (loan tenure in years × 12)</p>
    </div>

    {/* FOOT TEXT */}
    <p className="mt-4 text-[var(--text-secondary)] text-[15px] leading-relaxed">
      This formula can be complex to use manually, which is why our EMI calculator is a valuable tool for anyone looking to take out a loan.
    </p>

  </div>
</section>


  {/* ================= FAQ SECTION ================= */}
  <div>
    <h2 className="text-2xl font-bold text-[#F3A412] mb-4">
      Frequently Asked Questions (FAQs)
    </h2>

    <div className="divide-y divide-[var(--border-color)]">

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Is this invoice generator really free?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Yes, it’s completely free to use. No signup required and no hidden charges.
        </p>
      </details>

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Is my invoice data saved?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          No, your data is not stored on our servers. Everything stays in your browser for privacy.
        </p>
      </details>

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Can I add my country's currency?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Yes, you can manually change the currency symbol based on your country.
        </p>
      </details>

    </div>
  </div>

</div>

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
    Professional Quotations
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
A clear, detailed quotation builds client confidence. Include scope, timelines, and pricing for clarity.    </p>
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

export default EMI;