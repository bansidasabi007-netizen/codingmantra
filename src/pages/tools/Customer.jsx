import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
import { RiVolumeUpLine, RiArrowLeftLine, RiHome5Line  } from "react-icons/ri";
import { Link } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();


  const changeTheme = (mode) => {
    if (mode === "light") document.documentElement.classList.remove("dark");
    else if (mode === "dark") document.documentElement.classList.add("dark");
    else if (mode === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  };

  const tools = [
    {
      title: "Customer Management",
      desc: "Add edit and organize your customer contacts into groups for targeted marketing.",
      icon: <RiVolumeUpLine />,
      link: "/CM"
    },
    {
      title: "Email campaign Manager",
      desc: "manage SMTP servers and send targeted email campanigns to your customer groups",
      icon: <RiVolumeUpLine />,
      link: "/ECM"
    },
    {
      title: "Follow-up Reminders",
      desc: "Set and track reminders to follow up with  customers and never miss an opportunity.",
      icon: <RiVolumeUpLine />,
      link: "/Followup"
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      
      <Navbar changeTheme={changeTheme} />

<div className="w-full px-4 mx-auto my-6 max-w-8xl">

  <div
    className="
      flex
      items-center

      gap-2
      sm:gap-4

      px-3
      sm:px-5

      py-3
      sm:py-4

      rounded-2xl

      border
      border-[#E5E7EB]
      dark:border-[#232531]

      bg-white
      dark:bg-[#121218]

      shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      dark:shadow-none

      overflow-x-auto
      whitespace-nowrap

      transition-all
      duration-300
    "
  >

    {/* BACK */}
    <button
      onClick={() => navigate(-1)}
      className="
        flex-shrink-0

        text-[#666]
        dark:text-gray-400

        transition-all
        duration-300

        hover:text-[#F3A412]
      "
    >
      <RiArrowLeftLine className="text-[16px] sm:text-[20px]" />
    </button>

    {/* HOME */}
    <Link
      to="/"
      className="
        flex-shrink-0

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      <RiHome5Line className="text-[14px] sm:text-[18px]" />
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>

    {/* TOOLS */}
    <Link
      to="/tools"
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      Tools
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>

    {/* IMAGE TOOLS */}
    <Link
      to="/tools/image-tools"
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      Image Tools
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>

    {/* CURRENT */}
    <span
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        font-semibold

        text-[#111111]
        dark:text-white
      "
    >
       Customer Relationship Management (CRM) Tools
    </span>

  </div>

</div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-500">
Customer Relationship Management (CRM) Tools
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
        Build stronger connections with your audience through powerful email marketing and customer management.
        </p>
      </div>

      {/* Cards */}
      <div className="grid max-w-6xl gap-8 px-6 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-2">

        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => navigate(tool.link)}
            className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
          >

            {/* Badge */}
            <span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
              Powerful
            </span>

            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 text-xl text-[#F3A412] rounded-full bg-[#F3A412]/20">
                {tool.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug pr-10">
                {tool.title}
              </h3>

            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              {tool.desc}
            </p>

          </div>
        ))}

      </div>

      {/* Content Section */}
<div className="w-full px-6 mt-20">

<h2 className="text-3xl font-bold text-[#F3A412]">
Build and Nurture Your Customer Relationships
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
In today's competitive landscape, your customer relationships are your most valuable asset. Our CRM tools are designed to help you manage these relationships effectively, turning casual visitors into loyal customers and advocates for your brand.
</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
Whether you're developing audiobooks, editing YouTube videos, prototyping video games, or spinning up conversational interfaces, our Audio suite bridges the gap between raw text ideas and high-fidelity sonic experiences.</p>

</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What is a CRM?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

A CRM (Customer Relationship Management) tool helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. The goal is to improve business relationships with customers, assist in customer retention, and drive sales growth.</p>
</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
How does the Email Campaign Manager work?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Our Email Campaign Manager is a mini-CRM that allows you to manage customer contacts, segment them into groups, configure your own SMTP servers for sending, create email campaigns, and track their performance.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Is my customer data secure?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Yes. All your data, including customer lists and campaign details, is stored securely and is only accessible by you when you are logged in to your account.</p></details>

</div>
</div>
      <Footer />
    </div>
  );
};

export default Customer;