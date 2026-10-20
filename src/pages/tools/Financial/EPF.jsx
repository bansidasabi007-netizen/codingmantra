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
import { CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function EPF() {

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
      q: "What is the employer's contribution to EPF?",
      a: "The employer contributes 12% of the employee's basic salary and dearness allowance. Out of this, 8.33% goes to the EPS (Pension Scheme) and the remaining 3.67% goes to the EPF account."
    },
    {
      q: "Is the interest rate on EPF fixed?",
      a: "No, the EPF interest rate is declared by the EPFO every year. It may change annually depending on government decisions."
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
const data = [
  { age: "26", invest: 5, interest: 2 },
  { age: "30", invest: 15, interest: 10 },
  { age: "35", invest: 25, interest: 20 },
  { age: "40", invest: 35, interest: 35 },
  { age: "45", invest: 50, interest: 60 },
  { age: "50", invest: 60, interest: 90 },
  { age: "55", invest: 70, interest: 120 },
  { age: "58", invest: 75, interest: 180 },
];

  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />


   <div className="flex gap gap-2 max-w-6xl px-6 py-4 mx-auto mt-6 text-sm text-[var(--text-secondary)] border rounded-lg bg-[var(--card-bg)] border-[var(--border-color)]
">

  {/* BACK */}
  <ArrowLeft
    size={16}
    className="cursor-pointer hover:text-[var(--text-primary)]"
    onClick={() => navigate(-1)}
  />

  <Link to="/" className="hover:text-[var(--text-primary)]">
    Home
  </Link>

  <span>&gt;</span>

  <Link to="" className="hover:text-[var(--text-primary)]">
    Tools
  </Link>

  <span>&gt;</span>

  <Link to="/tools/financial" className="hover:text-[var(--text-primary)]">
    Financial Tools
  </Link>

  <span>&gt;</span>

  <span className="font-medium text-[var(--text-primary)]">
    EPF Calculator
  </span>
</div>
      {/* Breadcrumb */}


        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
          EPF Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
   Project your EPF balance at retirement.
          </p>
        </div>


   <section className="px-6 py-16 bg-[var(--bg-primary)]">
      <div className="
        max-w-5xl mx-auto
        p-6 rounded-2xl
        bg-[var(--card-bg)]
        border border-[var(--border-color)]
      ">

        {/* HEADER */}
        <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[var(--text-primary)]">
          <span className="text-yellow-400">🐷</span> EPF Calculator
        </h2>

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* LEFT INPUTS */}
          <div className="space-y-5">

            {[
              ["Monthly Salary (Basic + DA)", "50000"],
              ["Your Contribution to EPF (%)", "12"],
              ["Employer's Contribution to EPF (%)", "3.67"],
              ["Your Current Age", "25"],
              ["Retirement Age", "58"],
              ["Expected Salary Increase (% p.a.)", "5"],
              ["Interest Rate (% p.a.)", "8.25"]
            ].map(([label, value], i) => (
              <div key={i} className="space-y-2">

                <div className="flex justify-between">
                  <p className="text-sm text-[var(--text-primary)]">
                    {label}
                  </p>

                  <input
                    defaultValue={value}
                    className="
                      w-28 px-3 py-1 text-sm text-center
                      rounded-md border
                      bg-[var(--bg-primary)]
                      border-[var(--border-color)]
                      text-[var(--text-primary)]
                    "
                  />
                </div>

                <input
                  type="range"
                  className="w-full accent-yellow-400"
                />

              </div>
            ))}

          </div>

          {/* RIGHT RESULT */}
          <div className="
            p-6 rounded-xl
            bg-[var(--card-bg)]
            border border-[var(--border-color)]
            flex flex-col justify-center text-center
          ">

            <p className="text-sm text-[var(--text-secondary)]">
              Retirement Corpus At Age 58
            </p>

            <h2 className="mt-3 text-3xl font-bold text-yellow-400">
              ₹ 2,61,40,077.82
            </h2>

            <div className="flex justify-between mt-6 text-sm">

              <div>
                <p className="text-[var(--text-secondary)]">Total Invested</p>
                <p className="text-[var(--text-primary)] font-medium">
                  ₹ 75,27,595.73
                </p>
              </div>

              <div>
                <p className="text-[var(--text-secondary)]">Total Interest</p>
                <p className="text-[var(--text-primary)] font-medium">
                  ₹ 1,86,12,482.08
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= CHART ================= */}
        <div className="mt-10">

          <h3 className="mb-4 text-center text-lg font-semibold text-[var(--text-primary)]">
            Year-on-Year Growth Projection
          </h3>

          <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>

                <XAxis dataKey="age" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />

                <Tooltip />

                <Bar dataKey="interest" stackId="a" fill="#3b82f6" />
                <Bar dataKey="invest" stackId="a" fill="#34d399" />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </section>
    
  <section className="px-6 pb-16 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ================= CONTENT ================= */}
        <div>

          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            What is the Employee Provident Fund (EPF)?
          </h2>

          <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

            <p>
              The Employee Provident Fund (EPF) is a mandatory retirement savings scheme for salaried employees in India, managed by the Employees' Provident Fund Organisation (EPFO). Both the employee and the employer contribute a portion of the employee's salary (typically 12% of the basic salary + dearness allowance) to the EPF account every month.
            </p>

            <p>
              This corpus grows over time with the power of compound interest, which is declared by the EPFO annually. It serves as a significant financial cushion for individuals after retirement.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              How Our EPF Calculator Works
            </p>

            <p>
              Our calculator helps you project the future value of your EPF savings at the time of your retirement. By providing a few key details, you can get a clear estimate of your financial standing:
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Monthly Salary (Basic + DA):
              </span>{" "}
              This is the foundation of your contribution.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Current Age & Retirement Age:
              </span>{" "}
              This determines the total duration your investment will grow.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Your Contribution:
              </span>{" "}
              Your monthly contribution to the fund (usually 12%).
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Expected Salary Increase:
              </span>{" "}
              Factor in annual salary increments to get a more realistic projection of your future contributions and final corpus.
            </p>

          </div>

        </div>

        {/* ================= FAQ ================= */}
        <div>

          <h2 className="mb-6 text-2xl font-bold text-yellow-400">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="divide-y divide-[var(--border-color)]">

            {faqs.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="py-4">

                  {/* QUESTION */}
                  <div
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <p className="text-[var(--text-primary)] text-sm md:text-base">
                      {item.q}
                    </p>

                    <span
                      className={`transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-yellow-400"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      ▾
                    </span>
                  </div>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
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
    <h2 className="text-3xl font-bold text-[#F3A412] pt-16">
What is EPF?
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
Employee Provident Fund (EPF) is a retirement savings scheme where both employee and employer contribute. It offers a guaranteed return and tax benefits. </p>
  </div>


<section className="px-6 py-16 bg-[var(--bg-primary)]">
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
        ["Enter", "your monthly salary (Basic + DA)."],
        ["Set", "your EPF contribution and employer contribution."],
        ["Choose", "your current age, retirement age, and expected salary growth."],
        ["View", "your retirement corpus, total investment, and interest earned."]
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

export default EPF;