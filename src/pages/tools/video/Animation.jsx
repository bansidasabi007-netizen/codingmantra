import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { RiHome5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { RiMovie2Line, RiImage2Line, RiUpload2Line, RiGalleryLine, RiVideoLine, RiArrowDownSLine, RiSparklingLine, RiMagicLine, RiTimerLine, RiFlashlightLine, RiSparkling2Line, RiLayoutHorizontalLine, RiLayoutVerticalLine, RiLoginBoxLine, } from "react-icons/ri";
import { RiLightbulbFlashLine, RiCheckLine, RiSearchLine, RiFlashlightFill, } from "react-icons/ri";
import { RiLightbulbLine, } from "react-icons/ri";
import { RiArrowRightLine, RiArrowLeftLine, } from "react-icons/ri";


function Animation() {
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  // Theme Change Function
  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };


  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
      {/* Navbar Section */}
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
              to="/tools/video-tools"
              className="
          text-[15px]

          text-[#666]
          dark:text-gray-400

          hover:text-[#F3A412]

          transition-all duration-300
        "
            >
              Video Tools
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
              AI Logo Animation Generator

            </span>
          </div>
        </div>
      </div>

      <main className="px-4 pb-20 mt-10">

        {/* HERO SECTION */}
<div className="max-w-6xl py-4 mx-auto mb-5 text-center">

  {/* TITLE */}
  <h1
    className="
      text-[42px]
      md:text-[64px]
      font-bold
      leading-tight
      text-[#F3A412]
    "
  >
   AI Logo Animation Generator
  </h1>

  {/* SUBTITLE */}
  <p
    className="
      max-w-4xl
      mx-auto
      mt-5
      text-[20px]
      text-slate-700
      dark:text-gray-300
    "
  >
    Create captivating festival video greetings with AI.
    Upload an image, choose a style,
    and spread the joy with a professional cinematic video.
  </p>

</div>

       <div className="
  max-w-5xl
  mx-auto
  rounded-2xl
  border
  border-slate-200 dark:border-[#232531]
  bg-white dark:bg-[#14141B]
  p-6
">

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-2">

            <RiMovie2Line className="text-3xl text-[#F3A412]" />

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Logo Animation Studio
            </h2>

          </div>

          <p className="mb-8 text-slate-500 dark:text-gray-400">
            Create professional logo animations with AI-powered video generation
          </p>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT SIDE */}
            <div>

              {/* UPLOAD */}
              <div>

                <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">
                  Your Logo (PNG with transparent background)
                </h3>

                <div className="
                h-[255px]
                rounded-xl
               bg-slate-100 dark:bg-[#2A2A2F]
                border border-slate-200 dark:border-[#2E313D]
                flex flex-col items-center justify-center
              ">

                  <RiImage2Line className="text-6xl text-slate-400 dark:text-gray-500" />

                  <p className="mt-4 text-xl font-semibold text-slate-500 dark:text-gray-400">
                    Upload Your Logo
                  </p>

                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-2 mt-3">

                  <button className="
                  h-[48px]
                  rounded-xl
                  border border-slate-200 dark:border-[#2B2E39]
                  bg-white dark:bg-black
                  text-slate-900 dark:text-white
                  font-semibold
                  flex items-center justify-center gap-3
                  hover:border-[#F3A412]
                  transition-all
                ">

                    <RiUpload2Line className="text-lg" />

                    Upload Logo

                  </button>

                  <button className="
                  h-[48px]
                  rounded-xl
                  border border-slate-200 dark:border-[#2B2E39]
                  bg-white dark:bg-black
                  text-slate-400 dark:text-gray-500
                  font-semibold
                  flex items-center justify-center gap-3
                ">

                    <RiGalleryLine className="text-lg" />

                    Cloud Gallery

                  </button>

                </div>

              </div>

              {/* DIVIDER */}
              <div className="my-6 border-t border-slate-200 dark:border-[#232531]" />

              {/* DROPDOWNS */}
              <div className="mb-6">

                <label className="block mb-3 text-base font-semibold text-slate-900 dark:text-white">
                  Popular Style Instructions (Optional)
                </label>

                <div className="grid grid-cols-2 gap-3">

                  {/* CATEGORY */}
                  <div className="relative">

                    <button
                      onClick={() =>
                        setShowCategory(!showCategory)
                      }
                      className="
                      w-full
                      h-[50px]
                      rounded-xl
                      border border-slate-200 dark:border-[#232531]
                      bg-white dark:bg-black
                      px-4
                      flex items-center justify-between
                      text-slate-900 dark:text-white
                    "
                    >

                      Select a Category...

                      <RiArrowDownSLine
                        className={`
                        text-2xl
                        transition-all
                        ${showCategory ? "rotate-180" : ""}
                      `}
                      />

                    </button>

                    {showCategory && (

                      <div className="
                      absolute
                      top-[58px]
                      left-0
                      w-full
                      rounded-xl
                      border border-slate-200 dark:border-[#232531]
                      bg-white dark:bg-[#111318]
                      overflow-hidden
                      z-50
                    ">

                        {[
                          "Cinematic",
                          "Luxury",
                          "Gaming",
                          "Minimal",
                        ].map((item, i) => (

                          <div
                            key={i}
                            className="
                            px-4 py-3
                            text-slate-900 dark:text-white
                            cursor-pointer
                            hover:bg-slate-100 dark:hover:bg-[#1A1D24]
                          "
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                  {/* INSTRUCTION */}
                  <div className="relative">

                    <button
                      onClick={() =>
                        setShowInstruction(!showInstruction)
                      }
                      className="
                      w-full
                      h-[50px]
                      rounded-xl
                      border border-slate-200 dark:border-[#232531]
                      bg-white dark:bg-black
                      px-4
                      flex items-center justify-between
                      text-slate-400 dark:text-gray-500
                    "
                    >

                      Select Instruction...

                      <RiArrowDownSLine
                        className={`
                        text-2xl
                        transition-all
                        ${showInstruction ? "rotate-180" : ""}
                      `}
                      />

                    </button>

                    {showInstruction && (

                      <div className="
                      absolute
                      top-[58px]
                      left-0
                      w-full
                      rounded-xl
                      border border-slate-200 dark:border-[#232531]
                      bg-white dark:bg-[#111318]
                      overflow-hidden
                      z-50
                    ">

                        {[
                          "Epic Reveal",
                          "Neon Glow",
                          "Liquid Metal",
                          "Golden Shine",
                        ].map((item, i) => (

                          <div
                            key={i}
                            className="
                            px-4 py-3
                            text-slate-900 dark:text-white
                            cursor-pointer
                            hover:bg-slate-100 dark:hover:bg-[#1A1D24]
                          "
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                </div>

              </div>

              {/* TEXTAREA */}
              <div className="mb-6">

                <div className="flex items-center justify-between mb-3">

                  <label className="text-base font-semibold text-slate-900 dark:text-white">
                    Describe the Animation
                  </label>

                  <div className="flex gap-2">

                    <button className="
                    h-[40px]
                    px-4
                    rounded-xl
                    border border-slate-200 dark:border-[#232531]
                    bg-slate-100 dark:bg-[#1B1B22]
                    text-slate-400 dark:text-gray-500
                    flex items-center gap-2
                  ">

                      <RiSparklingLine />

                      Generate

                    </button>

                    <button className="
                    h-[40px]
                    px-4
                    rounded-xl
                    border border-slate-200 dark:border-[#232531]
                    bg-white dark:bg-black
                    text-slate-900 dark:text-white
                    flex items-center gap-2
                  ">

                      <RiMagicLine />

                      Enhance

                    </button>

                  </div>

                </div>

                <textarea
                  rows={4}
                  className="
                  w-full
                  rounded-xl
                  border border-slate-200 dark:border-[#232531]
                  bg-white dark:bg-black
                  px-4 py-3
                  text-slate-900 dark:text-white
                  outline-none
                  resize-none
                "
                  defaultValue="A cinematic 3D reveal of the logo, forming from liquid metal with dramatic lighting."
                />

              </div>

              {/* VOICE */}
              <div className="mb-6">

                <label className="block mb-3 text-base font-semibold text-slate-900 dark:text-white">
                  Dialogue / Voiceover (Optional)
                </label>

                <textarea
                  rows={3}
                  placeholder='e.g., "Innovation, simplified."'
                  className="
                  w-full
                  rounded-xl
                  border border-slate-200 dark:border-[#232531]
                  bg-white dark:bg-black
                  px-4 py-3
                  text-slate-900 dark:text-white
                  outline-none
                  resize-none
                "
                />

              </div>

              {/* MUSIC */}
              <div className="mb-6">

                <label className="block mb-3 text-base font-semibold text-slate-900 dark:text-white">
                  Music / Sound Suggestion (Optional)
                </label>

                <textarea
                  rows={3}
                  className="
                  w-full
                  rounded-xl
                  border border-slate-200 dark:border-[#232531]
                  bg-white dark:bg-black
                  px-4 py-3
                  text-slate-900 dark:text-white
                  outline-none
                  resize-none
                "
                  defaultValue="Engaging and Interactive"
                />

              </div>

              {/* DURATION */}
              <div className="mb-6">

                <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
                  Video Duration
                </h3>

                <div className="grid grid-cols-3 gap-3">

                  {[
                    { time: "4s", cr: "120 cr", active: true },
                    { time: "6s", cr: "160 cr" },
                    { time: "8s", cr: "200 cr" },
                  ].map((item, i) => (

                    <div
                      key={i}
                      className={`
                      border
                      rounded-xl
                      p-4
                      text-center
                      cursor-pointer
                      ${item.active
                          ? "border-[#F3A412]"
                          : "border-[#232531]"
                        }
                    `}
                    >

                      <RiTimerLine className="mx-auto mb-2 text-xl text-slate-900 dark:text-white" />

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.time}
                      </h4>

                      <p className="mt-1 text-slate-500 dark:text-gray-400">
                        {item.cr}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* MODEL */}
              <div className="mb-6">

                <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
                  Model Selection
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  <div className="
                  border border-[#F3A412]
                  rounded-xl
                  p-5
                  text-center
                ">

                    <RiFlashlightLine className="mx-auto mb-3 text-3xl text-[#F3A412]" />

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Standard
                    </h4>

                    <p className="mt-2 text-slate-500 dark:text-gray-400">
                      ~60 seconds Waiting
                    </p>

                  </div>

                  <div className="
                  border border-slate-200 dark:border-[#232531]
                  rounded-xl
                  p-5
                  text-center
                ">

                    <RiSparkling2Line className="mx-auto mb-3 text-3xl text-blue-500" />

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Pro
                    </h4>

                    <p className="mt-2 text-slate-500 dark:text-gray-400">
                      ~3-5 minutes Waiting
                    </p>

                  </div>

                </div>

              </div>

              {/* ASPECT */}
              <div>

                <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-white">
                  Aspect Ratio
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  <div className="
                  border border-slate-200 dark:border-[#232531]
                  rounded-xl
                  p-6
                  text-center
                ">

                    <RiLayoutHorizontalLine className="mx-auto mb-4 text-5xl text-[#F3A412]" />

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      16:9
                    </h4>

                    <p className="mt-2 text-slate-500 dark:text-gray-400">
                      Landscape
                    </p>

                  </div>

                  <div className="
                  border border-[#F3A412]
                  rounded-xl
                  p-6
                  text-center
                ">

                    <RiLayoutVerticalLine className="mx-auto mb-4 text-5xl text-[#F3A412]" />

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      9:16
                    </h4>

                    <p className="mt-2 text-slate-500 dark:text-gray-400">
                      Portrait
                    </p>

                  </div>

                </div>

              </div>

              {/* TERMS */}
              <div className="flex items-center gap-3 mt-6">

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#F3A412]"
                />

                <p className="text-slate-900 dark:text-white">

                  I agree to the{" "}

                  <span className="font-semibold text-[#F3A412]">
                    Terms & Conditions
                  </span>{" "}

                  and{" "}

                  <span className="font-semibold text-[#F3A412]">
                    Privacy Policy
                  </span>

                </p>

              </div>

              {/* BUTTON */}
              <button className="
              w-full
              h-[56px]
              mt-5
              rounded-xl
              bg-[#F3A412]
              text-black
              font-bold
              text-lg
              flex items-center justify-center gap-3
            ">

                <RiLoginBoxLine className="text-2xl" />

                Login to Generate

              </button>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <h3 className="mb-3 text-base font-semibold text-slate-900 dark:text-white">
                Generated Video Preview
              </h3>

              <div className="
              h-[255px]
              rounded-xl
             bg-slate-100 dark:bg-[#2A2A2F]
              border border-slate-200 dark:border-[#2E313D]
              flex flex-col items-center justify-center
            ">

                <RiVideoLine className="text-6xl text-slate-400 dark:text-gray-500" />

                <p className="mt-4 text-xl font-semibold text-slate-500 dark:text-gray-400">
                  Your video will appear here
                </p>

                <p className="mt-2 text-slate-400 dark:text-gray-500">
                  Configure your settings and click Generate
                </p>

              </div>

              {/* TIPS */}
              <div className="
              p-5
              mt-4
              rounded-xl
              bg-slate-100 dark:bg-[#181820]
              border border-slate-200 dark:border-[#232531]
            ">

                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                  💡 Tips for best results
                </h3>

                <ul className="space-y-3 text-slate-500 dark:text-gray-400">

                  <li>
                    • Use a high-resolution PNG logo with transparent background.
                  </li>

                  <li>
                    • Avoid complex logos with small text that disappears when moving.
                  </li>

                  <li>
                    • For "reveal" animations, keep the duration short (4-6s).
                  </li>

                  <li>
                    • Standard models generate faster but Pro has higher detail.
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* STEP SECTION */}
      <div className="max-w-5xl mx-auto mt-20">

        {/* HEADING */}
        <div className="flex items-center gap-4 mb-10">

          <div className="
      w-12 h-12
      rounded-xl
      bg-[#FFF4DB] dark:bg-[#1A1408]
      flex items-center justify-center
    ">

            <RiSparklingLine className="text-2xl text-[#F3A412]" />

          </div>

          <div>

            <h2 className="text-[46px] font-bold text-[#F3A412] leading-none">
              Step-by-Step: How to Use This Tool
            </h2>

            <div className="w-28 h-[3px] bg-[#5A3A00] mt-4 rounded-full"></div>

          </div>

        </div>

        {/* STEPS */}
        <div className="relative">

          {/* LINE */}
          <div className="
      absolute
      left-[22px]
      top-0
      bottom-0
      w-[2px]
      bg-slate-300 dark:bg-[#2B2B33]
    "></div>

          <div className="space-y-8">

            {[
              {
                number: "1",
                title: "Upload Your Logo",
                desc:
                  "Provide a high-quality image of your logo, preferably with a transparent background in PNG format for the cleanest results.",
              },

              {
                number: "2",
                title: "Choose an Animation Style",
                desc:
                  "Use our categorized prompt library or write your own custom prompt. Options include cinematic reveals, particle effects, glitch animations, and organic transformations.",
              },

              {
                number: "3",
                title: "Generate Animation",
                desc:
                  "Click generate and wait for the AI to create your logo animation. This typically takes a minute or more depending on complexity.",
              },

              {
                number: "4",
                title: "Download & Use",
                desc:
                  "Once ready, download your animated logo video and use it for video intros, social media, presentations, or anywhere you want a dynamic brand presence.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="relative flex gap-10"
              >

                {/* NUMBER */}
                <div className="
            relative z-10
            min-w-[46px]
            h-[46px]
            rounded-full
            border-2 border-[#F3A412]
            bg-white dark:bg-black
            flex items-center justify-center
            text-[#F3A412]
            font-bold
            text-lg
          ">

                  {item.number}

                </div>

                {/* CARD */}
                <div className="
            flex-1
            rounded-3xl
            border border-slate-200 dark:border-[#232531]
            bg-slate-100 dark:bg-[#111118]
            px-7 py-7
          ">

                  <h3 className="text-[22px] font-bold text-slate-900 dark:text-white mb-3">

                    {item.title}

                  </h3>

                  <p className="
              text-[18px]
              leading-[40px]
              text-slate-500 dark:text-gray-400
            ">

                    {item.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* BEST PRACTICES SECTION */}
      <div className="
  max-w-5xl
  mx-auto
  mt-20
  rounded-[32px]
  border border-slate-200 dark:border-[#232531]
  bg-slate-100 dark:bg-[#111118]
  px-12
  py-10
">

        {/* TOP */}
        <div className="mb-10">

          <div className="flex items-center gap-4">

            {/* ICON */}
            <div className="
        w-14 h-14
        rounded-2xl
        bg-[#FFF4DB] dark:bg-[#1A1408]
        flex items-center justify-center
      ">

              <RiLightbulbFlashLine className="text-[28px] text-[#F3A412]" />

            </div>

            {/* TITLE */}
            <div>

              <h2 className="
          text-[52px]
          font-bold
          leading-none
          text-[#F3A412]
        ">

                Best Practices for Best Results

              </h2>

              <div className="
          w-28
          h-[3px]
          rounded-full
          bg-[#5A3A00]
          mt-4
        "></div>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

          {[
            {
              title: "Use transparent PNGs",
              desc:
                "— a logo with a transparent background produces the cleanest animations without visible box artifacts.",
            },

            {
              title: "Start with prompt presets",
              desc:
                "— our categorized animation styles (cinematic, futuristic, organic) are designed to produce excellent results as a starting point.",
            },

            {
              title: "Describe materials and motion",
              desc:
                "— words like 'emerging from smoke,' 'liquid gold forming,' and 'glitch resolving' give the AI clear visual direction.",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="
          rounded-[26px]
          border border-slate-200 dark:border-[#232531]
          bg-white dark:bg-[#0B0B10]
          px-6
          py-3
       
        
        "
            >

              <div className="flex gap-5">

                {/* CHECK ICON */}
                <div className="
            min-w-[42px]
            h-[42px]
            rounded-full
            bg-white dark:bg-[#0B0B10]
            flex items-center justify-center
            mt-1
          ">

                  <RiCheckLine className="text-[22px] text-[#F3A412]" />

                </div>

                {/* CONTENT */}
                <div>

                  <h3 className="
              text-[22px]
              font-bold
              text-slate-900 dark:text-white
              mb-3
              leading-tight
            ">

                    {item.title}

                  </h3>

                  <p className="
              text-[17px]
              leading-[38px]
              text-slate-500 dark:text-gray-400
            ">

                    {item.desc}

                  </p>

                </div>

              </div>

            </div>

          ))}
        </div>
      </div>

      {/* CONTENT + FAQ SECTION */}
      <div className="max-w-5xl mx-auto mt-20">

        {/* CONTENT */}
        <div>

          <h2 className="
    text-[34px]
    leading-tight
    font-bold
    text-[#F3A412]
    mb-3
  ">

            Transform Your Static Logo into a Dynamic Animation

          </h2>

          <div className="
    text-[17px]
    leading-[34px]
    text-slate-900 dark:text-white
    space-y-2
  ">

            <p>
              A static logo is great, but an animated logo captures attention and
              conveys a sense of professionalism and dynamism. Our AI-powered tool
              allows you to create captivating logo animations for video intros,
              social media posts, presentations, and more—without needing any
              complex animation software.
            </p>

            <p>
              Whether you want a cinematic reveal, a futuristic glitch effect, or
              an organic transformation, the AI can generate it from a simple
              description and your logo image.
            </p>

            <p>
              Animated logos are increasingly essential in today's digital
              landscape. They serve as powerful branding assets for YouTube intros,
              corporate presentations, app splash screens, and social media
              content. With our tool, you can produce these assets in minutes
              rather than hiring a motion graphics designer.
            </p>

            <div className="pt-1">

              <h3 className="text-[22px] font-bold text-slate-900 dark:text-white mb-1">
                How It Works
              </h3>

              <div className="
        text-[17px]
        leading-[34px]
        text-slate-900 dark:text-white
        space-y-1
      ">

                <p>
                  <span className="font-bold">
                    Upload Your Logo:
                  </span>{" "}
                  Provide a high-quality image of your logo,
                  preferably with a transparent background.
                </p>

                <p>
                  <span className="font-bold">
                    Describe the Animation:
                  </span>{" "}
                  Use our categorized prompt library or write
                  your own custom prompt to describe the animation style.
                </p>

                <p>
                  <span className="font-bold">
                    Generate & Download:
                  </span>{" "}
                  The AI will create a short video clip based on your
                  instructions. Once ready, you can download your new
                  animated logo.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FAQ */}
        <div className="mt-14">

          <h2 className="
    text-[30px]
    font-bold
    text-[#F3A412]
    
  ">

            Frequently Asked Questions

          </h2>

          <div>

            {[
              {
                question: "What kind of logo image works best?",
                answer:
                  "Transparent PNG logos with high resolution work best. Clean logos without blurry edges produce the most professional animations.",
              },

              {
                question: "How do I write a good prompt for logo animation?",
                answer:
                  "Be descriptive about style, motion, lighting, and mood. Mention effects like cinematic reveal, smoke, neon glow, glitch, metallic particles, or futuristic transitions.",
              },

              {
                question: "How long does generation usually take?",
                answer:
                  "Standard generations usually complete within 1 minute, while Pro generations can take several minutes depending on animation complexity.",
              },

              {
                question: "Can I use generated animations commercially?",
                answer:
                  "Yes. You can use generated animations for branding, YouTube intros, presentations, social media marketing, and commercial projects.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="border-b border-[#232531]"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="flex items-center justify-between w-full py-4 text-left "
                >

                  <h3 className="
            text-[18px]
            font-semibold
            text-slate-900 dark:text-white
          ">

                    {item.question}

                  </h3>

                  <RiArrowDownSLine
                    className={`
              text-[26px]
              text-slate-500 dark:text-gray-400
              transition-all duration-300
              ${openFaq === i
                        ? "rotate-180 text-[#F3A412]"
                        : ""
                      }
            `}
                  />

                </button>

                {/* ANSWER */}
                <div
                  className={`
            overflow-hidden
            transition-all duration-300
            ${openFaq === i
                      ? "max-h-[250px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                    }
          `}
                >

                  <p className="
            pr-8
            text-[15px]
            leading-[30px]
            text-slate-500 dark:text-gray-400
          ">

                    {item.answer}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>

      {/* RELATED TOOLS */}
      <div className="mt-14">

        {/* RELATED TOOLS */}
        <div className="max-w-5xl mx-auto mt-14">

          {/* HEADING */}
          <div className="mb-6">

            <h2 className="
      flex items-center gap-3
      text-[34px]
      font-bold
      text-[#F3A412]
      mb-2
    ">

              <RiSparkling2Line className="text-[30px]" />
              Discover Related AI Tools

            </h2>

            <p className="
      text-[16px]
      leading-[30px]
      text-slate-500 dark:text-gray-400
      max-w-3xl
    ">

              Explore more AI-powered solutions to supercharge your
              e-commerce workflow and creative projects.

            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
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

              {
                title: "Product Videography",
                desc: "Generate professional, cinematic video clips for any product using AI.",
                type: "VIDEO",
              },

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
                title: "Jewellery All In One",
                desc: "Generate stunning jewellery try-on images with your product and model photos.",
                type: "IMAGE",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="
         border border-slate-200 dark:border-[#1E2230]
         bg-white dark:bg-[#080808]
          rounded-2xl
          bg-white dark:bg-[#080808]
          px-6
          py-5
          min-h-[215px]
          hover:border-[#F3A412]
          transition-all duration-300
          group
        "
              >

                {/* TOP */}
                <div className="flex items-center justify-between mb-5">

                  <div className="flex items-center gap-3">

                    {/* SEARCH ICON */}
                    <div className="
              w-10 h-10
              rounded-2xl
              bg-[#FFF4DB] dark:bg-[#1A1408]
              flex items-center justify-center
            ">

                      <RiSearchLine className="text-[#F3A412] text-[20px]" />

                    </div>

                    {/* TYPE */}
                    <div className="
              px-3 py-[4px]
              rounded-full
              border border-slate-200 dark:border-[#232531]
              text-[11px]
              text-slate-500 dark:text-gray-400
            ">

                      {item.type}

                    </div>

                  </div>

                  {/* BADGE */}
                  <div className="
            flex items-center gap-1
            px-3 py-[4px]
            rounded-full
            border border-[#5A3A00]
            bg-[#FFF4DB] dark:bg-[#1A1408]
            text-[#F3A412]
            text-[11px]
            font-semibold
          ">

                    <RiFlashlightFill className="text-[10px]" />
                    POWERFUL

                  </div>

                </div>

                {/* TITLE */}
                <h3 className="
          text-[20px]
          leading-[30px]
          font-bold
          text-slate-900 dark:text-white
          mb-3
          group-hover:text-[#F3A412]
          transition-all
        ">

                  {item.title}

                </h3>

                {/* DESC */}
                <p className="
          text-[15px]
          leading-[32px]
          text-slate-500 dark:text-gray-400
        ">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>


      </div>
      <Footer />
    </div>
  );
}

export default Animation;