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

function Sukanya() {

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
      q: "What is the current interest rate for SSY?",
      a: "The SSY interest rate is set by the Government of India and revised quarterly. It is generally higher than many other small savings schemes."
    },
    {
      q: "What is the minimum and maximum amount I can deposit?",
      a: "You can deposit a minimum of ₹250 and a maximum of ₹1.5 lakh in a financial year."
    },
    {
      q: "What happens if I fail to make the minimum deposit?",
      a: "The account becomes inactive, but it can be revived by paying a penalty along with the minimum required contribution."
    },
    {
      q: "Can an SSY account be closed before maturity?",
      a: "Premature closure is allowed under certain conditions such as the girl child's higher education, marriage, or extreme compassionate grounds."
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
    Sukanya Samriddhi Calculator
  </span>
</div>
      {/* Breadcrumb */}


        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
       Sukanya Samriddhi Calculator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
   Plan for your daughter's future education.
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
          <span className="text-yellow-400">👧</span> SSY Calculator
        </h2>

        {/* ================= TOP ================= */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* LEFT */}
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

          {/* RIGHT */}
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

            <div className="flex justify-between mt-6 text-sm">

              <div>
                <p className="text-[var(--text-secondary)]">
                  Total Invested
                </p>
                <p className="text-[var(--text-primary)] font-medium">
                  ₹ 15,00,000.00
                </p>
              </div>

              <div>
                <p className="text-[var(--text-secondary)]">
                  Total Interest
                </p>
                <p className="text-[var(--text-primary)] font-medium">
                  ₹ 32,88,079.45
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= CHART ================= */}
        <div className="mt-10">

          <h3 className="mb-4 text-center text-lg font-semibold text-[var(--text-primary)]">
            Yearly Growth Projection
          </h3>

          <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>

                <XAxis dataKey="year" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />

                <Tooltip />
                <Legend />

                <Bar dataKey="interest" stackId="a" fill="#3b82f6" />
                <Bar dataKey="invest" stackId="a" fill="#34d399" />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </section>
    
     <section className="px-6 py-16 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= MAIN CONTENT ================= */}
        <div>

          <h2 className="mb-4 text-3xl font-bold text-yellow-400">
            About the Sukanya Samriddhi Yojana (SSY) Scheme
          </h2>

          <div className="space-y-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">

            <p>
              Sukanya Samriddhi Yojana (SSY) is a savings scheme launched back in 2015 as part of the Government of India's "Beti Bachao, Beti Padhao" campaign. This scheme enables legal guardians to open a dedicated savings account for their girl child, encouraging long-term savings for her future education and marriage expenses.
            </p>

            <p>
              SSY accounts are known for their attractive, government-backed interest rates and significant tax benefits, making them one of the most popular investment options for a girl child in India.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              Who is Eligible for an SSY Account?
            </p>

            <p>A legal guardian can open an SSY account in the name of a girl child.</p>
            <p>The girl child must be an Indian resident.</p>
            <p>The girl's age must be 10 years or younger at the time of account opening.</p>
            <p>Only one account per girl child is allowed (max two per family, exception for twins).</p>

            <p className="font-medium text-[var(--text-primary)]">
              How can an SSY calculator help you?
            </p>

            <p>
              Our SSY calculator helps you estimate the maturity amount after 21 years based on your yearly investment, interest rate, and duration.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Goal Planning:</span>{" "}
              Understand how much to invest annually.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Visualizing Growth:</span>{" "}
              See compound growth clearly.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Tax Benefits:</span>{" "}
              Enjoy EEE tax benefits under Section 80C.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              How Does The SSY Scheme Work?
            </p>

            <p>
              The account matures after 21 years. Contributions are required for the first 15 years only.
            </p>

            <p className="font-medium text-[var(--text-primary)]">
              Withdrawal Rules
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Higher Education:</span>{" "}
              Up to 50% withdrawal allowed after age 18.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Marriage:</span>{" "}
              Account can be closed after age 18.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">Full Maturity:</span>{" "}
              Entire amount after 21 years.
            </p>

          </div>

        </div>

        {/* ================= BEST PRACTICES ================= */}
        <div>

          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            Best Practices for SSY Investing
          </h2>

          <div className="space-y-2 text-[15px] text-[var(--text-secondary)]">

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Maximize Contributions:
              </span>{" "}
              Invest up to ₹1.5 lakh yearly for best returns.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Invest Early:
              </span>{" "}
              Start early in the financial year to earn full interest.
            </p>

            <p>
              <span className="font-semibold text-[var(--text-primary)]">
                Review Annually:
              </span>{" "}
              Track and adjust contributions yearly.
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
What is Sukanya Samriddhi?
    </h2>

    <p className="mt-2 text-lg text-[var(--text-secondary)]">
Sukanya Samriddhi Yojana (SSY) is a government scheme for girl child education. It offers high interest rates and tax benefits under Section 80C. </p>
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
        ["Enter", "the child's age in Child's Age."],
        ["Set", "the yearly deposit amount."],
        ["View", "the maturity amount at age 21."]
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

export default Sukanya;