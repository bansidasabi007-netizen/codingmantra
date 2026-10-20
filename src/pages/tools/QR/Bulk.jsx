import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { ChevronDown } from "lucide-react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";



function Bulk() {

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
   const [mode, setMode] = useState("list");

  const [type, setType] = useState("url");

  const [form, setForm] = useState({
    url: "",
    text: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    sms: "",
    ssid: "",
    password: "",
    encryption: "WPA/WPA2",
  });

  const [showCustomize, setShowCustomize] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [transparent, setTransparent] = useState(false);
  const [size, setSize] = useState(300);
  const [logo, setLogo] = useState(null);

  // 🔥 QR VALUE GENERATOR
  const getQRValue = () => {
    switch (type) {
      case "url":
        return form.url;

      case "text":
        return form.text;

      case "email":
        return `mailto:${form.email}?subject=${form.subject}&body=${form.message}`;

      case "sms":
        return `SMSTO:${form.phone}:${form.sms}`;

      case "wifi":
        return `WIFI:T:${form.encryption};S:${form.ssid};P:${form.password};;`;

      default:
        return "";
    }
  };

    const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  // 🔽 DOWNLOAD
  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = canvas.toDataURL();
      link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

 const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What's the difference between \"List Mode\" and \"Range Mode\"?",
      a: "List Mode allows you to input multiple URLs or text manually (one per line). Range Mode automatically generates QR codes based on a numeric range with an optional prefix."
    },
    {
      q: "What format are the QR codes downloaded in?",
      a: "QR codes are typically downloaded in PNG format, ensuring high quality and compatibility across devices."
    },
    {
      q: "Is there a limit to how many QR codes I can generate at once?",
      a: "Yes, depending on system performance and browser limits. For large batches, it's recommended to generate in smaller groups."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const tools = [
    {
      name: "Bulk QR Code Generator",
      badge: "Powerful",
      link: "#",
      icon: "📦"
    },
    {
      name: "UPI QR Code Generator",
      badge: "Powerful",
      link: "#",
      icon: "₹"
    },
    {
      name: "QR Code Decoder",
      badge: null,
      link: "#",
      icon: "🔍"
    },
    {
      name: "vCard / Contact QR Code Generator",
      badge: null,
      link: "#",
      icon: "📇"
    },
    {
      name: "WiFi QR Code Generator",
      badge: null,
      link: "#",
      icon: "📶"
    }
  ];

  
const [showDesign, setShowDesign] = useState(false);

  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}

                  <div className="max-w-5xl px-4 mx-auto my-6">
      
        <div className="mx-auto max-w-7xl">
      
          <div
            className="
              flex items-center
              gap-4
      
              px-5
              py-4
      
              rounded-2xl
      
              border
      
              border-[#E5E7EB]
              dark:border-[#232531]
      
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
             to="/tools/QR"
              className="
                text-[15px]
      
                text-[#666]
                dark:text-gray-400
      
                hover:text-[#F3A412]
      
                transition-all duration-300
              "
            >
               QR Code Tools
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
   Bulk QR Code Generator
            </span>
      
          </div>
      
        </div>
      
      </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Bulk QR Code Generator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
Create hundreds of QR codes at once. Input a list or a numeric range.</p>
      </div>

   <div className="w-full px-6 mt-10">
      <div className="max-w-5xl mx-auto">

        <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

          {/* TOP OPTIONS */}
          <div className="space-y-4">

            {/* Customize */}
         {/* Customize Design */}
<div
  onClick={() => setShowDesign(!showDesign)}
  className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] cursor-pointer"
>
  <p className="text-[var(--text-primary)]">🎨 Customize Design</p>
  <span className={`transition ${showDesign ? "rotate-180" : ""}`}>⌄</span>
</div>

{showDesign && (
  <div className="mt-4 space-y-4">

    {/* Colors */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <input type="color" className="h-10 input" />
      <input type="color" className="h-10 input" />
    </div>

    {/* Toggle */}
    <div className="flex items-center justify-between">
      <p className="text-[var(--text-secondary)]">Transparent Background</p>
      <input type="checkbox" />
    </div>

    {/* Slider */}
    <div>
      <p className="text-sm text-[var(--text-secondary)]">
        Quality (pixels): 300x300
      </p>
      <input type="range" className="w-full accent-[#F3A412]" />
    </div>

    <div className="flex items-center justify-between">
      <p className="text-[var(--text-secondary)]">Show text on image</p>
      <input type="checkbox" />
    </div>

  </div>
)}

         {/* Add Logo */}
<div
  onClick={() => setShowLogo(!showLogo)}
  className="flex items-center justify-between pb-3 border-b border-[var(--border-color)] cursor-pointer"
>
  <p className="text-[var(--text-primary)]">🖼️ Add Logo Image</p>
  <span className={`transition ${showLogo ? "rotate-180" : ""}`}>⌄</span>
</div>

{showLogo && (
  <div className="mt-4">
    <input
      type="file"
      className="w-full p-3 rounded-md 
                 bg-[var(--bg-primary)] 
                 text-[var(--text-primary)] 
                 border border-[var(--border-color)]"
    />
  </div>
)}

          </div>

          {/* MODE SWITCH */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <button
              onClick={() => setMode("list")}
              className={`py-3 rounded-md border text-sm font-medium transition
                ${mode === "list"
                  ? "border-[#F3A412] text-[#F3A412]"
                  : "border-[var(--border-color)] text-[var(--text-secondary)]"
                }`}
            >
              List Mode
            </button>

            <button
              onClick={() => setMode("range")}
              className={`py-3 rounded-md border text-sm font-medium transition
                ${mode === "range"
                  ? "border-[#F3A412] text-[#F3A412]"
                  : "border-[var(--border-color)] text-[var(--text-secondary)]"
                }`}
            >
              Range Mode
            </button>

          </div>

          {/* ================= LIST MODE ================= */}
          {mode === "list" && (
            <div className="mt-6">

              <label className="text-sm text-[var(--text-secondary)]">
                Enter URLs or Text (one per line)
              </label>

              <textarea
                className="w-full mt-2 p-3 h-40 rounded-md 
                           bg-[var(--bg-primary)] 
                           text-[var(--text-primary)] 
                           border border-[var(--border-color)] 
                           outline-none resize-none"
                placeholder={`https://example.com/item/1
https://example.com/item/2`}
              />

              <button className="w-full mt-4 py-3 bg-[#F3A412] text-black rounded-md font-medium hover:bg-yellow-400">
                Generate From List
              </button>

            </div>
          )}

          {/* ================= RANGE MODE ================= */}
          {mode === "range" && (
            <div className="mt-6 p-4 border rounded-lg border-[var(--border-color)]">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Prefix (optional)
                  </label>
                  <input
                    className="w-full mt-1 p-2 rounded-md 
                               bg-[var(--bg-primary)] 
                               text-[var(--text-primary)] 
                               border border-[var(--border-color)]"
                    placeholder="OB"
                  />
                </div>

                <div>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Start Number
                  </label>
                  <input
                    className="w-full mt-1 p-2 rounded-md 
                               bg-[var(--bg-primary)] 
                               text-[var(--text-primary)] 
                               border border-[var(--border-color)]"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label className="text-sm text-[var(--text-secondary)]">
                    End Number
                  </label>
                  <input
                    className="w-full mt-1 p-2 rounded-md 
                               bg-[var(--bg-primary)] 
                               text-[var(--text-primary)] 
                               border border-[var(--border-color)]"
                    placeholder="1010"
                  />
                </div>

              </div>

              <button className="w-full mt-5 py-3 bg-[#F3A412] text-black rounded-md font-medium hover:bg-yellow-400">
                Generate From Range
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
      

       <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
          When to Use a Bulk QR Code Generator
        </h2>

        {/* CONTENT */}
        <div className="space-y-2 text-[var(--text-secondary)] leading-relaxed">
          <p>
While single QR codes are great for a website or a business card, many scenarios require generating a large number of unique QR codes at once. This is where a bulk generator becomes an indispensable tool, saving you hours of manual work.          </p>

          <p className="mt-3">Common Use Cases for Bulk Generation</p>

          <p><b className="text-[var(--text-primary)]">Inventory Management:</b> Generate a unique QR code for each product or asset in your warehouse. Scanning the code can link directly to its database entry, making tracking and audits incredibly efficient.</p>

          <p><b className="text-[var(--text-primary)]">Event Ticketing:</b>  Create a unique QR code for every attendee's ticket. This allows for secure and rapid check-in at the event entrance.
Direct Mail Campaigns: Personalize your marketing materials by including a QR code that links each recipient to a custom landing page (e.g., using their name in the URL).
</p>

          <p><b className="text-[var(--text-primary)]">Employee Badges: :</b> Generate vCards or unique URLs for employee identification badges.</p>

          <p><b className="text-[var(--text-primary)]">Payments:</b> Many payment apps use QR codes to facilitate quick and easy transactions.</p>

          <p><b className="text-[var(--text-primary)]">Table Ordering in Restaurants: </b> Create a separate QR code for each table that links to your online menu or ordering system.</p>
        </div>

      <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-6 text-2xl font-bold text-[#F3A412]">
          Frequently Asked Questions (FAQs)
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="pb-3 border-b border-[var(--border-color)]"
            >

              {/* QUESTION */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <p className="text-[var(--text-primary)] font-medium">
                  {item.q}
                </p>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {item.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </div>

      </div>
    </div>
<div className="w-full mt-16">
  <div className="max-w-5xl px-6 mx-auto">

    {/* MAIN CONTAINER */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      {/* TITLE */}
      <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
        More Tools in QR Code Tools
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="flex items-center justify-between p-4 transition-all border rounded-lg group 
                       bg-[var(--bg-primary)] border-[var(--border-color)] 
                       hover:border-[#F3A412]"
          >

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* ICON */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full 
                              bg-[var(--bg-primary)] border border-[var(--border-color)] 
                              text-[#F3A412]">
                {tool.icon}
              </div>

              {/* TEXT */}
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {tool.name}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* BADGE */}
              {tool.badge && (
                <span className="px-2 py-1 text-xs font-medium text-black bg-[#F3A412] rounded-full">
                  {tool.badge}
                </span>
              )}

              {/* ARROW */}
              <ArrowRight
                size={18}
                className="text-[var(--text-secondary)] transition group-hover:text-[var(--text-primary)]"
              />

            </div>

          </a>
        ))}

      </div>

    </div>

  </div>
</div>

      <Footer />
    </div>
  );
}

export default Bulk;