import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

function WACM() {
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
            title: "Smart Bulk Messaging",
            description:
                "Send targeted campaigns to thousands of contacts instantly with high delivery rates.",
        },
        {
            title: "No-Code Chatbot Builder",
            description:
                "Create complex auto-reply flows to automate customer service inquiries.",
        },
        {
            title: "Detailed Analytics Dashboard",
            description:
                "Monitor message delivery, read receipts, and click-through rates in real-time.",
        },
        {
            title: "Contact Segmentation",
            description:
                "Tag and group contacts for highly personalized marketing campaigns.",
        },
        {
            title: "Rich Media Broadcasting",
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
WACM.IN - Simplify Your WhatsApp Marketing
    </span>
  </div>
</div>

            {/* Hero */}
            <section className="px-6 py-16 mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <div
                        className="p-10 rounded-3xl"
                    >
                        <div className="flex justify-center">
                            <img
                                src="/6bb8b8df-14e0-42f9-a304-d57f9e5778dd_logo (1).png"
                                alt="CM POS"
                                className="object-contain h-[300px]"
                            />
                        </div>
                    </div>
                    {/* Right */}
                    <div>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span
                                className="px-4 py-2 text-sm text-yellow-500 rounded-full bg-yellow-500/10"
                            >
                                Business Software
                            </span>

                            <span
                                className="px-4 py-2 text-sm text-green-500 rounded-full bg-green-500/10"
                            >
                                Starting from ₹999
                            </span>
                        </div>

                        <h1
                            className="text-5xl font-black leading-tight lg:text-7xl"
                        >
                            WACM.IN - Simplify Your WhatsApp Marketing
                        </h1>

                        <p
                            className="
                mt-8
                text-lg
                leading-relaxed
                text-[var(--text-secondary)]
              "
                        >
                            CM POS is a powerful POS solution
                            designed for retail stores,
                            restaurants, cafes and businesses
                            looking to streamline operations,
                            inventory and customer management.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <button
                                className="
                  px-8 py-4
                  rounded-xl
                  bg-[#F3A412]
                  text-black
                  font-semibold
                "
                            >
                                Visit Website
                            </button>

                            <button
                                className="
                  px-8 py-4
                  rounded-xl
                  border
                  border-[var(--border-color)]
                "
                            >
                                Get on Play Store
                            </button>
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
                    Whether you are running promotional offers, sending transactional alerts, or nurturing leads, WACM.IN handles it all. Our intelligent chatbot builder lets you automate customer support, answering queries 24/7 without human intervention. Integrate seamlessly with your existing CRM and trigger messages based on user actions. Unlock the power of conversational marketing and watch your conversion rates soar.
                </p>
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
                    Everything you need to succeed with WACM.IN - Simplify Your WhatsApp Marketing.
                </p>

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
                    "Our marketing team loves WACM.IN! The no-code chatbot builder saves us hours of customer query handling, and the broadcast delivery rates are exceptional."
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <div
                            className="flex items-center justify-center w-12 h-12 font-bold text-yellow-500 rounded-full bg-yellow-500/10"
                        >
                            PD
                        </div>

                        <div>
                            <h4 className="font-bold">

                                Priya Desai
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

export default WACM;