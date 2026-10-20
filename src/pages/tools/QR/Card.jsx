import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { useNavigate,Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


function Card() {

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
 const [showDesign, setShowDesign] = useState(false);
  const [showLogo, setShowLogo] = useState(false);


const [fg, setFg] = useState("#000000");
const [bg, setBg] = useState("#ffffff");
const [transparent, setTransparent] = useState(false);
const [size, setSize] = useState(300);
const [logo, setLogo] = useState(null);

   const [form, setForm] = useState({
    first: "John",
    last: "Doe",
    org: "",
    title: "",
    mobile: "",
    email: "",
    website: ""
  });

  // ✅ INSIDE CARD
  const getQRValue = () => {
    return `
BEGIN:VCARD
VERSION:3.0
FN:${form.first} ${form.last}
ORG:${form.org}
TITLE:${form.title}
TEL:${form.mobile}
EMAIL:${form.email}
URL:${form.website}
END:VCARD
`;
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr.png";
    link.click();
  };

   const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What information can I include?",
      answer:
        "You can include your name, phone number, email, website, company, and more in a standardized vCard format.",
    },
    {
      question: "Do I need to fill in all the fields?",
      answer:
        "No, only the fields you want to share are required. You can customize your vCard freely.",
    },
    {
      question: "Will this work for both iPhone and Android users?",
      answer:
        "Yes. Both iPhone and Android devices support scanning QR codes and saving vCard contact details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



 const tools = [
  {
    title: "QR Code Generator",
    icon: "🔳",
  },
  {
    title: "Bulk QR Code Generator",
    icon: "📦",
    tag: "Powerful",
  },
  {
    title: "UPI QR Code Generator",
    icon: "₹",
    tag: "Powerful",
  },
  {
    title: "QR Code Decoder",
    icon: "🔍",
  },
  {
    title: "WiFi QR Code Generator",
    icon: "📶",
  },
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
vCard QR Code Generator
            </span>
      
          </div>
      
        </div>
      
      </div>


      {/* TITLE */}
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
vCard QR Code Generator
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
Create a QR code that instantly saves your contact information to a smartphone.
 </p>
      </div>
      
      {/* CUSTOMIZE DESIGN */}
<div className="max-w-5xl px-6 mx-auto mt-10">

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

    {/* LEFT SIDE (FORM) */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      <h2 className="mb-4 text-xl font-semibold">
        Contact Details
      </h2>

      {/* INPUTS */}
      <div className="grid grid-cols-2 gap-4">

        <input
          placeholder="First Name"
          value={form.first}
          onChange={(e)=>setForm({...form, first:e.target.value})}
          className="input"
        />

        <input
          placeholder="Last Name"
          value={form.last}
          onChange={(e)=>setForm({...form, last:e.target.value})}
          className="input"
        />

        <input
          placeholder="Organization"
          value={form.org}
          onChange={(e)=>setForm({...form, org:e.target.value})}
          className="input"
        />

        <input
          placeholder="Job Title"
          value={form.title}
          onChange={(e)=>setForm({...form, title:e.target.value})}
          className="input"
        />

        <input
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e)=>setForm({...form, mobile:e.target.value})}
          className="col-span-2 input"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e)=>setForm({...form, email:e.target.value})}
          className="col-span-2 input"
        />

        <input
          placeholder="Website"
          value={form.website}
          onChange={(e)=>setForm({...form, website:e.target.value})}
          className="col-span-2 input"
        />

      </div>

      {/* CUSTOMIZE DESIGN */}
      <div className="mt-6 border-t pt-4 border-[var(--border-color)]">

        <div onClick={()=>setShowDesign(!showDesign)}
          className="flex justify-between cursor-pointer">

          <p>🎨 Customize Design</p>
          <ChevronDown className={`${showDesign ? "rotate-180":""}`} />
        </div>

        {showDesign && (
          <div className="mt-4 space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input type="color" value={fg} onChange={(e)=>setFg(e.target.value)} />
              <input type="color" value={bg} onChange={(e)=>setBg(e.target.value)} />
            </div>

            <input type="range" min="100" max="600"
              value={size}
              onChange={(e)=>setSize(e.target.value)}
              className="w-full"
            />

          </div>
        )}
      </div>

      {/* ADD LOGO */}
      <div className="mt-4 border-t pt-4 border-[var(--border-color)]">

        <div onClick={()=>setShowLogo(!showLogo)}
          className="flex justify-between cursor-pointer">

          <p>🖼 Add Logo</p>
          <ChevronDown className={`${showLogo ? "rotate-180":""}`} />
        </div>

        {showLogo && (
          <input type="file"
            onChange={(e)=>setLogo(e.target.files[0])}
            className="mt-3"
          />
        )}
      </div>

    </div>

    {/* RIGHT SIDE (QR) */}
    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)] flex flex-col items-center justify-center">

      <div className="p-4 bg-white rounded-lg">
        <QRCode
          value={getQRValue()}
          size={220}
        />
      </div>

      <div className="flex gap-3 mt-4">

        <button className="px-4 py-2 text-white bg-black rounded">
          Download .vcf
        </button>

        <button
          onClick={downloadQR}
          className="px-4 py-2 bg-[#F3A412] text-black rounded"
        >
          Download QR
        </button>

      </div>

    </div>

  </div>
</div>


<div className="min-h-screen px-6 py-12 dark:bg-black text-[var(--text-primary)]">
  <div className="max-w-5xl mx-auto md:px-10">

    {/* Title */}
    <h1 className="mb-4 text-3xl font-semibold text-yellow-400">
      What is a vCard QR Code?
    </h1>

    {/* Description */}
    <p className="mb-1 leading-relaxed text-[var(--text-secondary)]">
     A vCard QR code is a digital version of a business card. It stores your contact information—name, phone number, email, website, company, etc.—in a standardized format. When someone scans this QR code with their smartphone, it automatically prompts them to save all your details directly to their phone's contact list.
    </p>

    <p className="mb-1 leading-relaxed text-[var(--text-secondary)]">
  It's the fastest and most efficient way to share your contact information in the digital age, eliminating the need for manual data entry and the risk of typos.
    </p>

    {/* Uses */}
    <div className="mb-1 space-y-2 text-[var(--text-secondary)]">
      <p>
        <span className="font-semibold text-[var(--text-primary)]">
          Business Cards:
        </span>{" "}
       Add one to your physical business card. It's a modern touch that makes it easy for new connections to save your details.
      </p>
      <p>
        <span className="font-semibold text-[var(--text-primary)]">
          Networking Events:
        </span>{" "}
        Have your QR code ready on your phone's lock screen. It's faster and more memorable than exchanging cards.
      </p>
      <p>
        <span className="font-semibold text-[var(--text-primary)]">
          Email Signatures:
        </span>{" "}
 Include it in your email signature so recipients can easily add you to their contacts.
      </p>
      <p>
        <span className="font-semibold text-[var(--text-primary)]">
          Resumes & Portfolios:
        </span>{" "}
     Make it simple for recruiters and potential clients to get in touch with you.
      </p>
    </div>

    {/* FAQ */}
    <h2 className="mt-12 mb-6 text-2xl font-semibold text-yellow-400">
      Frequently Asked Questions (FAQs)
    </h2>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="pb-3 border-b border-[var(--border-color)] cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center justify-between">
            <p className="font-medium text-[var(--text-primary)]">
              {faq.question}
            </p>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {openIndex === index && (
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


{/* ================== MORE TOOLS ================== */}

<div className="px-6 py-12 dark:bg-black text-[var(--text-primary)]">
  <div className="max-w-5xl mx-auto">

    <div className="p-6 border rounded-xl bg-[var(--card-bg)] border-[var(--border-color)]">

      <h2 className="mb-6 text-xl font-semibold text-[var(--text-primary)]">
        More Tools in QR Code Tools
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
      {tools.map((tool, index) => (
  <div
    key={index}
  className="flex items-center justify-between p-4 transition border rounded-lg cursor-pointer 
bg-[var(--card-bg)] border-[var(--border-color)]
hover:border-yellow-500 hover:bg-[var(--bg-primary)]"
  >
            {/* Left */}
            <div className="flex items-center gap-3">

              <div className="flex items-center justify-center w-10 h-10 text-yellow-400 rounded-full bg-yellow-500/10">
                {tool.icon}
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  {tool.title}
                </p>

                {tool.tag && (
                  <span className="px-2 py-0.5 text-xs text-black bg-yellow-400 rounded-full">
                    {tool.tag}
                  </span>
                )}
              </div>
            </div>

            <ArrowRight
              className="text-[var(--text-secondary)]"
              size={18}
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
    

    
      <Footer />
    </div>
  );
}

export default Card;