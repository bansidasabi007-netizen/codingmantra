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
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function Snippet() {


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
    question: "What are the optimal lengths for titles and descriptions?",
    answer: "While Google measures in pixels, a good rule of thumb is to keep titles under 60 characters and meta descriptions under 160 characters. Our tool uses pixel limits, which are more accurate, to give you real-time feedback."
  },
  {
    question: "Does Google always use my meta description?",
    answer: "No. If Google believes a different snippet of text from your page is a better match for a user's specific query, it may generate its own description. However, providing a well-written meta description gives you the best chance of controlling what appears."
  },
  {
    question: "Why does the preview show a date?",
    answer: "Google sometimes adds a date to the snippet, especially for blog posts or news articles, to show how recent the information is. You can toggle this feature in our preview tool to see how it looks."
  }
];

// STATE
const [openIndex, setOpenIndex] = useState(null);

// FUNCTION
const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


 const [title, setTitle] = useState("Your Awesome Page Title Goes Here");
  const [description, setDescription] = useState(
    "This is an example of a meta description. Write a compelling summary of your page content here to entice users to click on your link in the search results."
  );
  const [url, setUrl] = useState("https://codingmantra.com/your-page-url");
  const [showDate, setShowDate] = useState(true);

  
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
                 SERP Snippet Preview (AI)
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
     SERP Snippet Preview (AI)
      </h1>

      <p className=" text-xl mt-3 text-[var(--text-secondary)] max-w-3xl mx-auto">
   See exactly how your page will appear in Google search results and use AI to optimize it for a higher click-through rate.
      </p>
    </div>

<div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      {/* Title */}
      <h2 className="flex items-center gap-2 mb-2 text-xl font-semibold text-[var(--text-primary)]">
        🔎 SERP Snippet Editor (AI)
      </h2>

      <p className="mb-6 text-sm text-[var(--text-secondary)]">
        Enter your title, description, and URL to see a live preview of how it will appear on Google.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div>

          {/* Title Input */}
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-sm">
              <label className="text-[var(--text-primary)]">Title</label>
              <span className="text-[var(--text-secondary)]">
                {title.length} Characters
              </span>
            </div>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)]"
            />

            {/* Progress */}
            <div className="h-1 mt-2 bg-gray-700 rounded">
              <div
                className="h-1 bg-yellow-500 rounded"
                style={{ width: `${Math.min(title.length, 60) / 60 * 100}%` }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-sm">
              <label className="text-[var(--text-primary)]">
                Meta Description
              </label>
              <span className="text-red-500">
                {description.length} Characters
              </span>
            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)]"
            />
          </div>

          {/* URL */}
          <div className="mb-4">
            <label className="block mb-1 text-sm text-[var(--text-primary)]">
              URL Slug
            </label>

            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 border rounded-md 
              bg-[var(--bg-primary)] border-[var(--border-color)] 
              text-[var(--text-primary)]"
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              checked={showDate}
              onChange={() => setShowDate(!showDate)}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              Show Date in Snippet
            </p>
          </div>

          {/* Button */}
          <button className="w-full py-3 text-black bg-yellow-600 rounded-md">
            ✨ Improve with AI
          </button>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="p-5 border rounded-xl 
        bg-[var(--bg-primary)] border-[var(--border-color)]">

          <p className="mb-3 text-sm text-[var(--text-secondary)]">
            Live Preview
          </p>

          {/* URL */}
          <p className="text-sm text-green-600">
            {url}
          </p>

          {/* Title */}
          <h3 className="mt-1 text-lg text-blue-500">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {showDate && "May 2, 2026 — "}
            {description}
          </p>

        </div>

      </div>
    </div>

<div>

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    Why Your SERP Snippet Matters
  </h2>

  {/* Description */}
  <p className="mb-3 leading-relaxed text-[var(--text-secondary)]">
    Your SERP (Search Engine Results Page) snippet is your digital first impression. 
    It's the small block of text that represents your page on Google. Even if you rank number one, 
    a poorly written snippet can cause users to skip over your result and click on a competitor's.
  </p>

  <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
    Optimizing your snippet is one of the most effective ways to increase your organic click-through rate (CTR).
  </p>

  {/* Subheading */}
  <p className="mb-2 font-semibold text-[var(--text-primary)]">
    The Anatomy of a Snippet
  </p>

  {/* List */}
  <ul className="space-y-2 text-[var(--text-secondary)]">

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Title Tag:
      </span>{" "}
      This is the blue, clickable headline. It's the most prominent part of the snippet and has a significant impact on whether a user clicks. 
      It should be compelling and include your target keyword.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Meta Description:
      </span>{" "}
      The block of text underneath the title. This is your chance to "sell the click." 
      It should summarize the page's content and persuade the user that your page has the answer they're looking for.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        URL (Slug):
      </span>{" "}
      The URL itself can provide context and keywords, reinforcing the page's topic. 
      A clean, readable URL is always best.
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

    {/* Vertical Line */}
    <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border-color)]"></div>

    {[
      {
        title: "Enter",
        desc: "your page title in Page Title."
      },
      {
        title: "Add",
        desc: "your meta description in Meta Description."
      },
      {
        title: "Set",
        desc: "the page URL in Page URL for display."
      },
      {
        title: "Toggle",
        desc: "the Date checkbox to see how blog posts appear."
      },
      {
        title: "Check",
        desc: "the live preview to optimize your snippet for better CTR."
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


<div>

  {/* Title */}
  <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[#F3A412]">
    💡 Best Practices for Best Results
  </h2>

  {/* Grid */}
  <div className="grid gap-4 md:grid-cols-2">

    {[
      {
        title: "Keep titles under 60 characters",
        desc: "longer titles get truncated in search results."
      },
      {
        title: "Descriptions need 150-160 chars",
        desc: "this is the sweet spot for full display."
      },
      {
        title: "Include keywords naturally",
        desc: "Google bolds matching query terms."
      },
      {
        title: "Write compelling CTAs",
        desc: "words like 'Learn more', 'Download free' help CTR."
      },
      {
        title: "Match search intent",
        desc: "show users exactly what they'll get."
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



<div>

  {/* Title */}
  <h2 className="mb-6 text-2xl font-semibold text-[#F3A412]">
    Frequently Asked Questions (FAQs)
  </h2>

  {/* FAQ LIST */}
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



<div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

  {/* Title */}
  <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
    More Tools in SEO Tools
  </h2>

  {/* Grid */}
  <div className="grid gap-4 md:grid-cols-3">

    {[
      {
        title: "Keyword Generator (AI)",
        link: "/tools/seo/keyword-generator",
        icon: "🔑"
      },
      {
        title: "SERP Snippet Preview (AI)",
        link: "/tools/seo/serp-preview",
        icon: "🔍"
      },
      {
        title: "FAQ Schema Generator (AI)",
        link: "/tools/seo/faq-schema",
        icon: "❓"
      },
      {
        title: "Meta Tag Generator",
        link: "/tools/seo/meta-tag",
        icon: "🏷️"
      },
      {
        title: "Keyword Density Checker",
        link: "/tools/seo/keyword-density",
        icon: "📊"
      },
      {
        title: "Google Review Link Generator",
        link: "/tools/seo/google-review",
        icon: "⭐"
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

          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 text-yellow-400 rounded-full bg-yellow-500/10">
            {tool.icon}
          </div>

          {/* Title */}
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {tool.title}
          </p>

        </div>

        {/* Arrow */}
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

export default Snippet;