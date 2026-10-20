import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";
import { RiSparkling2Line, RiUploadCloud2Line, RiImageLine, RiAddLine, RiUserLine, RiUpload2Line, RiImage2Line, RiSettings3Line, RiArrowDownSLine, RiImageAddLine, RiTimeLine, RiCheckLine, RiLoginBoxLine, } from "react-icons/ri";
import { RiLightbulbLine,} from "react-icons/ri";
import {RiArrowRightLine, RiSearchLine, } from "react-icons/ri";


const toolsData = [
  { name: "Product Photography (AI)", icon: "ri-camera-line", isPowerful: true },
  { name: "Jewelry Try-On (AI)", icon: "ri-sparkling-2-line", isPowerful: true },
  { name: "Jewellery Rate Poster (AI)", icon: "ri-magic-line", isPowerful: true },
  { name: "Festival Post Generator (AI)", icon: "ri-calendar-line", isPowerful: true },
  { name: "Product Try-On (AI)", icon: "ri-t-shirt-line", isPowerful: true },
  { name: "Apparel Try-On (AI)", icon: "ri-user-smile-line", isPowerful: true },
  { name: "Sketch to Real (AI)", icon: "ri-pen-nib-line", isPowerful: true },
  { name: "AI Logo Creator", icon: "ri-pentagon-line", isPowerful: true },
  { name: "Professional Photography Editor (AI)", icon: "ri-image-edit-line", isPowerful: true },
  { name: "Nano Banana Image Editor (AI)", icon: "ri-image-line", isPowerful: true },
  { name: "YouTube Thumbnail Generator (AI)", icon: "ri-youtube-line", isPowerful: false },
  { name: "Baby Milestone Generator (AI)", icon: "ri-emotion-happy-line", isPowerful: false },
  { name: "Passport Photo Creator (AI)", icon: "ri-profile-line", isPowerful: false },
  { name: "Image Upscaler", icon: "ri-zoom-in-line", isPowerful: true },
  { name: "Image Size Reducer", icon: "ri-aspect-ratio-line", isPowerful: false },
  { name: "Image Format Converter", icon: "ri-file-transfer-line", isPowerful: false },
];

function Jewellery() {
  // STATES
const [selectedModel, setSelectedModel] = useState("Flash");
const [selectedResolution, setSelectedResolution] = useState("4K");
  const [showAdvanced, setShowAdvanced] = useState(false);
const navigate = useNavigate();
  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };
  const faqs = [
  {
    question: "What can I create with the Jewellery All-in-One tool?",
    answer:
      "You can generate jewellery try-on images, product photography, festival creatives, daily rate posters, branded marketing visuals, and multi-product compositions using a single workflow.",
  },

  {
    question: "How is this different from the individual jewelry tools?",
    answer:
      "This combines multiple jewellery AI tools into one interface, so you don’t need to switch between separate pages for try-on, posters, product shots, or branding.",
  },

  {
    question:
      "Can I add my shop logo and branding to the generated images?",
    answer:
      "Yes. You can upload your logo, add marketing text, choose logo placement, and create branded creatives ready for social media or WhatsApp promotions.",
  },

  {
    question:
      "Is this tool suitable for daily rate poster generation?",
    answer:
      "Yes. It is designed for jewellers who regularly create gold and silver rate posters, festive banners, and promotional creatives with fast turnaround.",
  },
];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb - સ્ક્રીનશોટ મુજબ ડાર્ક ગ્રે બેકગ્રાઉન્ડ */}
<div className="max-w-6xl px-4 mx-auto my-6">

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
        Jewellery All In One
      </span>

    </div>

  </div>

</div>

<main className="max-w-5xl px-4 mx-auto mt-12">

  {/* Header */}
  <div className="mb-12 text-center">

    <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
      Jewellery All In One
    </h1>

    <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
      Upload your jewelry and a model/product image to generate stunning try-on visuals.
    </p>

  </div>

{/* MAIN WRAPPER */}
<div className="max-w-6xl px-4 pb-20 mx-auto">

  {/* MAIN CARD */}
  <div className="
    rounded-2xl
    border border-[var(--border-color)]
    bg-[#FAFAFA] dark:bg-[#17171C]
    overflow-hidden
  ">

    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%]">

      {/* LEFT SIDE */}
      <div className="
        p-6 lg:p-7
        border-r border-[var(--border-color)]
      ">

        {/* HEADER */}
        <div className="mb-6">

          <h2 className="
            flex items-center gap-3
            text-[20px]
            font-bold
            text-[var(--text-primary)]
          ">

            <RiSparkling2Line className="text-[#F3A412] text-[24px]" />
            Jewellery All-In-One Generator

          </h2>

          <p className="
            mt-2
            text-[15px]
            text-[var(--text-secondary)]
          ">

            Upload jewelry and a model/product image to generate stunning try-on visuals.

          </p>

        </div>

        {/* JEWELRY BATCH */}
        <div className="
          border border-[var(--border-color)]
          rounded-2xl
          p-5
          mb-5
          bg-[#FAFAFA] dark:bg-[#17171C]
        ">

          <div className="flex items-center gap-3 mb-4">

            <h3 className="
              text-[16px]
              font-bold
              text-[var(--text-primary)]
            ">

              Jewelry Batch 1 (0/4)

            </h3>

            <input
              type="text"
              placeholder="Batch Name (Optional)"
              className="
                h-[38px]
                px-4
                rounded-lg
                border border-[var(--border-color)]
                bg-white dark:bg-[#0E0E11]
                focus:border-[#F3A412]
                text-[14px]
                text-[var(--text-primary)]
                outline-none
                w-[200px]
              "
            />

          </div>

          {/* UPLOAD BOX */}
          <div className="
            w-[95px]
            border border-dashed border-[var(--border-color)]
            rounded-xl
            overflow-hidden
          ">

            <div className="
              h-[120px]
              flex flex-col items-center justify-center
              bg-black/10 dark:bg-white/[0.02]
            ">

              <div className="flex items-center justify-center w-10 h-10 mb-3 bg-black rounded-full dark:bg-black">

                <RiUploadCloud2Line className="text-[#F3A412] text-[18px]" />

              </div>

              <span className="
                text-[14px]
                font-semibold
                text-[var(--text-primary)]
              ">

                Upload

              </span>

            </div>

            <button className="
              h-[42px]
              w-full
              border-t border-[var(--border-color)]
              flex items-center justify-center gap-2
              text-[13px]
              font-semibold
              text-[var(--text-secondary)]
            ">

              <RiImageLine />
              Gallery

            </button>

          </div>

        </div>

        {/* ADD BATCH */}
        <button className="
          w-full
          h-[42px]
          rounded-xl
          border border-dashed border-[var(--border-color)]
          bg-[#111111] dark:bg-black
          text-white
          text-[15px]
          font-semibold
          flex items-center justify-center gap-2
          mb-5
        ">

          <RiAddLine className="text-[18px]" />
          Add Another Jewelry Batch

        </button>

        {/* MODEL IMAGE */}
        <div className="
          border border-[var(--border-color)]
          rounded-2xl
          p-5
          mb-5
          bg-[#FAFAFA] dark:bg-[#17171C]
        ">

          <h3 className="
            text-[16px]
            font-bold
            text-[var(--text-primary)]
            mb-4
          ">

            Model / Product Image (Optional)

          </h3>

          <div className="flex gap-4">

            <div className="
              w-[90px]
              h-[90px]
              rounded-xl
              border border-[var(--border-color)]
              flex items-center justify-center
              bg-black/5 dark:bg-white/[0.02]
            ">

              <RiUserLine className="
                text-[34px]
                text-[var(--text-secondary)]
              " />

            </div>

            <div className="flex flex-1 gap-3">

              <button className="
                flex-1
                h-[42px]
                rounded-xl
                border border-[var(--border-color)]
                bg-[#111111] dark:bg-black
                text-white
                text-[15px]
                font-semibold
                flex items-center justify-center gap-2
              ">

                <RiUpload2Line />
                Upload

              </button>

              <button className="
                flex-1
                h-[42px]
                rounded-xl
                border border-[var(--border-color)]
                bg-black/5 dark:bg-black
                text-[var(--text-secondary)]
                text-[15px]
                font-semibold
                flex items-center justify-center gap-2
              ">

                <RiImageLine />
                Cloud Gallery

              </button>

            </div>

          </div>

        </div>

        {/* LOGO */}
        <div className="
          border border-[var(--border-color)]
          rounded-2xl
          p-5
          mb-5
          bg-[#FAFAFA] dark:bg-[#17171C]
        ">

          <h3 className="
            text-[16px]
            font-bold
            text-[var(--text-primary)]
            mb-4
          ">

            Logo (Optional)

          </h3>

          <div className="flex gap-4">

            <div className="
              w-[90px]
              h-[90px]
              rounded-xl
              border border-[var(--border-color)]
              flex items-center justify-center
              bg-black/5 dark:bg-white/[0.02]
            ">

              <RiImage2Line className="
                text-[34px]
                text-[var(--text-secondary)]
              " />

            </div>

            <div className="flex flex-1 gap-3">

              <button className="
                flex-1
                h-[42px]
                rounded-xl
                border border-[var(--border-color)]
                bg-[#111111] dark:bg-black
                text-white
                text-[15px]
                font-semibold
                flex items-center justify-center gap-2
              ">

                <RiUpload2Line />
                Upload

              </button>

              <button className="
                flex-1
                h-[42px]
                rounded-xl
                border border-[var(--border-color)]
                bg-black/5 dark:bg-black
                text-[var(--text-secondary)]
                text-[15px]
                font-semibold
                flex items-center justify-center gap-2
              ">

                <RiImageLine />
                Cloud Gallery

              </button>

            </div>

          </div>

        </div>

        {/* GENERATION */}
        <div className="
          border-t border-[var(--border-color)]
          pt-6
        ">

          <div className="flex items-center justify-between mb-5">

            <h3 className="
              text-[17px]
              font-bold
              text-[var(--text-primary)]
            ">

              Generation Variations

            </h3>

            <button className="
              h-[36px]
              px-4
              rounded-lg
              border border-[var(--border-color)]
              bg-[#111111] dark:bg-black
              text-white
              text-[14px]
              font-semibold
              flex items-center gap-2
            ">

              <RiAddLine />
              Add Variation

            </button>

          </div>

          <div className="
            border border-[var(--border-color)]
            rounded-2xl
            p-5
            bg-[#FAFAFA] dark:bg-[#17171C]
          ">

            <div className="grid grid-cols-2 gap-4 mb-4">

              <div>

                <label className="
                  block mb-2
                  text-[13px]
                  font-bold
                  text-[var(--text-primary)]
                ">

                  Type

                </label>

                <select className="
                  w-full h-[42px]
                  px-4
                  rounded-xl
                  border border-[var(--border-color)]
                  bg-white dark:bg-[#0E0E11]
                  focus:border-[#F3A412]
                  text-[14px]
                  text-[var(--text-primary)]
                  outline-none
                ">

                  <option>Product Photography</option>

                </select>

              </div>

              <div>

                <label className="
                  block mb-2
                  text-[13px]
                  font-bold
                  text-[var(--text-primary)]
                ">

                  Category

                </label>

                <select className="
                  w-full h-[42px]
                  px-4
                  rounded-xl
                  border border-[var(--border-color)]
                  bg-white dark:bg-[#0E0E11]
                  focus:border-[#F3A412]
                  text-[14px]
                  text-[var(--text-primary)]
                  outline-none
                ">

                  <option>Select Category</option>

                </select>

              </div>

            </div>

            <div className="mb-4">

              <label className="
                block mb-2
                text-[13px]
                font-bold
                text-[var(--text-primary)]
              ">

                Scene / Style

              </label>

              <select className="
                w-full h-[42px]
                px-4
                rounded-xl
                border border-[var(--border-color)]
                bg-white dark:bg-[#0E0E11]
                focus:border-[#F3A412]
                text-[14px]
                text-[var(--text-primary)]
                outline-none
              ">

                <option>Select Style</option>

              </select>

            </div>

            <div>

              <label className="
                block mb-2
                text-[13px]
                font-bold
                text-[var(--text-primary)]
              ">

                Additional Instructions

              </label>

              <textarea
                placeholder="Modifications..."
                className="
                  w-full
                  h-[110px]
                  p-4
                  rounded-xl
                  border border-[var(--border-color)]
                  bg-white dark:bg-[#0E0E11]
                  focus:border-[#F3A412]
                  text-[14px]
                  text-[var(--text-primary)]
                  outline-none
                  resize-none
                "
              />

            </div>

          </div>

        </div>

{/* ADVANCED */}
<div
  className="
    border-t border-[var(--border-color)]
    mt-7
    pt-7
  "
>

  {/* HEADER */}
  <button
    type="button"
    onClick={() => setShowAdvanced(!showAdvanced)}
    className="flex items-center justify-between w-full pb-2 text-left "
  >

    <div
      className="
        flex items-center gap-3
        text-[18px]
        font-bold
        text-[var(--text-primary)]
      "
    >

      <RiSettings3Line className="text-[20px]" />
      Advanced Options

    </div>

    <RiArrowDownSLine
      className={`
        text-[24px]
        text-[var(--text-secondary)]
        transition-all duration-300
        ${showAdvanced ? "rotate-180" : ""}
      `}
    />

  </button>

  {/* DROPDOWN CONTENT */}
  {showAdvanced && (

    <div
      className="
        mt-6
        border border-[var(--border-color)]
        rounded-2xl
        p-5
        bg-[#FAFAFA] dark:bg-[#17171C]
      "
    >

      {/* TOP */}
      <div className="flex items-center justify-between mb-5">

        <h3
          className="
            flex items-center gap-2
            text-[18px]
            font-bold
            text-[var(--text-primary)]
          "
        >

          <RiImageAddLine className="text-[#F3A412]" />
          Choose Model

        </h3>

        <div
          className="
            flex items-center gap-2
            text-[14px]
            text-[var(--text-secondary)]
          "
        >

          <RiTimeLine />
          40s

        </div>

      </div>

      {/* MODEL CARDS */}
      <div className="grid grid-cols-3 gap-4">

        {[
          {
            title: "Flash",
            badge: "New",
            badgeColor: "bg-blue-500",
            desc: "Balanced speed and quality.",
          },

          {
            title: "Pro",
            badge: "Pro",
            badgeColor: "bg-pink-500",
            desc: "Highest quality AI image generation.",
          },

          {
            title: "Standard",
            badge: "Budget",
            badgeColor: "bg-green-500",
            desc: "Fast and affordable.",
          },
        ].map((item, i) => (

          <button
            key={i}
            type="button"
            onClick={() => setSelectedModel(item.title)}
            className={`
              min-h-[170px]
              rounded-2xl
              border
              p-4
              text-left
              transition-all duration-300
              hover:border-[#F3A412]

              ${
                selectedModel === item.title
                  ? `
                    border-[#F3A412]
                    bg-[#FFF4DB] dark:bg-[#2B2215]
                  `
                  : `
                    border-[var(--border-color)]
                    bg-white dark:bg-[#17171C]
                  `
              }
            `}
          >

            <div className="flex items-center justify-between mb-4">

              <h4
                className="
                  text-[18px]
                  font-bold
                  text-[var(--text-primary)]
                "
              >

                {item.title}

              </h4>

              <span
                className={`
                  px-2 py-[3px]
                  rounded-full
                  text-[10px]
                  font-bold
                  text-white
                  ${item.badgeColor}
                `}
              >

                {item.badge}

              </span>

            </div>

            <p
              className="
                text-[14px]
                leading-[26px]
                text-[var(--text-secondary)]
              "
            >

              {item.desc}

            </p>

            {selectedModel === item.title && (
              <div className="mt-4 text-[#F3A412]">
                <RiCheckLine />
              </div>
            )}

          </button>

        ))}

      </div>

      {/* RESOLUTION */}
      <div className="border-t border-[var(--border-color)] mt-5 pt-5">

        <div
          className="
            flex items-center gap-2
            mb-4
            text-[15px]
            font-bold
            text-[var(--text-primary)]
          "
        >

          Resolution

          <span
            className="
              text-[13px]
              font-normal
              text-[var(--text-secondary)]
            "
          >

            (40 credits)

          </span>

        </div>

        <div className="flex gap-3">

          {["1K", "2K", "4K"].map((item, i) => (

            <button
              key={i}
              type="button"
              onClick={() => setSelectedResolution(item)}
              className={`
                w-[56px]
                h-[42px]
                rounded-xl
                border
                text-[14px]
                font-semibold
                transition-all duration-300

                ${
                  selectedResolution === item
                    ? `
                      border-[#F3A412]
                      text-[#F3A412]
                      bg-[#FFF4DB] dark:bg-[#2B2215]
                    `
                    : `
                      border-[var(--border-color)]
                      bg-white dark:bg-[#17171C]
                      text-[var(--text-primary)]
                    `
                }
              `}
            >

              {item}

            </button>

          ))}

        </div>

      </div>

    </div>

  )}

</div>

        {/* TERMS */}
        <div className="
          border-t border-[var(--border-color)]
          mt-6
          pt-6
        ">

          <label className="flex items-center gap-3 cursor-pointer ">

            <input
              type="checkbox"
              className="
                w-[18px]
                h-[18px]
                accent-[#F3A412]
              "
            />

            <span className="
              text-[15px]
              text-[var(--text-primary)]
            ">

              I agree to the{" "}

              <span className="text-[#F3A412]">
                Terms & Conditions
              </span>

              {" "}and{" "}

              <span className="text-[#F3A412]">
                Privacy Policy
              </span>

            </span>

          </label>

          <button className="
            mt-5
            w-full
            h-[52px]
            rounded-xl
            bg-[#F3A412]
            text-black
            text-[16px]
            font-bold
            flex items-center justify-center gap-3
            hover:opacity-90
            transition-all
          ">

            <RiLoginBoxLine className="text-[20px]" />
            Login to Generate

          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="
        p-6 lg:p-7
        bg-[#FAFAFA] dark:bg-[#17171C]
      ">

        <h2 className="
          text-[20px]
          font-bold
          text-[var(--text-primary)]
          mb-5
        ">

          Generated Results

        </h2>

        <p className="
          text-[15px]
          font-semibold
          text-[var(--text-primary)]
          mb-3
        ">

          Generated Result

        </p>

        <div className="
          h-[540px]
          rounded-2xl
          bg-black/10 dark:bg-white/[0.04]
          flex flex-col items-center justify-center
        ">

          <RiImageLine className="
            text-[70px]
            text-[var(--text-secondary)]
            mb-5
          " />

          <p className="
            text-[22px]
            font-semibold
            text-[var(--text-secondary)]
            text-center
          ">

            Your AI-generated image will appear here

          </p>

        </div>

      </div>
    </div>
  </div>
</div>
</main>
{/* ABOUT SECTION */}
<div className="bg-[#FAFAFA] dark:bg-[black] max-w-5xl mx-auto">

  <div className="max-w-6xl px-4 pt-20 pb-10 mx-auto">

    <div className="max-w-[980px]">

      {/* TITLE */}
      <h2
        className="
          text-[32px]
          leading-[42px]
          font-bold
          text-[#F3A412]
          mb-3
        "
      >
        One Tool for Every Jewellery Marketing Need
      </h2>

      {/* CONTENT */}
      <div
        className="
          text-[15px]
          leading-[31px]
          text-[var(--text-primary)]
        "
      >

        <p className="mb-1 text-[var(--text-primary)]">

          Running a jewellery business means juggling multiple marketing tasks every day —
          from creating try-on images for your online catalog, to designing daily rate posters
          for WhatsApp, to producing festival-themed creatives for Diwali and Navratri.
          Our{" "}

          <span className="font-bold text-[var(--text-primary)]">
            Jewellery All-in-One Generator
          </span>

          {" "}
          consolidates all of these into a single, powerful AI tool so you can create
          everything from one place.

        </p>

        <p className="mb-1 text-[var(--text-primary)]">

          Instead of switching between three different tools, upload your jewelry photos
          once and generate try-on images, rate posters, and festival posts without leaving
          the page. This is the most efficient workflow for jewellers who need to produce
          marketing content daily.

        </p>

        {/* HOW IT WORKS */}
        <div className="pt-1">

          <h3
            className="
              text-[15px]
              font-medium
              text-[var(--text-primary)]
              mb-1
            "
          >
            How It Works
          </h3>

          <div
            className="
              text-[15px]
              leading-[31px]
              text-[var(--text-primary)]
            "
          >

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Upload Your Jewelry Photos:
              </span>

              {" "}
              Upload one or more product photos of your jewelry pieces on a plain background.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Choose Your Output:
              </span>

              {" "}
              Select whether you want a try-on image, a rate poster,
              or a festival creative. You can also upload a model
              photo for try-on generation.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Add Your Branding:
              </span>

              {" "}
              Upload your shop logo, add rate information,
              or select a festival theme. Customize the text
              and layout to match your brand.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Generate & Download:
              </span>

              {" "}
              The AI creates your image in seconds. Download and
              share directly on WhatsApp, Instagram, or your
              e-commerce store.

            </p>

          </div>

        </div>

        {/* WHAT YOU CAN CREATE */}
        <div className="pt-1">

          <h3
            className="
              text-[15px]
              font-medium
              text-[var(--text-primary)]
              mb-1
            "
          >
            What You Can Create
          </h3>

          <div
            className="
              text-[15px]
              leading-[31px]
              text-[var(--text-primary)]
            "
          >

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Virtual Try-On Images:
              </span>

              {" "}
              Show customers how your jewelry looks when worn —
              rings, necklaces, earrings, bangles, and more.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Daily Rate Posters:
              </span>

              {" "}
              Generate professional gold and silver rate posters
              with your shop branding every morning in under 2 minutes.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Festival Creatives:
              </span>

              {" "}
              Create branded Diwali, Navratri, Eid, and wedding season
              marketing posts featuring your actual products.

            </p>

            <p className="mb-[2px]">

              <span className="font-bold text-[var(--text-primary)]">
                Multi-Product Composites:
              </span>

              {" "}
              Combine multiple jewelry pieces into a single composition
              using our multi-reference image upload feature.

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

{/* HOW TO USE */}
<section className="mt-20">

  <div className="max-w-5xl mx-auto">

    {/* HEADING */}
    <div className="flex items-center gap-4 mb-10">

      <div
        className="
          w-[46px]
          h-[46px]
          rounded-2xl
          flex items-center justify-center

          bg-[#FFF4DE]
          dark:bg-[#2B2215]

          text-[#F3A412]
        "
      >
        <RiSparkling2Line className="text-[22px]" />
      </div>

      <div>

        <h2
          className="
            text-[28px]
            md:text-[42px]
            leading-tight
            font-extrabold

            text-[#F3A412]
          "
        >
          Step-by-Step: How to Use This Tool
        </h2>

        <div className="w-[120px] h-[3px] bg-[#F3A412] rounded-full mt-3" />

      </div>

    </div>

    {/* STEPS */}
    <div className="relative pl-16">

      {/* VERTICAL LINE */}
      <div
        className="
          absolute
          left-[22px]
          top-0
          bottom-0
          w-[2px]

          bg-[#E5C27A]
          dark:bg-[#3A2B12]
        "
      />

      {[
        {
          title: "Upload",
          text: "one or more jewelry product photos using the Jewellery Images upload field. Multiple pieces can be combined into a single composition.",
        },

        {
          title: "Label",
          text: 'each uploaded image using the Label field (e.g., "Gold Necklace", "Matching Bangles") and add specific details in the Hint field.',
        },

        {
          title: "Upload",
          text: "a model photo in the Model Photo field if you want a virtual try-on — the AI will place the jewelry onto this person.",
        },

        {
          title: "Select",
          text: 'a style from Popular Style Instructions (e.g., "Bridal Set", "Festive Look") or type custom instructions in Additional Instructions.',
        },

        {
          title: "Specify your output type",
          text: 'in Additional Instructions — mention "try-on image", "rate poster", or "festival creative" so the AI knows what to generate.',
        },

        {
          title: "Optionally",
          text: "upload a Reference Image to match a specific visual style, pose, or composition.",
        },

        {
          title: "Add",
          text: "your shop logo via the Logo upload, choose Logo Placement, and add any Overlay Text or Marketing Text.",
        },

        {
          title: "Select",
          text: "your desired Output Shape and click Generate.",
        },
      ].map((step, index) => (

     <div
  key={index}
  className="relative flex items-start gap-6 mb-8 cursor-pointer group"
>

{/* NUMBER */}
<div
  className="
    absolute
    -left-[63px]
    top-5
    z-10

    w-[44px]
    h-[44px]
    rounded-full

    border-2

    border-[#D89B12]
    dark:border-[#F3A412]

    bg-white
    dark:bg-[#0D0D12]

    flex items-center justify-center

    text-[#F3A412]

    text-[17px]
    font-bold

    shadow-[0_2px_10px_rgba(0,0,0,0.06)]
    dark:shadow-none

    transition-all duration-300

    group-hover:bg-[#F3A412]
    group-hover:text-black
    group-hover:border-[#F3A412]
    group-hover:scale-110
    group-hover:shadow-[0_0_25px_rgba(243,164,18,0.25)]
  "
>
  {index + 1}
</div>

{/* CARD */}
<div
  className="
    w-full
    rounded-[26px]

    border

    border-[#E4E4E7]
    dark:border-[#262631]

    bg-white
    dark:bg-[#09090D]

    px-6
    md:px-7

    py-5
    md:py-6

    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
    dark:shadow-none

    transition-all duration-300 ease-out

    hover:border-[#F3A412]
    hover:bg-[#FFFDF8]
    dark:hover:bg-[#111118]

    hover:-translate-y-[2px]

    hover:shadow-[0_8px_30px_rgba(243,164,18,0.08)]
    dark:hover:shadow-[0_0_35px_rgba(243,164,18,0.10)]
  "
>

  <h3
    className="
      text-[20px]
      md:text-[22px]

      font-bold
      mb-2

      text-[#111111]
      dark:text-white

      transition-all duration-300

      group-hover:text-[#F3A412]
    "
  >
    {step.title}
  </h3>

  <p
    className="
      text-[15px]
      md:text-[16px]

      leading-[32px]

      text-[#5E5E66]
      dark:text-[#A1A1AA]

      transition-all duration-300

      group-hover:text-[#2F2F35]
      dark:group-hover:text-[#D4D4D8]
    "
  >
    {step.text}
  </p>

</div>

</div>

      ))}

    </div>
  </div>
</section>

{/* BEST PRACTICES */}
<section className="max-w-5xl px-4 mx-auto mt-24 ">

  <div
    className="
      max-w-7xl
      mx-auto

      rounded-[34px]

      border
      border-[#E8E8E8]
      dark:border-[#23232B]

      bg-[#FFFFFF]
      dark:bg-[#111118]

      px-5
      md:px-10

      py-10
      md:py-14

      transition-colors duration-300
    "
  >

    {/* HEADING */}
    <div className="mb-10">

      <div className="flex items-center gap-4">

        <div
          className="
            w-[50px]
            h-[50px]
            rounded-2xl

            flex items-center justify-center

            bg-[#FFF4DE]
            dark:bg-[#2B2215]

            text-[#F3A412]
          "
        >
          <RiLightbulbLine className="text-[24px]" />
        </div>

        <div>

          <h2
            className="
              text-[28px]
              md:text-[44px]
              font-extrabold
              leading-tight

              text-[#F3A412]
            "
          >
            Best Practices for Best Results
          </h2>

          <div className="w-[110px] h-[3px] bg-[#F3A412] rounded-full mt-3" />

        </div>

      </div>

    </div>

    {/* GRID */}
    <div
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >

      {[
        {
          title: "Upload multiple jewelry pieces",
          text: "for composite images — e.g., a necklace + earrings + bangles — the AI can combine them into a coordinated look on the model.",
        },

        {
          title: "Use a model photo for try-on mode",
          text: "— without a model photo, the AI will default to a standalone product or poster composition.",
        },

        {
          title: "Mention the specific output type",
          text: 'in Additional Instructions — saying "create a daily rate poster with gold rates" or "festive Diwali creative" produces much more targeted results.',
        },

        {
          title: "Label each image clearly",
          text: '— "bridal necklace", "earrings on ears", "bangle on wrist" — to guide the AI on placement for multi-piece composites.',
        },

        {
          title: "Upload jewelry on plain backgrounds",
          text: "— white or solid backgrounds ensure the AI extracts clean product silhouettes without artifacts.",
        },

        {
          title: "Always add your logo and phone number",
          text: "in Overlay Text or Marketing Text for branded rate posters and festival creatives.",
        },

        {
          title: "Avoid mixing very different output types",
          text: "in one generation — create try-on images and rate posters as separate generations for best quality.",
        },
      ].map((item, index) => (

      <div
  key={index}
  className="
    group
    relative

    rounded-[24px]

    border
    border-[#E7E7EC]
    dark:border-[#1E1E28]

    bg-[#FFFFFF]
    dark:bg-[#09090D]

    px-5
    md:px-6

    py-5

    overflow-hidden

    transition-all duration-300 ease-out

    hover:border-[#F3A412]
    hover:-translate-y-[2px]

    hover:shadow-[0_8px_25px_rgba(243,164,18,0.06)]
    dark:hover:shadow-[0_8px_30px_rgba(243,164,18,0.10)]
  "
>

  {/* GLOW */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-all duration-500

      bg-[radial-gradient(circle_at_top_left,rgba(243,164,18,0.06),transparent_55%)]
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 flex items-start gap-4">

    {/* ICON */}
    <div
      className="
        min-w-[42px]
        w-[42px]
        h-[42px]

        rounded-full

        flex items-center justify-center

        bg-[#FFF8EA]
        dark:bg-[#18120A]

        border
        border-[#FFE1A6]
        dark:border-[#33230E]

        text-[#F3A412]

        transition-all duration-300

        group-hover:bg-[#F3A412]
        group-hover:text-black
        group-hover:scale-105
      "
    >
      <RiCheckLine className="text-[18px]" />
    </div>

    {/* TEXT */}
    <div>

      <h3
        className="
          text-[18px]
          md:text-[19px]

          leading-[30px]
          font-bold
          mb-1

          text-[#111111]
          dark:text-white

          transition-all duration-300

          group-hover:text-[#F3A412]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          text-[15px]
          leading-[31px]

          text-[#666666]
          dark:text-[#A1A1AA]

          transition-all duration-300

          group-hover:text-[#4B4B4B]
          dark:group-hover:text-[#D6D6DC]
        "
      >
        {item.text}
      </p>

    </div>

  </div>

</div>

      ))}

    </div>

  </div>

</section>
      {/* Floating WhatsApp Widget */}
      <div className="fixed z-50 bottom-6 right-6">
          <div className="bg-[#075E54] w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl cursor-pointer hover:scale-110 transition">
            <i className="ri-whatsapp-line"></i>
          </div>
      </div>

<section className="mt-24">

  <div className="max-w-5xl mx-auto">

    {/* FAQ */}
    <div className="mb-24">

      <h2
        className="
          text-[28px]
          md:text-[42px]
          font-extrabold
          mb-10

          text-[#F3A412]
        "
      >
        Frequently Asked Questions (FAQs)
      </h2>

    <div className="space-y-2">

  {faqs.map((faq, index) => (

    <div
      key={index}
      className="
        group

        border-b

        border-[#E5E7EB]
        dark:border-[#1E1E28]

        py-6

        cursor-pointer

        transition-all duration-300
      "
    >

      <details className="group">

        <summary className="list-none">

          <div className="flex items-center justify-between gap-6">

            <h3
              className="
                text-[18px]
                md:text-[20px]
                font-semibold

                text-[#111111]
                dark:text-white

                transition-all duration-300

                group-hover:text-[#F3A412]
              "
            >
              {faq.question}
            </h3>

            <RiArrowDownSLine
              className="
                text-[22px]

                text-[#666]
                dark:text-[#A1A1AA]

                transition-all duration-300

                group-open:rotate-180
                group-hover:text-[#F3A412]
              "
            />

          </div>

        </summary>

        <p
          className="
            mt-5
            pr-10

            text-[16px]
            leading-[34px]

            text-[#5E5E66]
            dark:text-[#A1A1AA]
          "
        >
          {faq.answer}
        </p>

      </details>

    </div>

  ))}

</div>
</div>

    {/* RELATED TOOLS */}
    <div>

      {/* HEADING */}
      <div className="mb-12">

        <div className="flex items-start gap-4">

          <div
            className="
              w-[48px]
              h-[48px]
              rounded-2xl

              flex items-center justify-center

              bg-[#FFF4DE]
              dark:bg-[#2B2215]

              text-[#F3A412]
            "
          >
            <RiSparkling2Line className="text-[24px]" />
          </div>

          <div>

            <h2
              className="
                text-[32px]
                md:text-[46px]
                font-extrabold
                leading-tight

                text-[#F3A412]
              "
            >
              Discover Related AI Tools
            </h2>

            <p
              className="
                mt-4
                max-w-3xl

                text-[17px]
                leading-[34px]

                text-[#5E5E66]
                dark:text-[#A1A1AA]
              "
            >
              Explore more AI-powered solutions to supercharge your
              e-commerce workflow and creative projects.
            </p>

          </div>

        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {[
          {
            title: "AI Product Photography Generator",
            desc: "Generate studio-quality professional photos of your products in any scene...",
            type: "IMAGE",
          },

          {
            title: "AI Jewelry Virtual Try-On",
            desc: "Let customers virtually try on rings, necklaces, and earrings on their own...",
            type: "IMAGE",
          },

          {
            title: "Jewellery Rate Poster",
            desc: "Generate Today’s gold and silver rate posters with your branding and product...",
            type: "IMAGE",
          },

          {
            title: "Logo Animation Generator",
            desc: "Animate your logo with stunning video effects using AI.",
            type: "VIDEO",
          },

          {
            title: "Festival Video Generator",
            desc: "Generate professional, cinematic festival greetings videos using AI.",
            type: "VIDEO",
          },

          {
            title: "Jewelry Product Videography",
            desc: "Generate stunning, short video clips of jewelry products from text prompts.",
            type: "VIDEO",
          },
        ].map((tool, index) => (

          <div
            key={index}
            className="
              group
              rounded-[28px]

              border

              border-[#E5E7EB]
              dark:border-[#1B1B24]

              bg-white
              dark:bg-[#09090D]

              px-6
              py-6

              min-h-[250px]

              transition-all duration-300

              hover:border-[#F3A412]
              hover:-translate-y-1

              shadow-[0_2px_12px_rgba(0,0,0,0.04)]
              dark:shadow-none

              hover:shadow-[0_12px_35px_rgba(243,164,18,0.10)]
            "
          >

            {/* TOP */}
            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-[42px]
                    h-[42px]
                    rounded-2xl

                    flex items-center justify-center

                    bg-[#FFF4DE]
                    dark:bg-[#2B2215]

                    text-[#F3A412]

                    transition-all duration-300

                    group-hover:scale-110
                  "
                >
                  <RiSearchLine className="text-[20px]" />
                </div>

                <div
                  className="
                    px-3
                    py-1
                    rounded-full

                    border

                    border-[#E5E7EB]
                    dark:border-[#2A2A36]

                    text-[11px]
                    font-semibold
                    tracking-wide

                    text-[#666]
                    dark:text-[#A1A1AA]

                    bg-[#FAFAFA]
                    dark:bg-[#111118]
                  "
                >
                  {tool.type}
                </div>

              </div>

              <div
                className="
                  px-4
                  py-[6px]
                  rounded-full

                  text-[11px]
                  font-bold
                  tracking-wide

                  bg-[#FFF4DE]
                  dark:bg-[#2B2215]

                  text-[#F3A412]
                "
              >
                ⚡ POWERFUL
              </div>

            </div>

            {/* CONTENT */}
            <div>

              <h3
                className="
                  text-[20px]
                  leading-[34px]
                  font-bold
                  mb-4

                  text-[#111111]
                  dark:text-white

                  transition-all duration-300

                  group-hover:text-[#F3A412]
                "
              >
                {tool.title}
              </h3>

              <p
                className="
                  text-[16px]
                  leading-[34px]

                  text-[#5E5E66]
                  dark:text-[#A1A1AA]
                "
              >
                {tool.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-14">

        <button
          className="
            group

            flex items-center gap-3

            text-[18px]
            font-bold

            text-[#111111]
            dark:text-white

            transition-all duration-300

            hover:text-[#F3A412]
          "
        >

          View All 100+ AI Tools

          <RiArrowRightLine
            className="
              text-[22px]

              transition-all duration-300

              group-hover:translate-x-2
            "
          />

        </button>

      </div>

    </div>

  </div>

</section>
      <Footer />
    </div>
  );
}

export default Jewellery;