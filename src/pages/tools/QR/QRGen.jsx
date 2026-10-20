import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function QRGen() {

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
      q: "How do I scan a QR code?",
      a: "You can scan a QR code using your smartphone camera or a QR scanner app. Most modern phones automatically detect QR codes when you open the camera."
    },
    {
      q: "Does changing the colors or adding a logo affect scannability?",
      a: "Yes, extreme color changes or large logos can affect readability. Always maintain good contrast and avoid covering key parts of the QR code."
    },
    {
      q: "What does the 'Quality' slider do?",
      a: "The quality slider controls the resolution (size) of the QR code image. Higher values produce clearer and more detailed QR codes."
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
          QR Code Generator
            </span>
      
          </div>
      
        </div>
      
      </div>

      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
QR Code Generator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
Create, customize, and download a high-resolution QR code. </p>
      </div>

  <div className="w-full px-6 mt-10">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 gap-6 p-6 border rounded-xl md:grid-cols-2 bg-[var(--card-bg)] border-[var(--border-color)]">

          {/* LEFT */}
          <div>

            {/* TABS */}
            <div className="flex gap-2 p-2 mb-4 rounded-lg bg-[var(--bg-primary)]">
              {["url", "text", "email", "sms", "wifi"].map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 py-1 text-sm rounded ${
                    type === t
                      ? "bg-black text-white"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>

            {/* 🔥 DYNAMIC FORMS */}

            {type === "url" && (
              <>
                <label>Your URL</label>
                <input
                  className="input"
                  placeholder="https://example.com"
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                />
              </>
            )}

            {type === "text" && (
              <>
                <label>Your Text</label>
                <textarea
                  className="input"
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                />
              </>
            )}

            {type === "email" && (
              <div className="space-y-3">
                <label>Email Address</label>
                <input className="input" onChange={(e)=>setForm({...form,email:e.target.value})}/>
                <label>Subject</label>
                <input className="input" onChange={(e)=>setForm({...form,subject:e.target.value})}/>
                <label>Message</label>
                <textarea className="input" onChange={(e)=>setForm({...form,message:e.target.value})}/>
              </div>
            )}

            {type === "sms" && (
              <div className="space-y-3">
                <label>Phone Number</label>
                <input className="input" onChange={(e)=>setForm({...form,phone:e.target.value})}/>
                <label>Message</label>
                <textarea className="input" onChange={(e)=>setForm({...form,sms:e.target.value})}/>
              </div>
            )}

            {type === "wifi" && (
              <div className="space-y-3">
                <label>Network Name (SSID)</label>
                <input className="input" onChange={(e)=>setForm({...form,ssid:e.target.value})}/>
                <label>Password</label>
                <input className="input" onChange={(e)=>setForm({...form,password:e.target.value})}/>
                <label>Encryption</label>
                <select className="input" onChange={(e)=>setForm({...form,encryption:e.target.value})}>
                  <option>WPA/WPA2</option>
                  <option>WEP</option>
                  <option>None</option>
                </select>
              </div>
            )}

            {/* CUSTOMIZE */}
            <div className="pt-4 mt-6 border-t">
              <div onClick={()=>setShowCustomize(!showCustomize)} className="flex justify-between cursor-pointer">
                <p>🎨 Customize Design</p>
              </div>

              {showCustomize && (
                <div className="mt-4 space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <input type="color" value={fgColor} onChange={(e)=>setFgColor(e.target.value)} />
                    <input type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
                  </div>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={transparent} onChange={()=>setTransparent(!transparent)} />
                    Transparent Background
                  </label>

                  <div>
                    Quality: {size}x{size}
                    <input type="range" min="200" max="600" value={size} onChange={(e)=>setSize(e.target.value)} className="w-full accent-yellow-500"/>
                  </div>

                </div>
              )}
            </div>

            {/* LOGO */}
            <div className="mt-4">
              <div onClick={()=>setShowLogo(!showLogo)} className="cursor-pointer">
                🖼️ Add Logo Image
              </div>

              {showLogo && (
                <input type="file" className="mt-2" onChange={(e)=>setLogo(URL.createObjectURL(e.target.files[0]))}/>
              )}
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)]">

            <div className="relative p-4 bg-white rounded-lg">
              <QRCode
                id="qr-code"
                value={getQRValue()}
                size={size}
                fgColor={fgColor}
                bgColor={transparent ? "transparent" : bgColor}
              />

              {logo && (
                <img
                  src={logo}
                  alt="logo"
                  className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              )}
            </div>

            <button
              onClick={downloadQR}
              className="px-6 py-2 mt-4 font-medium text-black bg-[#F3A412] rounded-md hover:bg-yellow-400"
            >
              <Download size={16} className="inline mr-2" />
              Download PNG
            </button>

          </div>

        </div>
      </div>
    </div>
      

       <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
          What is a QR Code?
        </h2>

        {/* CONTENT */}
        <div className="space-y-2 text-[var(--text-secondary)] leading-relaxed">
          <p>
            QR code stands for "Quick Response" code. It's a type of two-dimensional barcode that can store various kinds of information, such as a website URL, text, contact information, or Wi-Fi network details. QR codes are designed to be scanned quickly by a smartphone camera, providing an instant link between the physical world and digital information.
          </p>

          <p className="mt-3">Common Uses for QR Codes</p>

          <p><b className="text-[var(--text-primary)]">Marketing:</b> Link posters, flyers, and product packaging to your website, social media pages, or a special offer.</p>

          <p><b className="text-[var(--text-primary)]">Business Cards:</b> Create a QR code that contains your contact information (vCard) so people can save your details with a single scan.</p>

          <p><b className="text-[var(--text-primary)]">Wi-Fi Access:</b> Generate a QR code for your Wi-Fi network. Guests can scan it to connect automatically without typing the password.</p>

          <p><b className="text-[var(--text-primary)]">Payments:</b> Many payment apps use QR codes to facilitate quick and easy transactions.</p>

          <p><b className="text-[var(--text-primary)]">Event Information:</b> Link to an event schedule, map, or registration page.</p>
        </div>

        {/* FAQ */}
        <div className="mt-10">

          <h2 className="mb-6 text-2xl font-bold text-[#F3A412]">
            Frequently Asked Questions (FAQs)
          </h2>

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
<div className="w-full px-6 mt-16">
  <div className="max-w-5xl mx-auto">

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

export default QRGen;