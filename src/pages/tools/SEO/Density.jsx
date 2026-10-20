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
import { useNavigate,Link } from "react-router-dom";  
import { BarChart3 } from "lucide-react";
import { CheckCircle, Lightbulb } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";



function Density () {


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
   const [text, setText] = useState("");
  const [keywords, setKeywords] = useState("");



// STATE
const [openIndex, setOpenIndex] = useState(null);

// FUNCTION
const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const faqs = [
  {
    q: "What is a good keyword density?",
    a: "A good keyword density is typically between 1–2%. It should feel natural and not forced.",
  },
  {
    q: "Should I focus only on my main keyword?",
    a: "No. Use related keywords and phrases to improve context and SEO quality.",
  },
  {
    q: "What are 'stop words'?",
    a: "Stop words are common words like 'the', 'is', 'and' that search engines often ignore.",
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
             Keyword Density Checker
            </span>
      
          </div>
      
        </div>
      
      </div>



<div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

  {/* GLOBAL WIDTH CONTAINER */}
  <div className="max-w-5xl mx-auto space-y-12">

    {/* ================= HERO ================= */}
    <div className="text-center">
      <h1 className="text-5xl font-bold text-[#F3A412]">
      Keyword Density Checker
      </h1>

      <p className="mt-3 text-[var(--text-secondary)] max-w-2xl mx-auto  text-xl">
       Paste your text to analyze the frequency and density of your most important keywords.
      </p>
    </div>

   <div className="max-w-5xl px-6 mx-auto mt-16">
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {/* TITLE */}
        <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--text-primary)]">
          <BarChart3 size={20} className="text-yellow-400" />
          Content Analyzer
        </h2>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* TEXTAREA */}
            <label className="text-sm font-medium text-[var(--text-primary)]">
              Text to Analyze
            </label>

            <textarea
              rows={8}
              placeholder="Paste your article content here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full mt-2 mb-4 px-3 py-2 rounded-md border 
              bg-[var(--bg-primary)] border-[var(--border-color)]
              text-[var(--text-primary)] outline-none resize-none"
            />

            {/* KEYWORDS */}
            <label className="text-sm font-medium text-[var(--text-primary)]">
              Target Keywords (comma-separated)
            </label>

            <input
              type="text"
              placeholder="e.g., seo tools, keyword research"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full mt-2 mb-4 px-3 py-2 rounded-md border 
              bg-[var(--bg-primary)] border-[var(--border-color)]
              text-[var(--text-primary)] outline-none"
            />

            {/* BUTTON */}
            <button
              className="w-full py-2 font-medium text-black transition bg-yellow-500 rounded-md hover:bg-yellow-400"
            >
              Analyze Text
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-4 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">

            <h3 className="flex items-center gap-2 mb-4 font-semibold text-[var(--text-primary)]">
              <BarChart3 size={18} />
              Analysis Results
            </h3>

            {/* WORD COUNT */}
            <p className="mb-4 text-sm text-[var(--text-primary)]">
              <span className="font-medium">Total Words:</span> 0
            </p>

            <hr className="border-[var(--border-color)] mb-4" />

            {/* TABLE */}
            <p className="mb-2 text-sm font-medium text-[var(--text-primary)]">
              Target Keyword Density
            </p>

            <div className="p-4 border rounded-md border-[var(--border-color)] bg-[var(--card-bg)]">

              {/* HEADER */}
              <div className="grid grid-cols-3 text-xs text-[var(--text-secondary)] mb-2">
                <span>Keyword/Phrase</span>
                <span className="text-center">Count</span>
                <span className="text-right">Density</span>
              </div>

              <div className="h-[120px] flex items-center justify-center text-sm text-[var(--text-secondary)]">
                No data to display.
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    What is Keyword Density and Why Does it Matter?
  </h2>

  {/* DESCRIPTION */}
  <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">

    <p>
      Keyword density is a percentage that shows how many times a specific keyword or phrase appears in a piece of text compared to the total number of words. For example, if a 100-word article uses a keyword 3 times, the keyword density is 3%.
    </p>

    <p>
      In the early days of SEO, "keyword stuffing" — repeating a keyword over and over — was a common tactic. Today, search engines are much smarter. While it's still important to use your target keyword to signal what your content is about, overusing it can get your page penalized.
    </p>

    <p>
      The goal is balance: use your keyword naturally, not excessively.
    </p>

    {/* SUBTITLE */}
    <p className="font-semibold text-[var(--text-primary)]">
      How to Use This Tool for Actionable Results
    </p>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Paste Your Text:
      </span>{" "}
      Copy the full text from your article, blog post, or webpage and paste it into the main text area.
    </p>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Enter Your Main Keywords:
      </span>{" "}
      In the "Target Keywords" field, enter the 1–3 primary keywords you are targeting for this page.
    </p>

    <p className="font-semibold text-[var(--text-primary)]">
      Analyze the Results:
    </p>

    {/* BULLETS */}
    <ul className="pl-5 space-y-2 list-disc">

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Target Keyword Density:
        </span>{" "}
        Check this table first. Is your main keyword's density around 1–2%? If it's much higher, you might be "keyword stuffing." If it's much lower, you may need to include it a few more times naturally.
      </li>

      <li>
        <span className="font-semibold text-[var(--text-primary)]">
          Top Phrase Density:
        </span>{" "}
        Look at the 2-word and 3-word phrase tables. Do they include relevant, related terms (LSI keywords)? This shows if your content is topically rich. For example, if your main keyword is "car insurance," these tables should show phrases like "auto insurance," "car insurance quotes," or "vehicle coverage."
      </li>

    </ul>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Take Action:
      </span>{" "}
      Based on the analysis, go back to your text and make edits. Replace some instances of your main keyword with synonyms or related phrases. Add more context where needed to improve the relevance of your content.
    </p>

  </div>
</div>


<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="flex items-center gap-2 mb-10 text-2xl font-semibold text-[#F3A412]">
    <span className="flex items-center justify-center text-sm font-bold text-black bg-yellow-500 rounded-full w-7 h-7">
      1
    </span>
    Step-by-Step: How to Use This Tool
  </h2>

  {/* TIMELINE */}
  <div className="relative pl-10 border-l border-[var(--border-color)] space-y-6">

    {[
      {
        title: "Paste",
        desc: "your content into the Content text area.",
      },
      {
        title: "Enter",
        desc: "your target keyword in Primary Keyword.",
      },
      {
        title: "Add",
        desc: "optional secondary keywords to check.",
      },
      {
        title: "Click",
        desc: "Check Density to analyze your content.",
      },
      {
        title: "Review",
        desc: "the keyword frequency, density %, and recommendations.",
      },
    ].map((step, index) => (
      <div key={index} className="relative">

        {/* NUMBER CIRCLE */}
        <div className="absolute -left-[26px] top-2 flex items-center justify-center w-8 h-8 text-sm font-semibold text-black bg-yellow-500 rounded-full">
          {index + 1}
        </div>

        {/* CARD */}
        <div
          className="p-5 border rounded-lg 
          bg-[var(--card-bg)] border-[var(--border-color)]
          hover:border-yellow-500 transition"
        >
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



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="flex items-center gap-2 mb-8 text-2xl font-semibold text-[#F3A412]">
    <Lightbulb size={20} className="text-yellow-400" />
    Best Practices for Best Results
  </h2>

  {/* GRID */}
  <div className="grid gap-5 md:grid-cols-2">

    {[
      {
        title: "Start with your primary keyword",
        desc: "this should be the main topic of your page.",
      },
      {
        title: "Add long-tail keywords naturally",
        desc: "these are great for specific subheadings.",
      },
      {
        title: "Include LSI keywords",
        desc: "these help search engines understand context.",
      },
      {
        title: "Don't keyword stuff",
        desc: "use keywords where they make sense, not everywhere.",
      },
      {
        title: "Save your lists",
        desc: "keep track of which keywords you're using for which pages.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3 p-4 border rounded-lg
        bg-[var(--card-bg)] border-[var(--border-color)]
        hover:border-yellow-500 transition"
      >

        {/* ICON */}
        <div className="mt-[2px] text-yellow-400">
          <CheckCircle size={18} />
        </div>

        {/* TEXT */}
        <div>
          <p className="font-medium text-[var(--text-primary)]">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            — {item.desc}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* TITLE */}
  <h2 className="mb-6 text-2xl font-semibold text-[#F3A412]">
    Frequently Asked Questions (FAQs)
  </h2>

  {/* FAQ LIST */}
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="pb-4 border-b border-[var(--border-color)] cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >

        {/* QUESTION */}
        <div className="flex items-center justify-between">
          <p className="font-medium text-[var(--text-primary)]">
            {faq.q}
          </p>

          <ChevronDown
            size={18}
            className={`transition-transform ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* ANSWER */}
        {openIndex === index && (
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            {faq.a}
          </p>
        )}

      </div>
    ))}
  </div>

</div>



<div className="max-w-5xl px-6 mx-auto mt-16">

  {/* CONTAINER */}
  <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

    {/* TITLE */}
    <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
      More Tools in SEO Tools
    </h2>

    {/* GRID */}
    <div className="grid gap-4 md:grid-cols-3">

      {[
        {
          title: "Keyword Generator (AI)",
          icon: "🔑",
          link: "/tools/seo/keyword-generator"
        },
        {
          title: "Title & Description Generator (AI)",
          icon: "Aa",
          link: "/tools/seo/title-generator"
        },
        {
          title: "SERP Snippet Preview (AI)",
          icon: "🔍",
          link: "/tools/seo/serp-preview"
        },
        {
          title: "FAQ Schema Generator (AI)",
          icon: "❓",
          link: "/tools/seo/faq-schema"
        },
        {
          title: "Meta Tag Generator",
          icon: "🏷️",
          link: "/tools/seo/meta-tag"
        },
        {
          title: "Google Review Link Generator",
          icon: "⭐",
          link: "/tools/seo/google-review"
        }
      ].map((tool, index) => (

        <div
          key={index}
          onClick={() => navigate(tool.link)}
          className="
            flex items-center justify-between
            p-4 rounded-lg border cursor-pointer
            bg-[var(--bg-primary)] border-[var(--border-color)]
            hover:border-yellow-500 hover:bg-[var(--card-bg)]
            transition-all duration-200
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-3">

            {/* ICON */}
            <div className="flex items-center justify-center w-10 h-10 font-semibold text-yellow-400 rounded-full bg-yellow-500/10">
              {tool.icon}
            </div>

            {/* TITLE */}
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

</div>

    
      <Footer />
    </div>
  );
}

export default Density;