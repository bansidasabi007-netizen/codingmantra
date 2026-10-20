import { Download, Upload } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass, } from "lucide-react";
import { ArrowLeftRight, ArrowLeft, Copy } from "lucide-react";
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


function Simple() {

  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(2);

  const interest = (principal * rate * years) / 100;
  const total = Number(principal) + interest;

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

  const yearlyData = Array.from(
    { length: years },
    (_, index) => ({
      year: index + 1,
      interest: (principal * rate) / 100,
      total:
        principal +
        ((principal * rate) / 100) * (index + 1),
    })
  );

  const [activeTab, setActiveTab] = useState("calculator");

  const MiniField = ({ label, value, placeholder }) => (
    <div>
      <p className="mb-1 text-xs text-[var(--text-secondary)]">{label}</p>
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
      ${highlight
          ? "border border-yellow-500 text-yellow-400 bg-yellow-500/10"
          : "border border-[var(--border-color)] text-[var(--text-secondary)] bg-black/50"
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
          Simple Interest Calculator
        </span>
      </div>
      {/* Breadcrumb */}


      <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

        {/* 🔥 ONE GLOBAL CONTAINER */}
        <div className="max-w-5xl mx-auto space-y-12">

          {/* ================= HERO ================= */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#F3A412]">
              Simple Interest Calculator
            </h1>

            <p className="mt-3 text-lg text-[var(--text-secondary)]">
              Calculate simple interest for loans and investments.
            </p>
          </div>


          <div className="min-h-screen px-4 py-10 bg-[var(--bg-primary)] text-[var(--text-primary)]">
            <div className="max-w-5xl mx-auto rounded-2xl p-6 border border-[var(--border-color)] bg-[var(--card-bg)]">

              {/* Header */}
              <h1 className="text-4xl font-bold text-[#F3A412] mb-6">
                % Simple Interest Calculator
              </h1>

              {/* Tabs */}
              <div className="flex p-1 mb-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)]">

                <button
                  onClick={() => setActiveTab("calculator")}
                  className={`px-5 py-2 rounded-md ${activeTab === "calculator"
                    ? "bg-black text-white"
                    : "text-[var(--text-secondary)]"
                    }`}
                >
                  Calculator
                </button>

                <button
                  onClick={() => setActiveTab("breakdown")}
                  className={`px-5 py-2 rounded-md ${activeTab === "breakdown"
                    ? "bg-black text-white"
                    : "text-[var(--text-secondary)]"
                    }`}
                >
                  Yearly Breakdown
                </button>

                <button
                  onClick={() => setActiveTab("chart")}
                  className={`px-5 py-2 rounded-md ${activeTab === "chart"
                    ? "bg-black text-white"
                    : "text-[var(--text-secondary)]"
                    }`}
                >
                  Chart
                </button>

              </div>


              {activeTab === "calculator" && (
                <div className="grid gap-8 lg:grid-cols-2">

                  {/* Left */}
                  <div>
                    <div className="mb-6">
                      <label className="block mb-2 font-medium">
                        Principal Amount (₹)
                      </label>

                      <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="
w-full
px-4
py-3
rounded-lg
outline-none
bg-[var(--bg-primary)]
text-[var(--text-primary)]
border border-[var(--border-color)]
"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-medium">
                        Annual Interest Rate (%)
                      </label>

                      <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="
w-full
px-4
py-3
rounded-lg
outline-none
bg-[var(--bg-primary)]
text-[var(--text-primary)]
border border-[var(--border-color)]
"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-medium">
                        Time Period (Years)
                      </label>

                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="
w-full
px-4
py-3
rounded-lg
outline-none
bg-[var(--bg-primary)]
text-[var(--text-primary)]
border border-[var(--border-color)]
"
                      />
                    </div>

                    <button
                      className="
                w-full
                py-4
                rounded-lg
                bg-[#F3A412]
                text-black
                font-semibold
                hover:opacity-90
              "
                    >
                      Calculate
                    </button>
                  </div>


                  <div
                    className="
            bg-[var(--bg-secondary)]
border
border-[var(--border-color)]
              rounded-xl
              flex
              flex-col
              items-center
              justify-center
              p-8
            "
                  >
                    <p className="mb-2 text-[var(--text-secondary)]">
                      Total Interest
                    </p>

                    <h2 className="text-5xl font-bold text-[#F3A412]">
                      ₹ {interest.toLocaleString("en-IN")}
                    </h2>

                    <p className="mt-8 text-[var(--text-secondary)]">
                      Total Amount after {years} years
                    </p>

                    <h2 className="mt-2 text-5xl font-bold">
                      ₹ {total.toLocaleString("en-IN")}
                    </h2>
                  </div>

                </div>
              )}

              {activeTab === "breakdown" && (
                <div className="mt-8">
                  <h3 className="mb-6 text-3xl font-bold text-center">
                    Yearly Breakdown
                  </h3>

                  <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[var(--bg-secondary)]">
                          <th className="px-6 py-4 text-left">Year</th>
                          <th className="px-6 py-4 text-center">
                            Interest for Year
                          </th>
                          <th className="px-6 py-4 text-right">
                            End of Year Value
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {yearlyData.map((item) => (
                          <tr
                            key={item.year}
                            className="border-t border-[var(--border-color)]"
                          >
                            <td className="px-6 py-4">{item.year}</td>

                            <td className="px-6 py-4 text-center">
                              ₹ {item.interest.toLocaleString()}
                            </td>

                            <td className="px-6 py-4 text-right">
                              ₹ {item.total.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "chart" && (
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={yearlyData}>
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="total" fill="#F3A412" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>

          <section className="px-6 pb-16 bg-[var(--bg-primary)]">
            <div className="max-w-5xl mx-auto space-y-10">

              {/* ================= CONTENT ================= */}
              <div className="max-w-5xl mx-auto mt-16">

                {/* TITLE */}
                <h2
                  className="mb-4 text-5xl font-bold text-yellow-400 "
                >
                  What is Simple Interest?
                </h2>

                {/* DESCRIPTION */}
                <div
                  className="
      space-y-3 leading-8
      text-lg text-[var(--text-primary)]
    "
                >

                  <p>
                    Simple interest is a straightforward method of calculating
                    the interest charge on a loan or investment. It is determined
                    by multiplying the daily interest rate by the principal by
                    the number of days that elapse between payments.
                  </p>

                  <p>
                    Unlike compound interest, simple interest is only calculated
                    on the original principal amount. This means you don't earn
                    interest on the interest you've already accumulated, making
                    the growth linear rather than exponential.
                  </p>

                  <div className="pt-2">

                    <p className="mb-2 font-semibold">
                      The Formula for Simple Interest
                    </p>

                    <p className="mb-5">
                      The formula to calculate simple interest is:
                    </p>

                    {/* FORMULA BOX */}
                    <div
                      className="
          flex items-center justify-center
          rounded-xl
          border border-[var(--border-color)]
          bg-[var(--card-bg)]
          py-6 px-4 mb-6
        "
                    >

                      <h3
                        className="
            text-3xl font-bold tracking-wide
            text-[var(--text-primary)]
          "
                      >
                        I = P × r × t
                      </h3>

                    </div>

                    {/* DEFINITIONS */}
                    <div className="space-y-2">

                      <p>
                        <span className="font-bold">I</span> = The total interest earned
                      </p>

                      <p>
                        <span className="font-bold">P</span> = The principal amount
                        (the initial sum of money)
                      </p>

                      <p>
                        <span className="font-bold">r</span> = The annual interest rate
                        (in decimal form)
                      </p>

                      <p>
                        <span className="font-bold">t</span> = The time period in years
                      </p>

                      <p>
                        The total amount (A) to be repaid is the principal plus
                        the interest: A = P + I.
                      </p>

                    </div>

                  </div>

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
                            className={`transition-transform duration-300 ${isOpen
                              ? "rotate-180 text-yellow-400"
                              : "text-[var(--text-secondary)]"
                              }`}
                          >
                            ▾
                          </span>
                        </div>

                        {/* ANSWER */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"
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
                Simple vs Compound Interest
              </h2>

              <p className="mt-2 text-lg text-[var(--text-secondary)]">
                Simple interest is calculated only on the principal amount. It's commonly used for short-term loans and certain investment products. </p>
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

export default Simple;