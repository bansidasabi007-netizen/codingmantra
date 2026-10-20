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
  ResponsiveContainer,
  Legend
} from "recharts";

function RD() {

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
  { name: "Quotation Generator", tag: "Powerful" },
  { name: "EMI Calculator" },
  { name: "Loan Prepayment Calculator" },
  { name: "SIP Calculator" },
  { name: "SWP Calculator" },
  { name: "PPF Calculator" },
  { name: "EPF Calculator" },
  { name: "Sukanya Samriddhi Calculator" },
  { name: "Compound Interest Calculator" },
  { name: "Simple Interest Calculator" },
  { name: "GST Calculator" },
  { name: "Percentage Calculator" },
];
const [openIndex, setOpenIndex] = useState(null);


const faqs = [
    {
      q: "Who should invest in an RD?",
      a: "RD is ideal for individuals who want to save a fixed amount every month and build a disciplined savings habit with guaranteed returns."
    },
    {
      q: "What is the difference between an RD and a SIP?",
      a: "RD offers fixed returns and is low-risk, while SIP invests in mutual funds and market-linked instruments, which may offer higher but variable returns."
    },
    {
      q: "Is the interest earned on an RD taxable?",
      a: "Yes, the interest earned on an RD is taxable as per your income tax slab."
    },
    {
      q: "What happens if I miss an RD installment?",
      a: "Banks may charge a penalty for missed installments, and repeated defaults may lead to account closure."
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
  { year: "Year 1", invest: 50000, interest: 2000 },
  { year: "Year 3", invest: 150000, interest: 8000 },
  { year: "Year 5", invest: 250000, interest: 18000 },
  { year: "Year 7", invest: 350000, interest: 32000 },
  { year: "Year 9", invest: 450000, interest: 50000 },
  { year: "Year 11", invest: 550000, interest: 75000 },
  { year: "Year 13", invest: 650000, interest: 105000 },
  { year: "Year 15", invest: 750000, interest: 140000 },
  { year: "Year 17", invest: 850000, interest: 180000 },
  { year: "Year 19", invest: 950000, interest: 230000 },
  { year: "Year 21", invest: 1000000, interest: 300000 },
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
 RD Calculator
  </span>
</div>
      {/* Breadcrumb */}


        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">
<section className="px-6 py-16 bg-[var(--bg-primary)]">
  <div className="
    max-w-5xl mx-auto
    p-6 rounded-2xl
    bg-[var(--card-bg)]
    border border-[var(--border-color)]
  ">

    {/* HEADER */}
    <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[var(--text-primary)]">
      <span className="text-yellow-400">🐖</span> RD Calculator
    </h2>

    {/* TABS */}
    <div className="flex p-1 mb-6 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
      <button className="flex-1 py-2 text-sm text-[var(--text-primary)] bg-black rounded-md">
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

        {[
          ["Monthly Deposit (₹)", "5000"],
          ["Interest Rate (% p.a.)", "6.5"],
          ["Tenure (Years)", "5"]
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

        {/* NOTE */}
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="font-medium text-[var(--text-primary)]">Note:</span>{" "}
          Interest is compounded quarterly.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="
        p-6 rounded-xl
        bg-[var(--card-bg)]
        border border-[var(--border-color)]
        text-center flex flex-col justify-center
      ">

        <p className="text-sm text-[var(--text-secondary)]">
          Maturity Value
        </p>

        <h2 className="mt-3 text-3xl font-bold text-yellow-400">
          ₹ 3,56,863.01
        </h2>

        <div className="flex justify-between mt-6 text-sm">

          <div>
            <p className="text-[var(--text-secondary)]">
              Total Invested
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 3,00,000.00
            </p>
          </div>

          <div>
            <p className="text-[var(--text-secondary)]">
              Total Interest
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 56,863.01
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
   <section className="px-6 py-16 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= MAIN CONTENT ================= */}
        <div>

          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            What is a Recurring Deposit (RD)?
          </h2>

          <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

            <p>
              A Recurring Deposit (RD) is a special kind of term deposit offered by banks and post offices in India. It allows individuals to make regular monthly deposits and earn a fixed rate of interest.
            </p>

            <p>
              Unlike a lump-sum Fixed Deposit (FD), an RD lets you invest a fixed amount every month, making it ideal for salaried individuals and small savers.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              How Does an RD Work?
            </p>

            <p>
              You deposit a fixed amount every month for a selected tenure (usually 6 months to 10 years). Interest is compounded quarterly, meaning it is added to the principal every three months.
            </p>

            <p>
              Over time, this compounding effect increases your returns, helping you build a stable savings corpus.
            </p>

          </div>

        </div>

        {/* ================= BEST PRACTICES ================= */}
        <div>

          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            Best Practices for RD Investments
          </h2>

          <div className="space-y-2 text-[15px] text-[var(--text-secondary)]">

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Choose the Right Tenure:
              </span>{" "}
              Align your RD tenure with your financial goal.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Automate Your Deposits:
              </span>{" "}
              Set up auto-debit to avoid missing installments.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Ladder Your RDs:
              </span>{" "}
              Open multiple RDs with different maturities for liquidity.
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
                      isOpen ? "max-h-[500px] mt-3" : "max-h-0"
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
     <section className="px-6 py-12 bg-[var(--bg-primary)]">
      <div className="
        max-w-5xl mx-auto
        p-6 rounded-2xl
        bg-[var(--card-bg)]
        border border-[var(--border-color)]
      ">

        {/* TITLE */}
        <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
          More Tools in Financial Tools
        </h2>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">

          {tools.map((tool, i) => (
            <div
              key={i}
              className="
                flex items-center justify-between
                p-4 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border-color)]
                cursor-pointer
                transition-all duration-200
                hover:border-yellow-400 hover:shadow-md
              "
            >

              {/* LEFT */}
              <div className="flex items-center gap-3">

                {/* ICON */}
                <div className="flex items-center justify-center text-sm text-yellow-400 rounded-full w-9 h-9 bg-yellow-400/10">
                  %
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {tool.name}
                  </p>
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2">

                {/* TAG */}
                {tool.tag && (
                  <span className="
                    px-2 py-[2px] text-xs rounded-full
                    bg-yellow-400 text-black font-medium
                  ">
                    {tool.tag}
                  </span>
                )}

                <ArrowRight
                  size={16}
                  className="text-[var(--text-secondary)]"
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
    
    <section className="px-6 py-16 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto space-y-10">

    {/* ================= INTRO ================= */}
    <div>
      <h2 className="mb-2 text-3xl font-bold text-yellow-400">
        What is RD?
      </h2>

      <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
        Recurring Deposit (RD) is a savings scheme where you deposit a fixed
        amount monthly. It's similar to FD but with flexible monthly deposits.
      </p>
    </div>

    {/* ================= STEP TITLE ================= */}
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-400 rounded-full">
        1
      </div>

      <h2 className="text-2xl font-bold text-yellow-400">
        Step-by-Step: How to Use This Tool
      </h2>
    </div>

    {/* ================= TIMELINE ================= */}
    <div className="relative">

      {/* vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-[var(--border-color)]"></div>

      {[
        ["Enter", "your monthly deposit in Monthly Deposit."],
        ["Set", "the interest rate and tenure."],
        ["View", "the maturity amount and interest earned."]
      ].map(([title, desc], i) => (
        <div key={i} className="relative flex items-start gap-6 mb-6">

          {/* circle */}
          <div className="z-10 flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-400 rounded-full">
            {i + 1}
          </div>

          {/* card */}
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

<section className="px-6 py-16 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto space-y-8">

    {/* TITLE */}
    <h2 className="flex items-center gap-2 text-2xl font-bold text-yellow-400">
      💡 Best Practices for Best Results
    </h2>

    {/* GRID */}
    <div className="grid gap-6 md:grid-cols-2">

      {[
        ["Fixed deposits", "RD rates similar to FD rates."],
        ["Tenure", "commonly 1–5 years."],
        ["Premature withdrawal", "may have penalties."],
        ["Compare", "check rates across banks."]
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="
            flex items-start gap-3
            p-5 rounded-xl
            bg-[var(--card-bg)]
            border border-[var(--border-color)]
          "
        >

          {/* ICON */}
          <div className="flex items-center justify-center w-6 h-6 mt-1 text-xs text-yellow-400 border border-yellow-400 rounded-full ">
            ✓
          </div>

          {/* TEXT */}
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              {title}
            </p>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              — {desc}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>
  
</section>
    </div>    
      <Footer />
    </div>
  );
}

export default RD;