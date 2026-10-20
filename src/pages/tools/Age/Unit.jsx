import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass,} from "lucide-react";
import { ArrowLeftRight, Copy } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";



function Unit() {

   const navigate = useNavigate()
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
  const defaultZones = [
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Asia/Kolkata",
  "UTC",
];

const [zones, setZones] = useState(defaultZones);
const [selectedZone, setSelectedZone] = useState("");

const removeZone = (zone) => {
  setZones(zones.filter((z) => z !== zone));
};

const addZone = () => {
  if (selectedZone && !zones.includes(selectedZone)) {
    setZones([...zones, selectedZone]);
    setSelectedZone("");
  }
};

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  const faqs = [
  {
    question: "How many hours are in a year?",
    answer: "There are 8,766 hours in an average year (365.25 days × 24 hours). You can quickly calculate this by entering '1' in the \"Years\" field."
  },
  {
    question: "Why does the calculator use 365.25 days for a year?",
    answer: "A standard year has 365 days, but a leap year has 366. To account for this, the astronomical average length of a year is 365.25 days. Using this value provides a more accurate conversion for longer durations that span across multiple years."
  },
  {
    question: "How can this tool be used for project management?",
    answer: "This tool is very useful for project planning. For example, if a project phase is estimated to take 1,200 hours, you can enter that value into the \"Hours\" field to instantly see that it's equivalent to 50 days or about 7.14 weeks, which helps in creating realistic timelines and resource allocation."
  },

];




const tools = [
  {
    title: "Age Calculator",
    icon: <Calendar size={18} />,
  },
  {
    title: "Date Comparator",
    icon: <Hourglass size={18} />,
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
Time Unit Converter
                  </span>
            
                </div>
            
              </div>
            
            </div>

    {/* TITLE */}
<div className="mt-10 text-center">
  <h1 className="text-5xl font-bold text-[#F3A412]">
Time Unit Converter
  </h1>
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
Convert between Unix timestamps and human-readable dates instantly.
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
Time Unit Converter
                  </span>
            
                </div>
            
              </div>
            
            </div>

{/* TOP HERO SECTION */}
<div className="mt-10 text-center">

  {/* Title */}
  <h1 className="text-5xl font-bold text-[#F3A412]">
Time Unit Converter
  </h1>

  {/* Subtitle */}
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
Convert between different time units instantly.
  </p>

</div> 





<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Card */}
  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    {/* Title */}
    <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--text-primary)]">
      ⏱ Time Converter
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

      {[
        "Years", "Quarters", "Months",
        "Weeks", "Days", "Hours",
        "Minutes", "Seconds", "Milliseconds"
      ].map((label) => (
        <div key={label}>
          <label className="text-sm font-medium text-[var(--text-primary)]">
            {label}
          </label>

          <input
            type="number"
            defaultValue="0"
            className="w-full px-3 py-2 mt-2 border rounded-md 
            bg-[var(--bg-primary)] border-[var(--border-color)] 
            text-[var(--text-primary)] outline-none"
          />
        </div>
      ))}

    </div>

  </div>


  {/* NOTE BOX */}
  <div className="flex items-start gap-3 p-4 mt-6 border rounded-xl 
  bg-[var(--card-bg)] border-[var(--border-color)]">

    <span className="text-[var(--text-secondary)] text-sm">ℹ️</span>

    <p className="text-sm text-[var(--text-secondary)]">
      <span className="font-medium text-[var(--text-primary)]">Note:</span> 
      {" "}For accuracy, 'Years' use 365.25 days, 'Quarters' use 91.3125 days (3 months), 
      and 'Months' use an average of 30.4375 days.
    </p>

  </div>

</div>

<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
   Why Use a Time Unit Converter?
  </h2>

  {/* Description */}
  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
Whether you're a project manager estimating timelines, a developer working with timeouts, or just curious, converting between time units can be tedious and prone to error. This tool provides a fast, accurate, and easy-to-use solution for all your time conversion needs.  </p>

  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
How It Works
Our Time Unit Converter works in real-time. Simply enter a value into any of the fields, and all other fields will update instantly with the equivalent converted values. This allows for quick comparisons and calculations without any extra steps.

  </p>

<div className="max-w-5xl px-6 mx-auto mt-16">

  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    {/* Title */}
    <h2 className="flex items-center gap-2 mb-4 text-xl font-semibold text-[#F3A412]">
      🔗 Pro Tip: Share Pre-filled Calculations
    </h2>

    {/* Description */}
    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
      You can share a link to this tool with a pre-filled value by adding a query parameter to the URL.
      This is useful for sharing specific conversions with your team or on social media.
    </p>

    {/* Example label */}
    <p className="text-sm text-[var(--text-secondary)] mb-2">
      <span className="font-semibold text-[var(--text-primary)]">
        Example:
      </span>{" "}
      To pre-fill "1" Year, use the following URL:
    </p>

    {/* Code Box */}
    <div className="px-4 py-3 mb-4 font-mono text-sm rounded-md 
    bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)]">
      /tools/date/time-unit-converter?years=1
    </div>

    {/* Footer text */}
    <p className="text-sm text-[var(--text-secondary)]">
      You can use any of the following parameters:{" "}
      <span className="font-medium text-[var(--text-primary)]">
        years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds
      </span>.
    </p>

  </div>

</div>
  {/* FAQ Title */}
  <h3 className="mb-4 text-2xl font-semibold text-[#F3A412] mt-14">
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
Understanding Time Units </h2>

  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
Converting between time units is useful for programming, cooking, project planning, and more. This tool handles the math for you.
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
    <div className="relative flex gap-6 mb-6">
      <div className="z-10 flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
        3
      </div>

      <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
        <p className="font-semibold text-[var(--text-primary)]">Choose</p>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
        the target timezone in To Timezone.
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

export default Unit;