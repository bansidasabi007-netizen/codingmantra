import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function VEO() {
  const navigate = useNavigate();

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
    question: "What is Google VEO?",
    answer:
      "VEO is Google's most advanced text-to-video generation model, designed to create high-quality, realistic videos from descriptive text prompts. Our script generator is optimized to create the kind of detailed visual descriptions that work best with models like VEO.",
  },
  {
    question: 'How do I use the generated script?',
    answer:
      "You can use the script in two ways: 1) As a storyboard and shot list for filming your own video. 2) Copy the 'Visual Description' for each scene and paste it directly into an AI text-to-video generator to create the video footage automatically.",
  },
  {
    question: 'Why is a strong hook important?',
    answer:
      "In short-form video, you have less than 3 seconds to capture a viewer's attention before they scroll away. A strong hook—a question, a bold statement, or a visually intriguing start—is essential to stopping the scroll and getting your message across.",
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
VEO-3 Video Script Generator (AI)
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
AI VEO-3 Video Script Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Instantly generate powerful scripts for short-form video ads, optimized for AI video generators like Google's VEO-3.

</p>
          </div>
</section>


<section className="max-w-6xl mx-auto mt-10">

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

    {/* HEADER */}
    <div className="flex items-center gap-3 mb-8">

      <i className="ri-video-line text-[#f4a000] text-[24px]" />

      <h2
        className="
          text-[22px]
          font-[700]
          text-zinc-900
          dark:text-white
        "
      >
        Video Script Generator
      </h2>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8">

      {/* LEFT SIDE */}
      <div>

        {/* TOPIC */}
        <div className="mb-6">

          <label
            className="
              block
              mb-3
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Video Topic or Product
          </label>

          <input
            type="text"
            placeholder={`e.g. 'a new brand of sustainable coffee'`}
            className="
              w-full
              h-[46px]
              rounded-[10px]
              border
              border-zinc-200
              dark:border-[#2a2d35]
              bg-zinc-50
              dark:bg-black
              px-4
              outline-none
              text-[14px]
              text-zinc-800
              dark:text-white
              placeholder:text-zinc-500
            "
          />
        </div>

        {/* DURATION */}
        <div className="mb-6">

          <div className="flex items-center justify-between mb-4">

            <label
              className="
                text-[15px]
                font-[600]
                text-zinc-900
                dark:text-white
              "
            >
              Target Duration (seconds)
            </label>

            <div
              className="
                w-[96px]
                h-[40px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                flex
                items-center
                justify-center
                text-[18px]
                font-[500]
                text-zinc-900
                dark:text-white
              "
            >
              8
            </div>
          </div>

          {/* RANGE */}
          <input
            type="range"
            min="0"
            max="60"
            defaultValue="8"
            className="
              w-full
              accent-[#f4a000]
              cursor-pointer
            "
          />
        </div>

        {/* LANGUAGE */}
        <div className="mb-5">

          <label
            className="
              block
              mb-3
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Language
          </label>

          <select
            className="
              w-full
              h-[46px]
              rounded-[10px]
              border
              border-zinc-200
              dark:border-[#2a2d35]
              bg-zinc-50
              dark:bg-black
              px-4
              outline-none
              text-[14px]
              font-[500]
              text-zinc-800
              dark:text-white
            "
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>

        {/* CREDIT CARD */}
        <div
          className="
            rounded-[14px]
            border
            border-zinc-200
            dark:border-[#252832]
            bg-zinc-50
            dark:bg-[#181920]
            p-4
            mb-5
          "
        >

          <div className="flex items-center justify-between gap-4">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-1">

                <i className="ri-bank-card-line text-[#f4a000] text-[20px]" />

                <span
                  className="
                    text-[15px]
                    font-[600]
                    text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  Credits:
                </span>

                <span
                  className="
                    text-[30px]
                    leading-none
                    font-[700]
                    text-[#f4a000]
                  "
                >
                  0
                </span>
              </div>

              <div className="flex items-center gap-2">

                <i className="ri-error-warning-line text-[13px] text-red-500" />

                <span
                  className="
                    text-[13px]
                    text-red-500
                  "
                >
                  Expired 18 days ago
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                h-[38px]
                px-5
                rounded-[10px]
                bg-[#f4a000]
                hover:bg-[#ffb41f]
                text-[14px]
                font-[600]
                text-black
                transition-all
                whitespace-nowrap
              "
            >
              Buy More
            </button>
          </div>
        </div>

        {/* TERMS */}
        <label className="flex items-start gap-3 mb-6 cursor-pointer">

          <input
            type="checkbox"
            className="
              mt-[3px]
              w-[17px]
              h-[17px]
              accent-[#f4a000]
            "
          />

          <span
            className="
              text-[15px]
              font-[500]
              text-zinc-800
              dark:text-white
            "
          >
            I agree to the{" "}

            <span className="text-[#f4a000]">
              Terms & Conditions
            </span>{" "}

            and{" "}

            <span className="text-[#f4a000]">
              Privacy Policy.
            </span>
          </span>
        </label>

        {/* GENERATE BUTTON */}
        <button
          className="
            w-full
            h-[50px]
            rounded-[10px]
            bg-[#f4a000]
            hover:bg-[#ffb41f]
            flex
            items-center
            justify-center
            gap-3
            text-[18px]
            font-[500]
            text-black
            transition-all
          "
        >
          <i className="ri-bank-card-line text-[18px]" />

          Not Enough Credits
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div>

        <h3
          className="
            text-[16px]
            font-[600]
            mb-3
            text-zinc-900
            dark:text-white
          "
        >
          AI Generated Script
        </h3>

        {/* OUTPUT BOX */}
        <div
          className="
            min-h-[530px]
            rounded-[14px]
            border
            border-zinc-200
            dark:border-[#252832]
            bg-zinc-100
            dark:bg-[#2a2b31]
            flex
            items-center
            justify-center
            p-6
          "
        >

          <div className="text-center">

            <i className="ri-video-line text-[52px] text-zinc-400 dark:text-zinc-500" />

            <p
              className="
                mt-5
                text-[22px]
                font-[400]
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Your video script will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto mt-14">

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
      From Idea to Viral Video Script in Seconds
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
        Video is the most engaging form of content on the internet, but creating
        it is hard. It requires a good idea, a compelling script, and a solid
        plan for visuals. Our AI Video Script Generator is designed to handle
        the heavy lifting, turning your simple topic into a structured,
        scene-by-scene script ready for production.
      </p>

      <p
        className="
          pt-[2px]
          font-[500]
          text-zinc-900
          dark:text-white
        "
      >
        Optimized for the AI Video Revolution
      </p>

      <p>
        This tool is specifically designed to work with cutting-edge
        text-to-video AI models like Google VEO. The "Visual Description" for
        each scene is crafted to be a perfect prompt for these models, allowing
        you to generate not just the script, but the video itself using AI.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Strong Hooks:
        </span>{" "}
        Every script starts with an attention-grabbing hook to stop viewers
        from scrolling.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Structured Scenes:
        </span>{" "}
        The script is broken down into a clear sequence of scenes, each with
        its own visual description, voiceover, and on-screen text.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Clear Call-to-Action:
        </span>{" "}
        Every script ends with a powerful call-to-action to drive viewers to
        the next step.
      </p>
    </div>
  </div>
</section>


<section className="max-w-6xl mx-auto mt-14">

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
          desc: `your video concept in What's your video about? (e.g., 'a fitness brand promo').`,
        },
        {
          number: 2,
          title: "Select",
          desc: `the Video Type — Ad, Story, Tutorial, or Explainer.`,
        },
        {
          number: 3,
          title: "Choose",
          desc: `your target platform from Platform — TikTok, Reels, or YouTube Shorts.`,
        },
        {
          number: 4,
          title: "Set",
          desc: `the Duration — 15, 30, or 60 seconds.`,
        },
        {
          number: 5,
          title: "Click",
          desc: `Generate Script to get a scene-by-scene breakdown.`,
        },
        {
          number: 6,
          title: "Use",
          desc: `the Visual Descriptions with AI video generators like Google VEO.`,
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



<section className="max-w-6xl mx-auto mt-14">

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
        title: "Start with a strong hook",
        desc: "— the first 3 seconds determine if viewers stay.",
      },
      {
        title: "Be specific in your description",
        desc: `— 'coffee shop vibes' is vague; 'cozy corner café with warm lighting' gets better results.`,
      },
      {
        title: "Match duration to platform",
        desc: "— 15s for TikTok, 30s for Reels, 60s for YouTube Shorts previews.",
      },
      {
        title: "Copy visual prompts to VEO",
        desc: "— paste the Visual Description field directly into AI video generators.",
      },
      {
        title: "Keep stories simple",
        desc: "— short-form video works best with one clear message.",
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


<section className="max-w-6xl mx-auto mt-14">

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
          title: "WhatsApp Widget Generator",
          icon: "ri-message-2-line",
          powerful: true,
        },
        {
          title: "Social Media Post Generator (AI)",
          icon: "ri-share-line",
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
            flex
            items-center
            justify-between
            gap-4
            hover:border-[#f4a00055]
            transition-all
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

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
              <i className={`${tool.icon} text-[18px]`} />
            </div>

            {/* TEXT */}
            <div className="text-left">

              <div className="flex flex-wrap items-center gap-3">

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
            className="transition-all text-zinc-500 dark:text-zinc-400 group-hover:translate-x-1"
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

export default VEO;


 