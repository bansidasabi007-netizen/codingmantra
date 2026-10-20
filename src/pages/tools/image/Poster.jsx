import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";
import { RiSparkling2Line, RiLightbulbFlashLine, RiYoutubeFill, RiBox3Line, RiGalleryLine, RiInformationLine, RiComputerLine, RiUploadCloud2Line, RiImageLine, RiAddLine, RiUserLine, RiUpload2Line, RiImage2Line, RiSettings3Line, RiArrowDownSLine, RiImageAddLine, RiTimeLine, RiCheckLine, RiLoginBoxLine, } from "react-icons/ri";
import { RiLightbulbLine, } from "react-icons/ri";
import { RiArrowRightLine, RiSearchLine, } from "react-icons/ri";


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

function Poster() {
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
          dark:text-[#111111]
dark:text-white
        "
            >
              Jewellery Rate Poster Generator
            </span>
          </div>
        </div>
      </div>

      <main className="px-4 mx-auto mt-12 max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">

          <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
            AI Jewellery Rate Poster Generator

          </h1>

          <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
            Create beautiful, branded posters natively with AI that update your customers on today's Gold and Silver prices in seconds.    </p>

        </div>

        {/* MAIN WRAPPER */}
        <div className="px-4 pb-20 mx-auto max-w-7xl">

          {/* MAIN CARD */}
          <div
            className="
      overflow-hidden
      border
      rounded-[28px]

      border-[#E5E7EB]
dark:border-[#232531]

      bg-white
dark:bg-[#15151B]

      shadow-[0_4px_30px_rgba(0,0,0,0.04)]
    "
          >

            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%]">

              {/* LEFT SIDE */}
              <div
                className="
          p-6 xl:p-7

          border-b
          lg:border-b-0
          lg:border-r

          border-[#E5E7EB]
dark:border-[#232531]
        "
              >

                {/* HEADER */}
                <div className="mb-8">

                  <h2
                    className="
              flex items-center gap-3

              text-[20px]
              md:text-[22px]
              font-bold

              text-[#111111]
dark:text-white
            "
                  >

                    <RiSparkling2Line className="text-[#F3A412] text-[24px]" />

                    Jewellery Rate Poster Generator

                  </h2>

                </div>

                {/* 1 */}
                <div className="mb-8">

                  <div className="flex items-center justify-between mb-5">

                    <h3
                      className="
                text-[17px]
                md:text-[18px]
                font-bold

                text-[#111111]
dark:text-white
              "
                    >

                      1. Today's Rates

                    </h3>

                    <div className="flex items-center gap-3">

                      <span className="text-[15px] text-[#666]
dark:text-[#A1A1AA]">
                        Auto-calc variants
                      </span>

                      <button
                        className="
                  relative
                  w-[44px]
                  h-[24px]
                  rounded-full

                  bg-[#F3A412]
                "
                      >

                        <div
                          className="
                    absolute
                    right-[2px]
                    top-[2px]

                    w-[20px]
                    h-[20px]
                    rounded-full

                    bg-black
                  "
                        />

                      </button>

                    </div>

                  </div>

                  {/* TOP INPUTS */}
                  <div className="grid grid-cols-2 gap-4 mb-5">

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        24K Gold Rate
                      </label>

                      <input
                        placeholder="e.g. 74,500 / 10g"
                        className="
                  w-full
                  h-[42px]
                  px-4
                  rounded-xl
                  border

                  border-[#E5E7EB]
dark:border-[#232531]

                  bg-black

                  text-[#111111]
dark:text-white
                  text-[15px]

                  outline-none
                "
                      />

                    </div>

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Silver Rate
                      </label>

                      <input
                        placeholder="e.g. 92,000 / 1Kg"
                        className="
                  w-full
                  h-[42px]
                  px-4
                  rounded-xl
                  border

                  border-[#E5E7EB]
dark:border-[#232531]

                  bg-black

                  text-[#111111]
dark:text-white
                  text-[15px]

                  outline-none
                "
                      />

                    </div>

                  </div>

                  {/* LOWER */}
                  <div className="grid grid-cols-3 gap-4 pb-6 border-b border-[#E5E7EB]
dark:border-[#232531]">

                    {["22K Gold", "18K Gold", "14K Gold"].map((item, i) => (

                      <div key={i}>

                        <label className="block mb-2 text-[14px] font-semibold text-[#111111]
dark:text-white">
                          {item}
                        </label>

                        <input
                          placeholder="Optional"
                          className="
                    w-full
                    h-[42px]
                    px-4
                    rounded-xl
                    border

                    border-[#E5E7EB]
dark:border-[#232531]

                    bg-black

                    text-[#111111]
dark:text-white
                    text-[15px]

                    outline-none
                  "
                        />

                      </div>

                    ))}

                  </div>

                </div>

                {/* 2 */}
                <div className="mb-8">

                  <h3
                    className="
              mb-5
              text-[17px]
              md:text-[18px]
              font-bold

              text-[#111111]
dark:text-white
            "
                  >

                    2. Brand Details

                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-5">

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Brand / Shop Name
                      </label>

                      <input
                        placeholder="e.g. Laxmi Jewellers"
                        className="
                  w-full h-[42px] px-4 rounded-xl border
                  border-[#E5E7EB]
dark:border-[#232531]
                  bg-black
                  text-[#111111]
dark:text-white outline-none
                "
                      />

                    </div>

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Tagline / Motto
                      </label>

                      <input
                        placeholder="e.g. Purity you can trust"
                        className="
                  w-full h-[42px] px-4 rounded-xl border
                  border-[#E5E7EB]
dark:border-[#232531]
                  bg-black
                  text-[#111111]
dark:text-white outline-none
                "
                      />

                    </div>

                  </div>

                  <div className="mb-5">

                    <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                      Address / Main Branch location
                    </label>

                    <input
                      placeholder="e.g. Sarafa Bazar, M.G. Road"
                      className="
                w-full h-[42px] px-4 rounded-xl border
                border-[#E5E7EB]
dark:border-[#232531]
                bg-black
                text-[#111111]
dark:text-white outline-none
              "
                    />

                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Mobile / WhatsApp
                      </label>

                      <input
                        placeholder="e.g. 9876543210"
                        className="
                  w-full h-[42px] px-4 rounded-xl border
                  border-[#E5E7EB]
dark:border-[#232531]
                  bg-black
                  text-[#111111]
dark:text-white outline-none
                "
                      />

                    </div>

                    <div>

                      <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Footer Custom Text
                      </label>

                      <input
                        placeholder="e.g. Making Charges 0%"
                        className="
                  w-full h-[42px] px-4 rounded-xl border
                  border-[#E5E7EB]
dark:border-[#232531]
                  bg-black
                  text-[#111111]
dark:text-white outline-none
                "
                      />

                    </div>

                  </div>

                  <div className="pb-6 border-b border-[#E5E7EB]
dark:border-[#232531]">

                    <label className="block mb-2 text-[15px] font-semibold text-[#111111]
dark:text-white">
                      Date overriding (defaults to Today)
                    </label>

                    <input
                      value="22 May 2026"
                      className="
                w-full h-[42px] px-4 rounded-xl border
                border-[#E5E7EB]
dark:border-[#232531]
                bg-black
                text-[#111111]
dark:text-white outline-none
              "
                    />

                  </div>

                </div>

                {/* 3 */}
                <div className="mb-8">

                  <h3
                    className="
              mb-5
              text-[17px]
              md:text-[18px]
              font-bold

              text-[#111111]
dark:text-white
            "
                  >

                    3. Logo & Product Images (Optional)

                  </h3>

                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-[#E5E7EB]
dark:border-[#232531]">

                    {/* PRODUCT */}
                    <div
                      className="
                p-3
                rounded-2xl
                border

                border-[#E5E7EB]
dark:border-[#232531]
              "
                    >

                      <h4 className="mb-3 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Product Feature
                      </h4>

                      <div
                        className="
                  h-[260px]
                  rounded-xl

                  bg-[#ECECEC]
dark:bg-[#2A2A31]

                  flex items-center justify-center
                "
                      >

                        <RiBox3Line className="text-[42px] text-[#555]" />

                      </div>

                      <button
                        className="
                  w-full
                  h-[36px]
                  mt-3
                  rounded-lg

                  bg-black

                  border border-[#E5E7EB]
dark:border-[#232531]

                  text-[#666]
dark:text-[#A1A1AA]
                  text-[14px]
                  font-semibold

                  flex items-center justify-center gap-2
                "
                      >

                        <RiUpload2Line />
                        Upload

                      </button>

                    </div>

                    {/* LOGO */}
                    <div
                      className="
                p-3
                rounded-2xl
                border

                border-[#E5E7EB]
dark:border-[#232531]
              "
                    >

                      <h4 className="mb-3 text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Logo
                      </h4>

                      <div
                        className="
                  h-[260px]
                  rounded-xl

                  bg-[#ECECEC]
dark:bg-[#2A2A31]

                  flex items-center justify-center
                "
                      >

                        <RiImageLine className="text-[42px] text-[#555]" />

                      </div>

                      <button
                        className="
                  w-full
                  h-[36px]
                  mt-3
                  rounded-lg

                  bg-black

                  border border-[#E5E7EB]
dark:border-[#232531]

                  text-[#666]
dark:text-[#A1A1AA]
                  text-[14px]
                  font-semibold

                  flex items-center justify-center gap-2
                "
                      >

                        <RiUpload2Line />
                        Upload

                      </button>

                      <button
                        className="
                  w-full
                  h-[34px]
                  mt-2

                  text-[#666]
dark:text-[#A1A1AA]
                  text-[14px]
                  font-semibold

                  flex items-center justify-center gap-2
                "
                      >

                        <RiGalleryLine />
                        Gallery

                      </button>

                    </div>

                  </div>

                </div>

                {/* 4 */}
                <div className="mb-8">

                  <h3
                    className="
              mb-5
              text-[17px]
              md:text-[18px]
              font-bold

              text-[#111111]
dark:text-white
            "
                  >

                    4. Design Style

                  </h3>

                  {/* SELECTS */}
                  <div className="grid grid-cols-2 gap-4 mb-5">

                    <select
                      className="
                w-full
                h-[42px]
                px-4
                rounded-xl
                border

                border-[#E5E7EB]
dark:border-[#232531]

                bg-black

                text-[#111111]
dark:text-white
                text-[15px]

                outline-none
              "
                    >
                      <option>Style Category...</option>
                    </select>

                    <select
                      className="
                w-full
                h-[42px]
                px-4
                rounded-xl
                border

                border-[#E5E7EB]
dark:border-[#232531]

                bg-black

                text-[#111111]
dark:text-white
                text-[15px]

                outline-none
              "
                    >
                      <option>Specific Theme...</option>
                    </select>

                  </div>

                  {/* TEXTAREA */}
                  <div className="mb-5">

                    <div className="flex items-center justify-between mb-3">

                      <label className="text-[15px] font-semibold text-[#111111]
dark:text-white">
                        Describe the Custom Aesthetic
                      </label>

                      <button
                        className="
                  flex items-center gap-2

                  text-[#B57B0B]
                  text-[14px]
                  font-semibold
                "
                      >

                        <RiSparkling2Line />
                        Refine Scene

                      </button>

                    </div>

                    <textarea
                      className="
                w-full
                h-[78px]
                p-4
                rounded-xl
                border

                border-[#E5E7EB]
dark:border-[#232531]

                bg-black

                text-[#111111]
dark:text-white
                text-[15px]

                resize-none
                outline-none
              "
                    >
                    </textarea>

                  </div>

                  {/* OUTPUT DIMENSIONS */}
                  <div className="pb-6 border-b border-[#E5E7EB]
dark:border-[#232531]">

                    <label
                      className="
                block mb-3

                text-[15px]
                font-semibold

                text-[#111111]
dark:text-white
              "
                    >

                      Output Dimensions

                    </label>

                    <select
                      className="
                w-full
                h-[42px]
                px-4
                rounded-xl
                border

                border-[#E5E7EB]
dark:border-[#232531]

                bg-black

                text-[#111111]
dark:text-white
                text-[15px]

                outline-none
              "
                    >
                      <option>21:9</option>
                    </select>

                  </div>

                </div>

                {/* MODEL */}
                <div
                  className="
            p-5
            rounded-2xl
            border

            border-[#E5E7EB]
dark:border-[#232531]

            mb-5
          "
                >

                  <div className="flex items-center justify-between mb-5">

                    <h3
                      className="
                flex items-center gap-2

                text-[16px]
                font-bold

                text-[#111111]
dark:text-white
              "
                    >

                      <RiImage2Line className="text-[#F3A412]" />
                      Choose Model

                    </h3>

                    <div className="flex items-center gap-2 text-[#666]
dark:text-[#A1A1AA]">

                      <RiTimeLine />
                      40s

                    </div>

                  </div>

                  {/* CARDS */}
                  <div className="grid grid-cols-3 gap-3">

                    {[
                      {
                        title: "Flash",
                        badge: "New",
                        color: "bg-blue-500",
                        desc: "Balanced speed and quality. Great for everyd...",
                      },

                      {
                        title: "Pro",
                        badge: "Pro",
                        color: "bg-pink-500",
                        desc: "Highest quality AI image generation. Best for...",
                      },

                      {
                        title: "Standard",
                        badge: "Budget",
                        color: "bg-green-500",
                        desc: "Fast and affordable. Best for quick generations,...",
                      },
                    ].map((item, i) => {

                      const isSelected = selectedModel === item.title;

                      return (

                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedModel(item.title)}
                          className={`
          rounded-2xl
          border
          p-4
          text-left

          transition-all
          duration-300

          ${isSelected
                              ? `
                border-[#F3A412]
                bg-[#FFF4DB]
dark:bg-[#2B2215]
                shadow-[0_0_0_1px_#F3A412]
              `
                              : `
                border-[#E5E7EB]
dark:border-[#232531]
                bg-transparent
                hover:border-[#3A3A45]
              `
                            }
        `}
                        >

                          <div className="flex items-center justify-between mb-3">

                            <h4 className="text-[#111111]
dark:text-white text-[16px] font-bold">
                              {item.title}
                            </h4>

                            <span
                              className={`
              px-2 py-[3px]
              rounded-full

              text-[10px]
              font-bold
              text-[#111111]
dark:text-white

              ${item.color}
            `}
                            >
                              {item.badge}
                            </span>

                          </div>

                          <p
                            className="
            text-[14px]
            leading-[22px]

            text-[#666]
dark:text-[#A1A1AA]
          "
                          >

                            {item.desc}

                          </p>

                          {isSelected && (
                            <div className="mt-4 text-[#F3A412]">
                              <RiCheckLine />
                            </div>
                          )}

                        </button>

                      );

                    })}

                  </div>

                  <div className="flex gap-2">

                    {["1K", "2K", "4K"].map((item, i) => {

                      const isSelected = selectedResolution === item;

                      return (

                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedResolution(item)}
                          className={`
          w-[42px]
          h-[34px]
          rounded-lg
          border

          transition-all
          duration-300

          ${isSelected
                              ? `
                border-[#F3A412]
                text-[#F3A412]
               bg-[#FFF4DB]
dark:bg-[#2B2215]
              `
                              : `
                border-[#E5E7EB]
dark:border-[#232531]
                text-[#111111]
dark:text-white
                hover:border-[#3A3A45]
              `
                            }
        `}
                        >

                          {item}

                        </button>

                      );

                    })}

                  </div>

                  {/* OUTPUT SHAPE */}
                  <div className="pt-5 mt-5 border-t border-[#E5E7EB]
dark:border-[#232531]">

                    <h4 className="mb-3 text-[#111111]
dark:text-white text-[15px] font-bold">
                      Output Shape
                    </h4>

                    <button
                      className="
                w-full
                h-[42px]
                px-4

                rounded-xl
                border

                border-[#E5E7EB]
dark:border-[#232531]

                bg-black

                flex items-center justify-between
              "
                    >

                      <div className="flex items-center gap-3">

                        <div
                          className="
                    w-7
                    h-7
                    rounded-md

                    bg-[#ECECEC]
dark:bg-[#2A2A31]

                    flex items-center justify-center
                  "
                        >

                          <RiComputerLine className="text-[#111111]
dark:text-white" />

                        </div>

                        <div className="text-left">

                          <p className="text-[#111111]
dark:text-white text-[15px] font-semibold">
                            Ultrawide
                          </p>

                          <p className="text-[#666]
dark:text-[#A1A1AA] text-[13px]">
                            (Cinematic video)
                          </p>

                        </div>

                      </div>

                      <RiArrowDownSLine className="text-[#777] text-[20px]" />

                    </button>

                  </div>

                </div>

                {/* TERMS */}
                <div className="pt-2">

                  <label className="flex items-center gap-3 mb-5 cursor-pointer">

                    <input
                      type="checkbox"
                      className="
                w-[18px]
                h-[18px]

                accent-[#F3A412]
              "
                    />

                    <span className="text-[#111111]
dark:text-white text-[15px]">

                      I agree to the{" "}

                      <span className="text-[#F3A412] font-semibold">
                        Terms & Conditions
                      </span>

                      {" "}and{" "}

                      <span className="text-[#F3A412] font-semibold">
                        Privacy Policy.
                      </span>

                    </span>

                  </label>

                  <button
                    className="
              w-full
              h-[52px]
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
          p-6 xl:p-7

          bg-[#FAFAFA]
dark:bg-[#17171C]
        "
              >

                <h2
                  className="
            mb-4
            text-[18px]
            font-bold

            text-[#111111]
dark:text-white
          "
                >

                  Generated Result

                </h2>

                <div
                  className="
            h-[1150px]
            rounded-[18px]

            bg-[#ECECEC]
dark:bg-[#2A2A31]

            flex flex-col items-center justify-center
          "
                >

                  <RiImageLine
                    className="
              text-[70px]
              mb-5

              text-[#666]
            "
                  />

                  <p
                    className="
              text-[20px]
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
      <div className="bg-white dark:bg-black">

        <div className="px-4 pt-16 pb-10 mx-auto max-w-7xl">

          <div className="max-w-[1180px]">

            {/* TITLE */}
            <h2
              className="
          text-[30px]
          md:text-[52px]

          leading-[1.15]

          font-semibold

          text-[#F3A412]

          mb-3
        "
            >
              Perfect Daily Posts for Your Jewellery Shop
            </h2>

            {/* DESCRIPTION */}
            <div
              className="
          text-[15px]
          md:text-[16px]

          leading-[32px]

          text-[#52525B]
          dark:text-[#E4E4E7]
        "
            >

              <p className="mb-2">

                Every day, customers want to know the current gold and silver rates.
                Manually creating marketing graphics every morning takes time. Our{" "}

                <span
                  className="
              font-semibold

              text-[#111111]
              dark:text-white
            "
                >
                  AI Jewellery Rate Poster Generator
                </span>

                {" "}
                automates this by giving you stunningly beautiful posters that combine
                your daily rates, contact information, and specific product images.

              </p>

              {/* HOW IT WORKS */}
              <div className="mt-2">

                <h3
                  className="
              text-[18px]
              md:text-[19px]

              font-semibold

              text-[#111111]
              dark:text-white

              mb-1
            "
                >
                  How It Works
                </h3>

                <div className="space-y-[2px]">

                  <p>

                    <span
                      className="
                  font-bold

                  text-[#111111]
                  dark:text-white
                "
                    >
                      Enter Today's Rates:
                    </span>

                    {" "}
                    Fill in the rates for 24k, 22k, 18k, 14k Gold and Silver.
                    Use the Auto-Calculate feature using the 24k rate to speed things up!

                  </p>

                  <p>

                    <span
                      className="
                  font-bold

                  text-[#111111]
                  dark:text-white
                "
                    >
                      Add Your Details:
                    </span>

                    {" "}
                    Input your Tagline, Footer, Address, and Mobile Number.

                  </p>

                  <p>

                    <span
                      className="
                  font-bold

                  text-[#111111]
                  dark:text-white
                "
                    >
                      Upload Logo & Product:
                    </span>

                    {" "}
                    Upload your logo and a photo of a jewellery piece you wish to highlight.

                  </p>

                  <p>

                    <span
                      className="
                  font-bold

                  text-[#111111]
                  dark:text-white
                "
                    >
                      Choose a Style & Generate:
                    </span>

                    {" "}
                    Select from our premium prompt categories for your background style,
                    or describe exactly what you want, and hit generate!

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* HOW TO USE */}
      <section className="px-4 mx-auto mt-20 max-w-7xl">

        <div
          className="
      rounded-[32px]

      border

      border-[#E7E7E7]
      dark:border-[#232531]

      bg-[#FAFAFA]
      dark:bg-[#0B0B10]

      px-5
      md:px-10

      py-8
      md:py-10
    "
        >

          {/* HEADING */}
          <div className="mb-8">

            <div className="flex items-center gap-4 mb-3">

              <div
                className="
            w-[42px]
            h-[42px]

            rounded-2xl

            flex items-center justify-center

            bg-[#FFF4DE]
            dark:bg-[#2B2215]

            text-[#F3A412]
          "
              >
                <RiLightbulbFlashLine className="text-[20px]" />
              </div>

              <h2
                className="
            text-[30px]
            md:text-[44px]

            leading-tight
            font-extrabold

            text-[#F3A412]
          "
              >
                Best Practices for Best Results
              </h2>

            </div>

            <div className="w-[110px] h-[3px] rounded-full bg-[#F3A412]" />

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {[
              {
                title: "Enter the 24K rate first",
                text: "then use Auto-Calculate — this saves time and ensures mathematically correct purity-based rates for 22K, 18K, and 14K.",
              },

              {
                title: "Always add your logo and phone number",
                text: "— these are essential for daily rate posters shared on WhatsApp and social media. Without branding, the poster has no recall value.",
              },

              {
                title: "Use the daily date",
                text: "— rate posters are time-sensitive. Either leave the date field blank to auto-use today's date or override it manually.",
              },

              {
                title: "Upload a clean product image",
                text: "— one featured jewelry piece per poster gives it a professional, focused look.",
              },

              {
                title: "Choose style themes that match your brand",
                text: "— elegant gold themes for premium shops, festive themes during Diwali/Navratri season.",
              },

              {
                title: "Keep your Tagline short and memorable",
                text: "— “Trust in Every Karat” or “Where Tradition Meets Elegance” works better than long sentences.",
              },

              {
                title: "Generate fresh posters daily",
                text: "— rates change every day, so make this part of your morning routine for consistent WhatsApp marketing.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
            rounded-[24px]

            border

            border-[#E7E7E7]
            dark:border-[#232531]

            bg-white
            dark:bg-[#09090D]

            px-5
            md:px-6

            py-5

            transition-all duration-300

            hover:border-[#F3A412]

            hover:-translate-y-[2px]

            hover:shadow-[0_8px_25px_rgba(243,164,18,0.06)]
            dark:hover:shadow-[0_0_30px_rgba(243,164,18,0.08)]
          "
              >

                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div
                    className="
                min-w-[40px]
                h-[40px]

                rounded-full

                flex items-center justify-center

                bg-[#FFF8EA]
                dark:bg-[#17120A]

                text-[#F3A412]
              "
                  >
                    <RiCheckLine className="text-[20px]" />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3
                      className="
                  text-[18px]
                  md:text-[20px]

                  leading-[1.4]
                  font-bold

                  text-[#111111]
                  dark:text-white

                  mb-2
                "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                  text-[15px]
                  md:text-[16px]

                  leading-[31px]

                  text-[#5E5E66]
                  dark:text-[#A1A1AA]
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
        <div className="bg-[#075E54] w-14 h-14 rounded-full flex items-center justify-center text-[#111111]
dark:text-white text-3xl shadow-2xl cursor-pointer hover:scale-110 transition">
          <i className="ri-whatsapp-line"></i>
        </div>
      </div>

      <section className="mt-24">

        <div className="px-4 mx-auto max-w-7xl">

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

export default Poster;