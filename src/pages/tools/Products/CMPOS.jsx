import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link,useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";

function CMPOS() {
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
      title: "Real-time Inventory Tracking",
      description:
        "Prevent stockouts and overstocking with automated alerts.",
    },
    {
      title: "Fast Billing & Invoicing",
      description:
        "Generate GST-compliant invoices in seconds to reduce checkout queues.",
    },
    {
      title: "Offline Capability",
      description:
        "Continue all sales operations seamlessly without an internet connection.",
    },
    {
      title: "Multi-Branch Management",
      description:
        "Control stock and pricing across multiple store locations.",
    },
    {
      title: "Customer CRM & Loyalty",
      description:
        "Build long-term customer relationships with loyalty programs.",
    },
    {
      title: "Advanced Reports",
      description:
        "Get actionable business insights with powerful analytics.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

              {/* Navbar */}
     <Navbar changeTheme={changeTheme}/>

     
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
 CM POS – Smart POS for Small & Medium Businesses
    </span>
  </div>
</div>

      {/* Hero */}
      <section className="px-6 py-16 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div
            className="
              rounded-3xl
              border
              p-10
              bg-[var(--card-bg)]
              border-[var(--border-color)]
            "
          >
            <div className="text-center">
              <h1 className="font-bold text-7xl">
                <span className="text-[#F3A412]">
                  cm
                </span>
                <span className="text-[var(--text-secondary)]">
                  pos
                </span>
              </h1>
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
              CM POS – Smart POS for Small &
              Medium Businesses
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
          Ideal for retail stores, restaurants,
          cafes, food trucks, and beauty salons,
          CM POS simplifies inventory tracking,
          employee management, customer
          engagement and billing operations.
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
          Everything you need to grow your
          business.
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
            "CM POS transformed how we manage
            our business. Billing is faster,
            inventory is accurate and reporting
            is excellent."
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div
              className="flex items-center justify-center w-12 h-12 font-bold text-yellow-500 rounded-full bg-yellow-500/10"
            >
              RS
            </div>

            <div>
              <h4 className="font-bold">
                Rahul Sharma
              </h4>

              <p className="text-sm text-[var(--text-secondary)]">
                Cafe Owner
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default CMPOS;