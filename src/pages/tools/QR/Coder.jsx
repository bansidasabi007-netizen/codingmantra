import {Camera, Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import QRCode from "react-qr-code";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";




function Coder() {
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



  const fileRef = useRef();
  const qrRef = useRef(null);

  const [decoded, setDecoded] = useState("");
  const [scanning, setScanning] = useState(false);

  // 📷 START CAMERA
  const startCamera = async () => {
    setScanning(true);

    const scanner = new Html5Qrcode("reader");

    try {
      await scanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (result) => {
          setDecoded(result);
          scanner.stop();
          setScanning(false);
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  // 📁 UPLOAD IMAGE
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const scanner = new Html5Qrcode("reader");

    try {
      const result = await scanner.scanFile(file, true);
      setDecoded(result);
    } catch {
      setDecoded("No QR code found.");
    }
  };



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
      q: "What kind of information can be stored in a QR code?",
      a: "List Mode allows you to input multiple URLs or text manually (one per line). Range Mode automatically generates QR codes based on a numeric range with an optional prefix."
    },
    {
      q: "Why isn't my QR code scanning?",
      a: "QR codes are typically downloaded in PNG format, ensuring high quality and compatibility across devices."
    },
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
      <div className="max-w-6xl p-6 mx-auto border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

        {/* TITLE */}
        <h2 className="mb-2 text-xl font-semibold text-[var(--text-primary)]">
          📷 Decoder
        </h2>
        <p className="mb-6 text-sm text-[var(--text-secondary)]">
          Upload an image or use your camera to scan a QR code.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* BUTTONS */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => fileRef.current.click()}
                className="flex items-center gap-2 px-4 py-2 text-black bg-[#F3A412] rounded-md"
              >
                <Upload size={16} />
                Upload Image
              </button>

              <button
                onClick={startCamera}
                className="flex items-center gap-2 px-4 py-2 border rounded-md border-[var(--border-color)]"
              >
                <Camera size={16} />
                Start Camera
              </button>
            </div>

            {/* HIDDEN INPUT */}
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleFile}
              hidden
            />

            {/* PREVIEW BOX */}
            <div
              id="reader"
              className="flex items-center justify-center h-64 border rounded-lg bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-secondary)]"
            >
              {!scanning && !decoded && (
                <div className="text-center">
                  <Camera size={40} className="mx-auto mb-2 opacity-50" />
                  <p>Your camera feed or uploaded image will appear here.</p>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="mb-2 text-sm text-[var(--text-primary)]">
              Decoded Content
            </p>

            <textarea
              value={decoded}
              readOnly
              placeholder="QR code content will appear here..."
              className="w-full h-64 p-4 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] outline-none resize-none"
            />
          </div>

        </div>
      </div>
    </div>



       <div className="w-full px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="mb-4 text-3xl font-bold text-[#F3A412]">
         How to Decode a QR Code

        </h2>

        {/* CONTENT */}
        <div className="space-y-2 text-[var(--text-secondary)] leading-relaxed">
          <p>
Our tool gives you two easy ways to find out what's hidden inside a QR code. All decoding happens securely in your browser; your images are never uploaded to our servers.</p>

          <p className="mt-3">Upload an Image: If you have a QR code saved as an image file (like a PNG or JPG), simply click the "Upload Image" button and select the file. The tool will immediately scan it and display the result.</p>

          <p><b className="text-[var(--text-primary)]">Use Your Camera: </b>  Click the "Start Camera" button to activate your webcam or phone camera. Position the QR code in front of the camera, and the tool will scan it in real-time.</p>

       

    

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
    </div>
  );
}

export default Coder;