import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link} from "react-router-dom";
import Footer from "../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

const tools = [
    {
    title: "QR code Generator",
    desc: "Create and download professional invoices with GST/VAT support.",
    icon: "ri-video-line",
    link:"/QRGen"

  },
  {
    title: "Bulk QR Code Generator",
    desc: "Create and download professional quotations for your clients.",
    icon: "ri-calendar-line",
    powerful: true,
    link:"/Bulk"
  },
  {
    title: "UPI QR code Generator ",
    desc: "calculate your loan EMI with advanced options like yearly prepayments and annual step-up.",
    icon: "ri-video-line",
    powerful: true,
    link:"/UPI"
  },
  {
    title: "QR code Decoder",
    desc: "Calculate how making prepayments can reduce your loan tenure and save you interest.",
    icon: "ri-video-line",
    link:"/Coder"
  },
  {
    title: "vCard /contact QR code Generator ",
    desc: "Estimate mutual fund returns with a step-up option to see how increasing your investment can accelerate wealth creation.",
    icon: "ri-t-shirt-line",
    link:"/Card"
  },
  {
    title: "WiFi QR code Generator ",
    desc: "Plan your retirement income with our systematic withdrawal Plan (SWP) calculator.",
    icon: "ri-book-open-line",
    link:"/WiFi"
  },

];

function QR() {

  const navigate = useNavigate();

  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  return (
 <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
            <div className="w-full px-4 mx-auto my-6 max-w-8xl">

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

            {/* CURRENT */}
            <span
              className="
                text-[15px]
                font-semibold
      
                text-[#111111]
                dark:text-white
              "
            >
    QR Code Tools  
            </span>

          </div>

        </div>

      </div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
QR Code Tools    </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
Create, customize, and download QR codes for your business or personal use.</p>  
</div>

      {/* Cards */}
      <div className="grid max-w-6xl gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
<div
key={index}
onClick={() => tool.link && navigate(tool.link)}
className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
>

{tool.powerful && (
  <span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
    Powerful
  </span>
)}

<div className="flex items-start justify-between gap-4">

<div className="flex items-start gap-4">

<div className="flex items-center justify-center w-12 h-12 text-xl text-[#F3A412] rounded-full bg-[#F3A412]/20">
<i className={tool.icon}></i>
</div>

<h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug pr-16">
{tool.title}
</h3>

</div>

</div>
<p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
{tool.desc}
</p>

</div>
        ))}

      </div>
      
{/* Content Section */}
<div className="w-full px-6 mt-20">

<h2 className="text-3xl font-bold text-[#F3A412]">
Bridge the Physical and Digital Worlds
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
QR (Quick Response) codes are powerful tools that connect real-world objects to digital information with a simple scan from a smartphone. They have become an essential part of modern marketing, logistics, and everyday convenience.</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
Our QR code generators empower you to create high-quality, customized codes for any purpose. Whether you need a single, beautifully branded QR code for your business card or hundreds of unique codes for your inventory, our tools provide the flexibility and power you need.</p>

</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What is the difference between single a and bulk generator? 
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
The Single QR Code Generator is perfect for creating one-off codes, like for a website URL, a Wi-Fi password, or a contact card, with detailed design customizations. The Bulk QR Code Generator is designed for situations where you need many unique codes (from a list or number range) with a consistent design, such as for event tickets, product labels, or inventory management.</p>
</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
Do these QR codes expire?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
No. The QR codes you create are "static," which means the data is encoded directly into the image itself. They will work forever and do not depend on our service to function after you've downloaded them.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
How can I make My QR code Stand Out?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Our tools allow you to customize the colors and add your own logo to the center of the QR code. This helps increase brand recognition and makes your QR code more visually appealing, which can encourage more people to scan it. Always ensure high contrast between the foreground and background for best scannability.</p>
</details>

</div>

</div>


<Footer/>
    </div>



  );
}

export default QR;