import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown, Upload, Image as ImageIcon } from "lucide-react";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";


export default function DescribeSection() {
  const navigate = useNavigate()
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [quality, setQuality] = useState("standard");

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };

  return (
    <div className="min-h-screen text-white bg-black">
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
                   AI Sketch to Real Generator
                      </span>
                    </div>
                  </div>
                </div>

      {/* MAIN */}
      <main className="max-w-4xl px-4 pb-20 mx-auto mt-12">


            {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
            AI Sketch to Real Generator
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 dark:text-gray-400">
           Turn your rough drawings and sketches into stunning photorealistic images or digital art in seconds using AI.
          </p>
        </div>

        {/* Header */}
        <h1 className="flex items-center gap-2 mb-6 text-xl font-semibold">
          <span className="text-yellow-400">✨</span>
          Sketch to Image Generator
        </h1>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Upload */}
          <div>
            <p className="mb-3 text-sm text-gray-300">1. Upload your Sketch</p>

            <div className="border border-dashed border-gray-600 rounded-xl h-[520px] flex flex-col items-center justify-center text-center bg-[#0f0f14]">
              <div className="p-4 mb-4 rounded-full bg-black/60">
                <Upload className="w-6 h-6 text-yellow-400" />
              </div>

              <p className="text-sm text-gray-300">
                Click to upload or drag & drop
              </p>

              <p className="mb-4 text-xs text-gray-500">
                Accepts JPEG, PNG, WEBP
              </p>

              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm font-medium text-black bg-yellow-500 rounded-lg">
                  Upload
                </button>
                <button className="px-4 py-2 text-sm border border-gray-600 rounded-lg">
                  Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Result */}
          <div>
            <p className="mb-3 text-sm text-gray-300">Result</p>

            <div className="border border-gray-700 rounded-xl h-[520px] flex flex-col items-center justify-center bg-[#0f0f14]">
              <div className="p-4 mb-4 rounded-lg bg-black/60">
                <ImageIcon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">
                Your masterpiece will appear here
              </p>
            </div>
          </div>

        </div>
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

      </main>

      <Footer />
    </div>
  );
}