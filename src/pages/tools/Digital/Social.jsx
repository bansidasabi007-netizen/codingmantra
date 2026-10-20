import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Social() {
const navigate = useNavigate()

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
const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  {
    question: "What is the best type of logo to upload?",
    answer:
      "For best results with color extraction, a simple logo with clear, distinct colors is ideal. A logo with a transparent background (in PNG format) will also blend more seamlessly into the designs.",
  },
  {
    question: 'What size is the final image?',
    answer:
      "The generated image is a square (1080x1080 pixels), which is the optimal size for posts on platforms like Instagram and Facebook.",
  },
  {
    question: 'Are my logo and information saved on your server?',
    answer:
      "No. Your logo is processed directly in your browser to extract colors and is never uploaded to our servers. The business information you provide is sent to our AI model to generate text but is not stored.",
  },


];
  
const obfuscationOptionsData = [
  {
    key: "compact",
    label: "Compact Code",
    enabled: true,
  },
  {
    key: "selfDefending",
    label: "Self Defending",
    enabled: false,
  },
  {
    key: "renameGlobals",
    label: "Rename Globals",
    enabled: true,
  },
  {
    key: "controlFlow",
    label: "Control Flow Flattening",
    enabled: false,
  },
  {
    key: "deadCode",
    label: "Dead Code Injection",
    enabled: false,
  },
];

const [options, setOptions] = useState(
  obfuscationOptionsData
);

const [encoding, setEncoding] = useState("");

const toggleOption = (key) => {
  setOptions((prev) =>
    prev.map((item) =>
      item.key === key
        ? { ...item, enabled: !item.enabled }
        : item
    )
  );
};

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar changeTheme={changeTheme} />

      <section className="w-full px-4 pt-6">
  <div
    className="px-5 py-4 mx-auto border max-w-7xl rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/tools/digital");
          }
        }}
        className="transition hover:opacity-80"
        style={{ color: "var(--text-secondary)" }}
      >
        <ArrowLeft size={18} />
      </button>
      {/* HOME */}
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Home
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* CATEGORY */}
      <Link
        to="/tools/digital"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
      Digital Marketing

      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* CURRENT */}
      <span
        className="text-sm font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
Social Media Post Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
Social Media Post Generator            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Create stunning, on-brand promotional images for your social media channels in just a few clicks.
</p>
          </div>
</section>


<section className="max-w-5xl mx-auto mt-10">

{/* TOP HEADER */}
<div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

  {/* LEFT */}
  <div>

    <h1
      className="
        text-[28px]
        sm:text-[40px]
        leading-[1]
        font-[800]
        tracking-[-1.5px]
      "
    >
      <span className="text-[#f4a000]">Social</span>{" "}

      <span
        className="
          bg-gradient-to-r
          from-[#d4b49c]
          to-[#6f8cff]
          bg-clip-text
          text-transparent
        "
      >
        Media
      </span>{" "}

      <span
        className="
          bg-gradient-to-r
          from-[#cfcfcf]
          to-[#7f90ff]
          bg-clip-text
          text-transparent
        "
      >
        Post Generator
      </span>
    </h1>

    <p
      className="
        mt-2
        text-[14px]
        leading-[1.6]
        text-zinc-600
        dark:text-zinc-400
      "
    >
      Create professional social media graphics in seconds.
    </p>
  </div>

  {/* CREDITS */}
  <div
    className="
      rounded-[14px]
      border
      border-zinc-200
      dark:border-[#23262f]
      bg-white
      dark:bg-[#12131a]
      p-3.5
      min-w-[270px]
    "
  >
    <div className="flex items-center justify-between gap-4">

      <div className="flex items-start gap-3">

        <div className="mt-1 text-[#f4a000]">
          <i className="ri-bank-card-line text-[20px]" />
        </div>

        <div>

          <div
            className="
              text-[14px]
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Credits:{" "}

            <span
              className="
                text-[22px]
                font-[700]
                text-[#f4a000]
              "
            >
              0
            </span>
          </div>

          <div
            className="
              mt-1
              flex
              items-center
              gap-1
              text-[12px]
              text-red-500
            "
          >
            <i className="ri-error-warning-line" />
            Expired 19 days ago
          </div>
        </div>
      </div>

      <button
        className="
          h-[40px]
          px-4
          rounded-[10px]
          bg-[#f4a000]
          hover:bg-[#ffb41f]
          text-[14px]
          font-[700]
          text-black
          transition-all
        "
      >
        Buy More
      </button>
    </div>
  </div>
</div>

  {/* MAIN CARD */}
  <div
    className="
      mt-8
      rounded-[24px]
      border
      border-zinc-200
      dark:border-[#1c1f27]
      bg-white
      dark:bg-[#12131a]
      p-6
    "
  >

    {/* HEADER */}
    <div className="flex items-start gap-3">

      <div className="text-[#f4a000] pt-1">
        <i className="ri-share-line text-[26px]" />
      </div>

      <div>

        <h2
          className="
            text-[22px]
            sm:text-[30px]
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Post Designer
        </h2>

        <p
          className="
            mt-1
            text-[15px]
            text-zinc-600
            dark:text-zinc-400
          "
        >
          Create a marketing post by providing your logo and business details.
        </p>
      </div>
    </div>

    {/* TABS */}
    <div className="grid grid-cols-2 gap-4 mt-8">

      <button
        className="
          h-[50px]
          rounded-[12px]
          border-2
          border-[#f4a000]
          bg-black
          text-[16px]
          font-[700]
          text-white
        "
      >
        Single Post
      </button>

      <button
        className="
          h-[50px]
          rounded-[12px]
          border
          border-zinc-200
          dark:border-[#23262f]
          bg-zinc-50
          dark:bg-black
          text-[16px]
          font-[700]
          text-zinc-900
          dark:text-white
        "
      >
        Bulk Posts
      </button>
    </div>

    {/* CONTENT */}
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_430px] gap-8 mt-8">

      {/* LEFT SIDE */}
      <div className="space-y-8">

        {/* LOGO */}
        <div>

          <label
            className="
              block
              mb-3
              text-[16px]
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Logo (Optional)
          </label>

          <div
            className="
              rounded-[16px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-white
              dark:bg-[#12131a]
              p-4
            "
          >

            <div className="flex gap-4">

              <div
                className="
                  w-[92px]
                  h-[92px]
                  rounded-[12px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  justify-center
                  text-zinc-500
                "
              >
                <i className="ri-image-line text-[34px]" />
              </div>

              <button
                className="
                  flex-1
                  h-[48px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-[15px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                <i className="ri-upload-line text-[18px]" />
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* BOOST */}
        <div
          className="
            rounded-[18px]
            border
            border-dashed
            border-[#7a5a15]
            bg-[#241d14]
            px-6
            py-8
            text-center
          "
        >

          <div
            className="
              w-[64px]
              h-[64px]
              rounded-full
              bg-[#2a1c00]
              flex
              items-center
              justify-center
              text-[#f4a000]
              mx-auto
            "
          >
            <i className="ri-magic-line text-[32px]" />
          </div>

          <h3
            className="
              mt-5
              text-[24px]
              font-[700]
              text-white
            "
          >
            Boost AI Accuracy
          </h3>

          <p
            className="
              mt-3
              max-w-md
              mx-auto
              text-[15px]
              leading-[1.8]
              text-zinc-400
            "
          >
            Set up your Brand Context to automatically personalize AI
            results to your brand's voice, tone, and audience.
          </p>

          <button
            className="
              mt-6
              h-[46px]
              px-6
              rounded-[10px]
              bg-[#2f3340]
              hover:bg-[#3a3f4d]
              text-[15px]
              font-[700]
              text-white
              transition-all
            "
          >
            Setup Brand Context
          </button>
        </div>

        {/* POST DETAILS */}
        <div
          className="
            rounded-[20px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-white
            dark:bg-[#12131a]
            p-5
          "
        >

          <h3
            className="
              text-[28px]
              font-[700]
              mb-8
              text-zinc-900
              dark:text-white
            "
          >
            Post Details
          </h3>

          <div className="space-y-6">

            {[
              "Social Media Platform",
              "Engagement",
              "Language",
            ].map((item, index) => (
              <div key={index}>

                <label
                  className="
                    block
                    mb-3
                    text-[15px]
                    font-[700]
                    text-zinc-900
                    dark:text-white
                  "
                >
                  {item}
                </label>

                <select
                  className="
                    w-full
                    h-[50px]
                    rounded-[10px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    px-4
                    outline-none
                    text-zinc-900
                    dark:text-white
                  "
                >
                  <option>{item}</option>
                </select>
              </div>
            ))}

            <div>

              <label
                className="
                  block
                  mb-3
                  text-[15px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Target Audience
              </label>

              <input
                type="text"
                defaultValue="20-35 year old urban professionals"
                className="
                  w-full
                  h-[50px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  px-4
                  outline-none
                  text-zinc-900
                  dark:text-white
                "
              />
            </div>

            <div>

              <label
                className="
                  block
                  mb-3
                  text-[15px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Promotion Info
              </label>

              <textarea
                rows={4}
                placeholder="e.g., My business is offering a 20% discount..."
                className="
                  w-full
                  rounded-[12px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  p-4
                  resize-none
                  outline-none
                  text-zinc-900
                  dark:text-white
                "
              />

              <button
                className="
                  w-full
                  mt-4
                  h-[48px]
                  rounded-[10px]
                  bg-[#8d6611]
                  hover:bg-[#a37611]
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-[15px]
                  font-[700]
                  text-black
                  transition-all
                "
              >
                <i className="ri-magic-line text-[18px]" />
                Generate Text with AI
              </button>
            </div>
          </div>
        </div>

        {/* DESIGN & LAYOUT */}
        <div
          className="
            rounded-[20px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-white
            dark:bg-[#12131a]
            p-5
          "
        >

          <h3
            className="
              text-[28px]
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Design & Layout
          </h3>

          <div
            className="
              my-7
              border-t
              border-zinc-200
              dark:border-[#23262f]
            "
          />

          {/* BACKGROUND */}
          <div>

            <label
              className="
                block
                mb-3
                text-[15px]
                font-[600]
                text-zinc-700
                dark:text-zinc-300
              "
            >
              Background Image
            </label>

            <button
              className="
                w-full
                h-[46px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#23262f]
                bg-zinc-50
                dark:bg-black
                flex
                items-center
                justify-center
                gap-3
                text-[15px]
                font-[700]
                text-zinc-900
                dark:text-white
              "
            >
              <i className="ri-image-line text-[18px]" />
              Upload Background
            </button>
          </div>

          {/* THEMES */}
          <div className="mt-8">

            <h4
              className="
                text-[15px]
                font-[600]
                mb-4
                text-zinc-700
                dark:text-zinc-300
              "
            >
              Color Themes
            </h4>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">

              {[
                "Corporate Blue",
                "Modern Tech",
                "Luxury Gold",
                "Forest Green",
                "Royal Purple",
                "Minimalist Gray",
                "Midnight Mode",
                "Executive Gray",
              ].map((theme, index) => (
                <button
                  key={index}
                  className="
                    rounded-[12px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    p-3
                    text-left
                    hover:border-[#f4a00055]
                    transition-all
                  "
                >

                  <div
                    className="
                      text-[13px]
                      font-[600]
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {theme}
                  </div>

                  <div className="flex items-center gap-2 mt-3">

                    <div className="w-[16px] h-[16px] rounded-full bg-blue-500" />
                    <div className="w-[16px] h-[16px] rounded-full bg-white border" />
                    <div className="w-[16px] h-[16px] rounded-full bg-zinc-700" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* TEXT LAYOUT */}
          <div className="mt-10">

            <div className="flex items-center gap-3 mb-6">

              <i
                className="
                  ri-align-left
                  text-[22px]
                  text-zinc-900
                  dark:text-white
                "
              />

              <h4
                className="
                  text-[24px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Text Layout
              </h4>
            </div>

            <div className="grid grid-cols-3 gap-3">

              {[
                "ri-align-left",
                "ri-align-center",
                "ri-align-right",
              ].map((icon, index) => (
                <button
                  key={index}
                  className="
                    h-[50px]
                    rounded-[10px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    flex
                    items-center
                    justify-center
                    text-zinc-900
                    dark:text-white
                  "
                >
                  <i className={`${icon} text-[20px]`} />
                </button>
              ))}
            </div>

            {/* TOGGLE */}
            <div className="flex items-center gap-3 mt-7">

              <button
                className="
                  relative
                  w-[46px]
                  h-[26px]
                  rounded-full
                  bg-[#f4a000]
                "
              >
                <div
                  className="
                    absolute
                    top-[3px]
                    right-[3px]
                    w-[20px]
                    h-[20px]
                    rounded-full
                    bg-black
                  "
                />
              </button>

              <span
                className="
                  text-[16px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Show text on image
              </span>
            </div>

            {/* RANGE */}
            <div className="mt-8 space-y-7">

              <div>

                <div
                  className="
                    mb-3
                    text-[14px]
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  Headline Size: 100px
                </div>

                <input
                  type="range"
                  className="w-full accent-[#f4a000]"
                />
              </div>

              <div>

                <div
                  className="
                    mb-3
                    text-[14px]
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  Body Size: 40px
                </div>

                <input
                  type="range"
                  className="w-full accent-[#f4a000]"
                />
              </div>
            </div>

            {/* TEMPLATE */}
            <div className="mt-8">

              <label
                className="
                  block
                  mb-4
                  text-[15px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Template
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                {[
                  "Simple",
                  "Split",
                  "Overlay",
                  "Banner",
                  "Frame",
                ].map((template, index) => (
                  <button
                    key={index}
                    className={`
                      h-[48px]
                      rounded-[10px]
                      border
                      text-[15px]
                      font-[700]
                      transition-all

                      ${
                        index === 0
                          ? `
                            border-[#f4a000]
                            bg-[#f4a000]
                            text-black
                          `
                          : `
                            border-zinc-200
                            dark:border-[#23262f]
                            bg-zinc-50
                            dark:bg-black
                            text-zinc-900
                            dark:text-white
                          `
                      }
                    `}
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-5">

        <div
          className="
            rounded-[18px]
            overflow-hidden
            bg-[#dfe2e6]
            aspect-square
            flex
            items-center
            justify-center
            text-center
            p-8
          "
        >

          <div>

            <h2
              className="
                text-[56px]
                leading-[1]
                font-[800]
                text-[#005da8]
              "
            >
              Weekend Sale!
            </h2>

            <p
              className="
                mt-6
                text-[28px]
                leading-[1.4]
                font-[700]
                text-[#222]
              "
            >
              Get 20% off all items.
              <br />
              Limited time offer,
              <br />
              visit our store today!
            </p>
          </div>
        </div>

        <button
          className="
            w-full
            h-[52px]
            rounded-[10px]
            bg-[#f4a000]
            hover:bg-[#ffb41f]
            flex
            items-center
            justify-center
            gap-3
            text-[16px]
            font-[700]
            text-black
            transition-all
          "
        >
          <i className="ri-download-line text-[18px]" />
          Download Post
        </button>
      </div>
    </div>
  </div>
</section>

<section className="max-w-5xl mx-auto mt-14">

  <div>

    {/* HEADING */}
    <h2
      className="
        text-[30px]
        sm:text-[34px]
        leading-tight
        font-[500]
        text-[#f4a000]
        mb-2
      "
    >
Why Visual Content is Key for Social Media
    </h2>

    {/* CONTENT */}
    <div
      className="
        space-y-[2px]
        text-[14px]
        sm:text-[15px]
        leading-[1.6]
        text-zinc-700
        dark:text-zinc-300
      "
    >

      <p>
    In the fast-scrolling world of social media, text-only updates are easily missed. Eye-catching visual content is essential to stop the scroll, grab attention, and communicate your message effectively. A well-designed post not only looks professional but also significantly increases engagement, brand recognition, and clicks.
      </p>

      <p
        className="
          pt-[2px]
          font-[500]
          text-zinc-900
          dark:text-white
        "
      >
       How This Tool Empowers Your Business
      </p>

      <p>
       You don't need to be a graphic designer to create professional marketing materials. This tool simplifies the entire process:
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
 Automatic Branding:
        </span>{" "}
      When you upload your logo, the tool automatically extracts its primary colors to create a theme that matches your brand identity.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
       Creative Text Ideas:
        </span>{" "}
      Stuck on what to write? Our lightweight AI provides suggestions for catchy headlines and promotional text.

      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
        Professional Templates:
        </span>{" "}
      Choose from a variety of clean, modern templates designed for different types of promotions, like sales, new arrivals, or general announcements.
      </p>
      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
    Instant Creation: 
        </span>{" "}
 The entire image is generated instantly in your browser. No complex software or waiting required.  </p>
    </div>
  </div>
</section>


<section className="max-w-5xl mx-auto mt-14">

  {/* TITLE */}
  <div className="flex items-center gap-4 mb-8">

    {/* NUMBER */}
    <div
      className="
        min-w-[34px]
        h-[34px]
        rounded-full
        bg-[#2a1c00]
        flex
        items-center
        justify-center
        text-[#f4a000]
        text-[18px]
        font-[700]
      "
    >
      1
    </div>

    {/* TEXT */}
    <h2
      className="
        text-[28px]
        sm:text-[34px]
        leading-tight
        font-[600]
        text-[#f4a000]
      "
    >
      Step-by-Step: How to Use This Tool
    </h2>
  </div>

  {/* STEPS */}
  <div className="relative">

    {/* LINE */}
    <div
      className="
        absolute
        left-[19px]
        top-0
        bottom-0
        w-[1px]
        bg-zinc-200
        dark:bg-[#2a2d35]
      "
    />

    <div className="space-y-5">

      {[
        {
          number: 1,
          title: "Upload",
          desc: `your logo in Brand Logo (PNG with transparent background works best).`,
        },
        {
          number: 2,
          title: "Enter",
          desc: `your business name in Business Name.`,
        },
        {
          number: 3,
          title: "Add",
          desc: `a short tagline or slogan in Tagline (e.g., 'Quality you can trust').`,
        },
        {
          number: 4,
          title: "Describe",
          desc: `your offer or promotion in What are you promoting? (e.g., 'Summer sale 30% off').`,
        },
        {
          number: 5,
          title: "Select",
          desc: `the Post Type that fits your message — Sale, Announcement, or Tip.`,
        },
        {
          number: 6,
          title: "Pick",
          desc: `a theme color from Theme Color that matches your brand.`,
        },
        {
          number: 7,
          title: "Click",
          desc: `Generate Post to create your branded image.`,
        },
      ].map((step, index) => (
        <div
          key={index}
          className="relative flex gap-6 "
        >

          {/* LEFT */}
          <div className="relative z-10">

            <div
              className="
                w-[40px]
                h-[40px]
                rounded-full
                bg-[#f4a000]
                flex
                items-center
                justify-center
                text-black
                text-[18px]
                font-[700]
                shadow-[0_0_0_6px_rgba(0,0,0,1)]
              "
            >
              {step.number}
            </div>
          </div>

          {/* CARD */}
          <div
            className="
              flex-1
              rounded-[16px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-zinc-50
              dark:bg-[#14151c]
              px-5
              py-5
            "
          >

            <h3
              className="
                text-[16px]
                font-[700]
                mb-2
                text-zinc-900
                dark:text-white
              "
            >
              {step.title}
            </h3>

            <p
              className="
                text-[15px]
                leading-[1.7]
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="max-w-5xl mx-auto mt-14">

  {/* TITLE */}
  <div className="flex items-center gap-3 mb-8">

    <i className="ri-lightbulb-line text-[#f4a000] text-[28px]" />

    <h2
      className="
        text-[28px]
        sm:text-[34px]
        leading-tight
        font-[600]
        text-[#f4a000]
      "
    >
      Best Practices for Best Results
    </h2>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

    {[
      {
        title: "Use a transparent PNG logo",
        desc: "— it blends seamlessly into any design.",
      },
      {
        title: "Keep tagline short",
        desc: `— 3-5 words works best. The AI-generated text will fill in the details.`,
      },
      {
        title: "Match the post type to your message",
        desc: "— 'Sale' for promotions, 'Announcement' for news, 'Tip' for educational content.",
      },
      {
        title: "Choose brand-consistent colors",
        desc: "— the tool extracts your logo colors automatically if you want theme-based matching.",
      },
      {
        title: "Download in high resolution",
        desc: "— the 1080x1080 output is optimized for Instagram and Facebook feeds.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="
          rounded-[16px]
          border
          border-zinc-200
          dark:border-[#23262f]
          bg-zinc-50
          dark:bg-[#14151c]
          px-5
          py-5
        "
      >

        <div className="flex items-start gap-4">

          {/* ICON */}
          <div
            className="
              min-w-[32px]
              h-[32px]
              rounded-full
              flex
              items-center
              justify-center
              border
              border-[#f4a000]
              text-[#f4a000]
              mt-[2px]
            "
          >
            <i className="ri-check-line text-[16px]" />
          </div>

          {/* CONTENT */}
          <div>

            <h3
              className="
                text-[16px]
                font-[700]
                mb-1
                text-zinc-900
                dark:text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                text-[14px]
                leading-[1.7]
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* FAQ SECTION */}
  <div className="mt-14">

    <h3
      className="
        text-[28px]
        sm:text-[34px]
        font-[500]
        mb-4
        text-[#f4a000]
      "
    >
      Frequently Asked Questions (FAQs)
    </h3>

    {faqs.map((faq, index) => (
      <div
        key={index}
        className="
          border-b
          border-zinc-200
          dark:border-[#1d1f27]
        "
      >

        {/* QUESTION */}
        <button
          onClick={() =>
            setOpenFaq(openFaq === index ? null : index)
          }
          className="flex items-center justify-between w-full gap-4 py-5 text-left "
        >
          <span
            className="
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            {faq.question}
          </span>

          <i
            className={`
              ri-arrow-down-s-line
              text-[18px]
              transition-all
              duration-300
              text-zinc-500
              dark:text-zinc-400
              ${openFaq === index ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* ANSWER */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${
              openFaq === index
                ? "max-h-[220px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <p
            className="
              text-[13px]
              sm:text-[14px]
              leading-[1.7]
              pr-10
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="max-w-5xl mx-auto mt-14">

  <div
    className="
      rounded-[22px]
      border
      border-zinc-200
      dark:border-[#1c1f27]
      bg-white
      dark:bg-[#12131a]
      p-6
      lg:p-7
    "
  >

    {/* TITLE */}
    <h2
      className="
        text-[26px]
        sm:text-[34px]
        font-[700]
        leading-tight
        mb-7
        text-zinc-900
        dark:text-white
      "
    >
      More Tools in Digital Marketing Tools
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Brand Context Generator (AI)",
          icon: "ri-ai-generate",
          powerful: true,
        },
        {
          title: "VEO-3 Video Script Generator (AI)",
          icon: "ri-video-line",
        },
        {
          title: "WhatsApp Widget Generator",
          icon: "ri-message-2-line",
          powerful: true,
        },
        {
          title: "LinkedIn Post Generator (AI)",
          icon: "ri-file-list-2-line",
        },
        {
          title: "Hashtag Generator (AI)",
          icon: "ri-magic-line",
        },
        {
          title: "Ad Copy Generator (AI)",
          icon: "ri-bar-chart-grouped-line",
        },
        {
          title: "Email Subject Line Generator (AI)",
          icon: "ri-mail-line",
        },
        {
          title: "UTM Builder",
          icon: "ri-links-line",
        },
      ].map((tool, index) => (
        <button
          key={index}
          className="
            group
            rounded-[14px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-zinc-50
            dark:bg-black
            px-4
            py-4
            min-h-[82px]
            flex
            items-center
            justify-between
            gap-4
            hover:border-[#f4a00055]
            transition-all
          "
        >

          {/* LEFT */}
          <div className="flex items-center min-w-0 gap-4">

            {/* ICON */}
            <div
              className="
                min-w-[38px]
                h-[38px]
                rounded-full
                bg-[#2a1c00]
                flex
                items-center
                justify-center
                text-[#f4a000]
              "
            >
              <i className={`${tool.icon} text-[17px]`} />
            </div>

            {/* TEXT */}
            <div className="min-w-0 text-left">

              <div className="flex flex-wrap items-center gap-2">

                <h3
                  className="
                    text-[15px]
                    font-[700]
                    leading-[1.5]
                    text-zinc-900
                    dark:text-white
                  "
                >
                  {tool.title}
                </h3>

                {/* BADGE */}
                {tool.powerful && (
                  <span
                    className="
                      h-[24px]
                      px-3
                      rounded-full
                      bg-[#f4a000]
                      flex
                      items-center
                      justify-center
                      text-[12px]
                      font-[700]
                      text-black
                      shrink-0
                    "
                  >
                    Powerful
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* ARROW */}
          <div
            className="transition-all shrink-0 text-zinc-500 dark:text-zinc-400 group-hover:translate-x-1"
          >
            <i className="ri-arrow-right-line text-[20px]" />
          </div>
        </button>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default Social;


 