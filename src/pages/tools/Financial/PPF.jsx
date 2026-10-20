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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";


function PPF() {

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
      q: "Can I withdraw money from my PPF account before maturity?",
      a: "Partial withdrawals are allowed from the 7th financial year onwards. You can withdraw up to 50% of the balance at the end of the 4th year preceding the year of withdrawal. Complete premature closure is only allowed under specific conditions like critical illness."
    },
    {
      q: "Can I have more than one PPF account?",
      a: "No, an individual is allowed to open only one PPF account in their name. However, you can open an account on behalf of a minor."
    },
    {
      q: "What happens after the 15-year maturity period?",
      a: "After maturity, you can either withdraw the full amount or extend the account in blocks of 5 years with or without additional contributions."
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
  { year: "Year 1", investment: 50000, interest: 5000 },
  { year: "Year 3", investment: 150000, interest: 20000 },
  { year: "Year 5", investment: 250000, interest: 50000 },
  { year: "Year 7", investment: 350000, interest: 90000 },
  { year: "Year 9", investment: 450000, interest: 140000 },
  { year: "Year 11", investment: 550000, interest: 200000 },
  { year: "Year 13", investment: 650000, interest: 280000 },
  { year: "Year 15", investment: 750000, interest: 380000 },
  { year: "Year 17", investment: 850000, interest: 500000 },
  { year: "Year 19", investment: 950000, interest: 650000 },
  { year: "Year 21", investment: 1000000, interest: 800000 },
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
  
      PPF Calculator
      </span>

    </div>
    

    
  </div>


        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
          PPF Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
   Calculate your PPF returns and maturity amount.
          </p>
        </div>


<section className="px-6 pt-16 bg-[var(--bg-primary)]">
  <div className="
    max-w-5xl mx-auto
    p-6 rounded-2xl
    bg-[var(--card-bg)]
    border border-[var(--border-color)]
  ">

    {/* HEADER */}
    <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[var(--text-primary)]">
      <span className="text-yellow-400">🐷</span> PPF Calculator
    </h2>

    {/* MAIN GRID */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* ================= LEFT ================= */}
      <div className="space-y-6">

        {[
          ["Yearly Investment (₹)", "100000"],
          ["Girl's Current Age", "1"],
          ["Investment Start Year", "2026"],
          ["Interest Rate (% p.a.)", "8.2"]
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

            {/* SLIDER */}
            <input
              type="range"
              className="w-full accent-yellow-400"
            />

          </div>
        ))}

        {/* NOTE */}
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="font-medium text-[var(--text-primary)]">Note:</span>{" "}
          Investment is for 15 years from account opening. The account matures after 21 years.
        </p>

      </div>

      {/* ================= RIGHT ================= */}
      <div className="
        p-6 rounded-xl
        bg-[var(--card-bg)]
        border border-[var(--border-color)]
        text-center flex flex-col justify-center
      ">

        <p className="text-sm text-[var(--text-secondary)]">
          Maturity Year
        </p>

        <h3 className="mt-1 text-2xl font-semibold text-[var(--text-primary)]">
          2047
        </h3>

        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          Maturity Value at age 22
        </p>

        <h2 className="mt-2 text-3xl font-bold text-yellow-400">
          ₹ 47,88,079.45
        </h2>

        {/* STATS */}
        <div className="flex justify-between mt-6 text-sm">

          <div>
            <p className="text-[var(--text-secondary)]">
              Total Invested
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 15,00,000.00
            </p>
          </div>

          <div>
            <p className="text-[var(--text-secondary)]">
              Total Interest
            </p>
            <p className="font-medium text-[var(--text-primary)]">
              ₹ 32,88,079.45
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

        

      <div className="
        max-w-5xl mx-auto
        p-6 rounded-2xl
        bg-[var(--card-bg)]
        border border-[var(--border-color)]
      ">

        {/* TITLE */}
        <h2 className="mb-6 text-xl font-semibold text-center text-[var(--text-primary)]">
          Yearly Growth Projection
        </h2>

        {/* CHART */}
        <div className="w-full h-[300px]">

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>

              <XAxis
                dataKey="year"
                stroke="var(--text-secondary)"
                tick={{ fontSize: 12 }}
              />

              <YAxis
                stroke="var(--text-secondary)"
                tick={{ fontSize: 12 }}
              />

              <Tooltip />

              <Legend />

              {/* GREEN = Investment */}
              <Bar
                dataKey="investment"
                stackId="a"
                fill="#34d399"
                radius={[4, 4, 0, 0]}
              />

              {/* BLUE = Interest */}
              <Bar
                dataKey="interest"
                stackId="a"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>
    </section>

    
    <section className="px-6 py-16 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ================= CONTENT ================= */}
        <div>

          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            What is the Public Provident Fund (PPF)?
          </h2>

          <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

            <p>
              The Public Provident Fund (PPF) is a long-term savings cum investment product backed by the Government of India. It offers a fixed rate of interest (compounded annually) and significant tax benefits, making it one of the most secure and popular investment options for achieving long-term goals like retirement, children's education, or building a substantial corpus.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              Key Features of the PPF Scheme
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Tenure:</span>{" "}
              A PPF account has a lock-in period of 15 years, which can be extended in blocks of 5 years after maturity.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Interest Rate:</span>{" "}
              The interest rate is set by the government and reviewed every quarter. The interest is compounded annually.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Tax Benefits:</span>{" "}
              PPF enjoys an Exempt-Exempt-Exempt (EEE) status. This means the amount you invest is tax-deductible under Section 80C, the interest earned is tax-free, and the maturity amount is also completely tax-free.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Investment Limits:</span>{" "}
              You can invest a minimum of ₹500 and a maximum of ₹1.5 lakh in a financial year.
            </p>

          </div>

        </div>

        {/* ================= HOW IT HELPS ================= */}
        <div>

          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            How Our PPF Calculator Can Help You
          </h2>

          <div className="space-y-2 text-[15px] text-[var(--text-secondary)]">

            <p>
              Our calculator simplifies the process of projecting your PPF investment's growth. By entering your planned yearly investment and the interest rate, you can instantly see:
            </p>

            <p>• The estimated maturity value after 15 years.</p>
            <p>• A clear breakdown of your total contributions versus the total interest earned.</p>
            <p>• A year-by-year chart visualizing how your investment grows with the power of annual compounding.</p>

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
                        isOpen ? "rotate-180 text-yellow-400" : "text-[var(--text-secondary)]"
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
What is PPF?
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
Public Provident Fund (PPF) is a popular long-term savings scheme in India with tax benefits under Section 80C. It has a 15-year lock-in period with a guaranteed return.
 </p>
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
        ["Enter", "your yearly contribution in Annual Deposit."],
        ["Set", "the investment duration (defaults to 15 years)."],
        ["View", "the total interest and maturity amount."]
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

export default PPF;