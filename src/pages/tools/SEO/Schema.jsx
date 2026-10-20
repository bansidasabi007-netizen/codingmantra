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
import { Tag, Search, Star, FileText, Key } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import { useNavigate, Link} from "react-router-dom";


function Schema() {

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


  // ====== STATE ======
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

// ====== FAQ DATA ======
const faqs = [
  {
    question: "Where do I put the generated schema code?",
    answer:
      "You should paste the generated JSON-LD schema inside the <head> section of your website. If you're using platforms like WordPress, you can use header script plugins.",
  },
  {
    question: "Can I edit the questions and answers?",
    answer:
      "Yes. You can fully edit both questions and answers before copying the schema. The JSON-LD will update automatically.",
  },
  {
    question: "Is getting a rich result guaranteed?",
    answer:
      "No. Adding schema increases your chances, but Google ultimately decides whether to show rich results based on quality and relevance.",
  },
];

const tools = [
  {
    title: "Keyword Generator (AI)",
    icon: <Key size={18} />,
    path: "/tools/seo/keyword",
  },
  {
    title: "Title & Description Generator (AI)",
    icon: <FileText size={18} />,
    path: "/tools/seo/title-generator",
  },
  {
    title: "SERP Snippet Preview (AI)",
    icon: <Search size={18} />,
    path: "/tools/seo/serp-preview",
  },
  {
    title: "Meta Tag Generator",
    icon: <Tag size={18} />,
    path: "/tools/seo/meta-tag",
  },
  {
    title: "Keyword Density Checker",
    icon: <Search size={18} />,
    path: "/tools/seo/keyword-density",
  },
  {
    title: "Google Review Link Generator",
    icon: <Star size={18} />,
    path: "/tools/seo/review-link",
  },
];

  
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 dark:bg-black">

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
                    FAQ Schema Generator & Editor
               </span>
         
             </div>
         
           </div>
         
         </div>
   
   
   

      {/* ================= MAIN WRAPPER ================= */}
      <div className="max-w-5xl px-6 py-12 mx-auto space-y-16">

        {/* HERO */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
            FAQ Schema Generator & Editor
          </h1>

          <p className="mt-3 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Instantly create and edit FAQs and the necessary SEO schema for any topic to help your pages stand out on Google.
          </p>
        </div>

       <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

  {/* TITLE */}
  <h2 className="flex items-center gap-2 mb-2 text-xl font-semibold text-[var(--text-primary)]">
    <span className="text-yellow-500">❓</span>
    FAQ Generator & Editor
  </h2>

  {/* DESCRIPTION */}
  <p className="mb-6 text-sm text-[var(--text-secondary)]">
    Enter a topic to generate and edit relevant FAQs and the corresponding JSON-LD schema for SEO.
  </p>

  {/* INPUT */}
  <div className="mb-4">
    <label className="text-sm font-medium text-[var(--text-primary)]">
      Topic or Keyword
    </label>

    <input
      type="text"
      placeholder="e.g., 'React server components' or 'benefits of SEO'"
      className="w-full px-3 py-2 mt-2 border rounded-md 
      bg-[var(--bg-primary)] border-[var(--border-color)] 
      text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]
      outline-none focus:border-yellow-500 transition"
    />
  </div>

  {/* LANGUAGE */}
  <div className="mb-6">
    <label className="text-sm font-medium text-[var(--text-primary)]">
      Language
    </label>

    <select
      className="w-full px-3 py-2 mt-2 border rounded-md 
      bg-[var(--bg-primary)] border-[var(--border-color)] 
      text-[var(--text-primary)] outline-none focus:border-yellow-500 transition"
    >
      <option>English</option>
      <option>Hindi</option>
      <option>Gujarati</option>
    </select>
  </div>

  {/* BUTTON */}
  <button
    className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-black transition bg-yellow-600 rounded-md hover:bg-yellow-500"
  >
    ✨ Generate FAQs
  </button>

</div>

<div className="mt-12">

  {/* TITLE */}
  <h2 className="mb-4 text-3xl font-semibold text-[#F3A412]">
    What is FAQPage Schema and Why Does it Matter?
  </h2>

  {/* DESCRIPTION */}
  <p className="leading-relaxed text-[var(--text-secondary)] mb-2">
    FAQPage schema is a type of structured data (code) that you add to your website to tell search engines that you have a "Frequently Asked Questions" section. When Google understands this, it may reward your page with a "rich result" directly in the search listings.
  </p>

  <p className="leading-relaxed text-[var(--text-secondary)] mb-6">
    This rich result displays your questions and answers as a collapsible list right below your main page link. This makes your result larger, more interactive, and more prominent, which can dramatically increase your click-through rate (CTR) and drive more organic traffic to your site. It also helps you occupy more valuable screen real estate on the results page.
  </p>

  {/* DIVIDER */}
  <div className="border-t border-[var(--border-color)] my-6"></div>

  {/* SUB TITLE */}
  <h3 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
    How to Use This Tool
  </h3>

  {/* STEPS */}
  <div className="space-y-2 text-[var(--text-secondary)] leading-relaxed">

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Enter a Topic:
      </span>{" "}
      Input a keyword, a product name, a service, or any topic you want to create FAQs for.
    </p>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Generate:
      </span>{" "}
      Our AI will create a list of relevant questions and clear answers based on your topic.
    </p>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Review & Edit:
      </span>{" "}
      Look over the generated FAQs. You can edit the questions and answers directly in the tool.
    </p>

    <p>
      <span className="font-semibold text-[var(--text-primary)]">
        Copy & Paste the Schema:
      </span>{" "}
      Copy the generated JSON-LD schema code. The schema will update automatically as you edit. Paste this code into the &lt;head&gt; section of your webpage's HTML. If you're using a CMS like WordPress, you can often add this to a "custom scripts" or "header scripts" area.
    </p>

  </div>

</div>


<div className="mt-12">

  {/* TITLE */}
  <h2 className="flex items-center gap-3 mb-8 text-2xl font-semibold text-[#F3A412]">
    <span className="flex items-center justify-center w-6 h-6 text-sm text-yellow-400 rounded-full bg-yellow-500/20">
      1
    </span>
    Step-by-Step: How to Use This Tool
  </h2>

  <div className="relative">

    {/* VERTICAL LINE */}
    <div className="absolute left-[18px] top-0 bottom-0 w-px bg-[var(--border-color)]"></div>

    <div className="space-y-6">

      {/* STEP 1 */}
      <div className="relative flex gap-6">
        <div className="z-10 flex items-center justify-center text-sm font-semibold text-black bg-yellow-500 rounded-full w-9 h-9">
          1
        </div>

        <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <p className="font-semibold text-[var(--text-primary)]">Enter</p>
          <p className="text-sm text-[var(--text-secondary)]">
            the main topic in <span className="font-medium text-[var(--text-primary)]">Topic</span> (e.g., "email marketing").
          </p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="relative flex gap-6">
        <div className="z-10 flex items-center justify-center text-sm font-semibold text-black bg-yellow-500 rounded-full w-9 h-9">
          2
        </div>

        <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <p className="font-semibold text-[var(--text-primary)]">Select</p>
          <p className="text-sm text-[var(--text-secondary)]">
            how many FAQs to generate from <span className="font-medium text-[var(--text-primary)]">Number of FAQs</span> (3–10).
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="relative flex gap-6">
        <div className="z-10 flex items-center justify-center text-sm font-semibold text-black bg-yellow-500 rounded-full w-9 h-9">
          3
        </div>

        <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <p className="font-semibold text-[var(--text-primary)]">Click</p>
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="font-medium text-[var(--text-primary)]">Generate FAQs</span> to create Q&A pairs.
          </p>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="relative flex gap-6">
        <div className="z-10 flex items-center justify-center text-sm font-semibold text-black bg-yellow-500 rounded-full w-9 h-9">
          4
        </div>

        <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <p className="font-semibold text-[var(--text-primary)]">Edit</p>
          <p className="text-sm text-[var(--text-secondary)]">
            any questions or answers in the text boxes if needed.
          </p>
        </div>
      </div>

      {/* STEP 5 */}
      <div className="relative flex gap-6">
        <div className="z-10 flex items-center justify-center text-sm font-semibold text-black bg-yellow-500 rounded-full w-9 h-9">
          5
        </div>

        <div className="flex-1 p-5 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
          <p className="font-semibold text-[var(--text-primary)]">Copy</p>
          <p className="text-sm text-[var(--text-secondary)]">
            the JSON-LD schema and paste into your page’s <span className="font-medium text-[var(--text-primary)]">&lt;head&gt;</span> section.
          </p>
        </div>
      </div>

    </div>
  </div>

</div>


<div className="mt-16">

  {/* TITLE */}
  <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold text-[#F3A412]">
    💡 Best Practices for Best Results
  </h2>

  {/* GRID */}
  <div className="grid gap-4 md:grid-cols-2">

    {[
      {
        title: "Match visible content",
        desc: "only use schema on pages where the FAQs are actually shown.",
      },
      {
        title: "Validate your schema",
        desc: "use Google's Rich Results Test to verify.",
      },
      {
        title: "Answer user questions",
        desc: "base FAQs on what users actually search for.",
      },
      {
        title: "Keep answers concise",
        desc: "rich results prefer shorter answers.",
      },
      {
        title: "Make questions specific",
        desc: "'How do I...?' works better than 'What is...?' for featured snippets.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-3 p-5 border rounded-xl 
        bg-[var(--card-bg)] border-[var(--border-color)] 
        hover:border-yellow-500 transition"
      >

        {/* ICON */}
        <div className="flex items-center justify-center w-6 h-6 mt-1 text-yellow-400 border border-yellow-500 rounded-full">
          ✓
        </div>

        {/* TEXT */}
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

<div className="mt-16">

  {/* TITLE */}
  <h2 className="mb-6 text-2xl font-semibold text-[#F3A412]">
    Frequently Asked Questions (FAQs) about the Tool
  </h2>

  {/* LIST */}
  <div className="space-y-4">

    {faqs.map((faq, index) => (
      <div
        key={index}
        className="pb-3 border-b border-[var(--border-color)] cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >

        {/* QUESTION */}
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

        {/* ANSWER */}
        {openIndex === index && (
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
            {faq.answer}
          </p>
        )}
      </div>
    ))}

  </div>

</div>


<div className="mt-16">

      {/* CONTAINER */}
      <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {/* TITLE */}
        <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
          More Tools in SEO Tools
        </h2>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-3">

          {tools.map((tool, index) => (
            <div
              key={index}
              onClick={() => navigate(tool.path)}
              className="flex items-center justify-between p-4 transition border rounded-lg cursor-pointer
              bg-[var(--bg-primary)] border-[var(--border-color)]
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

export default Schema;