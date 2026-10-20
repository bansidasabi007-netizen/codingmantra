import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

const tools = [
    {
    title: "Planning Poker",
    desc: "Create and download professional invoices with GST/VAT support.",
    icon: "ri-video-line",
    powerful: true,
    link: "/Planning"
  },
  {
    title: "Random Password Generator",
    desc: "Create and download professional quotations for your clients.",
    icon: "ri-calendar-line",
    powerful: true,
    link: "/Randomm"
  },
  {
    title: "RSA Key Generator ",
    desc: "calculate your loan EMI with advanced options like yearly prepayments and annual step-up.",
    icon: "ri-video-line",
    link: "/RSA"
  },
  {
    title: "SSH Key Generator ",
    desc: "Calculate how making prepayments can reduce your loan tenure and save you interest.",
    icon: "ri-video-line",
    link: "/SSH"
  },
  {
    title: "UUID/GUID Generator ",
    desc: "Estimate mutual fund returns with a step-up option to see how increasing your investment can accelerate wealth creation.",
    icon: "ri-t-shirt-line",
    link: "/UUID"
  },
  {
    title: "Colour theme Generator",
    desc: "Plan your retirement income with our systematic withdrawal Plan (SWP) calculator.",
    icon: "ri-book-open-line",
    link: "/Color"
  },
  {
    title: "Cron Minifier",
    desc: "Calculate the maturity amount and interest earned on your Public Provident Fund (PPF) investment",
    icon: "ri-book-open-line",
    link: "/Cron"
  },
  {
    title: "JSON Formatter",
    desc: "A powerful online tool to validate, parse, format, and Beautify your JSON data.",
    icon: "ri-book-open-line",
    link: "/JSON"
  },
  {
    title: "Regex Tester",
    desc: "Build and test your regular expressions in real-time with instant match highlighting.",
    icon: "ri-book-open-line",
    link: "/Regex"
  },
  {
    title: "Code Minifier",
    desc: "Minify your JS, CSS, and HTML to reduce file size and improve website speed.",
    icon: "ri-book-open-line",
    link: "/JavaScript"
  },
  {
    title: "Javascript Obfuscator ",
    desc: "Estimate your EPF balance at retirement based on your salary and contributions.",
    icon: "ri-book-open-line",
    link: "/Obfuscator"
  },
  {
    title: "JWT Decoder",
    desc: "Estimate the maturity amount for your investment in the Sukanya Samriddhi Yojana (SSY) scheme .",
    icon: "ri-book-open-line",
    link: "/JWT"
  },
  {
    title: "BAse64 Encoder/Decoder",
    desc: "Calculate the maturity amount and interest earned on your Recurring Deposite (RD) investment.",
    icon: "ri-book-open-line",
    link: "/Base64"
  },
  {
    title: "PDF Merger ",
    desc: "Calculate the compound interest on your investments over time.",
    icon: "ri-book-open-line",
    link: "/Merger"
  },
];

function Devloper() {

  const navigate = useNavigate();

  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  return (
 <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}


                  <div className="w-full px-4 mx-auto my-6 max-w-8xl">
      
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
      
                  {/* CURRENT */}
                  <span
                    className="
                      text-[15px]
                      font-semibold
            
                      text-[#111111]
                      dark:text-white
                    "
                  >
             Developer & Productivity Tools
                  </span>
      
                </div>
      
              </div>
      
            </div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Developer & Productivity Tools    </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
A collection of handy utilities for developers and for everyday tasks.</p>  </div>

      {/* Cards */}
      <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
<div
key={index}
onClick={() => tool.link && navigate(tool.link)}
className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
>

{tool.powerful && (
  <span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
    Powerful
  </span>
)}

<div className="flex items-start justify-between gap-4">

<div className="flex items-start gap-4">

<div className="flex items-center justify-center w-12 h-12 text-xl text-[#F3A412] rounded-full bg-[#F3A412]/20">
<i className={tool.icon}></i>
</div>

<h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug pr-16">
{tool.title}
</h3>

</div>

</div>
<p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
{tool.desc}
</p>

</div>
        ))}

      </div>
      
{/* Content Section */}
<div className="w-full px-6 mt-20">

<h2 className="text-3xl font-bold text-[#F3A412]">
Simple Tools for Complex Tasks
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Sometimes you just need a simple, reliable tool to get a specific job done quickly. Our productivity tools are designed to do just that. No frills, no sign-ups—just straightforward utilities that work entirely in your browser to help you be more efficient in your digital life.</p>
</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What is it importantto use a random password generator?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Humans are notoriously bad at creating truly random passwords. We tend to use predictable patterns, names, or dates. A password generator uses cryptographic randomness to create passwords that are incredibly difficult for computers to guess, providing a much higher level of security for your accounts.</p>
</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
What is a UUID and why would I need one?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information. Developers use them for things like database keys, transaction IDs, or any other resource that needs a guaranteed unique identifier without needing a central authority to manage them.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Why is the difference between Minification and Obfuscation?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Minification is about performance; it removes unnecessary characters from code to make the file smaller and faster to download, without changing how it works. Obfuscation is about security; it actively rewrites the code to be extremely difficult for a human to understand and reverse-engineer, which can help protect your intellectual property in client-side code.</p>
</details>
<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Are these tool secure to use?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Yes, absolutely. All of our productivity tools run entirely in your browser. Your data, whether it's a password, a block of JSON, or code to be processed, is never sent to our servers. This ensures your information remains completely private and secure.</p>
</details>

</div>

</div>


<Footer/>
    </div>



  );
}

export default Devloper;