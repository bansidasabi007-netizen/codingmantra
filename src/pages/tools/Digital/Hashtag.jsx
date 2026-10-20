import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Hashtag() {
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
    question: "How many hashtags should I use in a post?",
    answer:
      "It varies by platform. For Instagram, you can use up to 30, and using a mix of popular and niche tags (around 15-25) is often effective. For Twitter (X), 1-3 highly relevant hashtags are best. For LinkedIn, 3-5 professional hashtags are recommended.",
  },
  {
    question: 'Should I put hashtags in the caption or the first comment?',
    answer:
      "On Instagram, this is a matter of aesthetic preference. Both methods are equally effective for discoverability. Putting them in the first comment can make your caption look cleaner.",
  },
  {
    question: "What's the difference between a popular and a niche hashtag?",
    answer:
      "A popular hashtag (e.g., #marketing) has millions of posts and high traffic but is very competitive. Your post may get lost quickly. A niche hashtag (e.g., #smallbizmarketingtips) has fewer posts but connects you with a more targeted and engaged audience. A good strategy uses a mix of both.",
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
Hashtag Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
AI Hashtag Generator         </h1>

            <p
              className="max-w-2xl mx-auto mt-5 text-xl leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Instantly create a list of powerful hashtags to increase the visibility of your social media posts.
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
    <div className="flex items-center gap-3">

      <div className="text-[#f4a000]">
        <i className="ri-magic-line text-[26px]" />
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
        Hashtag Generator
      </h2>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-8 mt-8">

      {/* LEFT SIDE */}
      <div className="space-y-6">

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
            Topic or Primary Keyword
          </label>

          <input
            type="text"
            placeholder="e.g., 'small business marketing' or 'healthy recipes'"
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
              text-[14px]
              text-zinc-900
              dark:text-white
              placeholder:text-zinc-500
            "
          />
        </div>

        {/* PLATFORM */}
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
            Social Media Platform
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
              text-[14px]
              text-zinc-900
              dark:text-white
            "
          >
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Twitter</option>
            <option>YouTube</option>
            <option>TikTok</option>
          </select>
        </div>

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
              h-[50px]
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
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>

        {/* BUTTON */}
        <button
          className="
            w-full
            h-[50px]
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
          Generate Hashtags
        </button>
      </div>

      {/* RIGHT SIDE */}
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
          Generated Hashtags
        </label>

        <div
          className="
            min-h-[350px]
            rounded-[14px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-zinc-100
            dark:bg-[#2a2a2f]
            flex
            flex-col
            items-center
            justify-center
            text-center
            p-6
          "
        >

          <div className="text-zinc-500 dark:text-zinc-400">
            <i className="ri-magic-line text-[58px]" />
          </div>

          <p
            className="
              mt-5
              text-[16px]
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Hashtags will appear here.
          </p>
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
      Why Hashtags Are Crucial for Your Social Strategy
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
        Hashtags are more than just a trend; they are a powerful tool for
        categorizing content and increasing its discoverability on platforms
        like Instagram, Twitter (X), and LinkedIn. When used correctly,
        hashtags act like a search engine, connecting your content with users
        who are actively interested in your niche.
      </p>

      <p
        className="
          pt-1
          font-[500]
          text-zinc-900
          dark:text-white
        "
      >
        How This AI Hashtag Generator Works
      </p>

      <p>
        Finding the right mix of hashtags can be time-consuming. Our AI tool
        simplifies this process by:
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Analyzing Your Topic:
        </span>{" "}
        It understands the core concepts of your topic to find relevant
        keywords.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Identifying Popular & Niche Tags:
        </span>{" "}
        The AI generates a balanced list that includes broad, high-traffic
        hashtags as well as more specific, niche hashtags to target a dedicated
        audience.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          Providing Variety:
        </span>{" "}
        You get a list of 15-20 hashtags, giving you plenty of options to
        choose from for different posts and platforms.
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
          title: "Enter",
          desc: `your main topic or keyword in the Topic field (e.g., 'digital marketing', 'coffee shop', 'fitness tips').`,
        },
        {
          number: 2,
          title: "Select",
          desc: `your target platform from Platform — Instagram, Twitter (X), LinkedIn, or TikTok.`,
        },
        {
          number: 3,
          title: "Choose",
          desc: `your preferred language for the hashtags from the Language dropdown.`,
        },
        {
          number: 4,
          title: "Click",
          desc: `Generate Hashtags to get a list of 15-20 relevant hashtags.`,
        },
        {
          number: 5,
          title: "Copy",
          desc: `your favorites and paste them into your post caption or first comment.`,
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
        title: "Mix popular and niche hashtags",
        desc: "— use a combination of broad tags (#marketing) and specific tags (#digitalmarketingtips2026) for better reach.",
      },
      {
        title: "Check trending tags",
        desc: `— include 1-2 trending hashtags relevant to your topic for viral potential.`,
      },
      {
        title: "Don't overuse hashtags",
        desc: "— Instagram allows 30, but 15-20 well-chosen tags perform better than a crowded list.",
      },
      {
        title: "Update regularly",
        desc: "— refresh your hashtag sets every few weeks to avoid looking spammy and to target new trends.",
      },
      {
        title: "Research competitors",
        desc: "— check what hashtags successful accounts in your niche are using.",
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

export default Hashtag;


 