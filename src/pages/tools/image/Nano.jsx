import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Upload, Image as ImageIcon, ChevronDown } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";

const steps = [
  {
    title: "Upload",
    desc: "one or more reference images using the Multiple Images upload field — you can combine people, products, backgrounds, or art styles.",
  },
  {
    title: "Label",
    desc: "each uploaded image using the Label field (e.g., 'person', 'background', 'cat', 'art style') so you can reference them in your prompt.",
  },
  {
    title: "Add hints",
    desc: "in the Hint field per image for specific details (e.g., 'red dress', 'sunset lighting', 'oil painting texture').",
  },
  {
    title: "Select",
    desc: "a style from Popular Style Instructions or write a custom Prompt describing what you want the AI to create.",
  },
  {
    title: "Reference your labels",
    desc: "in the prompt — e.g., 'Put the person from image 1 in front of the background from image 2, in the style of image 3.'",
  },
  {
    title: "Choose",
    desc: "your Output Shape based on where you plan to use the image.",
  },
  {
    title: "Optionally",
    desc: "upload a Style Reference Image for additional style guidance.",
  },
  {
    title: "Click Generate",
    desc: "and download your AI-created composite.",
  },
];

const practices = [
  {
    title: "Label each reference image clearly",
    desc: "using labels like 'person', 'background', 'style reference' helps you write precise prompts and helps the AI understand each image's role.",
  },
  {
    title: "Use hints for specific details",
    desc: "'smiling', 'soft lighting', 'watercolor texture' gives the AI granular control over how to interpret each reference.",
  },
  {
    title: "Combine multiple references for composites",
    desc: "this tool excels at merging subjects from different images. Upload a person + a background + a style reference for best results.",
  },
  {
    title: "Be explicit in your prompts",
    desc: "'Draw the person from image 1 standing on the beach from image 2' is far better than 'combine the images.'",
  },
  {
    title: "Start with high-quality source images",
    desc: "the AI cannot add detail that doesn't exist in your references.",
  },
  {
    title: "Use Popular Style Instructions as a starting point",
    desc: "they're professionally crafted prompts that you can customize further in the Prompt field.",
  },
  {
    title: "Remove unnecessary reference images",
    desc: "extra images that aren't referenced in your prompt can confuse the AI and dilute the result.",
  },
];


const data = [
  "Hollywood Sign",
  "Action Figure",
  "Pet Action Figure",
  "Studio Ghibli Style",
  "Chibi Emoji Pack",
  "Funko Pop Figure",
  "3D Hologram",
  "16-Bit Game Character",
  "More 1",
  "More 2",
  "More 3",
  "More 4",
];

function Nano() {
  const navigate = useNavigate();
  
  const [showAdvanced, setShowAdvanced] = useState(false);

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };
    const [advancedOpen, setAdvancedOpen] = useState(true);
  const [quality, setQuality] = useState("standard");
  const [page, setPage] = useState(0);

  const cardsPerPage = 8; // 2 row × 4
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />

  
        <div className="max-w-6xl px-4 mx-auto my-6">
          
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
                    Nano Banana Image Editor (AI)

          
                      </span>
                    </div>
                  </div>
                </div>
                
      <main className="max-w-5xl px-4 pb-20 mx-auto mt-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
Nano Banana Image Editor (AI)
          </h1>
          <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
       Combine multiple reference images with a text prompt to generate unique AI creations.
          </p>
        </div>

         <div className="max-w-[1400px] mx-auto mt-10 bg-[#17171c] border border-[#2a2a2e] rounded-2xl p-6">

      {/* HEADER */}
      <h2 className="flex items-center gap-2 mb-6 text-lg font-semibold">
        ✨ Image Editor
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Upload */}
          <div>
            <p className="mb-2 text-sm">Reference Images (0/5)</p>

            <div className="border border-dashed border-[#2a2a2e] rounded-xl w-40 h-40 flex flex-col items-center justify-center gap-3">
              <Upload size={18} />
              <p className="text-sm">Upload</p>

              <button className="text-xs border border-[#2a2a2e] px-3 py-1 rounded-md">
                Gallery
              </button>
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <p className="mb-2 text-sm">
              Popular Style Instructions (Optional)
            </p>

            <div className="flex gap-3">
              <select className="w-full bg-black border border-[#2a2a2e] px-3 py-2 rounded-md text-sm">
                <option>Select a Category...</option>
              </select>

              <select className="w-full bg-black border border-[#2a2a2e] px-3 py-2 rounded-md text-sm">
                <option>Select an Instruction...</option>
              </select>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <p className="mb-2 text-sm">
              Describe the image you want to create
            </p>
            <textarea
              rows={4}
              className="w-full bg-black border border-[#2a2a2e] rounded-md p-3 text-sm"
              placeholder="e.g., Create a realistic photo of..."
            />
          </div>

          {/* Refine Button */}
          <button className="w-full py-2 border border-[#2a2a2e] rounded-md text-sm text-gray-400">
            ✨ Refine Prompt with AI
          </button>

          {/* ADVANCED */}
          <div className="border border-[#2a2a2e] rounded-lg">
            <div
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
            >
              <span className="text-sm">⚙ Advanced Options</span>
              <ChevronDown className={`${advancedOpen ? "rotate-180" : ""}`} />
            </div>

            {advancedOpen && (
              <div className="border-t border-[#2a2a2e] p-4 space-y-4">

                {/* Output */}
                <div>
                  <p className="mb-1 text-xs text-gray-400">Output Shape</p>
                  <select className="w-full bg-black border border-[#2a2a2e] p-2 rounded-md text-sm">
                    <option>1:1</option>
                  </select>
                </div>

                {/* Image Upload */}
                <div>
                  <p className="mb-2 text-xs text-gray-400">
                    Style Reference Image (Optional)
                  </p>

                  <div className="flex gap-3 border border-[#2a2a2e] rounded-lg p-3 bg-black">
                    <div className="flex items-center justify-center bg-gray-800 rounded-md w-14 h-14">
                      <ImageIcon />
                    </div>

                    <button className="px-4 py-2 border border-[#2a2a2e] rounded-md text-sm flex items-center gap-2">
                      <Upload size={16} /> Upload
                    </button>

                    <button className="px-4 py-2 border border-[#2a2a2e] rounded-md text-sm">
                      Cloud Gallery
                    </button>
                  </div>
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
                    : "border-[#2a2a2e]"
                }`}
              >
                ⚡ Standard
                <p className="text-xs text-gray-400">10 credits</p>
              </div>

              <div
                onClick={() => setQuality("pro")}
                className={`flex-1 p-4 border rounded-xl cursor-pointer ${
                  quality === "pro"
                    ? "border-blue-500"
                    : "border-[#2a2a2e]"
                }`}
              >
                ✨ Pro
                <p className="text-xs text-gray-400">40 credits</p>

                <div className="flex gap-2 mt-2 text-[10px]">
                  <span className="px-2 bg-blue-600 rounded">BEST 4K</span>
                  <span className="px-2 bg-purple-600 rounded">MULTI-LANG</span>
                  <span className="px-2 bg-green-600 rounded">ADVANCED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="flex justify-between items-center border border-[#2a2a2e] rounded-lg p-4">
            <div>
              <p className="text-sm">
                Credits: <span className="text-yellow-500">10</span>
              </p>
              <p className="text-xs text-gray-400">Expires in 5 days</p>
            </div>

            <button className="px-4 py-2 text-black bg-yellow-500 rounded-md">
              Buy More
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <p>
              I agree to <span className="text-yellow-500">Terms</span> &{" "}
              <span className="text-yellow-500">Privacy</span>
            </p>
          </div>

          {/* Generate */}
          <button className="w-full py-3 text-black bg-yellow-600 rounded-lg">
            ✨ Generate Image (10 credits)
          </button>

        </div>

        {/* RIGHT */}
        <div className="h-[420px] border border-[#2a2a2e] rounded-xl flex flex-col items-center justify-center bg-black">
          <ImageIcon size={40} className="mb-3 text-gray-500" />
          <p className="text-sm text-gray-400">
            Your AI-generated creation will appear here
          </p>
        </div>

      </div>
    </div>
    </main>
   <div className=" bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Inspiration Gallery</h2>
        <button className="px-3 py-1 text-sm border rounded">
          View All
        </button>
      </div>

      <div className="relative overflow-hidden">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
        >
          <ChevronRight size={18} />
        </button>

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const start = pageIndex * cardsPerPage;
const items = data.slice(start, start + cardsPerPage);


while (items.length < cardsPerPage) {
items.push("Empty");
}
            return (
              <div key={pageIndex} className="min-w-full">

                {/* GRID 2 ROW × 4 */}
<div className="grid grid-cols-4 gap-4">
                  {items.map((item, i) => (
                    <div key={i} className="space-y-2">

                      <div className="h-[180px] rounded-xl bg-gray-700" />

                      <p className="text-xs text-center text-[var(--text-secondary)]">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>

       <div className="max-w-5xl mx-auto mt-16">

      {/* HEADER */}
      <h2 className="mb-4 text-2xl font-bold text-yellow-500">
        Unleash Creativity with Multi-Modal AI
      </h2>

      <p className="text-sm text-[var(--text-secondary)] max-w-3xl mb-10">
        The Nano Banana Image Editor leverages a powerful multi-modal AI model that can understand both images and text simultaneously.
        This allows you to provide it with a rich context for your creations.
      </p>

      {/* STEP SECTION */}
      <h3 className="flex items-center gap-2 mb-6 text-xl font-semibold text-yellow-500">
        <span className="flex items-center justify-center w-6 h-6 text-sm text-black bg-yellow-500 rounded-full">1</span>
        Step-by-Step: How to Use This Tool
      </h3>

      <div className="relative pl-10 border-l border-[var(--border-color)] space-y-6">

        {steps.map((step, i) => (
          <div key={i} className="relative">

            {/* NUMBER */}
            <div className="absolute -left-[22px] top-2 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-semibold">
              {i + 1}
            </div>

            {/* CARD */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5">
              <h4 className="mb-1 font-semibold">{step.title}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
            </div>

          </div>
        ))}

      </div>

      {/* BEST PRACTICES */}
      <h3 className="flex items-center gap-2 mt-16 mb-6 text-xl font-semibold text-yellow-500">
        💡 Best Practices for Best Results
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        {practices.map((item, i) => (
          <div
            key={i}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5 flex gap-3"
          >
            <div className="flex items-center justify-center w-5 h-5 mt-1 text-xs text-yellow-500 border-2 border-yellow-500 rounded-full">
              ✓
            </div>

            <div>
              <h4 className="mb-1 font-semibold">{item.title}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

    </div>

      <Footer />
    </div>
  );
}

export default Nano;