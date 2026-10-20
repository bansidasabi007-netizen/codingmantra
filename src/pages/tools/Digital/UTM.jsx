import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function UTM() {

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
  question: "Why is consistency important when using UTM codes?",
  answer: `Consistency is key. For example, always using 'facebook' instead of sometimes using 'Facebook' or 'fb.com' ensures that Google Analytics groups all the traffic from that source together. Using a UTM builder like this one helps maintain that consistency.`,
},
  {
  question: "Where can I see the UTM data?",
  answer:
    `In Google Analytics (GA4), you can find this data under Reports > Acquisition > Traffic acquisition. You can then view your data by "Session source / medium," "Session campaign," and other dimensions.`,
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
UTM Builder
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
UTM Campaign URL Builder </h1>

            <p
              className="max-w-2xl mx-auto mt-5 text-xl leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Create custom URLs with UTM parameters to track your marketing campaigns in Google Analytics.
</p>
          </div>
</section>


<section className="max-w-5xl mx-auto mt-14">

  <div
    className="
      rounded-[22px]
      border
      border-zinc-200
      dark:border-[#23262f]
      bg-white
      dark:bg-[#12131a]
      p-5
      sm:p-6
      lg:p-7
    "
  >

    {/* HEADER */}
    <div className="flex items-center gap-3 mb-8">

      <div className="text-[#f4a000]">
        <i className="ri-links-line text-[24px]" />
      </div>

      <div>

        <h2
          className="
            text-[30px]
            font-[700]
            tracking-[-1px]
            text-zinc-900
            dark:text-white
          "
        >
          UTM Campaign URL Builder
        </h2>

        <p
          className="
            mt-1
            text-[15px]
            text-zinc-600
            dark:text-zinc-400
          "
        >
          Fill in the fields below to generate your campaign URL.
        </p>
      </div>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="space-y-5">

        {/* WEBSITE URL */}
        <div>

          <label
            className="
              block
              mb-2
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Website URL{" "}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            defaultValue="https://codingmantra.com"
            className="
              w-full
              h-[54px]
              rounded-[12px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-zinc-50
              dark:bg-black
              px-4
              text-[15px]
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-[#f4a000]
              transition-all
            "
          />
        </div>

        {/* SOURCE + MEDIUM */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* SOURCE */}
          <div>

            <label
              className="
                block
                mb-2
                text-[15px]
                font-[600]
                text-zinc-900
                dark:text-white
              "
            >
              Campaign Source{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              defaultValue="google"
              className="
                w-full
                h-[54px]
                rounded-[12px]
                border
                border-zinc-200
                dark:border-[#23262f]
                bg-zinc-50
                dark:bg-black
                px-4
                text-[15px]
                text-zinc-900
                dark:text-white
                outline-none
                focus:border-[#f4a000]
                transition-all
              "
            />
          </div>

          {/* MEDIUM */}
          <div>

            <label
              className="
                block
                mb-2
                text-[15px]
                font-[600]
                text-zinc-900
                dark:text-white
              "
            >
              Campaign Medium{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              defaultValue="cpc"
              className="
                w-full
                h-[54px]
                rounded-[12px]
                border
                border-zinc-200
                dark:border-[#23262f]
                bg-zinc-50
                dark:bg-black
                px-4
                text-[15px]
                text-zinc-900
                dark:text-white
                outline-none
                focus:border-[#f4a000]
                transition-all
              "
            />
          </div>
        </div>

        {/* CAMPAIGN NAME */}
        <div>

          <label
            className="
              block
              mb-2
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Campaign Name{" "}
            <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            defaultValue="summer_sale"
            className="
              w-full
              h-[54px]
              rounded-[12px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-zinc-50
              dark:bg-black
              px-4
              text-[15px]
              text-zinc-900
              dark:text-white
              outline-none
              focus:border-[#f4a000]
              transition-all
            "
          />
        </div>

        {/* TERM */}
        <div>

          <label
            className="
              block
              mb-2
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Campaign Term (Optional)
          </label>

          <input
            type="text"
            placeholder="e.g. running+shoes"
            className="
              w-full
              h-[54px]
              rounded-[12px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-zinc-50
              dark:bg-black
              px-4
              text-[15px]
              text-zinc-900
              dark:text-white
              placeholder:text-zinc-500
              outline-none
              focus:border-[#f4a000]
              transition-all
            "
          />
        </div>

        {/* CONTENT */}
        <div>

          <label
            className="
              block
              mb-2
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Campaign Content (Optional)
          </label>

          <input
            type="text"
            placeholder="e.g. logo_link, text_link"
            className="
              w-full
              h-[54px]
              rounded-[12px]
              border
              border-zinc-200
              dark:border-[#23262f]
              bg-zinc-50
              dark:bg-black
              px-4
              text-[15px]
              text-zinc-900
              dark:text-white
              placeholder:text-zinc-500
              outline-none
              focus:border-[#f4a000]
              transition-all
            "
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>

        <label
          className="
            block
            mb-2
            text-[15px]
            font-[600]
            text-zinc-900
            dark:text-white
          "
        >
          Generated Campaign URL
        </label>

        {/* OUTPUT BOX */}
        <div
          className="
            relative
            rounded-[14px]
            border
            border-zinc-200
            dark:border-[#23262f]
            bg-zinc-50
            dark:bg-black
            min-h-[180px]
            p-4
          "
        >

          {/* COPY ICON */}
          <button
            className="
              absolute
              top-4
              right-4
              text-zinc-500
              hover:text-[#f4a000]
              transition-all
            "
          >
            <i className="ri-file-copy-line text-[20px]" />
          </button>

          {/* URL */}
          <p
            className="
              break-all
              pr-10
              text-[15px]
              leading-[1.8]
              text-zinc-900
              dark:text-white
            "
          >
            https://codingmantra.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale
          </p>
        </div>

        {/* COPY BUTTON */}
        <button
          className="
            mt-5
            w-full
            h-[56px]
            rounded-[12px]
            bg-[#f4a000]
            hover:bg-[#ffb41f]
            text-[16px]
            font-[700]
            text-black
            transition-all
          "
        >
          Copy URL
        </button>
      </div>
    </div>
  </div>
</section>

<section className="max-w-5xl mx-auto mt-14">

  <div className="space-y-2">

    {/* TITLE */}
    <h2
      className="
        text-[30px]
        sm:text-[35px]
        leading-[1.1]
        font-[700]
        tracking-[-1px]
        text-[#f4a000]
      "
    >
     What Are UTM Codes and Why Are They Essential?
    </h2>

    {/* CONTENT */}
    <div
      className="
        space-y-1.5
        text-[14px]
        sm:text-[15px]
        leading-[1.7]
        text-zinc-700
        dark:text-zinc-300
      "
    >

      <p>
      UTM codes (Urchin Tracking Module parameters) are small snippets of text added to the end of a URL to help you track the effectiveness of your digital marketing campaigns. When a user clicks a link with UTM parameters, Google Analytics (and other analytics tools) can tell you exactly where that user came from and which campaign prompted their visit.
      </p>

      <p
        className="
          font-[600]
          text-zinc-900
          dark:text-white
        "
      >
      Without them, all your traffic from a social media post, an email newsletter, and a paid ad might just show up as "Direct" or "Referral," making it impossible to measure your return on investment (ROI).
      </p>

      <p>
       The 5 UTM Parameters Explained
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
        utm_source (Required): 
        </span>{" "}
        Identifies the source of your traffic, such as 'google', 'facebook', or 'newsletter'.
      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
        utm_medium (Required):
        </span>{" "}
       Identifies the marketing medium, like 'cpc' (cost-per-click), 'email', or 'social'.

      </p>

      <p>
        <span
          className="
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
utm_campaign (Required):
        </span>{" "}
         Identifies the specific campaign you're running, such as 'summer_sale_2025' or 'new_product_launch'.

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
          desc: `your product or service name in What's the name of your product/service?`,
        },
        {
          number: 2,
          title: "Describe",
          desc: `what makes it unique in Briefly describe your product/service — key features and benefits.`,
        },
        {
          number: 3,
          title: "Specify",
          desc: `your target audience in Who is your target audience? (e.g., 'small business owners', 'new parents').`,
        },
        {
          number: 4,
          title: "Name",
          desc: `your desired action in Call-to-action (e.g., 'Sign up now', 'Get a free trial').`,
        },
        {
          number: 5,
          title: "Choose",
          desc: `your ad platform — Google Ads or Facebook Ads — from Where will these ads appear?`,
        },
        {
          number: 6,
          title: "Click",
          desc: `Generate Ad Copy to get multiple headline and description variations.`,
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

export default UTM;


 