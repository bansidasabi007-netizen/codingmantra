import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

function CodingMantra() {
    const navigate = useNavigate()

    const changeTheme = (mode) => {
        const root = document.documentElement;

        if (mode === "dark") root.classList.add("dark");
        else if (mode === "light") root.classList.remove("dark");
        else {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", systemDark);
        }
    };

    const features = [
        {
            title: "Robust WhatsApp API",
            description:
                "Integrate WhatsApp messaging capabilities into your own apps and websites effortlessly.",
        },
        {
            title: "Multi-Agent Team Inbox",
            description:
                "collaboratively manage customer support tickets from a single shared dashboard.",
        },
        {
            title: "Automated Scheduling",
            description:
                "Plan your marketing campaigns in advance for optimal engagement times.",
        },
        {
            title: "Interactive Message Templates",
            description:
                "Use approved templates with buttons and quick replies for higher interaction.",
        },
        {
            title: "Cost-Effective Scalability",
            description:
                "Engage your audience with images, videos, PDFs, and interactive buttons.",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

            {/* Navbar */}
            <Navbar changeTheme={changeTheme} />


            {/* Breadcrumb */}
<div className="px-4 mx-auto mt-6 max-w-7xl">
  <div
    className="
      flex items-center
      gap-4
      px-5
      py-4
      rounded-2xl
      border
      bg-white
      dark:bg-[#121218]
      border-gray-200
      dark:border-[#232531]
    "
  >
    {/* BACK */}
    <button
      onClick={() => navigate(-1)}
      className="
        text-gray-500
        dark:text-gray-400
        transition
        hover:text-[#F3A412]
      "
    >
      <RiArrowLeftLine className="text-[20px]" />
    </button>

    {/* HOME */}
    <Link
      to="/"
      className="
        text-gray-500
        dark:text-gray-400
        hover:text-[#F3A412]
        transition
      "
    >
      <RiHome5Line className="text-[18px]" />
    </Link>

    <span className="text-gray-400 dark:text-[#4B5563]">
      &gt;
    </span>

    {/* PRODUCTS */}
    <Link
      to="/products"
      className="
        text-[15px]
        text-gray-500
        dark:text-gray-400
        hover:text-[#F3A412]
        transition
      "
    >
      Products
    </Link>

    <span className="text-gray-400 dark:text-[#4B5563]">
      &gt;
    </span>

    {/* CURRENT */}
    <span
      className="
        text-[15px]
        font-semibold
        text-gray-900
        dark:text-white
      "
    >
CodingMantra AI
    </span>
  </div>
</div>

            {/* Hero */}
<section className="px-6 py-16 mx-auto max-w-7xl">
  <div className="grid items-center gap-16 lg:grid-cols-2">

    {/* Left */}
    <div
      className="
        flex items-center justify-center
        rounded-3xl
        border
        p-8
        bg-white
        dark:bg-[#15151D]
        border-gray-200
        dark:border-[#232531]
      "
    >
      <img
        src="/1705429477ZpIWyKY9IwjMLRygaB9n.png"
        alt="WACM"
        className="w-full max-w-[420px] object-contain"
      />
    </div>

    {/* Right */}
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-4 py-2 text-sm rounded-full text-[#F3A412] bg-[#F3A412]/10">
          Business Software
        </span>

        <span className="px-4 py-2 text-sm text-green-500 rounded-full bg-green-500/10">
          Starting from ₹999
        </span>
      </div>

      <h1 className="text-5xl font-black leading-tight lg:text-6xl">
        CodingMantra AI
      </h1>

      <p className="mt-8 text-lg leading-relaxed text-[var(--text-secondary)]">
       CodingMantra AI is a developer-friendly WhatsApp Business API solution that democratizes access to enterprise-grade messaging tools. Designed for startups, developers, and growing businesses, it offers a robust API gateway to programmatically send messages, notifications, and OTPs via WhatsApp.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="https://wacm.in"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center
            px-8 py-4
            rounded-xl
            font-semibold
            bg-[#F3A412]
            text-black
          "
        >
          🌐 Visit Website
        </a>
      </div>
    </div>

  </div>
</section>

            {/* Overview */}
            <section className="max-w-5xl px-6 py-10 mx-auto">
                <h2 className="mb-8 text-5xl font-bold text-center">
                    Overview
                </h2>

                <p
                    className="
            text-lg
            leading-relaxed
            text-center
            text-[var(--text-secondary)]
          "
                >
Beyond the API, CodingMantra AI provides a user-friendly interface for managing teams, organizing contacts, and scheduling broadcast campaigns. Our platform supports multi-agent team inboxes, ensuring that no customer query goes unanswered. With pricing starting at just $2, we are removing the barrier to entry for advanced WhatsApp automation. Secure, scalable, and reliable—CodingMantra AI is the backbone your business communication needs.                </p>
            </section>

            {/* Features */}
            <section className="px-6 py-20 mx-auto max-w-7xl">
                <h2 className="text-5xl font-bold text-center">
                    Key Features
                </h2>

                <p
                    className="
            mt-4
            text-center
            text-[var(--text-secondary)]
          "
                >
Everything you need to succeed with CodingMantra AI.                </p>

                <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                p-8
                rounded-3xl
                border
                transition-all
                duration-300

                bg-[var(--card-bg)]
                border-[var(--border-color)]

                hover:border-[#F3A412]
                hover:-translate-y-1
              "
                        >
                            <div
                                className="flex items-center justify-center w-12 h-12 mb-6 text-yellow-500 rounded-full bg-yellow-500/10"
                            >
                                ✓
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="text-[var(--text-secondary)]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews */}
            <section className="px-6 py-20 mx-auto max-w-7xl">
                <h2 className="text-5xl font-bold text-center">
                    What Our Customers Say
                </h2>

                <p
                    className="
            mt-4
            text-center
            text-[var(--text-secondary)]
          "
                >
                    Genuine feedback from verified users.
                </p>

                <div
                    className="
            max-w-md
            p-8
            mt-16

            rounded-3xl
            border

            bg-[var(--card-bg)]
            border-[var(--border-color)]
          "
                >
                    <div className="mb-6 text-2xl text-yellow-500">
                        ★★★★★
                    </div>

                    <p
                        className="
              italic
              leading-relaxed
              text-[var(--text-secondary)]
            "
                    >
"Implementing the WhatsApp API was a breeze with CodingMantra AI. Excellent documentation and the multi-agent inbox perfectly handles our growing support team."                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <div
                            className="flex items-center justify-center w-12 h-12 font-bold text-yellow-500 rounded-full bg-yellow-500/10"
                        >
                           AP
                        </div>

                        <div>
                            <h4 className="font-bold">

                                
Amit Patel
                            </h4>

                            <p className="text-sm text-[var(--text-secondary)]">
                                Marketing Manager
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default CodingMantra;