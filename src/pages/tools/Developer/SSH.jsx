import {
  KeyRound,
  RefreshCw,
  Download,
  Copy,
  ChevronDown,
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


function SSH() {
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
    question:
      "Why should I use SSH keys instead of passwords?",
    answer:
      "SSH keys are significantly more secure than passwords because they are harder to brute-force and are not transmitted over the network during authentication.",
  },
  {
    question:
      "What is the difference between RSA, ECDSA, and Ed25519?",
    answer:
      "RSA is widely supported, ECDSA offers smaller key sizes with strong security, and Ed25519 is modern, fast, and recommended for most new systems.",
  },
  {
    question:
      "How do I use the generated keys?",
    answer:
      "Place the public key on your server inside the authorized_keys file and keep the private key securely on your local machine.",
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
       SSH Key Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
              className="text-3xl font-bold leading-tight md:text-6xl"
              style={{ color: "#ffb000" }}
            >
             SSH Key Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
A secure, browser-based tool to generate public and private SSH keys for passwordless server authentication.</p>
          </div>
</section>
      <section className="w-full px-4 py-10">
  <div
    className="p-6 mx-auto border max-w-7xl rounded-3xl md:p-8"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >

    {/* TOP */}
    <div className="flex items-start gap-3 mb-8">
      <div
        className="flex items-center justify-center rounded-full w-11 h-11"
        style={{
          background: "rgba(255,176,0,0.10)",
          color: "#ffb000",
        }}
      >
        <KeyRound size={22} />
      </div>

      <div>
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          SSH Key Generator
        </h2>

        <p
          className="mt-1 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Select your key type and size, then generate a new pair.
        </p>
      </div>
    </div>

    {/* CONTROLS */}
    <div
      className="grid grid-cols-1 gap-4 p-4 border mb-7 lg:grid-cols-3 rounded-2xl"
      style={{
        borderColor: "var(--border-color)",
      }}
    >

      {/* KEY TYPE */}
      <div>
        <label
          className="block mb-2 text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Key Type
        </label>

        <select
          className="w-full px-4 py-3 border outline-none rounded-xl"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          <option>RSA</option>
          <option>ECDSA</option>
          <option>ED25519</option>
        </select>
      </div>

      {/* KEY SIZE */}
      <div>
        <label
          className="block mb-2 text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Key Size / Curve
        </label>

        <select
          className="w-full px-4 py-3 border outline-none rounded-xl"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          <option>2048-bit (Recommended)</option>
          <option>4096-bit</option>
        </select>
      </div>

      {/* BUTTON */}
      <div className="flex items-end">
        <button
          className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold transition-all duration-300 rounded-xl hover:scale-[1.01]"
          style={{
            background: "#ffb000",
            color: "#000",
          }}
        >
          <RefreshCw size={18} />
          Generate New Keys
        </button>
      </div>
    </div>

    {/* KEYS */}
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

      {/* PUBLIC */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Public Key (OpenSSH Format)
          </h3>

          <div className="flex items-center gap-2">

            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <Download size={16} />
              Download
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <Copy size={16} />
              Copy
            </button>

          </div>
        </div>

        <textarea
          rows={11}
          className="w-full p-5 border outline-none resize-none rounded-2xl"
          placeholder="Generated public key will appear here..."
          style={{
            backgroundColor: document.documentElement.classList.contains("dark")
              ? "#232329"
              : "#ffffff",

            color: document.documentElement.classList.contains("dark")
              ? "#ffffff"
              : "#000000",

            borderColor: "var(--border-color)",
          }}
        />
      </div>

      {/* PRIVATE */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Private Key (PEM PKCS#8)
          </h3>

          <div className="flex items-center gap-2">

            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <Download size={16} />
              Download
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <Copy size={16} />
              Copy
            </button>

          </div>
        </div>

        <textarea
          rows={11}
          className="w-full p-5 border outline-none resize-none rounded-2xl"
          placeholder="Generated private key will appear here..."
          style={{
            backgroundColor: document.documentElement.classList.contains("dark")
              ? "#232329"
              : "#ffffff",

            color: document.documentElement.classList.contains("dark")
              ? "#ffffff"
              : "#000000",

            borderColor: "var(--border-color)",
          }}
        />
      </div>

    </div>
  </div>
</section>

{/* INFO SECTION */}
<div className="px-4 mx-auto max-w-7xl py-14">

  {/* HEADING */}
  <h2
    className="mb-3 text-[42px] font-semibold leading-tight"
    style={{ color: "#ffb000" }}
  >
    What is an SSH Key?
  </h2>

  {/* PARAGRAPH */}
  <p
    className="text-[17px] leading-9"
    style={{ color: "var(--text-primary)" }}
  >
    An SSH key pair provides a secure way of logging into a remote
    server or system without needing a password. It utilizes
    public-key cryptography to authenticate a user. The pair
    consists of a private key, which you keep secret on your local
    machine, and a public key, which you place on the server.
  </p>

  {/* SUB HEADING */}
  <h3
    className="mt-6 mb-2 text-[28px] font-semibold"
    style={{ color: "var(--text-primary)" }}
  >
    How It Works
  </h3>

  {/* POINTS */}
  <div
    className="space-y-2 text-[17px] leading-8"
    style={{ color: "var(--text-primary)" }}
  >
    <p>You attempt to connect to a server.</p>

    <p>
      The server has your public key and sends a challenge,
      encrypted with that key.
    </p>

    <p>
      Only your corresponding private key can decrypt this
      challenge.
    </p>

    <p>
      Your local SSH client decrypts the challenge, solves it, and
      sends the correct response back to the server.
    </p>

    <p>
      The server verifies your response and grants you access, all
      without a password ever being transmitted over the network.
    </p>
  </div>

  {/* FAQ */}
  <div className="mt-16">

    <h2
      className="mb-6 text-[22px] font-semibold"
      style={{ color: "#ffb000" }}
    >
      Frequently Asked Questions (FAQs)
    </h2>

    <div>

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
              className="pr-4 text-[16px] font-semibold leading-6"
              style={{ color: "var(--text-primary)" }}
            >
              {faq.question}
            </span>

            <ChevronDown
              size={18}
              className={`transition-transform duration-300 flex-shrink-0 ${
                openFaq === index ? "rotate-180" : ""
              }`}
              style={{ color: "var(--text-secondary)" }}
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
                className="pb-5 text-[15px] leading-8"
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

export default SSH;


 