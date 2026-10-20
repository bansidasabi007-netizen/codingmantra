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
import { useNavigate, Link} from "react-router-dom";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function Meta() {


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
    question: "Should I use the generated text exactly as it is?",
    answer: "The AI provides excellent starting points and ideas. You can use them as-is, or even better, use them as inspiration. Feel free to mix and match titles and descriptions or tweak them to perfectly match your brand's voice and the specific content of your page."
  },
  {
    question: "How is this different from the SERP Snippet Preview tool?",
    answer: "The SERP Snippet Preview tool is for optimizing a title and description you have already written. This tool is for when you're starting with a blank slate and need ideas. They work great together: use this tool to generate ideas, then paste your favorite into the Preview tool to see how it looks!"
  },
  {
    question: "Why are multiple suggestions provided?",
    answer: "A/B testing is a core part of marketing. By providing multiple options, you can test different titles and descriptions over time to see which one performs best for your audience. What resonates can sometimes be surprising!"
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
                AI Title & Meta Description Generator
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
     AI Title & Meta Description Generator
      </h1>

      <p className=" text-xl mt-3 text-[var(--text-secondary)] max-w-3xl mx-auto">
     Enter a topic and let our AI craft compelling titles and descriptions to capture attention and clicks on Google.
      </p>
    </div>

<div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

  {/* Title */}
  <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold text-[var(--text-primary)]">
    <span className="text-yellow-500">Aa</span>
    Title & Description Generator
  </h2>

  {/* Layout */}
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

    {/* ================= LEFT ================= */}
    <div>

      {/* Input */}
      <label className="text-sm font-medium text-[var(--text-primary)]">
        Topic or Primary Keyword
      </label>

      <input
        placeholder="e.g., 'benefits of hydration' or 'Next.js 14 new features'"
        className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
        bg-[var(--bg-primary)] border-[var(--border-color)] 
        text-[var(--text-primary)] outline-none"
      />

      {/* Language */}
      <label className="text-sm font-medium text-[var(--text-primary)]">
        Language
      </label>

      <select
        className="w-full px-3 py-2 mt-2 mb-4 border rounded-md 
        bg-[var(--bg-primary)] border-[var(--border-color)] 
        text-[var(--text-primary)]"
      >
        <option>English</option>
      </select>

      {/* Button */}
      <button className="w-full py-3 text-black bg-yellow-600 rounded-md hover:opacity-90">
        ✨ Generate Suggestions
      </button>

    </div>


    {/* ================= RIGHT ================= */}
    <div className="p-6 border rounded-xl 
    bg-[var(--bg-primary)] border-[var(--border-color)] 
    flex flex-col items-center justify-center">

      <p className="text-[var(--text-secondary)]">
        Suggestions will appear here.
      </p>

    </div>

  </div>

</div>

<div>

  {/* Title */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    The Art of the Perfect Snippet
  </h2>

  {/* Description */}
  <p className="mb-3 leading-relaxed text-[var(--text-secondary)]">
    Your page's title and meta description are your 3-second sales pitch on the Google search results page. 
    They are often the only things a user reads before deciding whether to click on your link or a competitor's. 
    A well-crafted title and description can significantly boost your click-through rate (CTR), even if your ranking doesn't change.
  </p>

  {/* Subheading */}
  <p className="mt-4 mb-2 font-semibold text-[var(--text-primary)]">
    How This AI Tool Helps
  </p>

  {/* Description */}
  <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
    This tool acts as your creative partner and SEO copywriter. When you provide a topic, it:
  </p>

  {/* List */}
  <ul className="space-y-2 text-[var(--text-secondary)]">

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Brainstorms Ideas:
      </span>{" "}
      It generates multiple unique angles and hooks to make your content stand out.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Follows Best Practices:
      </span>{" "}
      The AI is trained to adhere to optimal character limits (under 60 for titles, under 160 for descriptions) to avoid truncation in search results.
    </li>

    <li>
      <span className="font-semibold text-[var(--text-primary)]">
        Focuses on CTR:
      </span>{" "}
      The suggestions are designed to be compelling, spark curiosity, and include calls-to-action to encourage users to click.
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
        desc: "what your page is about in What is your page about? (e.g., 'local coffee shop')."
      },
      {
        title: "Specify",
        desc: "your target audience in Who is this for? (e.g., 'local residents')."
      },
      {
        title: "Choose",
        desc: "the tone from Tone — Professional, Friendly, Casual, or Persuasive."
      },
      {
        title: "Click",
        desc: "Generate to get 5 title and description pairs."
      },
      {
        title: "Preview",
        desc: "your favorites in the SERP Snippet Preview tool."
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
        desc: "they may get cut off in search results."
      },
      {
        title: "Descriptions should be 150-160 characters",
        desc: "this is the optimal length for full display."
      },
      {
        title: "Include a CTA",
        desc: "words like 'learn more', 'get started' can improve CTR."
      },
      {
        title: "Test multiple variations",
        desc: "A/B test to find what works best."
      },
      {
        title: "Match search intent",
        desc: "if users want 'how-to', mention that in your title."
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

export default Meta;