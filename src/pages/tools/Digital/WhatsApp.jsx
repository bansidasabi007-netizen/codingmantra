import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function WhatsApp() {

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
WhatsApp Chat Widget Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
WhatsApp Chat Widget Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
Create a beautiful, customized WhatsApp chat widget for your website in minutes. No coding required.

</p>
          </div>
</section>


<section className="mx-auto mt-10 space-y-8 max-w-7xl">

  {/* ===================== */}
  {/* MY WIDGETS */}
  {/* ===================== */}
  <div
    className="
      rounded-[22px]
      border
      border-zinc-200
      dark:border-[#1c1f27]
      bg-white
      dark:bg-[#12131a]
      p-6
    "
  >

    {/* HEADER */}
    <div className="mb-6">

      <h2
        className="
          text-[22px]
          sm:text-[24px]
          font-[700]
          text-zinc-900
          dark:text-white
          mb-1
        "
      >
        My Widgets
      </h2>

      <p
        className="
          text-[14px]
          text-zinc-600
          dark:text-zinc-400
        "
      >
        View, edit, or create new widgets. You can create a maximum of 3 widgets.
      </p>
    </div>

    {/* BUTTON */}
    <button
      className="
        w-full
        h-[48px]
        rounded-[10px]
        bg-[#f4a000]
        hover:bg-[#ffb41f]
        flex
        items-center
        justify-center
        gap-3
        text-[16px]
        font-[600]
        text-black
        transition-all
      "
    >
      <i className="ri-file-add-line text-[18px]" />
      Create New Widget
    </button>

    {/* EMPTY */}
    <div
      className="
        pt-10
        pb-8
        text-center
        text-[18px]
        text-zinc-500
        dark:text-zinc-400
      "
    >
      You haven't saved any widgets yet.
    </div>
  </div>

  {/* ===================== */}
  {/* MAIN GRID */}
  {/* ===================== */}
  <div className="grid grid-cols-1 xl:grid-cols-[1fr_610px] gap-8 items-start">

    {/* ===================== */}
    {/* LEFT SIDE */}
    {/* ===================== */}
    <div className="space-y-8">

      {/* CREATE WIDGET */}
      <div
        className="
          rounded-[22px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#12131a]
          p-6
        "
      >

        {/* TITLE */}
        <h2
          className="
            text-[22px]
            sm:text-[24px]
            font-[700]
            mb-6
            text-zinc-900
            dark:text-white
          "
        >
          Create New Widget
        </h2>

        {/* TABS */}
        <div
          className="
            rounded-[12px]
            bg-zinc-100
            dark:bg-[#23242b]
            p-[4px]
            grid
            grid-cols-3
            gap-1
            mb-8
          "
        >

          {[
            {
              icon: "ri-file-list-line",
              title: "Content",
              active: true,
            },
            {
              icon: "ri-palette-line",
              title: "Design",
            },
            {
              icon: "ri-time-line",
              title: "Behavior",
            },
          ].map((tab, index) => (
            <button
              key={index}
              className={`
                h-[42px]
                rounded-[10px]
                flex
                items-center
                justify-center
                gap-2
                text-[15px]
                font-[600]
                transition-all
                ${
                  tab.active
                    ? "bg-white dark:bg-black text-zinc-900 dark:text-white"
                    : "text-zinc-500 dark:text-zinc-400"
                }
              `}
            >
              <i className={`${tab.icon} text-[16px]`} />
              {tab.title}
            </button>
          ))}
        </div>

        {/* FORM */}
        <div className="space-y-6">

          {/* BRAND NAME */}
          <div>

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
              Brand Name
            </label>

            <input
              type="text"
              defaultValue="Your Brand"
              className="
                w-full
                h-[48px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                px-4
                outline-none
                text-[15px]
                text-zinc-900
                dark:text-white
              "
            />
          </div>

          {/* BRAND LOGO */}
          <div>

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
              Brand Logo
            </label>

            <div className="flex gap-4">

              <button
                className="
                  h-[44px]
                  px-5
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#2a2d35]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                <i className="ri-upload-line text-[16px]" />
                Upload
              </button>

              <button
                className="
                  h-[44px]
                  px-5
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#2a2d35]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                <i className="ri-delete-bin-line text-[16px]" />
                Remove
              </button>
            </div>
          </div>

          {/* TITLE */}
          <div>

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
              Agent Title / Availability
            </label>

            <input
              type="text"
              defaultValue="Typically replies within a few minutes"
              className="
                w-full
                h-[48px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                px-4
                outline-none
                text-[15px]
                text-zinc-900
                dark:text-white
              "
            />
          </div>

          {/* WELCOME */}
          <div>

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
              Welcome Message (initial)
            </label>

            <textarea
              defaultValue="Hello! How can we help you today?"
              className="
                w-full
                min-h-[110px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                p-4
                outline-none
                resize-none
                text-[15px]
                text-zinc-900
                dark:text-white
              "
            />
          </div>

          {/* CAROUSEL */}
          <div>

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
              Carousel Welcome Texts (Optional)
            </label>

            <div className="space-y-3">

              {[
                "Any problems?",
                "Need help?",
                "Chat with an expert!",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <input
                    type="text"
                    defaultValue={item}
                    className="
                      flex-1
                      h-[48px]
                      rounded-[10px]
                      border
                      border-zinc-200
                      dark:border-[#2a2d35]
                      bg-zinc-50
                      dark:bg-black
                      px-4
                      outline-none
                      text-[15px]
                      text-zinc-900
                      dark:text-white
                    "
                  />

                  <button
                    className="
                      text-red-500
                      text-[18px]
                    "
                  >
                    <i className="ri-delete-bin-line" />
                  </button>
                </div>
              ))}

              <button
                className="
                  w-full
                  h-[46px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#2a2d35]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-[15px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                <i className="ri-add-line text-[18px]" />
                Add Carousel Text
              </button>
            </div>
          </div>

          {/* CTA */}
          <div>

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
              CTA Button Text (in Popup)
            </label>

            <input
              type="text"
              defaultValue="Start Chat"
              className="
                w-full
                h-[48px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                px-4
                outline-none
                text-[15px]
                text-zinc-900
                dark:text-white
              "
            />
          </div>

          {/* PHONE */}
          <div>

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
              WhatsApp Phone Number
            </label>

            <input
              type="text"
              defaultValue="911234567890"
              className="
                w-full
                h-[48px]
                rounded-[10px]
                border
                border-zinc-200
                dark:border-[#2a2d35]
                bg-zinc-50
                dark:bg-black
                px-4
                outline-none
                text-[15px]
                text-zinc-900
                dark:text-white
              "
            />

            <p
              className="
                mt-2
                text-[13px]
                text-zinc-500
                dark:text-zinc-400
              "
            >
              Include country code without the '+' symbol.
            </p>
          </div>

          {/* QUICK REPLIES */}
          <div>

            <label
              className="
                block
                mb-1
                text-[15px]
                font-[600]
                text-zinc-900
                dark:text-white
              "
            >
              Quick Replies (Optional)
            </label>

            <p
              className="
                mb-3
                text-[13px]
                text-zinc-500
                dark:text-zinc-400
              "
            >
              To add a link, use the format: Display Text | https://example.com
            </p>

            <div className="space-y-3">

              {[
                "Our Services | https://codingmantra.com/services",
                "Our Tools | https://codingmantra.com/tools",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <input
                    type="text"
                    defaultValue={item}
                    className="
                      flex-1
                      h-[48px]
                      rounded-[10px]
                      border
                      border-zinc-200
                      dark:border-[#2a2d35]
                      bg-zinc-50
                      dark:bg-black
                      px-4
                      outline-none
                      text-[15px]
                      text-zinc-900
                      dark:text-white
                    "
                  />

                  <button
                    className="
                      text-red-500
                      text-[18px]
                    "
                  >
                    <i className="ri-delete-bin-line" />
                  </button>
                </div>
              ))}

              <button
                className="
                  w-full
                  h-[46px]
                  rounded-[10px]
                  border
                  border-zinc-200
                  dark:border-[#2a2d35]
                  bg-zinc-50
                  dark:bg-black
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-[15px]
                  font-[600]
                  text-zinc-900
                  dark:text-white
                "
              >
                <i className="ri-add-line text-[18px]" />
                Add Quick Reply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SAVE */}
      <div
        className="
          rounded-[22px]
          border
          border-zinc-200
          dark:border-[#1c1f27]
          bg-white
          dark:bg-[#12131a]
          p-6
        "
      >

        <h2
          className="
            text-[22px]
            font-[700]
            mb-2
            text-zinc-900
            dark:text-white
          "
        >
          Save Widget
        </h2>

        <p
          className="
            text-[14px]
            mb-6
            text-zinc-600
            dark:text-zinc-400
          "
        >
          Save your widget and get the embed code.
        </p>

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
            text-[16px]
            font-[600]
            text-black
            transition-all
          "
        >
          <i className="ri-save-line text-[18px]" />
          Save Widget
        </button>
      </div>
    </div>

    {/* ===================== */}
    {/* RIGHT SIDE */}
    {/* ===================== */}
    <div
      className="
        sticky
        top-6
        rounded-[22px]
        border
        border-zinc-200
        dark:border-[#1c1f27]
        bg-white
        dark:bg-[#12131a]
        p-6
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-[22px]
          font-[700]
          mb-6
          text-zinc-900
          dark:text-white
        "
      >
        Live Preview
      </h2>

      {/* PREVIEW */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[18px]
          border
          border-zinc-200
          dark:border-[#23262f]
          bg-zinc-100
          dark:bg-[#1d1e25]
          aspect-[1.1]
        "
      >

        {/* BG IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 object-cover w-full h-full "
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/10"
        />

        {/* CHAT BUBBLE */}
        <div
          className="
            absolute
            right-4
            bottom-24
            bg-white
            rounded-[16px]
            px-5
            py-4
            shadow-xl
            max-w-[260px]
          "
        >

          <p
            className="
              text-[15px]
              leading-[1.6]
              text-zinc-800
            "
          >
            Hello! How can we help you today?
          </p>

          {/* TAIL */}
          <div
            className="
              absolute
              bottom-[-8px]
              right-6
              w-4
              h-4
              bg-white
              rotate-45
            "
          />
        </div>

        {/* WHATSAPP */}
        <button
          className="
            absolute
            right-6
            bottom-6
            w-[64px]
            h-[64px]
            rounded-full
            bg-[#0f8f6f]
            flex
            items-center
            justify-center
            shadow-2xl
          "
        >
          <i className="ri-whatsapp-line text-white text-[34px]" />
        </button>
      </div>
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl mt-14">

  {/* CONTENT */}
  <div className="space-y-10">

    {/* BLOCK */}
    <div>

      <h2
        className="
          text-[28px]
          sm:text-[34px]
          leading-tight
          font-[500]
          text-[#f4a000]
          mb-2
        "
      >
        Why Add a WhatsApp Widget to Your Website?
      </h2>

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
          In today's fast-paced digital world, customers expect instant
          communication. A WhatsApp chat widget provides a direct and personal
          line to your business, right from your website. It allows visitors
          to start a conversation on a platform they already use and trust,
          leading to higher engagement and better conversion rates.
        </p>

        <p
          className="
            pt-[2px]
            font-[500]
            text-zinc-900
            dark:text-white
          "
        >
          Key Benefits of a WhatsApp Chat Widget
        </p>

        <p>
          <span
            className="
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Enhance Customer Support:
          </span>{" "}
          Provide real-time support and build stronger customer relationships
          through direct, personal conversations.
        </p>

        <p>
          <span
            className="
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Increase Conversions:
          </span>{" "}
          Answer product questions and address concerns instantly, helping to
          overcome hesitation and guide customers towards a purchase.
        </p>

        <p>
          <span
            className="
              font-[700]
              text-zinc-900
              dark:text-white
            "
          >
            Stay Connected:
          </span>{" "}
          Unlike live chat, a WhatsApp conversation doesn't end when the visitor
          leaves your site. You can continue the chat and follow up later.
        </p>
      </div>
    </div>
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


<section className="mx-auto max-w-7xl mt-14">

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
          title: "VEO-3 Video Script Generator (AI)",
          icon: "ri-video-line",
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
            px-5
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
          <div className="flex items-center min-w-0 gap-4">

            {/* ICON */}
            <div
              className="
                min-w-[40px]
                h-[40px]
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
            <div className="flex flex-wrap items-center gap-3 text-left">

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
                    h-[26px]
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

          {/* RIGHT ARROW */}
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

export default WhatsApp;


 