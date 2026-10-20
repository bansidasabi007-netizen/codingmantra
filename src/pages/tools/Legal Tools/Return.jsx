import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

function Return() {

  const [acceptReturns, setAcceptReturns] = useState(true);
    
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
      q: "Is a return policy legally required?",
      a: "In many places, consumer protection laws require you to have a return policy if you sell goods. Even if not strictly required, it's a standard business practice that customers expect. Not having one can appear untrustworthy."
    },
{
  q: "What are the key elements of a good return policy?",
  a: `A good return policy should clearly state the timeframe for returns (e.g., 30 days), the required condition of the item, what the customer will receive (refund, exchange, store credit), and who is responsible for return shipping costs.`
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
            Return Policy Generator (AI)
            </span>
      
          </div>
      
        </div>
      
      </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
        Return Policy Generator (AI)
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
       Generate a standard Return & Refund Policy for your business.
        </p>
      </div>

<div className="w-full px-6 mt-10">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 gap-6 p-6 border rounded-xl md:grid-cols-2 border-[var(--border-color)] bg-[var(--card-bg)]">

          {/* LEFT */}
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

              <input placeholder="Product/App Name (Optional)" className="input" />
              <input placeholder="Product/App URL (Optional)" className="input" />

              <select className="input">
                <option>Service Business</option>
                <option>E-commerce</option>
              </select>

              <input placeholder="Country of Operation *" className="input" />

            </div>

            {/* 🔥 RETURN DETAILS */}
            <div className="pt-6 mt-6 border-t border-[var(--border-color)]">

              <h3 className="mb-4 font-semibold text-[var(--text-primary)]">
                Return Details
              </h3>

              {/* TOGGLE */}
              <div className="flex items-center gap-3 mb-4">

                <div
                  onClick={() => setAcceptReturns(!acceptReturns)}
                  className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition ${
                    acceptReturns ? "bg-[#F3A412]" : "bg-gray-500"
                  }`}
                >
                  <div
                    className={`bg-black w-5 h-5 rounded-full shadow-md transform transition ${
                      acceptReturns ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </div>

                <p className="text-sm text-[var(--text-primary)]">
                  Do you accept returns?
                </p>
              </div>

              {/* CONDITIONAL INPUTS */}
              {acceptReturns && (
                <div className="grid grid-cols-2 gap-4">

                  <input
                    placeholder="Return Window (in days)"
                    className="input"
                  />

                  <input
                    placeholder="Refund Process Time"
                    className="input"
                  />

                </div>
              )}

            </div>

            {/* CONTACT */}
            <div className="pt-6 mt-6 border-t border-[var(--border-color)]">

              <h3 className="mb-4 font-semibold text-[var(--text-primary)]">
                Contact Details (Optional)
              </h3>

              <input placeholder="Support Email" className="w-full mb-3 input" />
              <input placeholder="Phone Number" className="w-full mb-3 input" />
              <textarea placeholder="Full Address" className="w-full h-24 input" />

            </div>

            {/* BUTTON */}
            <button className="w-full py-3 mt-5 font-medium text-black rounded-md bg-[#F3A412] hover:bg-yellow-400">
              ✨ Generate Return Policy
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
    <div className="p-6 border rounded-xl dark:bg-black border-[var(--border-color)]">
      
      <h2 className="text-2xl font-bold text-[#F3A412] mb-4">
       Why a Clear Return Policy is Crucial
      </h2>

      <div className="pl-4 mb-4 border-l-4 border-red-500">
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">
            Disclaimer:
          </span>{" "}
          This tool generates a template and is not a substitute for professional legal advice. You should consult with a qualified legal professional to ensure compliance.
        </p>
      </div>

      <p className="text-[var(--text-secondary)]">
     For any business that sells products or services, a clear Return and Refund Policy is essential for building customer trust and managing expectations. It outlines the conditions under which customers can return items and receive a refund, exchange, or store credit. A well-written policy can reduce customer service inquiries and increase conversions by giving buyers confidence in their purchase.
How Our AI Tailors Your Policy
      </p>
      <p className="text-[var(--text-secondary)]">A return policy for a SaaS subscription is very different from one for physical t-shirts. Our generator uses the "Business Type" you select to create a more relevant template:</p>
      <p className="text-[var(--text-secondary)]">E-commerce: The policy will include clauses about the condition of returned goods, shipping costs, and timeframes for returns.
SaaS: The policy will focus on subscription cancellations, refund periods (e.g., 30-day money-back guarantee), and prorated refunds.
Service Business / Blog: For businesses that don't sell returnable goods, the policy will often state that services are non-refundable once rendered.</p>
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

export default Return;