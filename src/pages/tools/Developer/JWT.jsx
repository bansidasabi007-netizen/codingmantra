import { KeyRound, RefreshCw, Download, Copy, ChevronDown, Scale } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, GitFork, FileCode2,  RotateCcw,  Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function JWT() {

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
    question: "Is it safe to paste my JWT here?",
    answer:
      'Yes. This tool is completely client-side. All the decoding and verification happens directly in your browser using JavaScript. Your JWT is never sent to our or any other server, ensuring your sensitive information remains secure.',
  },
  {
    question: 'How does signature verification work?',
    answer:
      'The signature is verified using the encoded header, the encoded payload, and a secret key (for HMAC algorithms) or a public/private key pair (for RSA/ECDSA). Our tool can perform this verification if you provide the correct secret or public key. An invalid signature means the token has been tampered with or the wrong key was used.',
  },

];
  
const moreTools = [
  {
    title: "Planning Poker",
    icon: <Scale size={18} />,
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
    title: "SSH Key Generator",
    icon: <FileCode2 size={18} />,
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
    icon: <GitFork size={18} />,
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
JWT Decoder
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
JWT (JSON Web Token) Decoder
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
A simple and secure tool to decode JSON Web Tokens and inspect their contents without sending your data to any server.</p>
          </div>
</section>


<section className="mx-auto mt-10 max-w-7xl">

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
    <div className="mb-7">

      <div className="flex items-center gap-3 mb-2">

        <i className="ri-lock-2-line text-[#f4a000] text-[24px]" />

        <h2
          className="
            text-[20px]
            sm:text-[22px]
            font-[700]
            text-zinc-900
            dark:text-white
          "
        >
          JWT Decoder
        </h2>
      </div>

      <p
        className="
          text-[14px]
          leading-7
          text-zinc-600
          dark:text-zinc-400
        "
      >
        Paste a JWT to decode its header and payload. All processing is done securely in your browser.
      </p>
    </div>

    {/* ENCODED JWT */}
    <div className="mb-6">

      <h3
        className="
          text-[15px]
          font-[600]
          mb-3
          text-zinc-900
          dark:text-white
        "
      >
        Encoded JWT
      </h3>

      <textarea
        defaultValue={`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Sf1KxwRJSMekKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
        className="
          w-full
          min-h-[120px]
          rounded-[12px]
          border
          border-zinc-200
          dark:border-[#2a2d35]
          bg-zinc-50
          dark:bg-black
          p-4
          outline-none
          resize-none
          font-mono
          text-[14px]
          leading-7
          text-zinc-800
          dark:text-white
        "
      />
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

      {/* HEADER BLOCK */}
      <div>

        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-3">

          <h3
            className="
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Header
          </h3>

          <button
            className="
              w-[40px]
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
              text-zinc-700
              dark:text-zinc-300
              hover:border-[#f4a00066]
              transition-all
            "
          >
            <i className="ri-file-copy-line text-[17px]" />
          </button>
        </div>

        {/* CONTENT */}
        <textarea
          readOnly
          value={`{
  "alg": "HS256",
  "typ": "JWT"
}`}
          className="
            w-full
            min-h-[220px]
            rounded-[12px]
            border
            border-zinc-200
            dark:border-[#2a2d35]
            bg-zinc-100
            dark:bg-[#2a2b31]
            p-4
            outline-none
            resize-none
            font-mono
            text-[14px]
            leading-8
            text-zinc-800
            dark:text-white
          "
        />
      </div>

      {/* PAYLOAD BLOCK */}
      <div>

        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-3">

          <h3
            className="
              text-[15px]
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Payload
          </h3>

          <button
            className="
              w-[40px]
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
              text-zinc-700
              dark:text-zinc-300
              hover:border-[#f4a00066]
              transition-all
            "
          >
            <i className="ri-file-copy-line text-[17px]" />
          </button>
        </div>

        {/* CONTENT */}
        <textarea
          readOnly
          value={`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
          className="
            w-full
            min-h-[220px]
            rounded-[12px]
            border
            border-zinc-200
            dark:border-[#2a2d35]
            bg-zinc-100
            dark:bg-[#2a2b31]
            p-4
            outline-none
            resize-none
            font-mono
            text-[14px]
            leading-8
            text-zinc-800
            dark:text-white
          "
        />
      </div>
    </div>

    {/* SIGNATURE */}
    <div className="mt-6">

      <h3
        className="
          text-[15px]
          font-[600]
          mb-3
          text-zinc-900
          dark:text-white
        "
      >
        Signature
      </h3>

      <div
        className="
          rounded-[12px]
          border
          border-zinc-200
          dark:border-[#2a2d35]
          bg-zinc-100
          dark:bg-[#2a2b31]
          px-4
          py-4
          font-mono
          text-[14px]
          leading-7
          text-zinc-800
          dark:text-white
          break-all
        "
      >
        Sf1KxwRJSMekKF2QT4fwpMeJf36POk6yJV_adQssw5c
      </div>
    </div>

    {/* NOTE */}
    <div
      className="
        mt-5
        rounded-[14px]
        border
        border-[#bfd3ff]
        dark:border-[#2d4ea2]
        bg-[#eef4ff]
        dark:bg-[#172554]
        p-5
      "
    >

      <div className="flex items-start gap-3">

        <div
          className="
            flex
            items-center
            justify-center
            mt-[2px]
            text-[#245cff]
            dark:text-[#8ab4ff]
          "
        >
          <i className="ri-shield-check-line text-[20px]" />
        </div>

        <div>

          <h4
            className="
              text-[18px]
              font-[600]
              mb-1
              text-[#1d4ed8]
              dark:text-[#c7d2fe]
            "
          >
            Note on Verification
          </h4>

          <p
            className="
              text-[14px]
              leading-7
              text-[#1e40af]
              dark:text-[#bfdbfe]
            "
          >
            This tool decodes the token but does not verify the signature.
            Verifying the signature requires the secret key, which should not
            be shared or pasted into online tools.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mx-auto mt-12 max-w-7xl">

  {/* CONTENT */}
  <div className="space-y-10">

    {/* BLOCK */}
    <div>

      <h2
        className="
          text-[24px]
          sm:text-[26px]
          font-[500]
          leading-tight
          mb-2
          text-[#f4a000]
        "
      >
        What is a JSON Web Token (JWT)?
      </h2>

      <div
        className="
          space-y-[2px]
          text-[13px]
          sm:text-[14px]
          leading-[1.6]
          text-zinc-700
          dark:text-zinc-300
        "
      >
        <p>
          A JSON Web Token (JWT) is a compact, URL-safe means of representing
          claims to be transferred between two parties. The claims in a JWT are
          encoded as a JSON object that is used as the payload of a JSON Web
          Signature (JWS) structure or as the plaintext of a JSON Web Encryption
          (JWE) structure, enabling the claims to be digitally signed or integrity
          protected with a Message Authentication Code (MAC) and/or encrypted.
        </p>

        <p>
          In simpler terms, JWTs are a popular way to securely transmit
          information between a client and a server, commonly used for
          authentication and authorization in web applications.
        </p>

        <p
          className="
            pt-[2px]
            font-[500]
            text-zinc-900
            dark:text-white
          "
        >
          The Structure of a JWT
        </p>

        <p>
          A JWT consists of three parts separated by dots (.):
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Header:
          </span>{" "}
          The first part contains metadata about the token, such as the type of
          token (JWT) and the signing algorithm being used (e.g., HMAC SHA256 or RSA).
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Payload:
          </span>{" "}
          The second part contains the claims. Claims are statements about an
          entity (typically, the user) and additional data. There are registered
          claims (like 'iss' for issuer, 'sub' for subject, 'exp' for expiration
          time), public claims, and private claims.
        </p>

        <p>
          <span
            className="
              font-[600]
              text-zinc-900
              dark:text-white
            "
          >
            Signature:
          </span>{" "}
          To create the signature part you have to take the encoded header, the
          encoded payload, a secret, the algorithm specified in the header, and
          sign that. This signature is used to verify that the sender of the JWT
          is who it says it is and to ensure that the message wasn't changed along
          the way.
        </p>
      </div>
    </div>
  </div>

  {/* FAQ SECTION */}
  <div className="mt-12">

    <h3
      className="
        text-[24px]
        sm:text-[26px]
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

{/* MORE TOOLS SECTION */}
<div
  className="p-6 mx-auto mt-20 border md:p-8 rounded-2xl max-w-7xl"
  style={{
    background: "var(--card-bg)",
    borderColor: "var(--border-color)",
  }}
>

  {/* TITLE */}
  <h2
    className="mb-8 text-3xl font-bold"
    style={{ color: "var(--text-primary)" }}
  >
    More Tools in Developer & Productivity Tools
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

    {moreTools.map((tool, index) => (

      <button
        key={index}
        className="flex items-center justify-between w-full px-5 py-5 transition-all border group rounded-2xl hover:-translate-y-1"
        style={{
          background: "var(--tool-card-bg)",
          borderColor: "var(--border-color)",
        }}
      >

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* ICON */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              background: "rgba(255,176,0,0.10)",
              color: "#ffb000",
            }}
          >
            {tool.icon}
          </div>

          {/* TITLE */}
          <div className="flex items-center gap-3">

            <span
              className="text-lg font-semibold text-left"
              style={{ color: "var(--text-primary)" }}
            >
              {tool.title}
            </span>

            {/* BADGE */}
            {tool.powerful && (
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full"
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

        {/* ARROW */}
        <ArrowRight
          size={20}
          className="transition-all group-hover:translate-x-1"
          style={{
            color: "var(--text-primary)",
          }}
        />

      </button>

    ))}

  </div>

</div>


      <Footer />
    </div>
  );
}

export default JWT;


 