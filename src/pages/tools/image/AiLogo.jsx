import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown, Upload, Image as ImageIcon } from "lucide-react";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";


export default function AiLogo() {
  
  const navigate = useNavigate();
  
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [quality, setQuality] = useState("standard");

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  };

  return (
    <div className="min-h-screen dark:bg-black text-[var(--text-primary)] transition-colors duration-300">
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

      {/* MAIN */}
      <main className="w-full px-4 pb-20 mx-auto mt-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-yellow-500 md:text-6xl">
            AI Logo Generator
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
Design a professional logo for your brand in seconds. Describe your business, choose a style, and let our AI generate unique logo concepts for you.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--card-bg)] p-8 rounded-xl border border-[var(--border-color)]">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            <h1 className="flex items-center gap-2 text-xl font-semibold">
              ✨ Logo Design Studio
            </h1>

            {/* Company */}
            <div>
              <label className="block mb-1 text-sm">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md px-3 py-2 text-sm"
                placeholder="e.g., Acme Innovations"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block mb-1 text-sm">
                Subtitle or Slogan
              </label>
              <input
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md px-3 py-2 text-sm"
                placeholder="e.g., Quality Since 2024"
              />
            </div>

            {/* Dropdown */}
            <div>
              <label className="block mb-2 text-sm">
                Style Instructions
              </label>
              <div className="flex gap-3">
                <select className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-2 rounded-md text-sm">
                  <option>Select Category...</option>
                </select>
                <select className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-2 rounded-md text-sm">
                  <option>Select Style...</option>
                </select>
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label className="block mb-2 text-sm">
                Describe Style
              </label>
              <textarea
                rows={4}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md p-3 text-sm"
                placeholder="Describe your logo..."
              />
            </div>

            {/* ADVANCED */}
            <div className="border border-[var(--border-color)] rounded-lg">
              <div
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
              >
                <span className="text-sm">⚙ Advanced Options</span>
                <ChevronDown className={`${advancedOpen ? "rotate-180" : ""}`} />
              </div>

              {advancedOpen && (
                <div className="border-t border-[var(--border-color)] p-4 space-y-4">

                  <input
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] p-2 rounded-md text-sm"
                    placeholder="Industry"
                  />

                  <textarea
                    rows={2}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] p-2 rounded-md text-sm"
                    placeholder="Keywords"
                  />

                  <input
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] p-2 rounded-md text-sm"
                    placeholder="Colors"
                  />

                  {/* Upload */}
                  <div className="flex gap-3 border border-[var(--border-color)] rounded-lg p-3 bg-[var(--bg-primary)]">
                    <div className="flex items-center justify-center rounded-md w-14 h-14 bg-black/20">
                      <ImageIcon />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] rounded-md text-sm">
                      <Upload size={16} /> Upload
                    </button>
                  </div>

                </div>
              )}
            </div>

            {/* QUALITY */}
            <div>
              <p className="mb-3 text-sm">Quality & Speed</p>
              <div className="flex gap-4">
                <div
                  onClick={() => setQuality("standard")}
                  className={`flex-1 p-4 border rounded-xl cursor-pointer ${
                    quality === "standard"
                      ? "border-yellow-500"
                      : "border-[var(--border-color)]"
                  }`}
                >
                  Standard
                </div>

                <div
                  onClick={() => setQuality("pro")}
                  className={`flex-1 p-4 border rounded-xl cursor-pointer ${
                    quality === "pro"
                      ? "border-blue-500"
                      : "border-[var(--border-color)]"
                  }`}
                >
                  Pro
                </div>
              </div>
            </div>

            {/* CREDITS */}
            <div className="flex justify-between items-center border border-[var(--border-color)] rounded-lg p-4 bg-[var(--bg-primary)]">
              <div>
                <p>Credits: <span className="text-yellow-500">10</span></p>
                <p className="text-xs text-[var(--text-secondary)]">
                  Expires in 5 days
                </p>
              </div>

              <button className="px-4 py-2 text-black bg-yellow-500 rounded-md">
                Buy More
              </button>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <p>
                I agree to the{" "}
                <span className="text-yellow-500">Terms</span> &
                <span className="text-yellow-500"> Privacy</span>
              </p>
            </div>

            {/* BUTTON */}
            <button className="w-full py-3 font-medium text-black bg-yellow-600 rounded-lg hover:bg-yellow-500">
              Generate Logo
            </button>

          </div>

          {/* RIGHT */}
          <div className="border border-[var(--border-color)] rounded-xl bg-[var(--bg-primary)] flex flex-col items-center justify-center h-[500px]">
            <ImageIcon className="text-[var(--text-secondary)] mb-3" size={40} />
            <p className="text-[var(--text-secondary)]">
              Your AI-generated logo will appear here
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}