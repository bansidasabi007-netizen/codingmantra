import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import { useNavigate,Link } from "react-router-dom";

function Privacy() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    company: "",
    website: "",
    product: "",
    productUrl: "",
    businessType: "Service Business",
    country: "",
    email: "",
    phone: "",
    address: "",
  });

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

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">

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
             to="/tools/Legal"
              className="
                text-[15px]
      
                text-[#666]
                dark:text-gray-400
      
                hover:text-[#F3A412]
      
                transition-all duration-300
              "
            >
               Legal Tools
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
             Privacy Policy Generator
            </span>
      
          </div>
      
        </div>
      
      </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          Privacy Policy Generator (AI)
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Create a foundational Privacy Policy for your website in seconds.
        </p>
      </div>

      {/* MAIN */}
      <div className="w-full px-6 mt-10">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 gap-6 p-6 border rounded-xl md:grid-cols-2 border-[var(--border-color)] bg-[var(--card-bg)]">

            {/* LEFT SIDE */}
            <div>
              <h2 className="flex items-center gap-2 mb-2 text-lg font-semibold">
                📄 Policy Details
              </h2>

              <p className="mb-6 text-sm text-[var(--text-secondary)]">
                Enter your business details to generate a custom policy.
              </p>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-4">

                <input placeholder="Company Name *" className="input" />
                <input placeholder="Main Website URL *" className="input" />

                <input placeholder="Product/App Name" className="input" />
                <input placeholder="Product/App URL" className="input" />

                <select className="input">
                  <option>Service Business</option>
                  <option>E-commerce</option>
                </select>

                <input placeholder="Country of Operation *" className="input" />
              </div>

              {/* CONTACT */}
              <h3 className="mt-6 mb-3 font-semibold">
                Contact Details (Optional)
              </h3>

              <input placeholder="Support Email" className="w-full mb-3 input" />
              <input placeholder="Phone Number" className="w-full mb-3 input" />
              <textarea placeholder="Full Address" className="w-full h-24 input" />

              {/* BUTTON */}
              <button className="w-full py-3 mt-5 font-medium text-black transition rounded-md bg-[#F3A412] hover:bg-yellow-400">
                ✨ Generate Privacy Policy
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center min-h-[400px] border rounded-lg border-[var(--border-color)] bg-[var(--bg-primary)]">

              <div className="text-center text-[var(--text-secondary)]">
                <div className="mb-2 text-3xl">✨</div>
                <p>Generated content will appear here.</p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;