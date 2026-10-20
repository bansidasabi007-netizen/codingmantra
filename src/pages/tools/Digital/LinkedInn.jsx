import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function LinkedInn() {
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
    question: "What kind of topics work best?",
    answer:
      "This tool works best with professional topics such as company milestones, new product launches, industry trend analysis, hiring announcements, or sharing key takeaways from an article.",
  },
  {
    question: 'Can I use this for my personal profile and company page?',
    answer:
      "Yes, absolutely. The generator is perfect for creating content for both your personal brand as a professional and for your official company page updates.",
  },
  {
    question: 'How many hashtags should I use on LinkedIn?',
    answer:
      "Best practices for LinkedIn suggest using a smaller number of highly relevant hashtags. Aim for 3 to 5 tags that accurately describe the core topic of your post. Our AI is configured to follow this best practice.",
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
LinkedIn Post Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
LinkedIn Post Generator          </h1>

            <p
              className="max-w-2xl mx-auto mt-5 text-xl leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Create polished, professional images and text for your LinkedIn feed in just a few clicks.
</p>
          </div>
</section>


<section className="max-w-5xl mx-auto mt-10">

  <div
    className="
      rounded-[24px]
      border
      border-zinc-200
      dark:border-[#1c1f27]
      bg-white
      dark:bg-[#12131a]
      p-5
      sm:p-6
    "
  >

    {/* HEADER */}
    <div>

      <div className="flex items-center gap-3">

        <div className="text-[#f4a000]">
          <i className="ri-linkedin-box-fill text-[28px]" />
        </div>

        <h2
          className="
            text-[28px]
            sm:text-[36px]
            font-[800]
            tracking-[-1px]
            text-zinc-900
            dark:text-white
          "
        >
          LinkedIn Post Designer
        </h2>
      </div>

      <p
        className="
          mt-3
          text-[14px]
          sm:text-[15px]
          text-zinc-600
          dark:text-zinc-400
        "
      >
        Create professional posts by providing your logo and company info.
      </p>
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
          text-[15px]
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
          text-[15px]
          font-[700]
          text-zinc-900
          dark:text-white
        "
      >
        Bulk Posts
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_430px] gap-8 mt-8">

      {/* LEFT SIDE */}
      <div className="space-y-6">

        {/* POST DETAILS */}
        <div
          className="
            rounded-[20px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-white
            dark:bg-[#15161d]
            p-5
          "
        >

          <h3
            className="
              text-[20px]
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Post Details
          </h3>

          <div className="mt-8 space-y-5">

            {/* LANGUAGE */}
            <div>

              <label
                className="
                  block
                  mb-2.5
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Language
              </label>

              <select
                className="
                  w-full
                  h-[48px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  px-4
                  outline-none
                  text-[14px]
                  text-zinc-900
                  dark:text-white
                "
              >
                <option>English</option>
              </select>
            </div>

            {/* TOPIC */}
            <div>

              <label
                className="
                  block
                  mb-2.5
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Topic / Announcement
              </label>

              <textarea
                rows={4}
                placeholder="e.g., Announcing our new Q3 feature update for our SaaS product."
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
                  text-[14px]
                  leading-[1.7]
                  text-zinc-900
                  dark:text-white
                  placeholder:text-zinc-500
                "
              />

              <button
                className="
                  mt-4
                  h-[44px]
                  px-5
                  rounded-[10px]
                  bg-[#8d6611]
                  hover:bg-[#a37611]
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  font-[700]
                  text-black
                  transition-all
                "
              >
                <i className="ri-magic-line text-[18px]" />
                Generate Text with AI
              </button>
            </div>

            {/* HEADLINE */}
            <div>

              <label
                className="
                  block
                  mb-2.5
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Headline
              </label>

              <input
                type="text"
                defaultValue="New Feature Announcement"
                className="
                  w-full
                  h-[48px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#23262f]
                  bg-zinc-50
                  dark:bg-black
                  px-4
                  outline-none
                  text-[14px]
                  text-zinc-900
                  dark:text-white
                "
              />
            </div>

            {/* BODY */}
            <div>

              <label
                className="
                  block
                  mb-2.5
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Body Text
              </label>

              <textarea
                rows={4}
                defaultValue="We are excited to launch a new feature that will revolutionize your workflow. Learn more on our blog."
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
                  text-[14px]
                  leading-[1.7]
                  text-zinc-900
                  dark:text-white
                "
              />
            </div>

            {/* HASHTAGS */}
            <div>

              <label
                className="
                  block
                  mb-2.5
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Hashtags
              </label>

              <textarea
                rows={3}
                defaultValue="#productupdate #innovation #saas"
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
                  text-[14px]
                  leading-[1.7]
                  text-zinc-900
                  dark:text-white
                "
              />
            </div>

            {/* DIVIDER */}
            <div
              className="
                border-t
                border-zinc-200
                dark:border-[#23262f]
              "
            />

            {/* CTA */}
            <div>

              <label
                className="
                  block
                  mb-3
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Call to Action (Same for all posts)
              </label>

              <div className="grid grid-cols-[1fr_84px_150px] gap-3">

                <input
                  type="text"
                  defaultValue="Learn More"
                  className="
                    h-[48px]
                    rounded-[10px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    px-4
                    outline-none
                    text-[14px]
                    text-zinc-900
                    dark:text-white
                  "
                />

                <button
                  className="
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
                    gap-2
                    text-[14px]
                    font-[700]
                    text-zinc-900
                    dark:text-white
                  "
                >
                  <i className="ri-magic-line text-[16px]" />
                  AI
                </button>

                <select
                  className="
                    h-[48px]
                    rounded-[10px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    px-4
                    outline-none
                    text-[14px]
                    font-[600]
                    text-zinc-900
                    dark:text-white
                  "
                >
                  <option>ExternalLink</option>
                </select>
              </div>
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
            dark:bg-[#15161d]
            p-5
          "
        >

          <h3
            className="
              text-[20px]
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

          {/* LOGO */}
          <div>

            <label
              className="
                block
                mb-3
                text-[14px]
                font-[600]
                text-zinc-700
                dark:text-zinc-300
              "
            >
              Logo (Optional)
            </label>

            <button
              className="
                w-full
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
                text-[14px]
                font-[700]
                text-zinc-900
                dark:text-white
              "
            >
              <i className="ri-upload-line text-[18px]" />
              Select Logo
            </button>
          </div>

          {/* THEMES */}
          <div className="mt-8">

            <label
              className="
                block
                mb-4
                text-[14px]
                font-[600]
                text-zinc-700
                dark:text-zinc-300
              "
            >
              Color Themes
            </label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {[
                "Corporate Blue",
                "Modern Tech",
                "Executive Gray",
                "Trustworthy Green",
                "Bold Charcoal",
                "Professional Purple",
                "Minimalist Slate",
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
                      leading-[1.3]
                      font-[600]
                      text-zinc-900
                      dark:text-white
                    "
                  >
                    {theme}
                  </div>

                  <div className="flex items-center gap-2 mt-3">

                    <div className="w-[16px] h-[16px] rounded-full bg-blue-600" />
                    <div className="w-[16px] h-[16px] rounded-full bg-white border" />
                    <div className="w-[16px] h-[16px] rounded-full bg-zinc-700" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* COLORS */}
          <div className="grid grid-cols-3 gap-4 mt-8">

            {[
              "Background",
              "Primary",
              "Text",
            ].map((item, index) => (
              <div key={index}>

                <div
                  className="
                    mb-2
                    text-[13px]
                    font-[600]
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {item}
                </div>

                <div
                  className="
                    h-[44px]
                    rounded-[10px]
                    border
                    border-zinc-200
                    dark:border-[#23262f]
                    bg-zinc-50
                    dark:bg-black
                    p-2
                  "
                >
                  <div
                    className={`
                      h-full
                      rounded-[4px]

                      ${
                        index === 0
                          ? "bg-white"
                          : index === 1
                          ? "bg-blue-600"
                          : "bg-zinc-700"
                      }
                    `}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* DIVIDER */}
          <div
            className="
              my-8
              border-t
              border-zinc-200
              dark:border-[#23262f]
            "
          />

          {/* TEXT LAYOUT */}
          <div>

            <div className="flex items-center gap-3">

              <i
                className="
                  ri-align-left
                  text-[20px]
                  text-zinc-900
                  dark:text-white
                "
              />

              <h4
                className="
                  text-[22px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Text Layout
              </h4>
            </div>

            {/* ALIGN */}
            <div className="grid grid-cols-3 gap-3 mt-6">

              {[
                "ri-align-left",
                "ri-align-center",
                "ri-align-right",
              ].map((icon, index) => (
                <button
                  key={index}
                  className="
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
                    text-zinc-900
                    dark:text-white
                  "
                >
                  <i className={`${icon} text-[20px]`} />
                </button>
              ))}
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
                  Headline Size: 70px
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
                  Body Size: 32px
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
                  text-[14px]
                  font-[700]
                  text-zinc-900
                  dark:text-white
                "
              >
                Template
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {[
                  "Simple",
                  "Split",
                  "Overlay",
                  "Banner",
                ].map((template, index) => (
                  <button
                    key={index}
                    className={`
                      h-[48px]
                      rounded-[10px]
                      border
                      text-[14px]
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
      <div className="space-y-4">

        {/* PREVIEW */}
        <div
          className="
            rounded-[18px]
            overflow-hidden
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-[#e9ecef]
          "
        >

          <div className="p-10">

            <div className="text-[24px] font-[800] text-[#0a66c2]">
              New Feature
            </div>

            <div className="mt-4 text-[20px] font-[700] text-[#0a66c2]">
              Announcement
            </div>

            <p
              className="
                mt-8
                text-[24px]
                leading-[1.5]
                font-[700]
                text-[#222]
              "
            >
              We are excited to launch a new feature that will
              revolutionize your workflow. Learn more on our blog.
            </p>
          </div>

          <div
            className="
              h-[64px]
              bg-[#0a66c2]
              flex
              items-center
              justify-center
              gap-3
              text-[24px]
              font-[700]
              text-white
            "
          >
            <i className="ri-external-link-line text-[26px]" />
            Learn More
          </div>
        </div>

        {/* DOWNLOAD */}
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
            text-[15px]
            font-[700]
            text-black
            transition-all
          "
        >
          <i className="ri-download-line text-[18px]" />
          Download Post
        </button>

        {/* CONTENT CARD */}
        <div
          className="
            rounded-[16px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-zinc-50
            dark:bg-black
            overflow-hidden
          "
        >

          <div className="p-4">

            <div className="flex items-start justify-between gap-3">

              <h4
                className="
                  text-[18px]
                  font-[700]
                  text-[#f4a000]
                "
              >
                New Feature Announcement
              </h4>

              <button className="text-zinc-500">
                <i className="ri-file-copy-line text-[18px]" />
              </button>
            </div>

            <p
              className="
                mt-4
                text-[15px]
                leading-[1.8]
                text-zinc-700
                dark:text-zinc-300
              "
            >
              We are excited to launch a new feature that will
              revolutionize your workflow. Learn more on our blog.
            </p>
          </div>

          <div
            className="
              border-t
              border-zinc-200
              dark:border-[#23262f]
              p-4
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                text-[14px]
                text-[#f4a000]
              "
            >
              #productupdate #innovation #saas
            </div>

            <button className="text-zinc-500">
              <i className="ri-file-copy-line text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="max-w-5xl mx-auto mt-12">

  <div>

    {/* TITLE */}
    <h2
      className="
        text-[24px]
        sm:text-[30px]
        font-[500]
        leading-[1.2]
        text-[#f4a000]
      "
    >
      Why Content on LinkedIn Needs a Different Approach
    </h2>

    {/* CONTENT */}
    <div
      className="
        mt-2
        space-y-1.5
        text-[13px]
        sm:text-[14px]
        leading-[1.6]
        text-zinc-700
        dark:text-zinc-300
      "
    >

      <p>
        LinkedIn is not just another social network; it's a professional
        platform where content is judged on its value, authority, and relevance.
        Unlike other platforms, successful LinkedIn content is less about
        entertainment and more about providing industry insights, sharing
        company news, and building professional credibility.
      </p>

      <p
        className="
          pt-1
          font-[500]
          text-zinc-900
          dark:text-white
        "
      >
        How This Tool Helps You Create Professional Content
      </p>

      <p>
        Our LinkedIn Post Generator is specifically designed to meet the demands
        of a professional audience:
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Professional Tone:
        </span>{" "}
        The AI is prompted to generate headlines and body text that are
        authoritative, insightful, and suitable for a business context.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Optimized Image Size:
        </span>{" "}
        Images are generated in the 1200x628 pixel format, which is the
        recommended size for in-feed shared images on LinkedIn for optimal
        display.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Corporate Branding:
        </span>{" "}
        The tool automatically extracts colors from your company logo to create
        a consistent, branded look for all your visual content.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Relevant Hashtags:
        </span>{" "}
        The AI suggests 3-5 professional hashtags to increase the reach of your
        post within your industry.
      </p>
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
          title: "Describe",
          desc: `what you want to post about in What's the topic? (e.g., 'new product launch').`,
        },
        {
          number: 2,
          title: "Select",
          desc: `the Post Type that fits your message — Announcement, Tip, Question, or Story.`,
        },
        {
          number: 3,
          title: "Configure",
          desc: `the Hashtag Count (3-5 recommended for LinkedIn).`,
        },
        {
          number: 4,
          title: "Add",
          desc: `optional context in Additional Context to help the AI personalize the content.`,
        },
        {
          number: 5,
          title: "Click",
          desc: `Generate Post to create your professional LinkedIn content.`,
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

export default LinkedInn;


 