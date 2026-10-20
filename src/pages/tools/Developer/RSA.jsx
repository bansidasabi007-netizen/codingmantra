import { Download, Upload, Plus, Trash2, ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass, ChevronRight, ArrowLeftRight, ArrowLeft, Copy, ChevronDown, X, CheckCircle, Lightbulb,} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {RefreshCw, } from "lucide-react";
import { Lock, KeyRound, Key, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, LockKeyhole, ShieldCheck, Pickaxe, Scale,} from "lucide-react";



function RSA() {
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
    question: "Is it safe to generate RSA keys in a browser?",
    answer:
      "Yes, modern browsers can securely generate RSA keys locally on your device without sending them to a server.",
  },

  {
    question:
      "What is the difference between a public and a private key?",
    answer:
      "The public key is shared openly and used for encryption or verification, while the private key must remain secret and is used for decryption or signing.",
  },

  {
    question: "Which key size should I choose?",
    answer:
      "2048-bit RSA keys are currently recommended for most applications. 4096-bit keys provide stronger security but may be slower.",
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

      {/* BREADCRUMB */}
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
        RSA Key Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
              className="text-3xl font-bold leading-tight md:text-6xl"
              style={{ color: "#ffb000" }}
            >
             RSA Key Pair Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
             A secure, browser-based tool to generate public and private RSA keys for encryption and digital signatures.
            </p>
          </div>
</section>
{/* RSA GENERATOR CARD */}
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
        <Shield size={22} />
      </div>

      <div>
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          RSA Key Generator
        </h2>

        <p
          className="mt-1 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Select your key size and generate a new pair.
        </p>
      </div>
    </div>

    {/* CONTROLS */}
    <div
      className="grid grid-cols-1 gap-4 p-4 mb-8 border md:grid-cols-3 rounded-2xl"
      style={{
        borderColor: "var(--border-color)",
        background:
          "linear-gradient(to right, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
      }}
    >
      {/* SELECT */}
      <div className="md:col-span-1">
        <label
          className="block mb-3 text-sm font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Key Size (bits)
        </label>

        <select
          className="w-full px-4 py-3 text-sm transition-all duration-300 border outline-none rounded-xl"
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
      <div className="flex items-end md:col-span-2">
        <button
          className="flex items-center justify-center w-full gap-3 px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.01] rounded-xl"
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
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* PUBLIC KEY */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Public Key
          </h3>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-xl"
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
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-xl"
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

        {/* TEXTAREA */}
<textarea
  rows={12}
  placeholder="Generated public key will appear here..."
  className="w-full p-5 transition-all duration-300 border outline-none resize-none rounded-2xl"
  style={{
    backgroundColor: document.documentElement.classList.contains("dark")
      ? "#232329"
      : "#ffffff",

    color: document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000",

    borderColor: "#ffb000",
  }}
/>
      </div>

      {/* PRIVATE KEY */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Private Key
          </h3>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-xl"
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
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-xl"
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

        {/* TEXTAREA */}
<textarea
  rows={12}
  placeholder="Generated public key will appear here..."
  className="w-full p-5 transition-all duration-300 border outline-none resize-none rounded-2xl"
  style={{
    backgroundColor: document.documentElement.classList.contains("dark")
      ? "#232329"
      : "#ffffff",

    color: document.documentElement.classList.contains("dark")
      ? "#ffffff"
      : "#000000",

    borderColor: "#ffb000",
  }}
/>
      </div>

    </div>
  </div>
</section>

{/* RSA INFO + FAQ */}
<section className="w-full px-4 py-14">
  <div className="mx-auto max-w-7xl">

    {/* INFO */}
    <div className="mb-16">
      <h2
        className="mb-4 text-3xl font-bold"
        style={{ color: "#ffb000" }}
      >
        What is RSA?
      </h2>

      <div
        className="space-y-3 text-[16px] leading-8"
        style={{ color: "var(--text-primary)" }}
      >
        <p>
          RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem
          that is widely used for secure data transmission. It relies
          on a pair of keys: a public key, which can be shared with
          anyone, and a private key, which must be kept secret.
        </p>

        <p>
          Data encrypted with the public key can only be decrypted
          with the corresponding private key. This principle is the
          foundation for much of the security on the internet,
          including protocols like TLS/SSL and secure SSH
          connections.
        </p>

        <div className="pt-2">
          <h3
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Common Use Cases
          </h3>

          <div className="space-y-2">

            <p>
              <span className="font-bold">
                SSH Authentication:
              </span>{" "}
              Generate a key pair to log into servers securely
              without using a password.
            </p>

            <p>
              <span className="font-bold">
                JWT & Data Signing:
              </span>{" "}
              Use the private key to sign JSON Web Tokens (JWTs)
              or other data, and use the public key to verify the
              signature's authenticity.
            </p>

            <p>
              <span className="font-bold">
                Secure Communication:
              </span>{" "}
              Encrypt messages with a recipient's public key,
              ensuring that only they can read it with their
              private key.
            </p>

          </div>
        </div>
      </div>
    </div>

   {/* FAQ */}
<div className="mt-16">
  <h2
    className="mb-6 text-[20px] md:text-[22px] font-semibold"
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
            className="pr-4 text-[15px] md:text-[16px] font-semibold leading-6"
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
              className="pb-5 text-[14px] leading-7"
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
</section>

      <Footer />
    </div>
  );
}

export default RSA;


 