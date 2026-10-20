import {
  KeyRound,
  RefreshCw,
  Download,
  Copy,
  ChevronDown,
} from "lucide-react";
import {
  RotateCw,
  FileDown,
} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import {
  ArrowRight,
  Scale3,
  Lock,
  FileKey,
  Fingerprint,
  Palette,
  Clock3,
  FileJson,
  Asterisk,
  Zap,
  Shield,
 GitMerge,
} from "lucide-react";


function UUID() {
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
  
const faqData = [
  {
    question: "Is it safe to use UUIDs generated in the browser?",
    answer:
      "Yes. This tool uses the `crypto.randomUUID()` method, which is a cryptographically secure function built into modern browsers for generating random Version 4 UUIDs. They are safe to use for production applications.",
  },

  {
    question: "What is the difference between a UUID and a GUID?",
    answer:
      "Technically there is no real difference. GUID is Microsoft's term while UUID is the more general industry-standard term. Both refer to the same type of globally unique identifier.",
  },

  {
    question: "Can UUIDs ever collide?",
    answer:
      "The probability is extremely small. Version 4 UUIDs use 122 random bits, making collisions practically impossible for normal applications.",
  },
];

const developerTools = [

   {
  title: "Planning Poker",
icon: <FileJson size={18} />,
  powerful: true,

  },
  {
    title: "Random Password Generator",
    icon: <Lock size={18} />,
    powerful: true,
  },
  {
    title: "RSA Key Generator",
    icon: <FileKey size={18} />,
  },
  {
    title: "UUID/GUID Generator",
    icon: <Fingerprint size={18} />,
  },
  {
    title: "Color Theme Generator",
    icon: <Palette size={18} />,
  },
  {
    title: "Cron Expression Generator",
    icon: <Clock3 size={18} />,
  },
  {
    title: "JSON Formatter",
    icon: <FileJson size={18} />,
  },
  {
    title: "Regex Tester",
    icon: <Asterisk size={18} />,
  },
  {
    title: "Code Minifier",
    icon: <Zap size={18} />,
  },
  {
    title: "JavaScript Obfuscator",
    icon: <Shield size={18} />,
  },
  {
    title: "JWT Decoder",
    icon: <Lock size={18} />,
  },
  {
    title: "Base64 Encoder/Decoder",
    icon: <Shield size={18} />,
  },
  {
    title: "PDF Merger",
    icon: <GitMerge size={18} />,
  },
];


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
        to="/tools/developer"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Developer & Productivity Tools
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
     UUID/GUID Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
              className="text-3xl font-bold leading-tight md:text-6xl"
              style={{ color: "#ffb000" }}
            >
     UUID/GUID Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
             A secure, browser-based tool to generate public and private SSH keys for passwordless server authentication.
</p>
          </div>
</section>

{/* UUID Generator Section */}
<div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl lg:grid-cols-2">

  {/* SINGLE UUID */}
  <div
    className="p-6 transition-all duration-300 border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    {/* Heading */}
    <div className="flex items-start gap-3 mb-6">

      <div
        className="flex items-center justify-center w-10 h-10 rounded-full"
        style={{
          background: "rgba(255,176,0,0.12)",
          color: "#ffb000",
        }}
      >
        <Fingerprint size={18} />
      </div>

      <div>
        <h2
          className="text-2xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Single UUID Generator
        </h2>

        <p
          className="mt-1 text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Quickly generate and copy a single UUID.
        </p>
      </div>

    </div>

    {/* UUID BOX */}
    <div
      className="flex items-center overflow-hidden transition-all duration-300 border rounded-xl"
      style={{
        borderColor: "var(--border-color)",
        background:
          document.documentElement.classList.contains("dark")
            ? "#000000"
            : "#ffffff",
      }}
    >

      <input
        type="text"
        value="526c1df6-14c0-4101-b869-8d75ea170e99"
        readOnly
        className="flex-1 px-4 py-4 text-lg bg-transparent outline-none"
        style={{
          color: "var(--text-primary)",
        }}
      />

      <button
        className="h-full px-4 transition-all duration-200 border-l hover:bg-white/5"
        style={{
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <RotateCw size={18} />
      </button>

      <button
        className="h-full px-4 transition-all duration-200 border-l hover:bg-white/5"
        style={{
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <Copy size={18} />
      </button>

    </div>
  </div>

  {/* BULK UUID */}
  <div
    className="p-6 transition-all duration-300 border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >

    {/* Heading */}
    <div className="flex items-start gap-3 mb-6">

      <div
        className="flex items-center justify-center w-10 h-10 rounded-full"
        style={{
          background: "rgba(255,176,0,0.12)",
          color: "#ffb000",
        }}
      >
        <Fingerprint size={18} />
      </div>

      <div>
        <h2
          className="text-2xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Bulk UUID Generator
        </h2>

        <p
          className="mt-1 text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Generate multiple UUIDs at once.
        </p>
      </div>

    </div>

    {/* TOP CONTROLS */}
    <div className="flex flex-col gap-4 mb-5 md:flex-row">

      <div className="flex-1">

        <label
          className="block mb-2 text-sm font-semibold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Number to generate:
        </label>

        <input
          type="number"
          defaultValue={10}
          className="w-full px-4 py-3 transition-all duration-300 border outline-none rounded-xl"
      style={{
  background: "var(--bg-primary)",
}}
        />

      </div>

      <button
        className="px-8 py-3 mt-auto font-semibold transition-all duration-200 rounded-xl hover:opacity-90"
        style={{
          background: "#ffb000",
          color: "#000000",
        }}
      >
        Generate
      </button>

    </div>

    {/* TEXTAREA */}
    <div
      className="overflow-hidden transition-all duration-300 border rounded-xl"
      style={{
        borderColor: "var(--border-color)",
        background:
          document.documentElement.classList.contains("dark")
            ? "#000000"
            : "#ffffff",
      }}
    >

      {/* TOP ACTIONS */}
      <div
        className="flex justify-end gap-2 p-2 border-b"
        style={{
          borderColor: "var(--border-color)",
        }}
      >

        <button
          className="p-2 transition-all duration-200 rounded-lg hover:bg-white/5"
          style={{
            color: "var(--text-primary)",
          }}
        >
          <FileDown size={18} />
        </button>

        <button
          className="p-2 transition-all duration-200 rounded-lg hover:bg-white/5"
          style={{
            color: "var(--text-primary)",
          }}
        >
          <Copy size={18} />
        </button>

      </div>

      {/* TEXTAREA */}
      <textarea
        rows={8}
        placeholder="Generated UUIDs will appear here..."
        className="w-full px-4 py-4 bg-transparent outline-none resize-none"
        style={{
          background: "transparent",
          color: "var(--text-primary)",
        }}
      />

    </div>

  </div>

</div>


{/* UUID INFO SECTION */}
<div className="mx-auto mt-20 max-w-7xl">

  {/* TITLE */}
  <h2
    className="mb-4 text-4xl font-bold"
    style={{ color: "#ffb000" }}
  >
    What is a UUID/GUID?
  </h2>

  {/* DESCRIPTION */}
  <div
    className="text-[16px] leading-9 "
    style={{ color: "var(--text-primary)" }}
  >
    <p>
      A UUID (Universally Unique Identifier), also commonly known as a GUID
      (Globally Unique Identifier), is a 128-bit number used to uniquely
      identify information in computer systems. The key feature of a UUID is
      that its value is, for all practical purposes, unique. This means that
      if you generate a UUID today, the chance of anyone else generating the
      exact same one is astronomically small.
    </p>

    <p>
      This tool specifically generates Version 4 UUIDs, which are created
      using random or pseudo-random numbers.
    </p>

    <div className="pt-2">
      <p className="mb-2 font-semibold">
        Common Use Cases for UUIDs
      </p>

      <div className="space-y-2">

        <p>
          <span className="font-bold">
            Database Keys:
          </span>{" "}
          Using UUIDs as primary keys in a database is very common in
          distributed systems. It avoids the conflicts that can arise when
          different systems try to generate sequential numeric IDs.
        </p>

        <p>
          <span className="font-bold">
            Transaction IDs:
          </span>{" "}
          Assigning a unique UUID to every transaction (e.g., an order or a
          payment) ensures you have a distinct identifier for logging and
          tracking.
        </p>

        <p>
          <span className="font-bold">
            Session Identifiers:
          </span>{" "}
          Generating a unique ID for a user's session on a website.
        </p>

        <p>
          <span className="font-bold">
            Resource Naming:
          </span>{" "}
          Naming files, user accounts, or any other resource in a system where
          you need to guarantee no two items have the same name.
        </p>

      </div>
    </div>
  </div>

  {/* FAQ */}
  <div className="mt-16">

    <h2
      className="mb-8 text-3xl font-bold"
      style={{ color: "#ffb000" }}
    >
      Frequently Asked Questions (FAQs)
    </h2>

    <div className="space-y-1">

      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border-b"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >

          {/* QUESTION */}
          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="flex items-center justify-between w-full py-5 text-left"
          >
            <span
              className="text-[20px] font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {faq.question}
            </span>

            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                openFaq === index ? "rotate-180" : ""
              }`}
              style={{
                color: "var(--text-secondary)",
              }}
            />
          </button>

          {/* ANSWER */}
          <div
            className={`grid transition-all duration-300 ${
              openFaq === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className="pb-5 text-[17px] leading-8"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>

        </div>
      ))}

    </div>

  </div>

</div>


<section className="w-full px-4 py-12">
  <div
    className="p-6 mx-auto border max-w-7xl rounded-3xl md:p-7"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >

    {/* HEADING */}
    <h2
      className="mb-6 text-[20px] md:text-[22px] font-semibold"
      style={{ color: "var(--text-primary)" }}
    >
      More Tools in Developer & Productivity Tools
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

      {developerTools.map((tool, index) => (

        <button
          key={index}
          className="
            flex items-center justify-between
            w-full px-4 py-4 border rounded-2xl
            transition-all duration-300
            hover:scale-[1.01]
          "
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border-color)",
          }}
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* ICON */}
            <div
              className="flex items-center justify-center rounded-full w-11 h-11"
              style={{
                background: "rgba(255,176,0,0.10)",
                color: "#ffb000",
              }}
            >
              {tool.icon}
            </div>

            {/* TEXT */}
            <div className="text-left">

              <div className="flex items-center gap-2">

                <p
                  className="text-[15px] font-semibold leading-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tool.title}
                </p>

                {tool.powerful && (
                  <span
                    className="
                      px-3 py-[4px]
                      text-[11px] font-semibold
                      rounded-full
                    "
                    style={{
                      background: "#ffb000",
                      color: "#000",
                    }}
                  >
                    Powerful
                  </span>
                )}

              </div>

            </div>
          </div>

          {/* RIGHT ICON */}
          <ArrowRight
            size={18}
            style={{ color: "var(--text-secondary)" }}
          />

        </button>

      ))}

    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default UUID;


 