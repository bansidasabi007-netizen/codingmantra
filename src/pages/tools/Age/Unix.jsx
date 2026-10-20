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



function Unix() {
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

  const faqs = [
  {
    question: "What's the difference between a timestamp in seconds and milliseconds?",
    answer: "A standard Unix timestamp is measured in seconds. However, some systems (like JavaScript's `Date.now()`) work with milliseconds. A millisecond timestamp is simply the second timestamp multiplied by 1000. Our tool provides both for convenience."
  },
  {
    question: "Does this tool handle my local timezone?",
    answer: "Yes. When you convert from a date to a timestamp, it uses your browser's local timezone. When you convert from a timestamp to a date, it displays the date in your local timezone, making it easy to understand the time relative to where you are."
  }
];
 
const [openIndex, setOpenIndex] = useState(null);

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

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  
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
Unix Timestamp Converter
                  </span>
            
                </div>
            
              </div>
            
            </div>

    {/* TITLE */}
<div className="mt-10 text-center">
  <h1 className="text-5xl font-bold text-[#F3A412]">
Unix Timestamp Converter
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
Unix Timestamp Converter
                  </span>
            
                </div>
            
              </div>
            
            </div>

{/* TOP HERO SECTION */}
<div className="mt-10 text-center">

  {/* Title */}
  <h1 className="text-5xl font-bold text-[#F3A412]">
Unix Timestamp Converter
  </h1>

  {/* Subtitle */}
  <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
  Convert between Unix timestamps and human-readable dates instantly.
  </p>

</div> 





<div className="max-w-5xl px-6 mx-auto mt-16">
  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    {/* Title */}
    <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--text-primary)]">
      🕒 Timestamp Converter
    </h2>

    <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-3">

      {/* LEFT SIDE */}
      <div className="space-y-4">

        {/* Seconds */}
        <div>
          <label className="text-sm text-[var(--text-primary)] font-medium">
            Unix Timestamp (seconds)
          </label>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              defaultValue="1777641163"
              className="flex-1 px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)] outline-none"
            />

            <button className="p-2 border rounded-md border-[var(--border-color)] hover:bg-[var(--bg-primary)]">
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Milliseconds */}
        <div>
          <label className="text-sm text-[var(--text-primary)] font-medium">
            Unix Timestamp (milliseconds)
          </label>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              defaultValue="1777641163000"
              className="flex-1 px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)] outline-none"
            />

            <button className="p-2 border rounded-md border-[var(--border-color)] hover:bg-[var(--bg-primary)]">
              <Copy size={16} />
            </button>
          </div>
        </div>

      </div>


      {/* CENTER ICON */}
      <div className="flex justify-center">
        <ArrowLeftRight className="text-[var(--text-secondary)]" size={22} />
      </div>


      {/* RIGHT SIDE */}
      <div className="space-y-4">

        {/* Human Readable */}
        <div>
          <label className="text-sm text-[var(--text-primary)] font-medium">
            Human-Readable Date (Your Timezone)
          </label>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              defaultValue="05/01/2026 06:42 PM"
              className="flex-1 px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)] outline-none"
            />

            <button className="p-2 border rounded-md border-[var(--border-color)] hover:bg-[var(--bg-primary)]">
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* UTC */}
        <div>
          <label className="text-sm text-[var(--text-primary)] font-medium">
            UTC / GMT Time
          </label>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              defaultValue="2026-05-01 18:42:43 UTC"
              className="flex-1 px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)] outline-none"
            />

            <button className="p-2 border rounded-md border-[var(--border-color)] hover:bg-[var(--bg-primary)]">
              <Copy size={16} />
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    What is a Unix Timestamp?
  </h2>

  {/* Description */}
  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
    A Unix timestamp (also known as Epoch time) is a system for describing a point in time. 
    It is the number of seconds that have elapsed since the Unix epoch, which was at midnight 
    Coordinated Universal Time (UTC) on January 1, 1970.
  </p>

  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
    This format is widely used in computer systems and programming languages because it's a simple, 
    universal number that isn't affected by timezones. It makes date calculations and storing time 
    data in databases much easier.
  </p>

  {/* Sub heading */}
  <p className="text-[var(--text-primary)] font-semibold mb-2">
    How to Use This Converter
  </p>

  {/* Steps */}
  <ul className="text-[var(--text-secondary)] space-y-2 mb-6">
    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Timestamp to Date:
      </span>{" "}
      Enter a Unix timestamp (in seconds) into the first field, and the corresponding 
      human-readable date will appear below.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Date to Timestamp:
      </span>{" "}
      Select a date and time using the date picker, and the corresponding Unix timestamp 
      (in seconds and milliseconds) will be generated instantly.
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
What is a Unix Timestamp? </h2>

  <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
A Unix timestamp (also known as POSIX time or epoch time) is the number of seconds that have elapsed since January 1, 1970 (00:00:00 UTC), not counting leap seconds. It's a way to represent a specific moment in time that computers can easily work with.

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
    <div className="relative flex gap-6 ">
      <div className="z-10 flex items-center justify-center w-8 h-8 font-semibold text-black bg-yellow-500 rounded-full">
        4
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

export default Unix;