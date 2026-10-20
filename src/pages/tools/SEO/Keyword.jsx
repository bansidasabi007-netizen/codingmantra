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
import {RiArrowLeftLine, RiHome5Line } from "react-icons/ri";


function Keyword() {


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

  const faqs = [
  {
    question: "How should I use the generated keywords?",
    answer: "Use primary keywords for main headings, long-tail keywords for subheadings, and LSI keywords naturally in your content to improve SEO."
  },
  {
    question: "Should I use every keyword on the list?",
    answer: "No. Choose relevant keywords that match your content intent. Avoid keyword stuffing and focus on readability."
  }
];

// STATE
const [openIndex, setOpenIndex] = useState(null);

// FUNCTION
const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}





<div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

  {/* GLOBAL WIDTH CONTAINER */}
  <div className="max-w-5xl mx-auto space-y-12">

    {/* ================= HERO ================= */}
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#F3A412]">
        AI Keyword Generator
      </h1>

      <p className="mt-3 text-[var(--text-secondary)]">
        Instantly create a comprehensive list of SEO keywords for your content strategy.
      </p>
    </div>

    {/* ================= MAIN TOOL ================= */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">
        🔑 Keyword Generator
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* Input */}
          <label className="text-sm font-medium">
            Topic or Primary Keyword
          </label>

          <input
            placeholder="e.g., 'sustainable fashion' or 'home office setup'"
            className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
            bg-[var(--bg-primary)] border-[var(--border-color)] 
            text-[var(--text-primary)] outline-none"
          />

          {/* Dropdowns */}
          <div className="grid grid-cols-2 gap-4 mb-4">

            <div>
              <label className="text-sm font-medium">Keyword Type</label>
              <select className="w-full px-3 py-2 mt-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)]">
                <option>Primary Keywords</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Language</label>
              <select className="w-full px-3 py-2 mt-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)]">
                <option>English</option>
              </select>
            </div>

          </div>

          {/* Button */}
          <button className="w-full py-3 text-black bg-yellow-600 rounded-md hover:opacity-90">
            ✨ Generate Keywords
          </button>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center justify-center border rounded-xl 
        bg-[var(--bg-primary)] border-[var(--border-color)]">

          <p className="text-[var(--text-secondary)]">
            Keywords will appear here.
          </p>

        </div>

      </div>

    </div>

<div>

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    The Foundation of Good SEO: Keyword Research
  </h2>

  {/* Description */}
  <p className="mb-3 leading-relaxed text-[var(--text-secondary)]">
    Keyword research is the first and most critical step in any successful SEO strategy. 
    It's the process of finding and analyzing the terms people use to search for information, 
    products, or services. By understanding these terms, you can create content that directly 
    answers your audience's questions, driving relevant organic traffic to your site.
  </p>

  {/* Sub heading */}
  <p className="mt-4 mb-2 font-semibold text-[var(--text-primary)]">
    How This AI Keyword Generator Works
  </p>

  {/* Description */}
  <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
    This tool goes beyond basic keyword suggestions. It provides a strategic mix of keyword 
    types to build a robust content plan:
  </p>

  {/* List */}
  <ul className="space-y-2 text-[var(--text-secondary)]">

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Primary Keywords:
      </span>{" "}
      These are the broad, high-volume terms that define your main topic 
      (e.g., "coffee beans").
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Long-Tail Keywords:
      </span>{" "}
      These are longer, more specific phrases that indicate a user is further 
      along in their search journey (e.g., "best whole bean coffee for french press"). 
      They are less competitive and often have higher conversion rates.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        LSI (Latent Semantic Indexing) Keywords:
      </span>{" "}
      These are thematically related terms and concepts (e.g., "arabica", "roast level", 
      "grinder"). Using them helps search engines understand the context and depth of your 
      content, leading to better rankings.
    </li>

  </ul>

</div>


<div>

  {/* Title */}
  <h2 className="flex items-center gap-3 mb-8 text-2xl font-semibold text-[#F3A412]">
    <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-black bg-yellow-500 rounded-full">
      1
    </span>
    Step-by-Step: How to Use This Tool
  </h2>

  {/* Steps */}
  <div className="relative space-y-6">

    {/* Vertical line */}
    <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border-color)]"></div>

    {[
      {
        title: "Enter",
        desc: "your main topic in What's your topic about? (e.g., 'digital marketing', 'healthy recipes')."
      },
      {
        title: "Select",
        desc: "your target platform from Platform — Google, YouTube, or Blog."
      },
      {
        title: "Choose",
        desc: "the language for your keywords from Language dropdown."
      },
      {
        title: "Click",
        desc: "Generate Keywords to get primary, long-tail, and LSI keywords."
      },
      {
        title: "Use",
        desc: "the list to structure your content strategy and SEO planning."
      }
    ].map((step, index) => (

      <div key={index} className="relative flex items-start gap-6">

        {/* Circle */}
        <div className="relative z-10 flex items-center justify-center w-8 h-8 text-sm font-bold text-black bg-yellow-500 rounded-full">
          {index + 1}
        </div>

        {/* Card */}
        <div className="flex-1 p-5 border rounded-xl 
        bg-[var(--card-bg)] border-[var(--border-color)]">

          <p className="mb-1 font-semibold text-[var(--text-primary)]">
            {step.title}
          </p>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {step.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>



<div className="space-y-12">

  {/* ================= BEST PRACTICES ================= */}
  <div>

    {/* Title */}
    <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[#F3A412]">
      💡 Best Practices for Best Results
    </h2>

    {/* Grid */}
    <div className="grid gap-4 md:grid-cols-2">

      {[
        {
          title: "Start with your primary keyword",
          desc: "this should be the main topic of your page."
        },
        {
          title: "Add long-tail keywords naturally",
          desc: "these are great for specific subheadings."
        },
        {
          title: "Include LSI keywords",
          desc: "these help search engines understand context."
        },
        {
          title: "Don't keyword stuff",
          desc: "use keywords where they make sense, not everywhere."
        },
        {
          title: "Save your lists",
          desc: "keep track of which keywords you're using for which pages."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="flex items-start gap-3 p-4 border rounded-xl 
          bg-[var(--card-bg)] border-[var(--border-color)]"
        >

          {/* Icon */}
          <div className="flex items-center justify-center w-6 h-6 mt-1 text-yellow-500 border border-yellow-500 rounded-full">
            ✓
          </div>

          {/* Text */}
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
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


  {/* ================= FAQ ================= */}
  <div>

    {/* Title */}
    <h2 className="mb-6 text-2xl font-semibold text-[#F3A412]">
      Frequently Asked Questions (FAQs)
    </h2>

    <div className="space-y-4">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="pb-3 border-b border-[var(--border-color)] cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >

          {/* Question */}
          <div className="flex items-center justify-between">

            <p className="font-medium text-[var(--text-primary)]">
              {faq.question}
            </p>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />

          </div>

          {/* Answer */}
          {openIndex === index && (
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {faq.answer}
            </p>
          )}

        </div>

      ))}

    </div>

  </div>

</div>



<div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

  {/* Title */}
  <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
    More Tools in SEO Tools
  </h2>

  {/* Grid */}
  <div className="grid gap-4 md:grid-cols-3">

    {[
      {
        title: "Title & Description Generator (AI)",
        link: "/tools/seo/title-generator"
      },
      {
        title: "SERP Snippet Preview (AI)",
        link: "/tools/seo/serp-preview"
      },
      {
        title: "FAQ Schema Generator (AI)",
        link: "/tools/seo/faq-schema"
      },
      {
        title: "Meta Tag Generator",
        link: "/tools/seo/meta-tag"
      },
      {
        title: "Keyword Density Checker",
        link: "/tools/seo/keyword-density"
      },
      {
        title: "Google Review Link Generator",
        link: "/tools/seo/google-review"
      }
    ].map((tool, index) => (

      <div
        key={index}
        onClick={() => navigate(tool.link)}
        className="flex items-center justify-between p-4 border rounded-lg cursor-pointer
        bg-[var(--bg-primary)] border-[var(--border-color)]
        hover:border-yellow-500 hover:bg-[var(--card-bg)]
        transition"
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* ICON */}
          <div className="flex items-center justify-center w-10 h-10 text-yellow-400 rounded-full bg-yellow-500/10">
            ⭐
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

    
      <Footer />
    </div>
  );
}

export default Keyword;