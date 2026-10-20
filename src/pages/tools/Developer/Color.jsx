import { KeyRound, RefreshCw, Download, Copy, ChevronDown, } from "lucide-react";
import { RotateCw, FileDown, } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, } from "lucide-react";
import { ArrowRight, Scale3, Lock, FileKey, Fingerprint, Palette, Clock3, FileJson, Asterisk, Zap, Shield, GitMerge, } from "lucide-react";


function Color() {

      const [theme, setTheme] = useState({
    primary: "#063dec",
    secondary: "#1d123a",
    accent: "#eab506",
    background: "#f6f8fe",
    foreground: "#030816",
  });
   const [format, setFormat] = useState("HSL");

     const handleChange = (key, value) => {
    setTheme({
      ...theme,
      [key]: value,
    });
  };

   const getContrastColor = (hex) => {
  const color = hex.replace("#", "");

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 155 ? "#000" : "#fff";
}; 

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

  
  const randomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  const generateRandomTheme = () => {
    setTheme({
      primary: randomColor(),
      secondary: randomColor(),
      accent: randomColor(),
      background: randomColor(),
      foreground: randomColor(),
    });
  };


  const convertHexToHsl = (hex) => {
    let r = 0,
      g = 0,
      b = 0;

    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }

    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    else if (cmax === g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s =
      delta === 0
        ? 0
        : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);

    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  const generateCode = () => {
    return `
:root {
  --background: ${convertHexToHsl(theme.background)};
  --foreground: ${convertHexToHsl(theme.foreground)};
  --primary: ${convertHexToHsl(theme.primary)};
  --secondary: ${convertHexToHsl(theme.secondary)};
  --accent: ${convertHexToHsl(theme.accent)};
}
`;
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
      Color Theme Generator
      </span>

    </div>
    

    
  </div>

         {/* Hero */}
          <div className="my-16 text-center">
            <h1
             className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ color: "#ffb000" }}
            >
   Color Palette & Theme Generator
            </h1>

            <p
              className="max-w-3xl mx-auto mt-5 text-lg leading-8"
              style={{ color: "var(--text-primary)" }}
            >
        Generate beautiful, accessible color themes from a single base color.</p>
          </div>
</section>

  <div
      className="p-6 mx-auto border rounded-3xl max-w-7xl"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-10">

        <div
          className="flex items-center justify-center w-12 h-12 rounded-full"
          style={{
            background: "rgba(255,176,0,0.12)",
            color: "#ffb000",
          }}
        >
          <Palette size={22} />
        </div>

        <h2
          className="text-4xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Theme Controls
        </h2>

      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* BASE COLOR */}
          <div
            className="p-5 mb-6 border rounded-2xl"
            style={{
              borderColor: "var(--border-color)",
            }}
          >

            <label
              className="block mb-3 text-lg font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Choose your base color
            </label>

            <div className="flex gap-3">

              <div
                className="flex items-center px-3 border rounded-xl"
                style={{
                 background: "var(--code-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <input
                  type="color"
                  value={theme.primary}
                  onChange={(e) =>
                    handleChange("primary", e.target.value)
                  }
                  className="w-10 h-10 bg-transparent border-none outline-none"
                />
              </div>

              <input
                type="text"
                value={theme.primary}
                onChange={(e) =>
                  handleChange("primary", e.target.value)
                }
                className="flex-1 px-4 border outline-none rounded-xl"
                style={{
                background: "var(--code-bg)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              />

              <button
                onClick={generateRandomTheme}
                className="flex items-center gap-3 px-6 font-semibold transition-all rounded-xl hover:opacity-90"
                style={{
               background: "var(--code-bg)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                <RefreshCw size={18} />
                Random
              </button>

            </div>

          </div>

          {/* COLORS */}
          <div className="grid grid-cols-2 gap-5">

            {Object.entries(theme).map(([key, value]) => (

              <div key={key}>

                <label
                  className="block mb-2 text-sm font-semibold capitalize"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {key}
                </label>

                <div className="flex gap-2">

                  <div
                    className="flex items-center px-2 border rounded-xl"
                    style={{
                     background: "var(--code-bg)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <input
                      type="color"
                      value={value}
                      onChange={(e) =>
                        handleChange(key, e.target.value)
                      }
                      className="w-8 h-8 bg-transparent border-none"
                    />
                  </div>

                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleChange(key, e.target.value)
                    }
                    className="flex-1 px-4 py-3 border outline-none rounded-xl"
                    style={{
                     background: "var(--code-bg)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

          {/* FORMAT TABS */}
          <div
            className="flex p-1 mt-8 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.06)",
            }}
          >

            {["HSL", "HEX", "RGB"].map((item) => (

              <button
                key={item}
                onClick={() => setFormat(item)}
                className="flex-1 py-3 font-semibold transition-all rounded-lg"
                style={{
                  background:
  format === item
    ? "var(--active-tab-bg)"
    : "transparent",

                  color:
                    format === item
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                }}
              >
                {item}
              </button>

            ))}

          </div>

          {/* CODE BOX */}
          <div
            className="relative p-6 mt-4 overflow-hidden border rounded-2xl"
            style={{
          background: "var(--code-bg)",
              borderColor: "var(--border-color)",
            }}
          >

            <button
              className="absolute transition-all top-5 right-5 hover:opacity-80"
              style={{
                color: "var(--text-primary)",
              }}
            >
              <Copy size={20} />
            </button>

            <pre
              className="overflow-auto text-sm leading-8"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {generateCode()}
            </pre>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <h3
            className="mb-4 text-xl font-bold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Generated Theme Preview
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {/* PRIMARY */}
            <div
              className="col-span-2 p-5 rounded-2xl"
              style={{
                background: theme.primary,
                color: "#fff",
              }}
            >
              <h4 className="mb-2 text-4xl font-bold">
                Primary
              </h4>

              <p className="text-lg">{theme.primary}</p>

              <p className="mt-2 text-lg opacity-80">
                {convertHexToHsl(theme.primary)}
              </p>
            </div>

            {/* SECONDARY */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: theme.secondary,
                color: "#fff",
              }}
            >
              <h4 className="mb-2 text-3xl font-bold">
                Secondary
              </h4>

              <p>{theme.secondary}</p>

              <p className="mt-2 opacity-80">
                {convertHexToHsl(theme.secondary)}
              </p>
            </div>

            {/* ACCENT */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: theme.accent,
                color: "#000",
              }}
            >
              <h4 className="mb-2 text-3xl font-bold">
                Accent
              </h4>

              <p>{theme.accent}</p>

              <p className="mt-2 opacity-80">
                {convertHexToHsl(theme.accent)}
              </p>
            </div>

            {/* BG */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: theme.background,
                color: "#000",
              }}
            >
              <h4 className="mb-2 text-3xl font-bold">
                Background
              </h4>

              <p>{theme.background}</p>

              <p className="mt-2 opacity-80">
                {convertHexToHsl(theme.background)}
              </p>
            </div>

            {/* FOREGROUND */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: theme.foreground,
                color: "#fff",
              }}
            >
              <h4 className="mb-2 text-3xl font-bold">
                Foreground / Text
              </h4>

              <p>{theme.foreground}</p>

              <p className="mt-2 opacity-80">
                {convertHexToHsl(theme.foreground)}
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


{/* INFO SECTION */}
<div className="mx-auto mt-20 max-w-7xl">

  <h2
    className="mb-3 text-3xl font-bold md:text-5xl"
    style={{ color: "#ffb000" }}
  >
    The Challenge of Creating a Good Color Scheme
  </h2>

  <div
    className="space-y-2 text-[17px] leading-9"
    style={{ color: "var(--text-primary)" }}
  >
    <p>
      Choosing a color scheme is one of the most important decisions in design.
      A good palette sets the mood, ensures readability, and creates a cohesive
      brand identity. However, creating a palette that is both aesthetically
      pleasing and accessible can be challenging and time-consuming.
    </p>

    <p>How This Tool Simplifies Color Theming</p>

    <p>
      Our generator uses color theory principles to do the hard work for you.
      Simply pick a base color, and the tool will instantly:
    </p>

    <p>
      <span className="font-bold">
        Generate Harmonies:
      </span>{" "}
      It creates complementary, triadic, and analogous color schemes to give
      you a variety of options for your primary, secondary, and accent colors.
    </p>

    <p>
      <span className="font-bold">
        Ensure Accessibility:
      </span>{" "}
      For each color, it calculates whether black or white text should be used
      to meet WCAG contrast standards, ensuring your text is readable.
    </p>

    <p>
      <span className="font-bold">
        Provide Code Snippets:
      </span>{" "}
      It generates ready-to-use HSL values for both Tailwind CSS configuration
      (`tailwind.config.js`) and standard CSS variables, making implementation
      in your project a breeze.
    </p>
  </div>

</div>


{/* FAQ SECTION */}
<div className="mx-auto mt-20 max-w-7xl">

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
          className="flex items-center justify-between w-full py-6 text-left"
        >

          <span
            className="text-[15px] md:text-[17px] font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {faq.question}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
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
              className="pb-6 text-[15px] leading-8"
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

export default Color;


 