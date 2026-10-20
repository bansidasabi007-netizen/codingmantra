import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer } from "lucide-react";


function Date() {

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
    question: 'What is the difference between the "total units" and the "breakdown"?',
    answer:
      'The "breakdown" (e.g., X years, Y months, Z days) gives you a human-readable duration, much like calculating your age. The "total units" (e.g., Total Days) gives you the absolute number of that unit between the two dates, without considering the other units. Both are useful for different purposes.',
  },

];

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const tools = [
  {
    title: "Age Calculator",
    icon: <Calendar size={18} />,
  },
  {
    title: "Date Calculator",
    icon: <Calendar size={18} />,
  },
  {
    title: "Timezone Converter",
    icon: <Globe size={18} />,
  },
  {
    title: "Unix Timestamp Converter",
    icon: <Code size={18} />,
  },
  {
    title: "Time Unit Converter",
    icon: <Timer size={18} />,
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
    Date Comparator
                  </span>
            
                </div>
            
              </div>
            
            </div>


    {/* TITLE */}
<div className="mt-10 text-center">
  <h1 className="text-5xl font-bold text-[#F3A412]">
    Date Comparator
  </h1>
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
    Find the exact difference between two dates.
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
    Date Comparator
                  </span>
            
                </div>
            
              </div>
            
            </div>

{/* TOP HERO SECTION */}
<div className="mt-10 text-center">

  {/* Title */}
  <h1 className="text-5xl font-bold text-[#F3A412]">
  Date Comparator
  </h1>

  {/* Subtitle */}
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
    Calculate your exact age in years, months, days, and more.
  </p>

</div> 





<div className="max-w-4xl px-6 mx-auto mt-16">
  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    {/* Title */}
    <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--text-primary)]">
      ⏳ Calculate Duration
    </h2>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {/* Start */}
        <label className="text-sm font-medium text-[var(--text-primary)]">
          Start Date & Time
        </label>
        <input
          type="datetime-local"
          className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
          bg-[var(--bg-primary)] border-[var(--border-color)] 
          text-[var(--text-primary)] outline-none"
        />

        {/* End */}
        <label className="text-sm font-medium text-[var(--text-primary)]">
          End Date & Time
        </label>
        <input
          type="datetime-local"
          className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
          bg-[var(--bg-primary)] border-[var(--border-color)] 
          text-[var(--text-primary)] outline-none"
        />

        {/* Button */}
        <button className="w-full px-4 py-3 font-medium text-black rounded-md bg-[#F3A412] hover:opacity-90">
          Calculate Difference
        </button>

      </div>


      {/* RIGHT SIDE */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)] flex flex-col items-center justify-center">

        <p className="mb-2 text-sm text-[var(--text-secondary)]">
          Time Difference:
        </p>

        <h2 className="text-3xl font-bold text-[#F3A412] text-center">
          0y 0m 0d 1h 0m 0s
        </h2>

        {/* GRID STATS */}
        <div className="grid w-full grid-cols-3 gap-4 mt-6">

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">0</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Years</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">0</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Months</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">0</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Days</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">1</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Hours</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">60</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Minutes</p>
          </div>

          <div className="p-4 text-center border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
            <p className="text-lg font-semibold">3,600</p>
            <p className="text-xs text-[var(--text-secondary)]">Total Seconds</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
How Does the Date Comparator Work?
  </h2>

  {/* Description */}
  <p className="text-[var(--text-secondary)] leading-relaxed mb-1">
  This tool calculates the precise amount of time that has passed between a start date and an end date. You can select both the date and the time for a highly accurate calculation. The result is then broken down into multiple units to give you a comprehensive understanding of the duration.
  </p>

  <p className="text-[var(--text-secondary)] leading-relaxed mb-2 font-medium">
    Common Uses for a Date Comparator
  </p>

  <ul className="text-[var(--text-secondary)] space-y-2 mb-6">
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
Project Management:
      </span>{" "}
    Calculate the exact duration of a project or a project phase for accurate reporting and planning.
    </li>
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
Personal Milestones: 
      </span>{" "}
 Find out how long it's been since a significant event, like a wedding anniversary or a graduation.
    </li>
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
       Legal & Financial:
      </span>{" "}
    Calculate time periods for contracts, interest accrual, or deadlines.
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

<div className="px-6 py-12 bg-[var(--bg-primary)]">
  <div className="max-w-5xl mx-auto">

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
            className="flex items-center justify-between p-4 border rounded-lg cursor-pointer 
            bg-[var(--bg-primary)] border-[var(--border-color)]
            hover:border-yellow-500 hover:bg-[var(--card-bg)] transition"
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
            <ArrowRight size={18} className="text-[var(--text-secondary)]" />

          </div>
        ))}

      </div>
    </div>
  </div>
</div>



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="text-3xl font-semibold text-[#F3A412] mb-3">
   How Date Comparison Works
  </h2>

  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
 Date comparators are useful for calculating project durations, measuring time since an event, or finding out exactly how long between two important dates.
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
          the start date and time in  <span className="font-medium text-[var(--text-primary)]">From Date </span>.
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
      the end date and time in <span className="font-medium text-[var(--text-primary)]">To Date. </span>.
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
        the difference in years, months, days, hours, minutes.
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
            Order matters
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
          — swap dates to see negative difference.
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
            Include times
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
           — for precise hour-level accuracy.
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
            Leap years
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
           — automatically accounted for.
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
           Use for projects
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
           — track milestone durations.
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

export default Date;