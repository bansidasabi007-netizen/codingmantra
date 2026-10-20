import React, { useRef, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import { RiHome5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";


const instructions = [
  "E-commerce White Background",
  "Dark Charcoal Stone",
  "Dark Luxury Studio",
  "Modern Concrete Pedestal",
  "Floating Product Illusion",
  "Negative Space Product Isolation",
  "Luxury Breathing Room Concept",
  "Soft Natural Window Light",
];

const categories = [
  "Studio & Minimalist",
  "Jewelry & Luxury",
  "Outdoor & Nature",
  "Luxury & Abstract",
  "Lifestyle & In-Context",
  "Food & Beverage",
  "Tech & Futuristic",
];

const gallery = [
  {
    title: "Necklace Portrait",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Silver Brilliance",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-commerce Jewelry",
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Styling",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
  },
];

const relatedTools = [
  {
    title: "AI Jewelry Virtual Try-On",
    desc: "Let customers virtually try jewelry using realistic AI.",
  },
  {
    title: "Jewellery AI In One",
    desc: "Generate stunning jewellery visuals instantly.",
  },
  {
    title: "Festival Video Generator",
    desc: "Create cinematic festive product videos.",
  },
  {
    title: "Jewelry Product Videography",
    desc: "Generate short AI product reels.",
  },
];

function ProductPhotography() {

  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [prompt, setPrompt] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    "Select a Category..."
  );

  const [selectedInstruction, setSelectedInstruction] = useState(
    "Select an Instruction..."
  );

  const [showCategory, setShowCategory] = useState(false);
  const [showInstruction, setShowInstruction] = useState(false);

  const [advancedOpen, setAdvancedOpen] = useState(false);

  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "light") {
      root.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.toggle("dark", systemDark);
    }
  };

  const handleGenerate = async () => {
    if (!file) {
      alert("Upload image first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResult(preview);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar changeTheme={changeTheme} />

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">

    
{/* BREADCRUMB */}
<div className="w-full px-4 my-6">

  <div className="mx-auto max-w-7xl">

    <div
      className="
        flex items-center
        gap-4
        px-5
        py-4
        rounded-2xl
        border
        border-[#232531]
        bg-[#121218]
      "
    >

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-400 transition hover:text-white"
      >
        <RiArrowLeftLine className="text-[20px]" />
      </button>

      {/* HOME */}
      <Link
        to="/"
        className="
          text-gray-400
          hover:text-[#F3A412]
          transition
        "
      >
        <RiHome5Line className="text-[18px]" />
      </Link>

      <span className="text-[#4B5563]">&gt;</span>

      {/* TOOLS */}
      <Link
        to="/tools"
        className="
          text-[15px]
          text-gray-400
          hover:text-[#F3A412]
          transition
        "
      >
        Tools
      </Link>

      <span className="text-[#4B5563]">&gt;</span>
  <Link
  to="/tools/image-tools"
  className="
    text-[15px]
    text-gray-400
    hover:text-[#F3A412]
    transition
  "
>
  Image Tools
</Link>

      <span className="text-[#4B5563]">&gt;</span>

      {/* CURRENT */}
      <span
        className="
          text-[15px]
          font-semibold
          text-white
        "
      >
Product Photography Generator
      </span>

    </div>

  </div>

</div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 md:p-8">

          {/* LEFT */}
          <div className="space-y-8">

            {/* HEADER */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                📸 Product Scene Generator
              </h2>

              <button className="px-5 py-3 rounded-xl border border-[#2A2A35] hover:border-[#F3A412] transition-all">
                ▶ Watch Tutorial
              </button>
            </div>

            {/* PRODUCT IMAGE */}
            <div>
              <p className="mb-4 font-medium text-gray-300">
                Product Images (0/4)
              </p>

              <div
                onClick={() => fileInputRef.current.click()}
                className="
                  group
                  flex flex-col items-center justify-center
                  w-40 h-48
                  border-2 border-dashed border-[#3A3A48]
                  rounded-2xl
                  cursor-pointer
                  bg-[#111118]
                  hover:border-[#F3A412]
                  hover:bg-[#16161F]
                  transition-all duration-300
                "
              >
                <div className="w-14 h-14 rounded-full bg-[#1D1D25] flex items-center justify-center mb-4 text-2xl">
                  ⬆
                </div>

                <p className="font-semibold">Upload</p>

                <p className="mt-3 text-sm text-gray-500">
                  Gallery
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files[0];

                    if (f) {
                      setFile(f);
                      setPreview(URL.createObjectURL(f));
                    }
                  }}
                />
              </div>
            </div>

            {/* DROPDOWNS */}
            <div>

              <p className="mb-4 font-medium text-gray-300">
                Popular Scene Instructions (Optional)
              </p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {/* CATEGORY */}
                <div className="relative">
                  <div
                    onClick={() => setShowCategory(!showCategory)}
                    className="
                      flex items-center justify-between
                      px-4 py-4
                      bg-[#0D0D12]
                      border border-[#2B2B35]
                      rounded-xl
                      cursor-pointer
                    "
                  >
                    {selectedCategory}
                    {selectedCategory}

<RiArrowDownSLine
  className={`
    text-2xl text-gray-400
    transition-transform duration-300
    ${showCategory ? "rotate-180" : ""}
  `}
/>
                
                  </div>

                  {showCategory && (
                    <div className="absolute z-50 w-full mt-2 overflow-hidden border rounded-xl bg-[#111118] border-[#2B2B35]">
                      {categories.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedCategory(item);
                            setShowCategory(false);
                          }}
                          className="p-4 cursor-pointer hover:bg-[#1C1C25]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* INSTRUCTION */}
                <div className="relative">
                  <div
                    onClick={() => setShowInstruction(!showInstruction)}
                    className="
                      flex items-center justify-between
                      px-4 py-4
                      bg-[#0D0D12]
                      border border-[#2B2B35]
                      rounded-xl
                      cursor-pointer
                    "
                  >
                    {selectedInstruction}
                    {selectedCategory}

<RiArrowDownSLine
  className={`
    text-2xl text-gray-400
    transition-transform duration-300
    ${showCategory ? "rotate-180" : ""}
  `}
/>
                  </div>

                  {showInstruction && (
                    <div className="absolute z-50 w-full mt-2 overflow-hidden border rounded-xl bg-[#111118] border-[#2B2B35]">
                      {instructions.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedInstruction(item);
                            setShowInstruction(false);
                          }}
                          className="p-4 cursor-pointer hover:bg-[#1C1C25]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* TEXTAREA */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-300">
                  Describe the Desired Scene (Optional)
                </p>

                <span className="text-sm text-gray-500">
                  Refine with AI (1 Credit)
                </span>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. on a rustic wooden table with morning light"
                className="
                  w-full h-36
                  p-5
                  rounded-2xl
                  bg-[#0D0D12]
                  border border-[#2B2B35]
                  outline-none
                  focus:border-[#F3A412]
                  transition-all
                "
              />
            </div>

            {/* ADVANCED */}
            <div className="border border-[#232531] rounded-2xl overflow-hidden">

              <div
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="
                  flex items-center justify-between
                  px-5 py-5
                  cursor-pointer
                  bg-[#111118]
                "
              >
                <p className="text-lg font-semibold">
                  ⚙ Advanced Options
                </p>

                <span
                  className={`transition-transform duration-300 ${advancedOpen ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </div>

              {advancedOpen && (
                <div className="p-5 border-t border-[#232531] space-y-5">

                  <input
                    type="text"
                    placeholder="Overlay Text"
                    className="
                      w-full p-4 rounded-xl
                      bg-[#0D0D12]
                      border border-[#2B2B35]
                      outline-none
                      focus:border-[#F3A412]
                    "
                  />

                  <textarea
                    placeholder="Marketing Text"
                    className="
                      w-full h-32 p-4 rounded-xl
                      bg-[#0D0D12]
                      border border-[#2B2B35]
                      outline-none
                      focus:border-[#F3A412]
                    "
                  />

                  <select
                    className="
                      w-full p-4 rounded-xl
                      bg-[#0D0D12]
                      border border-[#2B2B35]
                      outline-none
                    "
                  >
                    <option>Square</option>
                    <option>Portrait</option>
                    <option>Landscape</option>
                  </select>
                </div>
              )}
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-3 text-sm">
              <input type="checkbox" />

              <p className="text-gray-400">
                I agree to the{" "}
                <span className="text-[#F3A412]">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#F3A412]">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleGenerate}
              className="
                w-full
                bg-[#F3A412]
                hover:bg-[#ffb21f]
                text-black
                py-4
                rounded-2xl
                font-semibold
                text-lg
                transition-all
                duration-300
                shadow-[0_0_30px_rgba(243,164,18,0.25)]
              "
            >
              Login to Generate
            </button>
          </div>

          {/* RIGHT */}
          <div className="
            bg-[#1F1F25]
            rounded-2xl
            min-h-[750px]
            border border-[#2A2A35]
            sticky top-24
            flex items-center justify-center
            overflow-hidden
          ">
            {loading ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#F3A412] border-t-transparent rounded-full animate-spin mx-auto"></div>

                <p className="mt-5 text-gray-400">
                  Generating your AI image...
                </p>
              </div>
            ) : result ? (
              <img
                src={result}
                className="object-cover w-full h-full"
              />
            ) : preview ? (
              <img
                src={preview}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-center text-gray-500">
                <div className="mb-5 text-7xl">🖼</div>

                <p className="text-xl">
                  Your AI-generated image will appear here
                </p>
              </div>
            )}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mt-24">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">
              Inspiration Gallery
            </h2>

            <button className="px-5 py-3 border border-[#2B2B35] rounded-xl hover:border-[#F3A412]">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {gallery.map((item, i) => (
              <div
                key={i}
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-[#232531]
                  bg-[var(--card-bg)]
                  hover:translate-y-[-5px]
                  transition-all duration-300
                "
              >
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-72"
                />

                <div className="p-4">
                  <p className="font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
<div className="mt-24">

  {/* TOP CONTENT */}
  <div className="mb-20">

    <h2 className="text-[40px] leading-[52px] font-bold text-[#F3A412] mb-5">

      Create Stunning Product Shots, Instantly

    </h2>

    <p className="text-[16px] leading-8 text-white">

      High-quality product photography is one of the biggest drivers of sales in
      e-commerce, but it's traditionally expensive and time-consuming. You need
      photographers, equipment, and studio space. Our AI Product Photography
      Generator changes the game, allowing you to create an infinite variety of
      professional product images from a single photo.

    </p>

    <div className="mt-6 space-y-2 text-[16px] leading-8 text-white">

      <p>
        <span className="font-bold">
          How It Works
        </span>
      </p>

      <p>
        <span className="font-bold">
          Upload Your Product Image:
        </span>{" "}
        Start with a clean photo of your product.
      </p>

      <p>
        <span className="font-bold">
          Describe the Scene:
        </span>{" "}
        Tell the AI where you want to place your product. Do you want it on a
        marble countertop? In a sun-drenched forest? On a minimalist concrete
        pedestal? You're only limited by your imagination.
      </p>

      <p>
        <span className="font-bold">
          Add Marketing Text (Optional):
        </span>{" "}
        Add a short, punchy callout like "New Arrival" or "Limited Stock"
        directly onto the image.
      </p>

      <p>
        <span className="font-bold">
          Generate:
        </span>{" "}
        The AI intelligently places your product into the generated scene,
        matching the lighting and perspective to create a seamless,
        photorealistic image ready for your online store, social media, or ad
        campaigns.
      </p>

    </div>

  </div>

  {/* STEP TITLE */}
  <div className="flex items-center gap-4 mb-14">

    {/* ICON */}
    <div className="
      w-10 h-10
      rounded-2xl
      bg-[#171103]
      flex items-center justify-center
      text-[#F3A412]
      text-2xl
    ">
      ✨
    </div>

    {/* TITLE */}
    <h2 className="text-[35px] font-bold text-[#F3A412]">

      Step-by-Step: How to Use This Tool

    </h2>

  </div>

  {/* STEPS */}
<div className="relative">

  {/* LINE */}
  <div className="
    absolute
    left-[21px]
    top-0
    bottom-0
    w-[2px]
    bg-[#5A3A00]
  "></div>

  <div className="space-y-5">

    {[
      {
        number: "1",
        title: "Upload",
        desc:
          "your product images using the Product Images upload field.",
      },

      {
        number: "2",
        title: "Label",
        desc:
          "each uploaded image so the AI knows which reference is which.",
      },

      {
        number: "3",
        title: "Add hints",
        desc:
          "like golden finish or matte texture to improve rendering.",
      },

      {
        number: "4",
        title: "Select",
        desc:
          "a scene from instructions or write your own custom prompt.",
      },

      {
        number: "5",
        title: "Optionally",
        desc:
          "upload a reference image for matching lighting or composition.",
      },

      {
        number: "6",
        title: "Generate",
        desc:
          "your final AI product photography image instantly.",
      },
    ].map((item, i) => (

      <div
        key={i}
        className="relative flex gap-5"
      >

        {/* NUMBER */}
        <div className="
          relative z-10
          min-w-[44px]
          h-[44px]
          rounded-full
          border-2 border-[#F3A412]
          bg-black
          flex items-center justify-center
          text-[#F3A412]
          font-bold
          text-sm
        ">

          {item.number}

        </div>

        {/* CARD */}
        <div className="
          flex-1
          border border-[#2A2F3A]
          rounded-2xl
          bg-[#111318]
          px-5 py-4
        ">

          <h3 className="text-[20px] font-bold text-white mb-2">

            {item.title}

          </h3>

          <p className="text-[14px] leading-7 text-gray-400">

            {item.desc}

          </p>

        </div>

      </div>

    ))}

  </div>

</div>

</div>

      {/* FAQ */}
<div className="p-6 bg-black mt-14 rounded-3xl md:p-8">

  <h2 className="text-4xl font-bold text-[#F3A412] mb-8">
    Frequently Asked Questions (FAQs)
  </h2>

  <div>

    {[
      {
        question: "What kind of product image works best?",
        answer:
          "Clean product images with simple backgrounds and proper lighting work best for AI scene generation.",
      },

      {
        question: "What kind of scene prompts can I use?",
        answer:
          "You can use luxury, outdoor, studio, cinematic, festive, and lifestyle prompts.",
      },

      {
        question: "What is the best use for overlay text?",
        answer:
          "Keep overlay text short like 'New Arrival' or '50% OFF' for cleaner compositions.",
      },
    ].map((item, i) => (

      <div
        key={i}
        className="border-b border-[#232531] last:border-none"
      >

        {/* QUESTION */}
        <div
          onClick={() =>
            setOpenFaq(openFaq === i ? null : i)
          }
          className="flex items-center justify-between py-6 cursor-pointer group"
        >

          <h3 className="text-xl font-semibold text-white group-hover:text-[#F3A412] transition-all">

            {item.question}

          </h3>

          <RiArrowDownSLine
            className={`
              text-2xl text-gray-400
              transition-transform duration-300
              ${openFaq === i ? "rotate-180" : ""}
            `}
          />

        </div>

        {/* ANSWER */}
        <div
          className={`
            grid transition-all duration-300
            ${
              openFaq === i
                ? "grid-rows-[1fr] opacity-100 pb-6"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >

          <div className="overflow-hidden">

            <p className="pr-10 leading-8 text-gray-400">

              {item.answer}

            </p>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>
  
{/* DISCOVER RELATED TOOLS */}
<div className="p-6 bg-black mt-14 rounded-3xl md:p-8">

  {/* TOP */}
  <div className="mb-10">

    <h2 className="flex items-center gap-3 text-4xl font-bold text-[#F3A412]">

      <span className="text-3xl">
        ✨
      </span>

      Discover Related AI Tools

    </h2>

    <p className="max-w-4xl mt-4 text-lg leading-8 text-gray-400">

      Explore more AI-powered solutions to supercharge your
      e-commerce workflow and creative projects.

    </p>

  </div>

  {/* CARDS */}
 <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "AI Jewelry Virtual Try-On",
        desc:
          "Let customers virtually try on rings, necklaces, and earrings on their own photos using realistic AI.",
        type: "IMAGE",
      },

      {
        title: "Jewellery AI In One",
        desc:
          "Generate stunning jewellery try-on images with your product and model photos.",
        type: "IMAGE",
      },

      {
        title: "Jewellery Rate Poster",
        desc:
          "Generate Today's gold and silver rate posters with your branding and product images.",
        type: "IMAGE",
      },

      {
        title: "Logo Animation Generator",
        desc:
          "Animate your logo with stunning video effects using AI.",
        type: "VIDEO",
      },

      {
        title: "Festival Video Generator",
        desc:
          "Generate professional, cinematic festival greeting videos using AI.",
        type: "VIDEO",
      },

      {
        title: "Jewelry Product Videography",
        desc:
          "Generate stunning, short video clips of jewelry products from text prompts.",
        type: "VIDEO",
      },
    ].map((item, i) => (

      <div
        key={i}
className="
  relative
  h-[220px]
  border
  border-[#1F2430]
  rounded-2xl
  bg-[#070707]
  p-4
  transition-all
  duration-300
  hover:border-[#7A5200]
  shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
  group
  flex
  flex-col
"
      >

        {/* TOP */}
        <div className="flex items-start justify-between mb-6">

          <div className="flex items-center gap-3">

            {/* SEARCH ICON */}
            <div
              className="
                w-12 h-12
                rounded-2xl
                bg-[#1B1408]
                flex items-center justify-center
                text-[#F3A412]
                group-hover:bg-[#F3A412]
                group-hover:text-black
                transition-all duration-300
              "
            >

              <RiSearchLine className="text-2xl" />

            </div>

            {/* TYPE */}
            <div
              className="
                px-3 py-[5px]
                rounded-full
                border border-[#2F3441]
                text-[11px]
                tracking-wide
                text-gray-400
              "
            >
              {item.type}
            </div>

          </div>

          {/* POWERFUL BADGE */}
          <div
            className="
              px-3 py-[6px]
              rounded-full
              bg-[#191203]
              border border-[#5C3A00]
              text-[#F3A412]
              text-[11px]
              font-semibold
              tracking-wide
            "
          >
            ⚡ POWERFUL
          </div>

        </div>

        {/* TITLE */}
        <h3
          className="
            text-[18px]
            font-bold
            leading-[32px]
            text-white
            mb-5
            transition-all duration-300
            group-hover:text-[#F3A412]
          "
        >

          {item.title}

        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            text-[17px]
            leading-9
            text-gray-400
          "
        >

          {item.desc}

        </p>

        {/* TRY NOW */}
        <div
          className="
            mt-8
            flex items-center gap-2
            text-[#F3A412]
            font-semibold
            text-lg
            opacity-0
            translate-y-3
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all duration-300
          "
        >

          Try Now

          <RiArrowRightLine className="text-2xl" />

        </div>

      </div>

    ))}

  </div>

</div>
      {/* WHY CHOOSE */}
<div className="max-w-4xl p-8 mx-auto bg-black mt-14 rounded-3xl md:p-14" >

  {/* TITLE */}
  <h2 className="text-center text-2xl font-bold text-[#F3A412] mb-16">

    Why Choose CodingMantra for Your Digital Needs?

  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">

    {[
      {
        title: "Privacy-First Architecture",
        desc:
          "Most of our tools run entirely in your browser using client-side JavaScript. This means your sensitive data, images, and documents are never uploaded to our servers, ensuring 100% privacy and security for your business operations.",
      },

      {
        title: "Advanced AI Integration",
        desc:
          "We leverage the latest generative AI models to provide state-of-the-art capabilities like product photography generation, virtual try-ons, and high-converting marketing copy.",
      },

      {
        title: "Developer-Centric Utilities",
        desc:
          "Built by developers for developers, our productivity suite includes essential utilities for JSON formatting, Regex testing, and security key generation, all optimized for a fast and seamless workflow.",
      },

      {
        title: "Zero Cost, High Value",
        desc:
          "We believe in democratizing high-end technology. CodingMantra provides over 100+ professional tools for free, helping small businesses and independent creators compete with larger enterprises.",
      },
    ].map((item, i) => (

      <div key={i}>

        {/* TITLE */}
        <h3 className="flex items-start gap-3 mb-5 text-xl font-bold text-white">

          <span className="text-[#F3A412] mt-1">
            •
          </span>

          <span>
            {item.title}
          </span>

        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-400 leadilng-10">

          {item.desc}

        </p>

      </div>

    ))}

  </div>

</div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPhotography;