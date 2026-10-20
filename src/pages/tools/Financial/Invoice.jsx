import {Download, Upload} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { ChevronDown } from "lucide-react";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { ArrowRight, Calendar, Clock, Globe, Code, Timer, Hourglass,} from "lucide-react";
import { ArrowLeftRight, ArrowLeft,  Copy } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { CheckCircle, Lightbulb, ChevronRight } from "lucide-react";


function Invoice () {

  const navigate = useNavigate();
   
    const [mode, setMode] = useState("add"); 
    
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

const Field = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-[11px] text-[var(--text-secondary)]">{label}</p>
    <input
      className="w-full px-3 py-2 text-sm border border-[var(--border-color)] rounded-md outline-none bg-[var(--card-bg)] text-[var(--text-primary)] focus:border-yellow-500"
      defaultValue={value}
      placeholder="Optional"
    />
  </div>
);

const MiniField = ({ label, value, placeholder }) => (
  <div>
    <p className="mb-1 text-xs text-gray-400">{label}</p>
    <input
      className="text-sm input"
      defaultValue={value}
      placeholder={placeholder}
    />
  </div>
);

const SmallInput = ({ value }) => (
  <input
    className="w-full px-1 py-1 text-xs text-center border border-[var(--border-color)] rounded bg-[var(--card-bg)] text-[var(--text-primary)]"
    defaultValue={value}
  />
);

const Badge = ({ text, highlight }) => (
  <span
    className={`
      px-3 py-1 text-xs rounded-md
      ${
        highlight
          ? "border border-yellow-500 text-yellow-400 bg-yellow-500/10"
          : "border border-[var(--border-color)] text-gray-400 bg-black/50"
      }
    `}
  >
    {text}
  </span>
);

const Theme = ({ name, color }) => (
  <div className="flex items-center gap-2 p-2 border border-[var(--border-color)] rounded-md cursor-pointer hover:border-gray-500">
    
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    />

    <span className="text-xs text-gray-300">{name}</span>
  </div>
);
  
  return (
<div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] dark:bg-black">
      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
  <div
    className="max-w-5xl px-5 py-4 mx-auto border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
       <button
                      onClick={() => {
                        if (window.history.length > 1) {
                          navigate(-1);
                        } else {
                          navigate("/tools/digital");
                        }
                      }}
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
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools/Financial"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Finance Tools
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
        
Invoice Generator
      </span>

    </div>
    

    
  </div>

        <div className="px-6 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* 🔥 ONE GLOBAL CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-12">

        {/* ================= HERO ================= */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
            Invoice Generator
          </h1>

          <p className="mt-3 text-lg text-[var(--text-secondary)]">
            Create professional invoices instantly.
          </p>
        </div>

        {/* ================= BREADCRUMB ================= */}
     <div
    className="max-w-5xl px-5 py-4 mx-auto border rounded-2xl"
    style={{
      background: "var(--card-bg)",
      borderColor: "var(--border-color)",
    }}
  >
    <div className="flex flex-wrap items-center gap-3">

      {/* BACK */}
       <button
                      onClick={() => {
                        if (window.history.length > 1) {
                          navigate(-1);
                        } else {
                          navigate("/tools/digital");
                        }
                      }}
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
      <Link
        to="/"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Tools
      </Link>

      <ChevronRight
        size={16}
        style={{ color: "var(--text-secondary)" }}
      />

      {/* TOOLS */}
      <Link
        to="/tools/Financial"
        className="text-sm transition hover:text-[#ffb000]"
        style={{ color: "var(--text-secondary)" }}
      >
        Finance Tools
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
        
Invoice Generator
      </span>

    </div>
    

    
  </div>
        {/* ================= INTRO SECTION ================= */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-[#F3A412]">
            Invoice Generator
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed">
            Create professional invoices in seconds. Add your logo, details,
            items, and taxes, then download as a PDF. It's fast, free, and easy.
          </p>
        </div>
        
        <div className="px-6 py-10 bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <div className="max-w-5xl mx-auto space-y-6">

    {/* HEADER */}
<div className="card">
  
        <h2 className="mb-4 text-lg font-semibold">My Saved Invoices</h2>

      <button className="bg-[#f4a300] hover:bg-[#e89a00] text-black px-4 py-2 rounded-md text-sm flex items-center gap-2">
        <span>📄</span>
        Create New Invoice
      </button>
    </div>

    {/* 3 COLUMN GRID */}
    <div className="grid gap-6 md:grid-cols-3">

      {/* YOUR DETAILS */}
      <div className="card">
        <p className="section-title">Your Details</p>

        <textarea className="h-20 input">
Your Company
123 Street, City, Country
        </textarea>

        <Field label="Your GSTIN" />
        <Field label="Your PAN" />
        <Field label="Your Email" />
        <Field label="Your Mobile" />
        <Field label="Your Website" />
      </div>

      {/* CLIENT DETAILS */}
      <div className="card">
        <p className="section-title">Client's Details</p>

        <textarea className="h-20 input">
Client Company
456 Avenue, City, Country
        </textarea>

        <Field label="Client's GSTIN" />
        <Field label="Client's PAN" />
        <Field label="Client's Email" />
        <Field label="Client's Mobile" />
        <Field label="Client's Website" />
      </div>

      {/* CURRENCY PANEL */}
      <div className="space-y-4 card">

        <p className="section-title">Currency</p>

        {/* Currency */}
        <input
          className="w-16 text-center input"
          defaultValue="₹"
        />

        {/* TAX LABELS */}
        <div className="grid grid-cols-2 gap-3">
          <Field label="Tax 1 Label" value="SGST" />
          <Field label="Tax 2 Label" value="CGST" />
        </div>

        {/* DISCOUNT */}
        <div className="grid grid-cols-2 gap-3">
          <Field label="Discount Label" value="Discount" />
          <Field label="Discount Amount" value="0" />
        </div>

        {/* ADJUSTMENT */}
        <div>
          <p className="mb-1 text-xs text-gray-400">
            Adjustments (e.g., Shipping)
          </p>

          <div className="flex gap-2">
            <input className="flex-1 input" defaultValue="Shipping" />
            <input className="w-20 input" defaultValue="0" />
            <button className="text-sm text-red-500">🗑</button>
          </div>
        </div>

        <button className="w-full py-2 text-sm border border-[var(--border-color)] rounded-md">
          + Add Adjustment
        </button>

      </div>

    </div>

    {/* ================= INVOICE META ================= */}
<div className="card">

  <MiniField label="Invoice Title" value="INVOICE" />
  <MiniField label="Invoice No." value="001" />
  <MiniField label="Date" value="05/04/2026" />
  <MiniField label="Due Date" placeholder="mm/dd/yyyy" />

</div>


{/* ================= MAIN GRID (LEFT ITEMS + RIGHT DESIGN) ================= */}
<div className="grid md:grid-cols-[2fr_1fr] gap-6">

  {/* ================= LEFT: ITEMS ================= */}
  <div className="space-y-4 card">

    {/* HEADER */}
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">Items</h3>

      <div className="flex gap-2">
        <button className="btn">📦 Add Saved Item</button>
        <button className="btn">+ Add Item</button>
      </div>
    </div>

    {/* TABLE HEAD */}
    <div className="grid grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] text-xs text-gray-400">
      <span className="col-span-2">Description</span>
      <span>HSN</span>
      <span>Qty</span>
      <span>Unit</span>
      <span>Rate</span>
      <span>GST%</span>
    </div>

    {/* ROW */}
    <div className="grid ggrid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-2">

      <textarea className="h-16 col-span-2 input">
Web Development
      </textarea>

      <SmallInput value="99" />
      <SmallInput value="1" />
      <SmallInput value="Hr" />
      <SmallInput value="500" />
      <SmallInput value="18" />

    </div>

    {/* DESCRIPTION */}
    <div className="flex gap-2">
      <textarea className="flex-1 input">
Custom theme development and plugin integration.
      </textarea>

      <div className="flex flex-col justify-center gap-2 text-sm">
        <span>💾</span>
        <span className="text-red-500">🗑</span>
      </div>
    </div>

    {/* TOTAL BADGES */}
    <div className="flex flex-wrap gap-2 text-xs">
      <Badge text="Gross:" />
      <Badge text="Disco:" />
      <Badge text="Net: 8" />
      <Badge text="SGST:" />
      <Badge text="CGST:" />
      <Badge text="Total: ₹ 944.00" highlight />
    </div>

    {/* SECOND ROW (like your screenshot) */}
    <div className="grid grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-2">

      <textarea className="h-16 col-span-2 input">
Design Mockups
      </textarea>

      <SmallInput value="HS" />
      <SmallInput value="1" />
      <SmallInput value="Nc" />
      <SmallInput value="500" />
      <SmallInput value="18" />

    </div>

    <textarea className="input">
Detailed description (optional, supports HTML)
    </textarea>

    <div className="flex flex-wrap gap-2 text-xs">
      <Badge text="Gross:" />
      <Badge text="Disco:" />
      <Badge text="Net: 5" />
      <Badge text="SGST:" />
      <Badge text="CGST:" />
      <Badge text="Total: ₹ 500.00" highlight />
    </div>

  </div>


  {/* ================= RIGHT: DESIGN ================= */}
  <div className="space-y-4 card">

    <h3 className="flex items-center gap-2 font-semibold">🎨 Design</h3>

    {/* LOGO */}
    <div>
      <p className="mb-2 text-sm">Company Logo</p>

      <div className="flex gap-2">
        <button className="flex-1 btn">Upload Logo</button>
        <button className="flex-1 btn">Cloud Gallery</button>
      </div>
    </div>

    {/* COLOR */}
    <div>
      <p className="mb-2 text-sm">Primary Color</p>
      <input type="color" className="w-full h-8 rounded" />
    </div>

    {/* THEMES */}
    <div>
      <p className="mb-2 text-sm">Color Themes</p>

      <div className="grid grid-cols-2 gap-2">
        <Theme name="Corporate Blue" />
        <Theme name="Modern Tech" />
        <Theme name="Luxury Gold" />
        <Theme name="Forest Green" />
        <Theme name="Royal Purple" />
        <Theme name="Minimalist Gray" />
        <Theme name="Midnight Mode" />
        <Theme name="Executive Gray" />
      </div>
    </div>

    {/* BUTTONS */}
    <button className="btn-yellow">💾 Save Invoice</button>
    <button className="btn-yellow">⬇ Download Invoice PDF</button>

  </div>

</div>


{/* ================= NOTES + TERMS ================= */}
<div className="grid gap-6 md:grid-cols-2">

  <div className="card">
    <p className="mb-2 text-sm">Notes</p>
    <textarea className="input">
Thank you for your business!
    </textarea>
  </div>

  <div className="card">
    <p className="mb-2 text-sm">Terms</p>
    <textarea className="input">
Payment is due within 30 days.
    </textarea>
  </div>

</div>
  </div>
</div>

<div className="space-y-8">

  {/* ================= WHY SECTION ================= */}
  <div>
    <h2 className="text-2xl font-bold text-[#F3A412] mb-3">
      Why a Professional Invoice Matters
    </h2>

    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
      An invoice is more than just a bill; it's a key communication tool and a reflection of your brand's professionalism. A clear, accurate, and well-designed invoice builds trust, ensures you get paid on time, and simplifies your accounting. Our free invoice generator helps you achieve all three.
    </p>

    <p className="mt-4 text-sm font-semibold text-[var(--text-primary)]">
      Features of Our Free Invoice Generator
    </p>

    <ul className="mt-2 space-y-2 text-sm text-[var(--text-secondary)]">
      <li><span className="font-medium text-[var(--text-primary)]">Easy & Intuitive:</span> No sign-up required. Just fill in the details and your invoice is ready.</li>
      <li><span className="font-medium text-[var(--text-primary)]">Professional Templates:</span> Create clean, modern invoices that look great.</li>
      <li><span className="font-medium text-[var(--text-primary)]">Add Your Logo:</span> Reinforce your brand identity by easily uploading your company logo.</li>
      <li><span className="font-medium text-[var(--text-primary)]">GST/VAT Compatible:</span> Add tax rates to your line items or to the subtotal.</li>
      <li><span className="font-medium text-[var(--text-primary)]">Instant PDF Download:</span> Download a professional, print-ready PDF of your invoice with a single click.</li>
    </ul>
  </div>


  {/* ================= FAQ SECTION ================= */}
  <div>
    <h2 className="text-2xl font-bold text-[#F3A412] mb-4">
      Frequently Asked Questions (FAQs)
    </h2>

    <div className="divide-y divide-[var(--border-color)]">

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Is this invoice generator really free?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Yes, it’s completely free to use. No signup required and no hidden charges.
        </p>
      </details>

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Is my invoice data saved?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          No, your data is not stored on our servers. Everything stays in your browser for privacy.
        </p>
      </details>

      {/* ITEM */}
      <details className="py-4 group">
        <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-[var(--text-primary)]">
          Can I add my country's currency?
          <span className="transition group-open:rotate-180">⌄</span>
        </summary>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Yes, you can manually change the currency symbol based on your country.
        </p>
      </details>

    </div>
  </div>

</div>

<div className="space-y-6 card">

  {/* TITLE */}
  <h2 className="text-lg font-semibold text-[var(--text-primary)]">
    More Tools in Financial Tools
  </h2>

  {/* GRID */}
  <div className="grid gap-4 md:grid-cols-3">

    {[
      "Quotation Generator",
      "EMI Calculator",
      "Loan Prepayment Calculator",
      "SIP Calculator",
      "SWP Calculator",
      "PPF Calculator",
      "EPF Calculator",
      "Sukanya Samriddhi Calculator",
      "RD Calculator",
      "Compound Interest Calculator",
      "Simple Interest Calculator",
      "GST Calculator",
      "Percentage Calculator",
    ].map((tool, i) => (
      
      <div
        key={i}
        className="
          flex items-center justify-between
          px-4 py-3 rounded-lg
          border border-[var(--border-color)]
          bg-[var(--bg-primary)]
          hover:border-yellow-500
          transition
          cursor-pointer
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* ICON */}
          <div className="flex items-center justify-center w-8 h-8 text-sm text-yellow-400 rounded-full bg-yellow-500/10">
            ●
          </div>

          {/* TEXT */}
          <span className="text-sm font-medium text-[var(--text-primary)]">
            {tool}
          </span>

          {/* OPTIONAL TAG */}
          {tool === "Quotation Generator" && (
            <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500 text-black">
              Powerful
            </span>
          )}

        </div>

        {/* ARROW */}
        <span className="text-[var(--text-secondary)]">→</span>

      </div>

    ))}

  </div>

</div>

<div className="space-y-12">

  {/* ================= TITLE ================= */}
  <div>
    <h2 className="text-2xl font-bold text-[#F3A412]">
      Creating Professional Invoices
    </h2>

    <p className="mt-2 text-sm text-[var(--text-secondary)]">
      A well-designed invoice builds trust and ensures prompt payment. Include all necessary details for smooth transactions.
    </p>
  </div>


<div>

  {/* Title */}
  <h2 className="flex items-center gap-3 mb-8 text-2xl font-semibold text-[#F3A412]">
    <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-black bg-yellow-500 rounded-full">
      1
    </span>
    Step-by-Step: How to Use This Tool
  </h2>

  {/* Steps */}
  <div className="relative space-y-6">

    {/* Vertical line */}
    <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border-color)]"></div>

    {[
      {
        title: "Enter",
        desc: "your main topic in What's your topic about? (e.g., 'digital marketing', 'healthy recipes')."
      },
      {
        title: "Select",
        desc: "your target platform from Platform — Google, YouTube, or Blog."
      },
      {
        title: "Choose",
        desc: "the language for your keywords from Language dropdown."
      },
      {
        title: "Click",
        desc: "Generate Keywords to get primary, long-tail, and LSI keywords."
      },
      {
        title: "Use",
        desc: "the list to structure your content strategy and SEO planning."
      }
    ].map((step, index) => (

      <div key={index} className="relative flex items-start gap-6">

        {/* Circle */}
        <div className="relative z-10 flex items-center justify-center w-8 h-8 text-sm font-bold text-black bg-yellow-500 rounded-full">
          {index + 1}
        </div>

        {/* Card */}
        <div className="flex-1 p-5 border rounded-xl 
        bg-[var(--card-bg)] border-[var(--border-color)]">

          <p className="mb-1 font-semibold text-[var(--text-primary)]">
            {step.title}
          </p>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {step.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>


  {/* ================= BEST PRACTICES ================= */}
  <div>

    <h3 className="mb-6 text-xl font-semibold text-[#F3A412]">
      💡 Best Practices for Best Results
    </h3>

    <div className="grid gap-4 md:grid-cols-2">

      {[
        ["Include GST", "add tax rate for Indian businesses."],
        ["Payment terms", "specify due date and methods."],
        ["Your logo", "upload for branded invoices."],
        ["Invoice number", "keep sequential for tracking."],
      ].map(([title, desc], i) => (

        <div
          key={i}
          className="
            flex items-start gap-3
            p-4 rounded-lg
            border border-[var(--border-color)]
            bg-[var(--card-bg)]
          "
        >

          {/* ICON */}
          <div className="flex items-center justify-center w-6 h-6 text-xs text-yellow-400 border border-yellow-500 rounded-full ">
            ✓
          </div>

          {/* TEXT */}
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {title}
            </p>

            <p className="text-xs text-[var(--text-secondary)]">
              — {desc}
            </p>
          </div>

        </div>

      ))}

    </div>

  </div>

</div>
      </div>
    </div>    
      <Footer />
    </div>
  );
}

export default Invoice;