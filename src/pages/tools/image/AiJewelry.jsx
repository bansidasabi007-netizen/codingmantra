import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";
import { RiSparkling2Line, RiYoutubeFill, RiUploadCloud2Line, RiImageLine, RiAddLine, RiUserLine, RiUpload2Line, RiImage2Line, RiSettings3Line, RiArrowDownSLine, RiImageAddLine, RiTimeLine, RiCheckLine, RiLoginBoxLine, } from "react-icons/ri";
import { RiLightbulbLine,} from "react-icons/ri";
import {RiArrowRightLine, RiSearchLine, } from "react-icons/ri";
import { useEffect } from "react";


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

function AiJewelry() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

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
    question: "What types of jewelry can I try on virtually?",
    answer:
      "Our AI supports a wide range of jewelry including rings, necklaces, earrings, bracelets, bangles, and maang tikka. Whether you sell gold, silver, diamond, or Kundan jewelry, the AI can realistically place it on a model's photo while preserving natural lighting and skin tones.",
  },

 {
  question: "How do I get the best results from the AI Jewelry Try-On?",
  answer:
    "For the best results, upload a clear, well-lit product photo of your jewelry on a plain or white background. For the model photo, use a front-facing portrait with good lighting. The more contrast between the jewelry and background in the product photo, the more accurately the AI can extract and place the piece.",
},

  {
    question:
      "Can I use this for my jewelry shop's social media marketing?",
    answer:
      "Absolutely. Many jewelers use our tool to create try-on images for Instagram, WhatsApp catalogs, and Facebook ads. Seeing jewelry worn on a real person is proven to increase click-through rates by up to 40% compared to standalone product photos. You can generate images for your entire catalog in minutes.",
  },

  {
    question:
      "Does the AI work with Indian traditional jewelry like Kundan and Polki?",
    answer:
      "Yes. Our AI is specifically trained on a diverse dataset that includes Indian traditional jewelry styles including Kundan, Polki, Temple jewelry, and South Indian gold pieces. It understands the intricate detail work and can place even heavily ornate pieces naturally on a model.",
  },
];

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
        AI Jewelry Try-On
      </span>

    </div>

  </div>

</div>

<main className="max-w-5xl px-4 mx-auto mt-12">

  {/* Header */}
  <div className="mb-12 text-center">

    <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
      AI Jewelry Try-On
    </h1>

    <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
      Let your customers see your jewelry on themselves before they buy. Upload a product photo and a model to generate realistic try-on images instantly.
    </p>

  </div>

{/* MAIN WRAPPER */}
<div className="max-w-6xl px-4 pb-20 mx-auto">

  {/* MAIN CARD */}
  <div
    className="
      overflow-hidden
      border
      rounded-[28px]

      border-[#E7E7E7]
      dark:border-[#232531]

      bg-white
      dark:bg-[#17171C]

      shadow-[0_4px_30px_rgba(0,0,0,0.04)]
      dark:shadow-none
    "
  >

    <div className="grid grid-cols-1 lg:grid-cols-[58%_42%]">

      {/* LEFT SIDE */}
      <div
        className="
          p-6 lg:p-7

          border-b
          lg:border-b-0
          lg:border-r

          border-[#ECECEC]
          dark:border-[#232531]
        "
      >

        {/* HEADER */}
        <div className="mb-6">

          <h2
            className="
              flex items-center gap-3
              text-[20px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            <RiSparkling2Line className="text-[#F3A412] text-[24px]" />
            Jewelry Try-On Editor

          </h2>

          <p
            className="
              mt-2
              text-[15px]

              text-[#666]
              dark:text-[#A1A1AA]
            "
          >

            Upload jewelry and a model/product image to generate stunning try-on visuals.

          </p>

        </div>

        {/* JEWELRY IMAGES */}
        <div className="mb-6">

          <h3
            className="
              mb-3
              text-[16px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            Jewelry Images (0/4)

          </h3>

          <div
            className="
              w-[102px]
              overflow-hidden
              border
              border-dashed
              rounded-2xl

              border-[#D9D9D9]
              dark:border-[#34343D]

              bg-[#FAFAFA]
              dark:bg-[#17171C]
            "
          >

            <div
              className="
                h-[126px]
                flex flex-col items-center justify-center

                bg-[#F8F8F8]
                dark:bg-[#1D1D24]
              "
            >

              <div
                className="flex items-center justify-center w-10 h-10 mb-3 bg-black rounded-full "
              >

                <RiUploadCloud2Line className="text-[#F3A412] text-[18px]" />

              </div>

              <span
                className="
                  text-[14px]
                  font-semibold

                  text-[#111111]
                  dark:text-white
                "
              >

                Upload

              </span>

            </div>

            <button
              className="
                w-full
                h-[44px]

                border-t

                border-[#E7E7E7]
                dark:border-[#2A2A33]

                flex items-center justify-center gap-2

                text-[13px]
                font-semibold

                text-[#666]
                dark:text-[#A1A1AA]

                bg-white
                dark:bg-[#17171C]
              "
            >

              <RiImageLine />
              Gallery

            </button>

          </div>

        </div>

        {/* LOGO */}
        <div
          className="
            p-4 mb-5
            border rounded-2xl

            border-[#E7E7E7]
            dark:border-[#232531]

            bg-[#FCFCFC]
            dark:bg-[#17171C]
          "
        >

          <h3
            className="
              mb-4
              text-[16px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            Logo (Optional)

          </h3>

          <div className="flex gap-4">

            <div
              className="
                w-[82px]
                h-[82px]
                rounded-xl
                border

                border-[#E7E7E7]
                dark:border-[#2B2B34]

                bg-[#F8F8F8]
                dark:bg-[#1D1D24]

                flex items-center justify-center
              "
            >

              <RiImage2Line
                className="
                  text-[34px]

                  text-[#7A7A7A]
                  dark:text-[#6B7280]
                "
              />

            </div>

            <button
              className="
                flex-1
                h-[42px]
                rounded-xl
                border

                border-[#E7E7E7]
                dark:border-[#2B2B34]

                bg-[#111111]
                dark:bg-black

                text-white
                text-[15px]
                font-semibold

                flex items-center justify-center gap-2

                hover:border-[#F3A412]

                transition-all duration-300
              "
            >

              <RiUpload2Line />
              Upload

            </button>

          </div>

        </div>

        {/* MODEL PHOTO */}
        <div
          className="
            p-4 mb-5
            border rounded-2xl

            border-[#E7E7E7]
            dark:border-[#232531]

            bg-[#FCFCFC]
            dark:bg-[#17171C]
          "
        >

          <h3
            className="
              mb-4
              text-[16px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            Model Photo (Optional)

          </h3>

          <div className="flex gap-4">

            <div
              className="
                w-[82px]
                h-[82px]
                rounded-xl
                border

                border-[#E7E7E7]
                dark:border-[#2B2B34]

                bg-[#F8F8F8]
                dark:bg-[#1D1D24]

                flex items-center justify-center
              "
            >

              <RiUserLine
                className="
                  text-[34px]

                  text-[#7A7A7A]
                  dark:text-[#6B7280]
                "
              />

            </div>

            <div className="flex flex-1 gap-3">

              <button
                className="
                  flex-1
                  h-[42px]
                  rounded-xl
                  border

                  border-[#E7E7E7]
                  dark:border-[#2B2B34]

                  bg-[#111111]
                  dark:bg-black

                  text-white
                  text-[15px]
                  font-semibold

                  flex items-center justify-center gap-2

                  hover:border-[#F3A412]

                  transition-all duration-300
                "
              >

                <RiUpload2Line />
                Upload

              </button>

              <button
                className="
                  flex-1
                  h-[42px]
                  rounded-xl
                  border

                  border-[#E7E7E7]
                  dark:border-[#2B2B34]

                  bg-[#F5F5F5]
                  dark:bg-[#101014]

                  text-[15px]
                  font-semibold

                  text-[#555]
                  dark:text-[#A1A1AA]

                  flex items-center justify-center gap-2

                  hover:border-[#F3A412]

                  transition-all duration-300
                "
              >

                <RiImageLine />
                Cloud Gallery

              </button>

            </div>

          </div>

        </div>

        {/* STYLE */}
        <div className="mb-5">

          <h3
            className="
              mb-3
              text-[16px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            Popular Style Instructions (Optional)

          </h3>

          <div className="grid grid-cols-2 gap-3">

            <select
              className="
                h-[42px]
                px-4
                rounded-xl
                border

                border-[#E5E7EB]
                dark:border-[#2B2B34]

                bg-white
                dark:bg-[#0F1015]

                text-[14px]

                text-[#111]
                dark:text-white

                outline-none
                focus:border-[#F3A412]
              "
            >
              <option>Select a Category...</option>
            </select>

            <select
              className="
                h-[42px]
                px-4
                rounded-xl
                border

                border-[#E5E7EB]
                dark:border-[#2B2B34]

                bg-white
                dark:bg-[#0F1015]

                text-[14px]

                text-[#111]
                dark:text-white

                outline-none
                focus:border-[#F3A412]
              "
            >
              <option>Select an Instruction...</option>
            </select>

          </div>

        </div>

        {/* TEXTAREA */}
        <div className="mb-5">

          <h3
            className="
              mb-3
              text-[16px]
              font-bold

              text-[#111111]
              dark:text-white
            "
          >

            Describe the Desired Image (Optional)

          </h3>

          <textarea
            placeholder="e.g. model wearing the silver necklace on a black dress"
            className="
              w-full
              h-[100px]
              p-4
              rounded-2xl
              border

              border-[#E5E7EB]
              dark:border-[#2B2B34]

              bg-white
              dark:bg-[#0F1015]

              text-[14px]

              text-[#111]
              dark:text-white

              placeholder:text-[#888]
              dark:placeholder:text-[#6B7280]

              resize-none
              outline-none

              focus:border-[#F3A412]
            "
          />

        </div>

        {/* ADVANCED OPTIONS */}
        <div
          className="
            py-4
            border-t border-b

            border-[#ECECEC]
            dark:border-[#232531]
          "
        >

          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center justify-between w-full "
          >

            <div
              className="
                flex items-center gap-3
                text-[17px]
                font-bold

                text-[#111111]
                dark:text-white
              "
            >

              <RiSettings3Line />
              Advanced Options

            </div>

            <RiArrowDownSLine
              className={`
                text-[22px]
                transition-all duration-300
                text-[#666] dark:text-[#A1A1AA]
                ${showAdvanced ? "rotate-180" : ""}
              `}
            />

          </button>

          {/* DROPDOWN */}
          {showAdvanced && (

            <div
              className="
                mt-5
                p-5
                border rounded-2xl

                border-[#E7E7E7]
                dark:border-[#232531]

                bg-[#FCFCFC]
                dark:bg-[#17171C]
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-5">

                <h3
                  className="
                    flex items-center gap-2
                    text-[18px]
                    font-bold

                    text-[#111111]
                    dark:text-white
                  "
                >

                  <RiImageAddLine className="text-[#F3A412]" />
                  Choose Model

                </h3>

                <div
                  className="
                    flex items-center gap-2
                    text-[14px]

                    text-[#666]
                    dark:text-[#A1A1AA]
                  "
                >

                  <RiTimeLine />
                  40s

                </div>

              </div>

              {/* MODEL CARDS */}
              <div className="grid grid-cols-3 gap-3">

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
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all duration-300

                      ${
                        selectedModel === item.title
                          ? `
                            border-[#F3A412]
                            bg-[#FFF4DB]
                            dark:bg-[#2B2215]
                          `
                          : `
                            border-[#E5E7EB]
                            dark:border-[#2B2B34]

                            bg-white
                            dark:bg-[#17171C]
                          `
                      }
                    `}
                  >

                    <div className="flex items-center justify-between mb-4">

                      <h4
                        className="
                          text-[17px]
                          font-bold

                          text-[#111]
                          dark:text-white
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
                        leading-[24px]

                        text-[#666]
                        dark:text-[#A1A1AA]
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
              <div
                className="
                  pt-5 mt-5
                  border-t

                  border-[#E7E7EB]
                  dark:border-[#2B2B34]
                "
              >

                <div
                  className="
                    flex items-center gap-2
                    mb-4

                    text-[15px]
                    font-bold

                    text-[#111]
                    dark:text-white
                  "
                >

                  Resolution

                  <span
                    className="
                      text-[13px]
                      font-normal

                      text-[#666]
                      dark:text-[#A1A1AA]
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
                        h-[40px]
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
                              bg-[#FFF4DB]
                              dark:bg-[#2B2215]
                            `
                            : `
                              border-[#E5E7EB]
                              dark:border-[#2B2B34]

                              bg-white
                              dark:bg-[#17171C]

                              text-[#111]
                              dark:text-white
                            `
                        }
                      `}
                    >

                      {item}

                    </button>

                  ))}

                </div>

              </div>

              {/* OUTPUT SHAPE */}
              <div
                className="
                  pt-5 mt-5
                  border-t

                  border-[#E7E7EB]
                  dark:border-[#2B2B34]
                "
              >

                <h3
                  className="
                    mb-3
                    text-[15px]
                    font-bold

                    text-[#111]
                    dark:text-white
                  "
                >

                  Output Shape

                </h3>

                <select
                  className="
                    w-full
                    h-[44px]
                    px-4
                    rounded-xl
                    border

                    border-[#E5E7EB]
                    dark:border-[#2B2B34]

                    bg-white
                    dark:bg-[#0F1015]

                    text-[14px]

                    text-[#111]
                    dark:text-white

                    outline-none
                    focus:border-[#F3A412]
                  "
                >
                  <option>
                    Square (Instagram post, Facebook ad)
                  </option>
                </select>

              </div>

            </div>

          )}

        </div>

        {/* TERMS */}
        <div className="pt-6">

          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              className="
                w-[18px]
                h-[18px]
                accent-[#F3A412]
              "
            />

            <span
              className="
                text-[15px]

                text-[#111]
                dark:text-white
              "
            >

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

          <button
            className="
              w-full
              h-[52px]
              mt-5
              rounded-xl

              bg-[#F3A412]

              text-black
              text-[16px]
              font-bold

              flex items-center justify-center gap-3

              hover:opacity-90

              transition-all duration-300
            "
          >

            <RiLoginBoxLine className="text-[20px]" />
            Login to Generate

          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          p-6 lg:p-7

          bg-[#FAFAFA]
          dark:bg-[#17171C]
        "
      >

        <div className="flex items-center justify-between mb-5">

          <h2
            className="
              text-[20px]
              font-bold

              text-[#111]
              dark:text-white
            "
          >

            Generated Result

          </h2>

          <button
            className="
              h-[38px]
              px-4
              rounded-xl
              border

              border-[#E7E7E7]
              dark:border-[#2B2B34]

              bg-white
              dark:bg-black

              text-[14px]
              font-semibold

              text-[#111]
              dark:text-white

              flex items-center gap-2
            "
          >

            <RiYoutubeFill className="text-red-500 text-[18px]" />
            Watch Tutorial

          </button>

        </div>

        <div
          className="
            h-[620px]
            rounded-2xl

            bg-[#ECECEC]
            dark:bg-[#24242B]

            flex flex-col items-center justify-center
          "
        >

          <RiImageLine
            className="
              text-[72px]
              mb-5

              text-[#7A7A7A]
              dark:text-[#777]
            "
          />

          <p
            className="
              text-[24px]
              font-semibold
              text-center

              text-[#666]
              dark:text-[#A1A1AA]
            "
          >

            Your AI-generated image will appear here

          </p>

        </div>

      </div>

    </div>

  </div>

</div>
</main>
{/* ABOUT SECTION */}
<div
  className="bg-white dark:bg-black"
>

  <div className="max-w-5xl px-4 pt-16 pb-8 mx-auto">

    <div className="max-w-[980px]">

      {/* TITLE */}
      <h2
        className="
          text-[28px]
          md:text-[42px]
          leading-[1.2]
          font-bold

          text-[#F3A412]

          mb-4
        "
      >
        Virtual Jewelry Try-On for Modern Retailers
      </h2>

      {/* CONTENT */}
      <div
        className="
          text-[14px]
          md:text-[15px]

          leading-[28px]
          md:leading-[31px]

          text-[#3F3F46]
          dark:text-[#D4D4D8]
        "
      >

        {/* PARA 1 */}
        <p className="mb-2">

          In the jewelry business, seeing is believing. Customers hesitate to buy
          online because they cannot visualize how a necklace drapes, how earrings
          frame their face, or how a ring looks on their hand. Our{" "}

          <span
            className="
              font-bold
              text-[#111111]
              dark:text-white
            "
          >
            AI Jewelry Try-On
          </span>

          {" "}
          tool eliminates that barrier by generating photorealistic images of your
          jewelry worn by real people — no photoshoot required.

        </p>

        {/* PARA 2 */}
        <p className="mb-3">

          Whether you run a single showroom in Zaveri Bazaar or an e-commerce
          store shipping across India, virtual try-on images transform your
          product listings from flat catalog shots into immersive shopping
          experiences. Studies show that jewelry listings with try-on images
          receive up to{" "}

          <span
            className="
              font-bold
              text-[#111111]
              dark:text-white
            "
          >
            40% more inquiries
          </span>

          {" "}
          and significantly fewer returns, because customers know exactly what
          they are getting.

        </p>

        {/* HOW IT WORKS */}
        <div className="mb-3">

          <h3
            className="
              text-[15px]
              font-semibold

              text-[#111111]
              dark:text-white

              mb-1
            "
          >
            How It Works
          </h3>

          <div className="space-y-0">

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                Upload Your Jewelry Photo:
              </span>

              {" "}
              Start with a clear image of your jewelry piece — ring,
              necklace, earring, bracelet, or maang tikka — on a plain
              background.

            </p>

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                Upload a Model Photo:
              </span>

              {" "}
              Provide a front-facing photo of a model or mannequin.
              The AI will seamlessly place the jewelry onto the model
              while matching lighting, perspective, and skin tones.

            </p>

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                Generate & Download:
              </span>

              {" "}
              The AI produces a realistic try-on image in seconds.
              Download it directly for your product listings,
              social media, or WhatsApp catalog.

            </p>

          </div>

        </div>

        {/* PERFECT FOR */}
        <div>

          <h3
            className="
              text-[15px]
              font-semibold

              text-[#111111]
              dark:text-white

              mb-1
            "
          >
            Perfect For
          </h3>

          <div className="space-y-0">

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                Jewelry Retailers:
              </span>

              {" "}
              Create try-on images for your entire catalog without
              expensive photoshoots.

            </p>

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                E-commerce Stores:
              </span>

              {" "}
              Boost conversion rates by showing products on real people.

            </p>

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                WhatsApp Marketers:
              </span>

              {" "}
              Share try-on images directly with customers to close sales faster.

            </p>

            <p>

              <span
                className="
                  font-bold
                  text-[#111111]
                  dark:text-white
                "
              >
                Wedding Jewelers:
              </span>

              {" "}
              Let brides visualize their bridal sets before purchase.

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
    text: "your jewelry product photos using the Jewelry Images upload field. You can upload multiple pieces at once (e.g., a necklace + matching earrings).",
  },

  {
    title: "Label",
    text: 'each uploaded image using the Label field (e.g., "Gold Necklace", "Diamond Earrings") so the AI knows which piece is which.',
  },

  {
    title: "Add hints",
    text: 'in the Hint field per image for specific details like "22K gold, temple style" or "rose gold finish" to help the AI render accurately.',
  },

  {
    title: "Upload",
    text: "a front-facing model photo in the Model Photo field. The AI will place the jewelry onto this person.",
  },

  {
    title: "Select",
    text: 'a style from Popular Style Instructions (e.g., "Bridal Look", "Casual Wear") or type your own in Additional Instructions.',
  },

  {
    title: "Optionally",
    text: "upload a Reference Image if you want the output to match a specific pose, lighting, or composition.",
  },

  {
    title: "Add",
    text: "your shop logo via the Logo upload, choose Logo Placement, and add any Overlay Text or Marketing Text.",
  },

  {
    title: "Select",
    text: "your desired Output Shape (e.g., square for Instagram, portrait for stories) and click Generate.",
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

export default AiJewelry;