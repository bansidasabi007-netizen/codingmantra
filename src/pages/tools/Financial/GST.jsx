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


function GST() {

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
      ${highlight
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
      question: "What are the current GST slabs in India?",
      answer:
        "India currently has GST slabs of 0%, 5%, 12%, 18%, and 28% depending on the category of goods and services.",
    },
    {
      question: "How do you calculate the GST-inclusive price?",
      answer:
        "To calculate GST-inclusive price, add the GST amount to the original base amount.",
    },
    {
      question: "How do you reverse calculate GST from a final price?",
      answer:
        "Divide the final amount by (1 + GST rate / 100) to get the original base amount.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);


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
              GST Calculator
            </h1>

            <p className="mt-3 text-lg text-[var(--text-secondary)]">
              Add or remove GST from any amount.
            </p>
          </div>



          <div className="max-w-5xl mx-auto mt-14">

            <div
              className="
      rounded-2xl
      border border-[var(--border-color)]
      bg-[var(--card-bg)]
      p-6
    "
            >

              {/* HEADING */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-bold text-yellow-400">%</span>

                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  GST Calculator
                </h2>
              </div>

              {/* MAIN GRID */}
              <div className="grid gap-6 lg:grid-cols-2">

                {/* LEFT */}
                <div>

                  {/* AMOUNT */}
                  <div className="mb-6">
                    <label
                      className="
              block mb-2 text-sm font-medium
              text-[var(--text-primary)]
            "
                    >
                      Amount (₹)
                    </label>

                    <input
                      type="text"
                      defaultValue="1000"
                      className="
              w-full px-4 py-3 rounded-lg
              border border-[var(--border-color)]
              bg-[var(--bg-primary)]
              text-[var(--text-primary)]
              outline-none
            "
                    />
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-4 mb-7">

                    <button
                      className="py-3 font-semibold text-white transition-all border border-yellow-500 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20"
                    >
                      Add GST
                    </button>

                    <button
                      className="
              py-3 rounded-xl
              border border-[var(--border-color)]
              bg-[var(--bg-primary)]
              text-[var(--text-primary)]
              font-semibold
            "
                    >
                      Remove GST
                    </button>

                  </div>

                  {/* GST RATE */}
                  <div className="mb-3">
                    <label
                      className="
              block mb-2 text-sm font-medium
              text-[var(--text-primary)]
            "
                    >
                      GST Rate (%)
                    </label>

                    <div className="grid grid-cols-[120px_1fr] gap-3">

                      <input
                        type="text"
                        defaultValue="18"
                        className="
                px-4 py-3 rounded-lg
                border border-[var(--border-color)]
                bg-[var(--bg-primary)]
                text-[var(--text-primary)]
                outline-none
              "
                      />

                      <select
                        className="
                px-4 py-3 rounded-lg
                border border-[var(--border-color)]
                bg-[var(--bg-primary)]
                text-[var(--text-primary)]
                outline-none
              "
                      >
                        <option>Find Rate</option>
                      </select>

                    </div>
                  </div>

                  {/* RATE BUTTONS */}
                  <div className="flex flex-wrap gap-2 mb-7">

                    {["3%", "5%", "12%", "18%", "28%"].map((rate) => (
                      <button
                        key={rate}
                        className="
                px-4 py-2 rounded-lg
                border border-[var(--border-color)]
                bg-[var(--bg-primary)]
                text-sm font-semibold
                text-[var(--text-primary)]
                hover:border-yellow-500
                transition-all
              "
                      >
                        {rate}
                      </button>
                    ))}

                  </div>

                  {/* CALCULATE */}
                  <button
                    className="w-full py-3 font-semibold text-black transition-all bg-yellow-500 rounded-xl hover:opacity-90"
                  >
                    Calculate
                  </button>

                </div>

                {/* RIGHT RESULT */}
                <div
                  className="
          rounded-2xl
          border border-[var(--border-color)]
          bg-white/[0.02]
          p-8
          flex flex-col justify-center
        "
                >

                  <div className="space-y-7">

                    {/* BASE */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-[var(--text-secondary)]">
                        Base Amount:
                      </span>

                      <span className="text-3xl font-bold text-[var(--text-primary)]">
                        ₹ 1,000.00
                      </span>
                    </div>

                    {/* GST */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-[var(--text-secondary)]">
                        GST (18%):
                      </span>

                      <span className="text-2xl font-semibold text-[var(--text-primary)]">
                        ₹ 180.00
                      </span>
                    </div>

                    <div className="border-t border-[var(--border-color)] pt-6">

                      <div className="flex items-center justify-between">

                        <span className="text-2xl font-bold text-white">
                          Final Amount:
                        </span>

                        <span className="text-5xl font-bold text-yellow-400">
                          ₹ 1,180.00
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* DISCLAIMER */}
              <div
                className="p-5 mt-8 border rounded-2xl border-yellow-500/40 bg-yellow-500/10"
              >

                <div className="flex gap-4">

                  <div className="text-xl text-yellow-400">
                    ⓘ
                  </div>

                  <div>

                    <h4 className="mb-2 font-semibold text-yellow-400">
                      Disclaimer
                    </h4>

                    <p
                      className="leading-7 text-yellow-200/90"
                    >
                      GST rates are subject to change. The rates provided in the
                      dropdown are for common items and for illustrative purposes
                      only. Always verify the current applicable GST rate with the
                      official GST portal or a tax professional.
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16">

            {/* CONTENT */}
            <div className="mb-14">

              <h2
                className="mb-4 text-5xl font-bold text-yellow-400 "
              >
                Understanding GST Calculations
              </h2>

              <div
                className="
        space-y-4 leading-8
        text-lg text-[var(--text-primary)]
      "
              >

                <p>
                  Goods and Services Tax (GST) is a comprehensive indirect tax
                  levied on the supply of goods and services in India.
                  Calculating GST correctly is essential for business owners,
                  consumers, and accountants. Our tool simplifies this process,
                  whether you're starting with a pre-tax amount or a final
                  price that already includes GST.
                </p>

                <div>

                  <p className="mb-2 font-semibold">
                    How This Tool Helps
                  </p>

                  <p className="mb-2">
                    <span className="font-bold">
                      Add GST (Exclusive Price):
                    </span>{" "}
                    If you have a base price and need to find the final
                    price after adding GST, use the "Add GST" option.
                    This is useful for creating invoices.
                  </p>

                  <p>
                    <span className="font-bold">
                      Remove GST (Inclusive Price):
                    </span>{" "}
                    If you have a final price (MRP) and need to find the
                    original base price and the GST amount, use the
                    "Remove GST" option. This is helpful for accounting
                    and understanding the tax component of a purchase.
                  </p>

                </div>

              </div>

            </div>

            {/* FAQ */}
            {/* FAQ */}
            <div className="mt-14">

              <h3
                className="mb-8 text-4xl font-bold text-yellow-400 "
              >
                Frequently Asked Questions (FAQs)
              </h3>

              <div className="space-y-2">

                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="
          border-b border-[var(--border-color)]
        "
                  >

                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === i ? null : i)
                      }
                      className="flex items-center justify-between w-full py-6 text-left "
                    >

                      <span
                        className="
              text-xl font-semibold
              text-[var(--text-primary)]
            "
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`
              text-lg transition-transform duration-300
              text-[var(--text-secondary)]
              ${openFaq === i ? "rotate-180" : ""}
            `}
                      >
                        ˅
                      </span>

                    </button>

                    {/* ANSWER */}
                    <div
                      className={`
            overflow-hidden transition-all duration-300
            ${openFaq === i
                          ? "max-h-40 pb-6 opacity-100"
                          : "max-h-0 opacity-0"
                        }
          `}
                    >

                      <p
                        className="
              pr-10 leading-7
              text-[var(--text-secondary)]
            "
                      >
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                ))}

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
              <h2 className="text-3xl font-bold text-[#F3A412] pt-16">
                Understanding GST
              </h2>

              <p className="mt-2 text-lg text-[var(--text-secondary)]">
                Goods and Services Tax (GST) is an indirect tax used in India. The tool helps you calculate GST-inclusive or exclusive amounts. </p>
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

export default GST;