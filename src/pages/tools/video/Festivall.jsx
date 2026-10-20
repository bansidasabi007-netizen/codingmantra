import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { RiHome5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { RiMovie2Line, RiArrowLeftLine, RiImage2Line, RiUpload2Line, RiGalleryLine, RiVideoLine, RiArrowDownSLine, RiSparklingLine, RiMagicLine, RiTimerLine, RiFlashlightLine, RiSparkling2Line, RiLayoutHorizontalLine, RiLayoutVerticalLine, RiLoginBoxLine, } from "react-icons/ri";
import { RiLightbulbFlashLine, RiCheckLine, RiSearchLine, RiFlashlightFill, RiVideoAddLine, RiImageAddLine, RiInformationLine,} from "react-icons/ri";



function Festivall() {
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


      <div className="px-4 mx-auto my-6 max-w-8xl">

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
              AI Festival Video Generator


            </span>
          </div>
        </div>
      </div>

      <main className="px-4 pb-20 mt-10">

        <div className="py-4 mx-auto mb-5 text-center max-w-7xl">

  {/* TITLE */}
  <h1
    className="
      text-[42px]
      md:text-[44px]
      font-bold
      leading-tight
      text-[#F3A412]
    "
  >
AI Festival Video Generator

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


{/* MAIN GENERATOR SECTION */}
<div className="w-full mt-10">

  <div
    className="
      w-full
      rounded-2xl
      border border-[#232531]
      bg-[#14141B]
      px-6
      py-7
    "
  >

    {/* HEADER */}
    <div className="mb-8">

      <h2 className="flex items-center gap-3 text-[28px] font-bold text-white">

        <RiVideoAddLine className="text-[#F3A412]" />
        Festival Video Generator

      </h2>

      <p className="mt-2 text-[16px] text-gray-400">

        Create stunning luxury festival greeting videos with AI-powered generation

      </p>

    </div>

    {/* TOP GRID */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

      {/* LEFT */}
      <div>

        {/* LABEL */}
        <h3 className="mb-3 text-[18px] font-semibold text-white">

          Reference Image

        </h3>

        {/* UPLOAD BOX */}
        <div
          className="
            h-[350px]
            rounded-2xl
            bg-[#2A2A2F]
            flex flex-col items-center justify-center
          "
        >

          <RiImageAddLine className="text-[70px] text-gray-500 mb-4" />

          <p className="text-[22px] text-gray-400">

            Upload Image

          </p>

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-3 mt-4">

          <button
            className="
              h-[52px]
              rounded-xl
              border border-[#232531]
              bg-black
              flex items-center justify-center gap-3
              text-white
              font-semibold
              hover:border-[#F3A412]
              transition-all
            "
          >

            <RiUpload2Line className="text-[20px]" />
            Upload Image

          </button>

          <button
            className="
              h-[52px]
              rounded-xl
              border border-[#232531]
              bg-black
              flex items-center justify-center gap-3
              text-gray-500
              font-semibold
            "
          >

            <RiGalleryLine className="text-[20px]" />
            Cloud Gallery

          </button>

        </div>

        {/* DIVIDER */}
        <div className="my-7 border-t border-[#232531]" />

        {/* DROPDOWNS */}
        <div>

          <label className="block mb-3 text-[18px] font-semibold text-white">

            Festival Style Instructions (Optional)

          </label>

          <div className="grid grid-cols-2 gap-3">

            <select
              className="
                h-[52px]
                rounded-xl
                border border-[#232531]
                bg-black
                px-4
                text-white
                outline-none
              "
            >
              <option>🪔 Akshaya Tritiya</option>
            </select>

            <select
              className="
                h-[52px]
                rounded-xl
                border border-[#232531]
                bg-black
                px-4
                text-white
                outline-none
              "
            >
              <option>Select Instruction...</option>
            </select>

          </div>

        </div>

        {/* PROMPT */}
        <div className="mt-8">

          <div className="flex items-center justify-between mb-3">

            <label className="text-[18px] font-semibold text-white">

              Describe the Video

            </label>

            <button
              className="
                h-[44px]
                px-5
                rounded-xl
                border border-[#232531]
                bg-black
                flex items-center gap-2
                text-white
                font-semibold
              "
            >

              <RiMagicLine />
              Enhance

            </button>

          </div>

          <textarea
            rows={4}
            className="
              w-full
              rounded-xl
              border border-[#232531]
              bg-black
              p-4
              text-white
              outline-none
              resize-none
            "
            defaultValue="A cinematic commercial shot of the subject, with dramatic lighting and soft bokeh."
          />

        </div>

        {/* DIALOG */}
        <div className="mt-8">

          <label className="block mb-3 text-[18px] font-semibold text-white">

            Dialogue / Voiceover (Optional)

          </label>

          <textarea
            rows={3}
            placeholder="e.g., 'Experience the future today.'"
            className="
              w-full
              rounded-xl
              border border-[#232531]
              bg-black
              p-4
              text-white
              placeholder:text-gray-500
              outline-none
              resize-none
            "
          />

        </div>

        {/* MUSIC */}
        <div className="mt-8">

          <label className="block mb-3 text-[18px] font-semibold text-white">

            Music / Sound Suggestion (Optional)

          </label>

          <textarea
            rows={3}
            className="
              w-full
              rounded-xl
              border border-[#232531]
              bg-black
              p-4
              text-white
              outline-none
              resize-none
            "
            defaultValue="Upbeat commercial background music"
          />

        </div>

        {/* DIVIDER */}
        <div className="my-7 border-t border-[#232531]" />

        {/* VIDEO DURATION */}
        <div>

          <h3 className="mb-4 text-[20px] font-bold text-white">

            Video Duration

          </h3>

          <div className="grid grid-cols-3 gap-4">

            {["4s", "6s", "8s"].map((item, i) => (

              <div
                key={i}
                className={`
                  h-[120px]
                  rounded-xl
                  border
                  flex flex-col items-center justify-center
                  cursor-pointer
                  ${
                    i === 0
                      ? "border-[#F3A412]"
                      : "border-[#232531]"
                  }
                `}
              >

                <RiTimerLine className="text-[22px] text-white mb-3" />

                <p className="text-[28px] font-bold text-white">

                  {item}

                </p>

                <p className="mt-1 text-[18px] text-gray-400">

                  {i === 0 ? "120 cr" : i === 1 ? "160 cr" : "200 cr"}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* MODEL */}
        <div className="mt-10">

          <h3 className="mb-4 text-[20px] font-bold text-white">

            Model Selection

          </h3>

          <div className="grid grid-cols-2 gap-4">

            <div
              className="
                h-[120px]
                rounded-xl
                border border-[#F3A412]
                flex flex-col items-center justify-center
              "
            >

              <RiFlashlightFill className="text-[28px] text-[#F3A412] mb-3" />

              <p className="text-[26px] font-bold text-white">

                Standard

              </p>

              <p className="text-[16px] text-gray-400 mt-1">

                ~60 seconds Waiting

              </p>

            </div>

            <div
              className="
                h-[120px]
                rounded-xl
                border border-[#232531]
                flex flex-col items-center justify-center
              "
            >

              <RiSparkling2Line className="text-[28px] text-blue-500 mb-3" />

              <p className="text-[26px] font-bold text-white">

                Pro

              </p>

              <p className="text-[16px] text-gray-400 mt-1">

                ~3-5 minutes Waiting

              </p>

            </div>

          </div>

        </div>

        {/* ASPECT */}
        <div className="mt-10">

          <h3 className="mb-4 text-[20px] font-bold text-white">

            Aspect Ratio

          </h3>

          <div className="grid grid-cols-2 gap-4">

            <div
              className="
                h-[160px]
                rounded-xl
                border border-[#F3A412]
                flex flex-col items-center justify-center
              "
            >

              <RiLayoutHorizontalLine className="text-[50px] text-[#F3A412]" />

              <p className="mt-4 text-[28px] font-bold text-white">

                16:9

              </p>

              <p className="text-[18px] text-gray-400">

                Landscape

              </p>

            </div>

            <div
              className="
                h-[160px]
                rounded-xl
                border border-[#232531]
                flex flex-col items-center justify-center
              "
            >

              <RiLayoutVerticalLine className="text-[50px] text-[#F3A412]" />

              <p className="mt-4 text-[28px] font-bold text-white">

                9:16

              </p>

              <p className="text-[18px] text-gray-400">

                Portrait

              </p>

            </div>

          </div>

        </div>

        {/* TERMS */}
        <div className="mt-8">

          <label className="flex items-center gap-3 text-[16px] text-white">

            <input type="checkbox" />

            I agree to the
            <span className="text-[#F3A412]">
              Terms & Conditions
            </span>
            and
            <span className="text-[#F3A412]">
              Privacy Policy
            </span>

          </label>

        </div>

        {/* BUTTON */}
        <button
          className="
            w-full
            h-[60px]
            rounded-xl
            bg-[#F3A412]
            text-black
            font-bold
            text-[20px]
            mt-6
            flex items-center justify-center gap-3
          "
        >

          <RiLoginBoxLine className="text-[24px]" />
          Sign In to Generate

        </button>

      </div>

      {/* RIGHT */}
      <div>

        {/* LABEL */}
        <h3 className="mb-3 text-[18px] font-semibold text-white">

          Video Result

        </h3>

        {/* PREVIEW */}
        <div
          className="
            h-[350px]
            rounded-2xl
            bg-[#2A2A2F]
            flex flex-col items-center justify-center
          "
        >

          <RiVideoLine className="text-[70px] text-gray-500 mb-4" />

          <p className="text-[28px] text-gray-400">

            Your video will appear here

          </p>

        </div>

        {/* TIPS */}
        <div
          className="
            mt-6
            rounded-2xl
            border border-[#232531]
            bg-[#181820]
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <RiInformationLine className="text-white text-[22px]" />

            <h3 className="text-[22px] font-bold text-white">

              Tips for best results

            </h3>

          </div>

          <ul className="space-y-3 text-[16px] leading-[32px] text-gray-400">

            <li>• Upload a high-quality, well lit reference photo.</li>

            <li>• Use cinematic prompts with clear festival themes.</li>

            <li>• Add music suggestions for better mood matching.</li>

            <li>• Pro mode gives higher quality output.</li>

          </ul>

        </div>

      </div>

    </div>

  </div>

</div>

      </main>

      {/* STEP SECTION */}
      <div className="w-full mt-20">

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

            <h2 className="text-[36px] font-bold text-[#F3A412] leading-none">
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
                title: "Select Festival",
                desc:
                  "Choose a festival preset (Diwali, Holi, Eid, etc.) or write a custom description of the desired atmosphere and visual style.",
              },

              {
                number: "2",
                title: "Upload Image & Configure",
                desc:
                  "Provide a clear photo of the product or logo you want to feature, and adjust video duration (4-8 seconds).",
              },

              {
                number: "3",
                title: "Generate Animation",
                desc:
                  "Click generate and wait for the AI to create your logo animation. This typically takes a minute or more depending on complexity.",
              },

              {
                number: "4",
                title: "Download & Share",
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
            px-7 py-2
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
  max-w-full
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
          text-[32px]
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
          py-2
       
        
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
      <div className="max-w-full mx-auto mt-20">

        {/* CONTENT */}
        <div>

          <h2 className="
    text-[34px]
    leading-tight
    font-bold
    text-[#F3A412]
    mb-3
  ">

           Bring Your Greetings to Life with AI Video


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
        <div className="max-w-full mx-auto mt-14">

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

export default Festivall;