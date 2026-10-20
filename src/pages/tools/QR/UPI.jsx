import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import QRCode from "react-qr-code";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef } from "react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";




function UPI() {

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

    const qrRef = useRef();

  // FORM STATE
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const [showDesign, setShowDesign] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  // BUILD UPI STRING
  const upiString = `upi://pay?pa=${upiId}&pn=${name}${
    amount ? `&am=${amount}` : ""
  }${note ? `&tn=${note}` : ""}`;

  // DOWNLOAD FUNCTION
  const downloadQR = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      ctx.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.download = "upi-qr.png";
      link.href = pngFile;
      link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

    const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

 const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is this tool free to use?",
      a: "List Mode allows you to input multiple URLs or text manually (one per line). Range Mode automatically generates QR codes based on a numeric range with an optional prefix."
    },
    {
      q: "What is a UPI ID (VPA)?",
      a: "QR codes are typically downloaded in PNG format, ensuring high quality and compatibility across devices."
    },
    {
      q: "Will this QR code work with all UPI apps?",
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
   UPI QR Code Generator
            </span>
      
          </div>
      
        </div>
      
      </div>


      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
UPI QR Code Generator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
Create a custom QR code to accept payments via any UPI app instantly.</p>
      </div>


      <div className="w-full px-6 mt-10">
        <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-2">

          {/* LEFT FORM */}
          <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

            <h2 className="mb-4 text-xl font-semibold">
              🔳 UPI QR Details
            </h2>

            {/* UPI ID */}
            <div className="mb-4">
              <label className="text-sm">Your UPI ID *</label>
              <input
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="yourname@bank"
                className="w-full p-3 mt-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] outline-none"
              />
            </div>

            {/* NAME */}
            <div className="mb-4">
              <label className="text-sm">Payee Name *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 mt-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] outline-none"
              />
            </div>

            {/* AMOUNT */}
            <div className="mb-2">
              <label className="text-sm">Amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="w-full p-3 mt-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] outline-none"
              />
            </div>

            {/* NOTE */}
            <div className="mb-4">
              <label className="text-sm">Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Payment note"
                className="w-full p-3 mt-1 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] outline-none"
              />
            </div>

            {/* CUSTOMIZE */}
            <div className="mt-4 border-b border-[var(--border-color)]">
              <div
                onClick={() => setShowDesign(!showDesign)}
                className="flex justify-between py-3 cursor-pointer"
              >
                <p>🎨 Customize Design</p>
                <ChevronDown
                  className={showDesign ? "rotate-180" : ""}
                />
              </div>

              {showDesign && (
                <div className="pb-4">
                  <input type="color" className="w-full h-10" />
                </div>
              )}
            </div>

            {/* LOGO */}
            <div className="mt-2 border-b border-[var(--border-color)]">
              <div
                onClick={() => setShowLogo(!showLogo)}
                className="flex justify-between py-3 cursor-pointer"
              >
                <p>🖼️ Add Logo</p>
                <ChevronDown className={showLogo ? "rotate-180" : ""} />
              </div>

              {showLogo && <input type="file" />}
            </div>

          </div>

          {/* RIGHT QR */}
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

            <div
              ref={qrRef}
              className="flex items-center justify-center w-64 h-64 mb-6 rounded-lg"
            >
              {upiId && name ? (
                <QRCode value={upiString} />
              ) : (
                <p className="text-sm text-gray-500">
                  Enter UPI details to generate QR
                </p>
              )}
            </div>

            <button
              onClick={downloadQR}
              className="flex items-center gap-2 px-6 py-3 text-black bg-[#F3A412] rounded-md hover:bg-yellow-400"
            >
              <Download size={16} />
              Download PNG
            </button>

          </div>

        </div>
      </div>




       <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
         What is a UPI QR Code?
        </h2>

        {/* CONTENT */}
        <div className="space-y-2 text-[var(--text-secondary)] leading-relaxed">
          <p>
A UPI (Unified Payments Interface) QR code is a two-dimensional barcode that allows customers to make instant payments by simply scanning it with any UPI-enabled application on their smartphone. It eliminates the need to manually enter a UPI ID, phone number, or bank account details, making transactions fast, easy, and error-free.  </p>

          <p className="mt-3">This tool generates a "static" QR code. This means the QR code contains your UPI ID and name directly. You can optionally pre-fill an amount, but customers can always change the amount in their app before paying.</p>

          <p><b className="text-[var(--text-primary)]">Inventory Management:</b> Generate a unique QR code for each product or asset in your warehouse. Scanning the code can link directly to its database entry, making tracking and audits incredibly efficient.</p>

          <p><b className="text-[var(--text-primary)]">Event Ticketing:</b>  Create a unique QR code for every attendee's ticket. This allows for secure and rapid check-in at the event entrance.
Direct Mail Campaigns: Personalize your marketing materials by including a QR code that links each recipient to a custom landing page (e.g., using their name in the URL).
</p>

          <p><b className="text-[var(--text-primary)]">Employee Badges: :</b> Generate vCards or unique URLs for employee identification badges.</p>

          <p><b className="text-[var(--text-primary)]">Payments:</b> Many payment apps use QR codes to facilitate quick and easy transactions.</p>

          <p><b className="text-[var(--text-primary)]">Table Ordering in Restaurants: </b> Create a separate QR code for each table that links to your online menu or ordering system.</p>
        </div>

      <div className="w-full px-6 mt-16">
      <div className="max-w-6xl mx-auto">

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

export default UPI;