import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import { ArrowRight } from "lucide-react";

function Terms() {

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
   const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Are Terms and Conditions legally required?",
      a: "No, but they are highly recommended. They protect your business and define rules for users."
    },
    {
      q: "What should be included in a Terms and Conditions document?",
      a: "It should include user rules, limitations of liability, intellectual property rights, and dispute resolution."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();



  const tools = [
    {
      title: "Privacy Policy Generator",
      link: "/privacy-policy",
    },
    {
      title: "Return Policy Generator",
      link: "/return-policy",
    },
    {
      title: "Rent Agreement Generator",
      link: "/rent-agreement",
    },
  ];


  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-black text-[var(--text-primary)]">

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
            Terms & Conditions Generator (AI)
            </span>
      
          </div>
      
        </div>
      
      </div>

      
      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          Terms & Conditions Generator (AI)
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Generate a standard Terms and Conditions document for your website or app.
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
      
      
           <div className="w-full px-6 mt-20">
  <div className="max-w-5xl mx-auto space-y-10">

    {/* TERMS CONTAINER */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">
      
      <h2 className="text-2xl font-bold text-[#F3A412] mb-4">
        What Are Terms and Conditions?
      </h2>

      <div className="pl-4 mb-4 border-l-4 border-red-500">
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">
            Disclaimer:
          </span>{" "}
          This tool generates a template and is not a substitute for professional legal advice.
        </p>
      </div>

      <p className="text-[var(--text-secondary)]">
        Terms and Conditions are rules users must agree to use your service.
      </p>
      <p className="text-[var(--text-secondary)]">Terms and Conditions (also known as Terms of Service or T&C) are the rules and guidelines that a user must agree to in order to use your website or service. This document forms a legal contract between you (the business) and the user, helping to limit your liability and manage user expectations.</p>
      <p className="text-[var(--text-secondary)]"> Why Are T&C Important?</p>
      <p className="text-[var(--text-secondary)]"> Limit Liability: They can protect your business from being sued for certain issues.</p>
      <p className="text-[var(--text-secondary)]"> Define Rules: They outline what is and isn't allowed on your site (e.g., user-generated content policies).</p>
      <p className="text-[var(--text-secondary)]"> Intellectual Property: They clarify who owns the content on your site.</p>
    </div>

    {/* FAQ CONTAINER */}
    <div className="p-6 border rounded-xl dark:bg-black border-[var(--border-color)]">

      <h2 className="text-2xl font-bold text-[#F3A412] mb-6">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4">

        {faqs.map((item, index) => (
          <div className="pb-3 border-b border-[var(--border-color)]">

            {/* QUESTION */}
        <div
  onClick={() => toggleFAQ(index)}
  className="flex items-center justify-between cursor-pointer"
>
  <p className="text-[var(--text-primary)] font-medium">
    {item.q}
  </p>

  {/* 🔽 Arrow Icon */}
  <ChevronDown
    size={18}
    className={`transition-transform duration-300 ${
      openIndex === index ? "rotate-180" : ""
    }`}
  />
</div>

            {/* ANSWER */}
            {openIndex === index && (
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                {item.a}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>

  </div>
</div>

   <div className="w-full px-6 mt-20">
      <div className="max-w-5xl mx-auto">

        {/* CONTAINER */}
        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
            More Tools in Legal Tools
          </h2>

          {/* TOOLS GRID */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {tools.map((tool, index) => (
              <div
                key={index}
                onClick={() => navigate(tool.link)}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-[#F3A412] transition"
              >

                {/* LEFT */}
                <div className="flex items-center gap-3">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-10 h-10 text-[#F3A412] rounded-full bg-[#F3A412]/20">
                    <i className="ri-file-text-line"></i>
                  </div>

                  {/* TITLE */}
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {tool.title}
                  </p>
                </div>

                {/* RIGHT ARROW */}
                <ArrowRight
                  size={18}
                  className="text-[var(--text-secondary)]"
                />

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

export default Terms;