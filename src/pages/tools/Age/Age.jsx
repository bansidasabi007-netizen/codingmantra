import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function Age() {

    const navigate = useNavigate();
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
 
const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "How does the calculator handle leap years?",
    answer:
      "The calculator accounts for leap years by considering the extra day in February every four years, ensuring accurate age calculation.",
  },
  {
    question: "Is my date of birth saved?",
    answer:
      "No, your data is not stored. All calculations happen instantly in your browser for complete privacy.",
  },
];

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const tools = [
  {
    title: "Date Comparator",
    icon: "⏳",
  },
  {
    title: "Date Calculator",
    icon: "📅",
  },
  {
    title: "Timezone Converter",
    icon: "🌐",
  },
  {
    title: "Unix Timestamp Converter",
    icon: "⌨️",
  },
  {
    title: "Time Unit Converter",
    icon: "⏱️",
  },
];
  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />


            {/* Breadcrumb */}
            <div className="max-w-5xl px-4 mx-auto my-6">
            
              <div className="mx-auto max-w-7xl">
            
                <div
                  className="
                    flex items-center
                    gap-4
            
                    px-5
                    py-4
            
                    rounded-2xl
            
                    border
            
                    border-[#E5E7EB]
                    dark:border-[#232531]
            
                    bg-white
                    dark:bg-[#121218]
            
                    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                    dark:shadow-none
            
                    transition-all duration-300
                  "
                >
            
                  {/* BACK */}
                  <button
                    onClick={() => navigate(-1)}
                    className="
                      text-[#666]
                      dark:text-gray-400
            
                      transition-all duration-300
            
                      hover:text-[#F3A412]
                    "
                  >
                    <RiArrowLeftLine className="text-[20px]" />
                  </button>
            
                  {/* HOME */}
                  <Link
                    to="/"
                    className="
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                    <RiHome5Line className="text-[18px]" />
                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* TOOLS */}
                  <Link
                    to="/tools"
                    className="
                      text-[15px]
            
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                    Tools
                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* IMAGE TOOLS */}
                  <Link
                  to="/tools/date-time"
                    className="
                      text-[15px]
            
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                   Date & Time Tools

                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* CURRENT */}
                  <span
                    className="
                      text-[15px]
                      font-semibold
            
                      text-[#111111]
                      dark:text-white
                    "
                  >
         Age Calculator
                  </span>
            
                </div>
            
              </div>
            
            </div>

    {/* TITLE */}
<div className="mt-10 text-center">
  <h1 className="text-5xl font-bold text-[#F3A412]">
    Age Calculator
  </h1>
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
    Enter your date of birth to find out your exact age, down to the day.
  </p>
</div>

 {/* Breadcrumb */}
            <div className="max-w-5xl px-4 mx-auto my-6">
            
              <div className="mx-auto max-w-7xl">
            
                <div
                  className="
                    flex items-center
                    gap-4
            
                    px-5
                    py-4
            
                    rounded-2xl
            
                    border
            
                    border-[#E5E7EB]
                    dark:border-[#232531]
            
                    bg-white
                    dark:bg-[#121218]
            
                    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                    dark:shadow-none
            
                    transition-all duration-300
                  "
                >
            
                  {/* BACK */}
                  <button
                    onClick={() => navigate(-1)}
                    className="
                      text-[#666]
                      dark:text-gray-400
            
                      transition-all duration-300
            
                      hover:text-[#F3A412]
                    "
                  >
                    <RiArrowLeftLine className="text-[20px]" />
                  </button>
            
                  {/* HOME */}
                  <Link
                    to="/"
                    className="
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                    <RiHome5Line className="text-[18px]" />
                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* TOOLS */}
                  <Link
                    to="/tools"
                    className="
                      text-[15px]
            
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                    Tools
                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* IMAGE TOOLS */}
                  <Link
                  to="/tools/date-time"
                    className="
                      text-[15px]
            
                      text-[#666]
                      dark:text-gray-400
            
                      hover:text-[#F3A412]
            
                      transition-all duration-300
                    "
                  >
                   Date & Time Tools

                  </Link>
            
                  <span
                    className="
                      text-[#B0B0B8]
                      dark:text-[#4B5563]
                    "
                  >
                    &gt;
                  </span>
            
                  {/* CURRENT */}
                  <span
                    className="
                      text-[15px]
                      font-semibold
            
                      text-[#111111]
                      dark:text-white
                    "
                  >
         Age Calculator
                  </span>
            
                </div>
            
              </div>
            
            </div>
{/* TOP HERO SECTION */}
<div className="mt-10 text-center">

  {/* Title */}
  <h1 className="text-5xl font-bold text-[#F3A412]">
    Age Calculator
  </h1>

  {/* Subtitle */}
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
    Calculate your exact age in years, months, days, and more.
  </p>

</div> 





{/* MAIN CARD */}
<div className="max-w-5xl px-6 mx-auto mt-10">
  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        <h2 className="flex items-center gap-2 mb-4 text-xl font-semibold text-[var(--text-primary)]">
          📅 Calculate Your Age
        </h2>

        {/* INPUT */}
        <label className="text-sm font-medium text-[var(--text-primary)]">
          Enter your Date of Birth
        </label>

        <input
          type="date"
          className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
          bg-[var(--bg-primary)] border-[var(--border-color)] 
          text-[var(--text-primary)] outline-none"
        />

        {/* BUTTON */}
        <button className="w-full px-4 py-3 font-medium text-black rounded-md bg-[#F3A412] hover:opacity-90">
          Calculate Age
        </button>

      </div>


      {/* RIGHT SIDE */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)] flex flex-col items-center justify-center">

        <p className="mb-2 text-sm text-[var(--text-secondary)]">
          Your Age
        </p>

        <h2 className="text-3xl font-bold text-[#F3A412] text-center">
          25 years, 0 months, & 0 days
        </h2>

        {/* STATS */}
        <div className="grid w-full grid-cols-3 gap-4 mt-6">

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">300</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Months</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">9,131</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Days</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">219,160</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Hours</p>
          </div>

        </div>

        {/* MINUTES */}
        <div className="w-full mt-4 p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
          <p className="text-lg font-semibold">13,149,645</p>
          <p className="text-xs text-[var(--text-secondary)]">Total Minutes</p>
        </div>

        {/* FOOT TEXT */}
        <p className="mt-6 text-sm text-[var(--text-primary)] flex items-center gap-2">
          🎁 Your next birthday is in 1 year.
        </p>

      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    How Does the Age Calculator Work?
  </h2>

  {/* Description */}
  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
    Our age calculator determines the time that has elapsed since your date of birth to the current date.
    It performs this calculation by considering the years, months, and days. The tool is designed to be
    highly accurate, accounting for the varying number of days in each month and for leap years.
  </p>

  <p className="text-[var(--text-secondary)] leading-relaxed mb-2 font-medium">
    More Than Just Years
  </p>

  <p className="text-[var(--text-secondary)] leading-relaxed mb-2">
    While we usually think of age in years, this calculator provides a more detailed breakdown:
  </p>

  <ul className="text-[var(--text-secondary)] space-y-2 mb-6">
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Years, Months, and Days:
      </span>{" "}
      The most common way to express chronological age, giving you a precise count.
    </li>
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Total Months / Days / Hours:
      </span>{" "}
      See your age expressed in different units, which can be a fun way to perceive time.
    </li>
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Next Birthday Countdown:
      </span>{" "}
      Find out exactly how long you have to wait until your next celebration!
    </li>
  </ul>

  {/* FAQ Title */}
  <h3 className="mb-4 text-2xl font-semibold text-[#F3A412]">
    Frequently Asked Questions (FAQs)
  </h3>

  {/* FAQ LIST */}
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="pb-3 border-b border-[var(--border-color)] cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <div className="flex items-center justify-between">
          <p className="text-[var(--text-primary)] font-medium">
            {faq.question}
          </p>

          <ChevronDown
            className={`transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </div>

        {openIndex === index && (
          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>

</div>

<div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <div className="max-w-5xl mx-auto">

    {/* Container */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      {/* Title */}
      <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
        More Tools in Date & Time Tools
      </h2>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 transition border rounded-lg cursor-pointer 
            bg-[var(--card-bg)] border-[var(--border-color)]
            hover:border-yellow-500 hover:bg-[var(--bg-primary)]"
          >

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* ICON */}
              <div className="flex items-center justify-center w-10 h-10 text-yellow-400 rounded-full bg-yellow-500/10">
                {tool.icon}
              </div>

              {/* TEXT */}
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {tool.title}
              </p>

            </div>

            {/* ARROW */}
            <ArrowRight
              className="text-[var(--text-secondary)]"
              size={18}
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</div>    



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="text-3xl font-semibold text-[#F3A412] mb-3">
    Why Calculate Your Age?
  </h2>

  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
    Knowing your exact age down to the day can be useful for legal documents,
    medical history, insurance policies, or just curiosity. This tool breaks
    down your age into multiple units for precision.
  </p>

  {/* STEP TITLE */}
  <div className="flex items-center gap-3 mb-6">
    <div className="flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
      1
    </div>

    <h3 className="text-2xl font-semibold text-[#F3A412]">
      Step-by-Step: How to Use This Tool
    </h3>
  </div>

  {/* TIMELINE */}
  <div className="relative">

    {/* vertical line */}
    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[var(--border-color)]"></div>

    {/* STEP 1 */}
    <div className="relative flex gap-6 mb-6">
      <div className="z-10 flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
        1
      </div>

      <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
        <p className="font-semibold text-[var(--text-primary)]">Enter</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          your date of birth in <span className="font-medium text-[var(--text-primary)]">Date of Birth</span>.
        </p>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="relative flex gap-6 mb-6">
      <div className="z-10 flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
        2
      </div>

      <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
        <p className="font-semibold text-[var(--text-primary)]">Select</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          the current date (defaults to today).
        </p>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="relative flex gap-6">
      <div className="z-10 flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
        3
      </div>

      <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
        <p className="font-semibold text-[var(--text-primary)]">View</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          your age in years, months, days, hours, and minutes.
        </p>
      </div>
    </div>

  </div>

</div>



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Title */}
  <h2 className="flex items-center gap-2 mb-8 text-2xl font-semibold text-[#F3A412]">
    💡 Best Practices for Best Results
  </h2>

  {/* Grid */}
  <div className="grid gap-6 md:grid-cols-2">

    {/* CARD 1 */}
    <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
      <div className="flex items-start gap-3">

        {/* Icon */}
        <div className="flex items-center justify-center w-8 h-8 text-yellow-400 rounded-full bg-yellow-500/10">
          ✓
        </div>

        {/* Text */}
        <div>
          <p className="font-semibold text-[var(--text-primary)]">
            Exact age matters
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            — some services require precise age.
          </p>
        </div>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
      <div className="flex items-start gap-3">

        <div className="flex items-center justify-center w-8 h-8 text-yellow-400 rounded-full bg-yellow-500/10">
          ✓
        </div>

        <div>
          <p className="font-semibold text-[var(--text-primary)]">
            Leap years count
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            — born on Feb 29 has a unique birthday.
          </p>
        </div>

      </div>
    </div>

    {/* CARD 3 */}
    <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
      <div className="flex items-start gap-3">

        <div className="flex items-center justify-center w-8 h-8 text-yellow-400 rounded-full bg-yellow-500/10">
          ✓
        </div>

        <div>
          <p className="font-semibold text-[var(--text-primary)]">
            Timezones
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            — your age changes based on location.
          </p>
        </div>

      </div>
    </div>

    {/* CARD 4 */}
    <div className="p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
      <div className="flex items-start gap-3">

        <div className="flex items-center justify-center w-8 h-8 text-yellow-400 rounded-full bg-yellow-500/10">
          ✓
        </div>

        <div>
          <p className="font-semibold text-[var(--text-primary)]">
            Multiple formats
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            — use for official documents.
          </p>
        </div>

      </div>
    </div>

  </div>

</div>

    
      <Footer />
    </div>
  );
}

export default Age;