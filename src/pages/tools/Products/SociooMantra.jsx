import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

function SociooMantra() {
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
            title: "Digital Billing & Accounting",
            description:
                "Automated maintenance invoicing, payment tracking, and financial reporting.",
        },
        {
            title: "Advanced Visitor Management",
            description:
                "Secure digital check-ins with OTP verification for guests, staff, and deliveries.",
        },
        {
            title: "Helpdesk & Ticketing",
            description:
                "Streamline resident complaints and service requests to ensure rapid resolution.",
        },
        {
            title: "Community Hub",
            description:
                "Facilitate seamless communication through notices, discussion forums, and polls.",
        },
        {
            title: "Amenity Booking",
            description:
                "Easy scheduling and management of clubhouses, sports courts, and other shared spaces.",
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
   SocioMantra - Society Management System
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
        src="/sociomantra.jpeg"
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
   SocioMantra - Society Management System
      </h1>

      <p className="mt-8 text-lg leading-relaxed text-[var(--text-secondary)]">
SocioMantra is a comprehensive society management platform designed to simplify the everyday complexities of managing residential complexes and gated communities. From smart accounting and automated billing to advanced visitor management and helpdesk ticketing, SocioMantra acts as a central hub for administrators, security personnel, and residents alike. </p>

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
Built with convenience and security in mind, our platform brings everyone together on a single app. Residents can pay maintenance bills, book amenities, raise complaints, and stay updated with community notices effortlessly. Meanwhile, society committees get robust tools to track income and expenses, monitor staff, and ensure absolute transparency. Security gates are equipped with a digital log for tracking visitors, maids, and delivery personnel, ensuring a safe living environment. Embrace the future of community living with SocioMantra.
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
Everything you need to succeed with SocioMantra - Society Management System.
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
"SocioMantra completely streamlined our society operations. From transparent automated billing to tracking gate visitors, it gives our committee complete peace of mind."</p>
                    <div className="flex items-center gap-4 mt-8">
                        <div
                            className="flex items-center justify-center w-12 h-12 font-bold text-yellow-500 rounded-full bg-yellow-500/10"
                        >
                          VS
                        </div>

                        <div>
                            <h4 className="font-bold">

                                
Vikram Singh
                            </h4>

                            <p className="text-sm text-[var(--text-secondary)]">
                               Society Secretary
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SociooMantra;