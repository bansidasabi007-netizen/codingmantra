import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

const tools = [
  {
    title: "Age Calculator",
    desc: "Generate a list of relevant primary ,long-tail , and LSI Keywords for any topic",
    icon: "ri-video-line",
    link:"/Age"
  },
  {
    title: "Date Comparator",
    desc: "Create and customize a free WhatsApp chat widget for your website to engage visitors",
    icon: "ri-calendar-line",
    link:"/Date"
  },
  {
    title: "Date calculator",
    desc: "Create stunning, on-brand promotional images for your social media channels in just a few clicks.",
    icon: "ri-video-line",
    link:"/Datec"
  },
  {
    title: "Timezone Converter",
    desc: "Generate professional engaging posts for your LinkedIn profile or comapany page.",
    icon: "ri-video-line",
    link:"/Timezone"
  },
  {
    title: "Unix Timestamp Converter",
    desc: "Generate relevant and trending hashtags for Instagram, Twitter, and LinkedIn to boost your social media reach.",
    icon: "ri-t-shirt-line",
    link:"/Unix"
  },
  {
    title: "Time Unit Converter",
    desc: "Generate high-converting ad copy for your campaigns, Get multiple headline and description variations for Google and Facebook Ads.",
    icon: "ri-book-open-line",
    link:"/Unit"
  },

 
];

function Datetime() {

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
        Date & Time Tools  
            </span>

          </div>

        </div>

      </div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Date & Time Tools     </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
A suite of handy calculators and converters to help you manage dates, times, and timezones with ease.</p>  </div>

      {/* Cards */}
      <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
<div
key={index}
onClick={() => tool.link && navigate(tool.link)}
className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
>



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
Simplify Your Date & Time Calculations
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Working with dates and times can be surprisingly tricky. Whether you're trying to figure out the exact number of days until a deadline, calculating someone's precise age, or coordinating a meeting across different timezones, our tools are here to help.</p>
<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
This collection of utilities is designed to provide quick, accurate, and easy-to-use solutions for common date and time-related tasks. All calculations are done instantly in your browser.

</p>
</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
Why do I need a timezone Converter?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
In a globally connected world, a timezone converter is essential for scheduling international meetings, planning travel, or simply knowing what time it is for a friend or colleague in another country. It helps avoid confusion and ensures everyone is on the same page.</p></details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
What is a Unix Timestamp?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

A Unix Timestamp is a system for describing a point in time, defined as the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970. It's widely used by developers and computer systems because it's a simple, universal number that isn't affected by timezones.</p>
</details>

<details className="w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
    How accurate are the calculators?
    <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
  </summary>

  <p className="mt-3 text-sm text-[var(--text-secondary)]">
    Our calculators use robust, well-tested date and time libraries to perform their calculations.
    They account for complexities like leap years and different month lengths to provide you with
    accurate results for your planning needs.
  </p>
</details>
</div>

</div>


<Footer/>
    </div>



  );
}

export default Datetime;