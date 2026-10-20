import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";
import { ChevronDown, Upload, Image as ImageIcon } from "lucide-react";

const data = [
  "Confident Power Portrait",
  "Workspace Behind-the-Scenes",
  "Personal Story Narrative",
  "Vertical Professional Content",
  "Lifestyle Professional Activities",
  "Values Demonstration Lifestyle",
  "LinkedIn Thought Leadership",
  "Candid Environmental Portrait",
  "Creative Studio Shot",
  "Modern Brand Identity",
  "Professional Team Shoot",
  "Corporate Lifestyle",
  "Outdoor Natural Portrait",
  "Luxury Brand Look",
  "Startup Founder Style",
  "Minimal Clean Portrait",
];

function AIProfessional() {

  const navigate = useNavigate();
  
 const [advancedOpen, setAdvancedOpen] = useState(false);
  const [quality, setQuality] = useState("standard");

  const loopData = [...data, ...data];
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        if (prev <= -50) return 0;
        return prev - 0.05;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setTranslateX((prev) => prev - 5);
  };

  const prevSlide = () => {
    setTranslateX((prev) => prev + 5);
  };

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  };


  return (
    <div className=" dark:bg-black text-[var(--text-primary)] transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
        <div className="px-4 mx-auto my-6 max-w-7xl">
          
                  <div className="mx-auto max-w-7xl">
          
                    <div
                      className="
                  flex items-center
                  gap-4
                  px-5
                  py-4
                  rounded-2xl
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
                        to="/tools/image-tools"
                        className="
                    text-[15px]
          
                    text-[#666]
                    dark:text-gray-400
          
                    hover:text-[#F3A412]
          
                    transition-all duration-300
                  "
                      >
                        Image Tools
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
                    AI Professional Photography Editor

          
                      </span>
                    </div>
                  </div>
                </div>

      <main className="px-4 pb-20 mx-auto mt-10 max-w-7xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-extrabold text-yellow-500 md:text-5xl">
            AI Professional Photography Editor
          </h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Combine images, describe scenes and generate professional photos using AI.
          </p>
        </div>

        {/* PHOTO EDITOR SECTION */}

 <div className="max-w-xl mt-10 text-white">

      {/* TITLE */}
      <h2 className="mb-4 font-semibold text-[16px]">
        2. Describe the Result
      </h2>

      {/* DROPDOWNS */}
      <p className="mb-2 text-xs text-gray-400">
        Popular Prompts (Optional)
      </p>

      <div className="flex gap-3 mb-4">
        <select className="bg-[#0d0d0d] border border-gray-700 px-3 py-2 rounded-md text-sm w-full">
          <option>Artistic & Abstract</option>
        </select>

        <select className="bg-[#0d0d0d] border border-yellow-500 px-3 py-2 rounded-md text-sm w-full">
          <option>Select Instruction</option>
        </select>
      </div>

      {/* TEXTAREA */}
      <p className="mb-2 text-xs text-gray-400">Detailed Prompt</p>
      <textarea
        rows={4}
        placeholder="E.g., A futuristic electric car, sleek design..."
        className="w-full bg-[#0d0d0d] border border-gray-700 rounded-md p-3 text-sm mb-4"
      />

      {/* ADVANCED OPTIONS */}
      <div className="mb-6 border border-gray-800 rounded-lg">
        <div
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="flex items-center justify-between px-4 py-3 cursor-pointer"
        >
          <span className="text-sm">⚙ Advanced Options</span>
          <ChevronDown
            className={`transition ${
              advancedOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {advancedOpen && (
          <div className="p-4 space-y-4 border-t border-gray-800">

            {/* Reference */}
            <div>
              <p className="mb-2 text-xs text-gray-400">
                Reference Image (Optional)
              </p>

              <div className="flex gap-3 border border-gray-800 rounded-lg p-3 bg-[#0f0f14]">
                <div className="flex items-center justify-center rounded-md w-14 h-14 bg-black/60">
                  📷
                </div>

                <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 rounded-md">
                  <Upload size={16} /> Upload
                </button>

                <button className="px-4 py-2 text-sm border border-gray-600 rounded-md">
                  Cloud Gallery
                </button>
              </div>
            </div>

            {/* INPUTS */}
            <div>
              <p className="mb-2 text-xs text-gray-400">
                Short Overlay Text (Optional)
              </p>
              <input
                className="w-full bg-[#0d0d0d] border border-gray-700 p-2 rounded-md text-sm"
                placeholder='e.g., "50% Off" or "New Arrival"'
              />
            </div>

            <div>
              <p className="mb-2 text-xs text-gray-400">
                Detailed Marketing Text (Optional)
              </p>
              <textarea
                rows={3}
                className="w-full bg-[#0d0d0d] border border-gray-700 p-2 rounded-md text-sm"
                placeholder='e.g., "Handcrafted with sustainable materials."'
              />
            </div>

            {/* DROPDOWNS */}
            <div>
              <p className="mb-2 text-xs text-gray-400">
                Output Shape
              </p>
              <select className="w-full bg-[#0d0d0d] border border-gray-700 p-2 rounded-md text-sm">
                <option>1:1</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-xs text-gray-400">
                Style
              </p>
              <select className="w-full bg-[#0d0d0d] border border-gray-700 p-2 rounded-md text-sm">
                <option>Photorealistic</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-xs text-gray-400">
                Negative Prompt (Optional - What to avoid)
              </p>
              <input
                className="w-full bg-[#0d0d0d] border border-gray-700 p-2 rounded-md text-sm"
                placeholder="Blurry, low quality..."
              />
            </div>
          </div>
        )}
      </div>

      {/* QUALITY */}
      <h3 className="mb-3 text-sm">Quality & Speed</h3>

      <div className="flex gap-4 mb-6">
        <div
          onClick={() => setQuality("standard")}
          className={`flex-1 p-4 border rounded-xl cursor-pointer ${
            quality === "standard"
              ? "border-yellow-500"
              : "border-gray-700"
          }`}
        >
          <p className="font-medium">⚡ Standard</p>
          <p className="text-xs text-gray-400">10 credits</p>
        </div>

        <div
          onClick={() => setQuality("pro")}
          className={`flex-1 p-4 border rounded-xl cursor-pointer ${
            quality === "pro"
              ? "border-blue-500"
              : "border-gray-700"
          }`}
        >
          <p className="font-medium">✨ Pro</p>
          <p className="text-xs text-gray-400">40 credits</p>

          <div className="flex gap-2 mt-2 text-[10px]">
            <span className="bg-blue-600 px-2 py-[2px] rounded">
              BEST 4K
            </span>
            <span className="bg-purple-600 px-2 py-[2px] rounded">
              MULTI-LANG
            </span>
            <span className="bg-green-600 px-2 py-[2px] rounded">
              ADVANCED
            </span>
          </div>
        </div>
      </div>

      {/* CREDITS */}
      <div className="flex justify-between items-center border border-gray-800 rounded-lg p-4 mb-4 bg-[#0f0f14]">
        <div>
          <p className="text-sm">Credits: <span className="font-medium text-yellow-400">10</span></p>
          <p className="text-xs text-gray-500">Expires in 5 days</p>
        </div>

        <button className="px-4 py-2 text-sm font-medium text-black bg-yellow-500 rounded-md">
          Buy More
        </button>
      </div>

      {/* CHECKBOX */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <input type="checkbox" />
        <p>
          I agree to the{" "}
          <span className="text-yellow-400">Terms & Conditions</span>{" "}
          and{" "}
          <span className="text-yellow-400">Privacy Policy</span>
        </p>
      </div>

      {/* BUTTON */}
      <button className="w-full bg-[#b88210] hover:bg-[#d89b12] text-black py-3 rounded-lg font-medium">
        ✨ Generate Reality (10 credits)
      </button>
    </div>



<div className="relative mt-10 overflow-hidden">

  {/* LEFT BUTTON */}
  <button
    onClick={prevSlide}
    className="absolute left-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
  >
    ←
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={nextSlide}
    className="absolute right-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
  >
    →
  </button>

            <div
              className="flex gap-4"
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {loopData.map((item, i) => (
                <div key={i} className="min-w-[25%] p-2">
                  <div className="grid grid-rows-2 gap-5">

                    <div className="h-[280px] border border-[var(--border-color)] rounded-xl flex items-center justify-center">
                      <span className="text-xs text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </div>

                    <div className="h-[280px] border border-[var(--border-color)] rounded-xl flex items-center justify-center">
                      <span className="text-xs text-[var(--text-secondary)]">
                        {item}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
        
          </div>

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
        </main>

    <Footer />

  </div>
    
  );

}
export default AIProfessional;