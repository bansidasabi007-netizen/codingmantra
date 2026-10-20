import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ArrowRight } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";

function Agreement () {



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


   const navigate = useNavigate();
  const tools = [
    {
      title: "Privacy Policy Generator",
      link: "/privacy-policy",
    },
    {
      title: "Terms & Conditions Generator",
      link: "/terms-condition",
    },
    {
      title: "Return Policy Generator",
      link: "/return-policy",
    },
  ];

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
           Rent Agreement Generator (AI)
            </span>
      
          </div>
      
        </div>
      
      </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          Rent Agreement Generator (AI)
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
      Generate a standard rental agreement for your property.
        </p>
      </div>

 {/* MAIN */}
      <div className="w-full px-6 mt-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 gap-6 p-6 border rounded-xl md:grid-cols-2 border-[var(--border-color)] bg-[var(--card-bg)]">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              {/* PARTY DETAILS */}
              <div className="p-5 border rounded-xl border-[var(--border-color)]">
                <h3 className="mb-4 font-semibold">Party Details</h3>

                <label className="block mb-2 text-sm">
                  Landlord Full Name <span className="text-red-500">*</span>
                </label>
                <input className="mb-3 input" />

                <label className="block mb-2 text-sm">
                  Landlord Address <span className="text-red-500">*</span>
                </label>
                <textarea className="h-20 mb-3 input" />

                <label className="block mb-2 text-sm">
                  Tenant Full Name <span className="text-red-500">*</span>
                </label>
                <input className="mb-3 input" />

                <label className="block mb-2 text-sm">
                  Tenant Current Address <span className="text-red-500">*</span>
                </label>
                <textarea className="h-20 input" />
              </div>

              {/* PROPERTY DETAILS */}
              <div className="p-5 border rounded-xl border-[var(--border-color)]">
                <h3 className="mb-4 font-semibold">Property & Lease Details</h3>

                <label className="block mb-2 text-sm">
                  Rental Property Address <span className="text-red-500">*</span>
                </label>
                <textarea className="h-20 mb-3 input" />

                <label className="block mb-2 text-sm">
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select className="mb-4 input">
                  <option>Apartment</option>
                  <option>House</option>
                </select>

                {/* ROW */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">
                      Monthly Rent (INR) <span className="text-red-500">*</span>
                    </label>
                    <input className="input" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">
                      Rent Due Date <span className="text-red-500">*</span>
                    </label>
                    <input placeholder="e.g., 1st of month" className="input" />
                  </div>
                </div>

                {/* DATES */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2 text-sm">
                      Lease Start Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" className="input" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">
                      Lease End Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" className="input" />
                  </div>
                </div>

                {/* DEPOSIT */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block mb-2 text-sm">
                      Security Deposit (INR) <span className="text-red-500">*</span>
                    </label>
                    <input className="input" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">
                      Advance Rent (Optional)
                    </label>

                    <div className="flex gap-2">
                      <select className="input">
                        <option>None</option>
                        <option>1 Month</option>
                      </select>
                      <input placeholder="Amount" className="input" />
                    </div>
                  </div>
                </div>

              </div>

              {/* DOCUMENT SETTINGS */}
              <div className="p-5 border rounded-xl border-[var(--border-color)]">
                <h3 className="mb-4 font-semibold">Document Settings</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input value="India" readOnly className="input" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">Language</label>
                    <select className="input">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full py-3 mt-2 font-medium text-black rounded-md bg-[#F3A412] hover:bg-yellow-400">
                ✨ Generate Agreement
              </button>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center min-h-[500px] border rounded-xl border-[var(--border-color)] bg-[var(--bg-primary)]">
              <div className="text-center text-[var(--text-secondary)]">
                <div className="mb-2 text-3xl">✨</div>
                <p>Generated content will appear here.</p>
              </div>
            </div>

          </div>

        </div>
      </div>


    <div className="w-full px-6 mt-16 mb-20">
      <div className="max-w-5xl mx-auto">

        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
            More Tools in Legal Tools
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => navigate(tool.link)}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[#F3A412] transition"
              >

                <div className="flex items-center gap-3">

                  <div className="flex items-center justify-center w-10 h-10 text-[#F3A412] rounded-full bg-[#F3A412]/20">
                    <i className="ri-file-text-line"></i>
                  </div>

                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {tool.title}
                  </p>
                </div>

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

export default Agreement ;