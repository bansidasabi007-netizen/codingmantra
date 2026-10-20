import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass,} from "lucide-react";
import { ArrowLeftRight, Copy } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";  
import { BarChart3 } from "lucide-react";
import { CheckCircle, Lightbulb } from "lucide-react";
import { Star } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";



const faqs = [
  {
    q: "What is a Google Place ID?",
    a: "A Google Place ID is a unique identifier for a place or business on Google Maps.",
  },
  {
    q: "How can I use this link?",
    a: "You can share it via email, WhatsApp, QR codes, or embed it on your website.",
  },
  {
    q: "Is it okay to ask for reviews?",
    a: "Yes, but you must not incentivize or manipulate users to leave reviews.",
  },
];


function Review() {
  const navigate = useNavigate();

const [open, setOpen] = useState(null);
    
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
             to="/tools/seo"
              className="
                text-[15px]
      
                text-[#666]
                dark:text-gray-400
      
                hover:text-[#F3A412]
      
                transition-all duration-300
              "
            >
               SEO Tools
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
              Google Review Link Generator
            </span>
      
          </div>
      
        </div>
      
      </div>


      <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

  {/* 🔥 ONE GLOBAL CONTAINER */}
  <div className="max-w-5xl mx-auto space-y-16">

    {/* ================= HERO ================= */}
    <div className="text-center">
      <h1 className="text-5xl font-bold text-[#F3A412]">
        Google Review Link Generator
      </h1>

      <p className="mt-3 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
        Create a direct link that opens the "Write a Review" window for your business.
      </p>
    </div>

    {/* ================= TOOL CARD ================= */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      {/* HEADER */}
      <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <Star className="text-yellow-400" size={18} />
        Review Link Generator
      </div>

      <p className="mb-4 text-sm text-[var(--text-secondary)]">
        Enter your Google Place ID to create a direct review link.
      </p>

      {/* INPUT */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">
          Enter Your Google Place ID
        </label>

        <input
          type="text"
          placeholder="e.g., ChIJN1t_tDeuEmsRUsoyG83frY4"
          className="w-full px-3 py-2 border rounded-md
          bg-[var(--bg-primary)] border-[var(--border-color)]
          text-[var(--text-primary)] outline-none"
        />
      </div>

      {/* HELP BOX */}
      <div className="p-4 mb-5 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">
        <p className="mb-2 font-medium">
          How to find your Place ID?
        </p>

        <ol className="text-sm space-y-1 text-[var(--text-secondary)] list-decimal list-inside">
          <li>Go to the official Google Place ID Finder tool.</li>
          <li>Enter your business name and address.</li>
          <li>Select your business from results.</li>
          <li>Copy the Place ID from the popup.</li>
        </ol>
      </div>

      {/* BUTTON */}
      <button className="w-full py-3 font-medium text-black transition bg-yellow-500 rounded-md hover:opacity-90">
        Generate Link
      </button>

    </div>

    {/* ================= INFO SECTION ================= */}
    <div>

      <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
        Why You Need a Direct Review Link
      </h2>

      <p className="leading-relaxed text-[var(--text-secondary)]">
        Positive Google reviews are one of the most powerful signals for local SEO. 
        They build trust, improve your visibility in local search and Google Maps, 
        and directly influence potential customers.
        <br /><br />
        A direct review link removes friction by taking users straight to the review 
        submission box, making it easy for customers to leave feedback instantly.
        <br /><br />
        This tool creates a special URL using your Google Place ID. When clicked, 
        it opens the review dialog directly for your business.
      </p>

    </div>

    <div>

  {/* TITLE */}
  <h2 className="flex items-center gap-3 mb-8 text-2xl font-semibold text-[#F3A412]">
    <span className="flex items-center justify-center text-sm font-bold text-black bg-yellow-500 rounded-full w-7 h-7">
      1
    </span>
    Step-by-Step: How to Use This Tool
  </h2>

  {/* TIMELINE */}
  <div className="relative pl-10 space-y-8">

    {/* LINE */}
    <div className="absolute top-0 left-4 w-[2px] h-full bg-[var(--border-color)]"></div>

    {[
      {
        title: "Find",
        desc: "your Place ID using the Find Your Place ID link to search for your business.",
      },
      {
        title: "Copy",
        desc: "the Place ID and paste it into Google Place ID.",
      },
      {
        title: "Click",
        desc: "Generate Link to create your review URL.",
      },
      {
        title: "Share",
        desc: "the link via email, SMS, QR code, or on your website.",
      },
    ].map((step, i) => (

      <div key={i} className="relative">

        {/* NUMBER */}
        <div className="absolute left-[-28px] top-1 w-8 h-8 flex items-center justify-center text-sm font-bold text-black bg-yellow-500 rounded-full">
          {i + 1}
        </div>

        {/* CARD */}
        <div className="
          p-5 border rounded-lg
          bg-[var(--card-bg)] border-[var(--border-color)]
        ">
          <p className="font-semibold text-[var(--text-primary)]">
            {step.title}
          </p>

          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {step.desc}
          </p>
        </div>

      </div>

    ))}

  </div>

</div>


<div>

  {/* TITLE */}
  <h2 className="flex items-center gap-2 mb-8 text-2xl font-semibold text-[#F3A412]">
    <span>💡</span>
    Best Practices for Best Results
  </h2>

  {/* GRID */}
  <div className="grid gap-4 md:grid-cols-2">

    {[
      {
        title: "Ask at the right time",
        desc: "request reviews right after a positive experience.",
      },
      {
        title: "Make it easy",
        desc: "a direct link removes friction for customers.",
      },
      {
        title: "Don't incentivize reviews",
        desc: "Google prohibits offering rewards for reviews.",
      },
      {
        title: "Respond to reviews",
        desc: "thanking users builds relationships and local SEO.",
      },
      {
        title: "Track your link",
        desc: "use UTM params to monitor click-throughs.",
      },
    ].map((item, i) => (

      <div
        key={i}
        className="
          flex gap-3 items-start
          p-4 border rounded-lg
          bg-[var(--card-bg)] border-[var(--border-color)]
          hover:border-yellow-500 transition
        "
      >

        {/* ICON */}
        <div className="mt-1 text-yellow-400">✔</div>

        {/* TEXT */}
        <div>
          <p className="font-medium text-[var(--text-primary)]">
            {item.title}
          </p>

          <p className="text-sm text-[var(--text-secondary)]">
            — {item.desc}
          </p>
        </div>

      </div>

    ))}

  </div>

</div>


  <div className="mt-16">

      {/* TITLE */}
      <h2 className="mb-6 text-2xl font-semibold text-[#F3A412]">
        Frequently Asked Questions (FAQs)
      </h2>

      {/* LIST */}
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="pb-4 border-b border-[var(--border-color)] cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >

            <div className="flex items-center justify-between">
              <p className="font-medium text-[var(--text-primary)]">
                {item.q}
              </p>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </div>

            {open === i && (
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {item.a}
              </p>
            )}

          </div>
        ))}
      </div>

    </div>



  </div>

  

</div>
    
      <Footer />
    </div>
  );
}

export default Review;