import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Upload, Image as ImageIcon, ChevronDown, Sparkles } from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line } from "react-icons/ri";


const toolsData = [
  { name: "Product Photography (AI)", icon: "ri-camera-line", isPowerful: true },
  { name: "Jewelry Try-On (AI)", icon: "ri-sparkling-2-line", isPowerful: true },
  { name: "Jewellery Rate Poster (AI)", icon: "ri-magic-line", isPowerful: true },
  { name: "Festival Post Generator (AI)", icon: "ri-calendar-line", isPowerful: true },
  { name: "Product Try-On (AI)", icon: "ri-t-shirt-line", isPowerful: true },
  { name: "Apparel Try-On (AI)", icon: "ri-user-smile-line", isPowerful: true },
  { name: "Sketch to Real (AI)", icon: "ri-pen-nib-line", isPowerful: true },
  { name: "AI Logo Creator", icon: "ri-pentagon-line", isPowerful: true },
  { name: "Professional Photography Editor (AI)", icon: "ri-image-edit-line", isPowerful: true },
  { name: "Nano Banana Image Editor (AI)", icon: "ri-image-line", isPowerful: true },
  { name: "YouTube Thumbnail Generator (AI)", icon: "ri-youtube-line", isPowerful: false },
  { name: "Baby Milestone Generator (AI)", icon: "ri-emotion-happy-line", isPowerful: false },
  { name: "Passport Photo Creator (AI)", icon: "ri-profile-line", isPowerful: false },
  { name: "Image Upscaler", icon: "ri-zoom-in-line", isPowerful: true },
  { name: "Image Size Reducer", icon: "ri-aspect-ratio-line", isPowerful: false },
  { name: "Image Format Converter", icon: "ri-file-transfer-line", isPowerful: false },
];


const steps = [
  {
    title: "Upload",
    desc: "one or more reference images using the Multiple Images upload field — you can combine people, products, backgrounds, or art styles.",
  },
  {
    title: "Label",
    desc: "each uploaded image using the Label field (e.g., 'person', 'background', 'cat', 'art style') so you can reference them in your prompt.",
  },
  {
    title: "Add hints",
    desc: "in the Hint field per image for specific details (e.g., 'red dress', 'sunset lighting', 'oil painting texture').",
  },
  {
    title: "Select",
    desc: "a style from Popular Style Instructions or write a custom Prompt describing what you want the AI to create.",
  },
  {
    title: "Reference your labels",
    desc: "in the prompt — e.g., 'Put the person from image 1 in front of the background from image 2, in the style of image 3.'",
  },
  {
    title: "Choose",
    desc: "your Output Shape based on where you plan to use the image.",
  },
  {
    title: "Optionally",
    desc: "upload a Style Reference Image for additional style guidance.",
  },
  {
    title: "Click Generate",
    desc: "and download your AI-created composite.",
  },
];

const practices = [
  {
    title: "Use contrasting Text Overlay",
    desc: "— bright, bold text on a contrasting background stands out in YouTube's crowded feed.",
  },
  {
    title: "Add a person image for click appeal",
    desc: "— thumbnails with expressive faces consistently outperform text-only or landscape-only thumbnails.",
  },
  {
    title: "Keep Text Overlay to 2-4 words",
    desc: "— longer text becomes unreadable at thumbnail size, especially on mobile devices.",
  },
  {
    title: "Describe your video content clearly",
desc: "in Video Content Description — 'tech review of iPhone 16 Pro camera\" is better than \"phone review.' ",  },
  {
    title: "Use the 16:9 Output Shape",
    desc: "— this is YouTube's native aspect ratio. Other shapes will have black bars or cropping.",
  },
  {
    title: "Upload a consistent Logo",
    desc: "across all your thumbnails — this builds brand recognition over time.",
  },
  {
    title: "Avoid cluttered backgrounds",
    desc: "— the background should complement, not compete with, the text and person in the foreground.",
  },
];


const data = [
  "More 1","More 2","More 3","More 4",
  "More 5","More 6","More 7","More 8",
  "More 9","More 10","More 11","More 12",
];

function Passport() {
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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const [quality, setQuality] = useState("standard");
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // ✅ CORRECT SLIDER STATE
  const [page, setPage] = useState(0);

  const cardsPerPage = 4;
  const totalPages = Math.ceil((data.length || 0) / cardsPerPage);

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar changeTheme={changeTheme} />
      
     <div className="max-w-6xl px-4 mx-auto my-6">
 
         <div className="mx-auto max-w-7xl">
 
           <div
             className="
         flex items-center
         gap-4
         px-5
         py-4
         rounded-2xl
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
               to="/tools/image-tools"
               className="
           text-[15px]
 
           text-[#666]
           dark:text-gray-400
 
           hover:text-[#F3A412]
 
           transition-all duration-300
         "
             >
               Image Tools
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
             AI Passport Photo Creator
 
             </span>
           </div>
         </div>
       </div>

      <main className="max-w-5xl px-4 pb-20 mx-auto mt-12">

        <div className="mx-auto mb-12 text-center max-w-8xl">
          <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
AI Passport Photo Creator
          </h1>
          <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
Use AI to convert your photo into a standard passport-style picture. This may take a few seconds.          </p>
        </div>

        <div className="p-6 mx-auto max-w-8xl">
          <div className="grid gap-6 md:grid-cols-2">

            {/* LEFT */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

              <h2 className="flex items-center gap-2 mb-6 text-xl font-semibold">
                ✨Photo Creator
              </h2>
              <p className="mb-2 text-sm font-semibold">Your Photo</p>

              <div className="border border-dashed border-[var(--border-color)] rounded-xl h-[260px] flex items-center justify-center text-center mb-6">

                <div>
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-[var(--border-color)] rounded-full">
                      <ImageIcon size={18} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-sm font-semibold">Upload a photo</p>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    or select from gallery
                  </p>

                  <div className="flex justify-center gap-2">
                    <button className="flex items-center gap-1 px-4 py-1 text-sm text-black bg-yellow-500 rounded">
                      <Upload size={14} /> Upload
                    </button>

                    <button className="border border-[var(--border-color)] px-4 py-1 rounded text-sm">
                      Gallery
                    </button>
                  </div>
                </div>

              </div>

              <p className="mb-2 text-sm font-semibold">Milestone (Optional)</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <input className="col-span-2 p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]" defaultValue="1" />
                <select className="p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]">
                  <option>Months</option>
                  <option>Years</option>
                </select>
              </div>

              <p className="mb-2 text-sm font-semibold">
                Popular Style Instructions (Optional)
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <select className="p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]">
                  <option>Select a Category...</option>
                </select>

                <select className="p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]">
                  <option>Select a Style...</option>
                </select>
              </div>

              <p className="mb-1 text-sm font-semibold">
                Describe a custom theme (Optional)
              </p>

              <textarea
                rows={3}
                className="w-full p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)] mb-4"
                placeholder="e.g., 'a rustic woodland theme with animals'"
              />

              <div
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="flex justify-between items-center border border-[var(--border-color)] rounded-lg px-4 py-3 cursor-pointer mb-4"
              >
                <span className="text-sm font-semibold">Advanced Options</span>
                <ChevronDown size={18} className={`${advancedOpen ? "rotate-180" : ""} transition`} />
              </div>

              {advancedOpen && (
                <div className="mb-4">
                  <p className="mb-1 text-sm">Output Shape</p>
                  <select className="w-full p-3 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-color)]">
                    <option>1:1</option>
                    <option>16:9</option>
                  </select>
                </div>
              )}

              {/* QUALITY SAME */}
              <p className="mb-2 text-sm font-semibold">Quality & Speed</p>

              <div className="grid grid-cols-2 gap-4 mb-4">

                <div
                  onClick={() => setQuality("standard")}
                  className={`p-4 rounded-xl border cursor-pointer ${
                    quality === "standard"
                      ? "border-yellow-500"
                      : "border-[var(--border-color)]"
                  }`}
                >
                  <p className="flex items-center gap-2 font-semibold">⚡ Standard</p>
                  <p className="text-xs text-[var(--text-secondary)]">10 credits</p>
                </div>

                <div
                  onClick={() => setQuality("pro")}
                  className={`p-4 rounded-xl border cursor-pointer ${
                    quality === "pro"
                      ? "border-yellow-500"
                      : "border-[var(--border-color)]"
                  }`}
                >
                  <p className="flex items-center gap-2 font-semibold">✨ Pro</p>
                  <p className="text-xs text-[var(--text-secondary)]">40 credits</p>

                  <div className="flex gap-1 mt-2 text-[10px]">
                    <span className="px-2 bg-blue-600 rounded">BEST 4K</span>
                    <span className="px-2 bg-purple-600 rounded">MULTI-LANG</span>
                    <span className="px-2 bg-green-600 rounded">ADVANCED</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT SAME */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">
              <p className="mb-3 text-sm font-semibold">Generated Result</p>
              <div className="flex items-center justify-center h-[320px] rounded-lg bg-gradient-to-br from-gray-700/40 to-gray-600/20">
                <div className="text-center text-[var(--text-secondary)]">
                  <div className="flex justify-center mb-3">
                    <Sparkles size={34} />
                  </div>
                  <p className="text-sm">Your magical photo will appear here</p>
                </div>
              </div>
            </div>

          </div>
        </div>
  <div className="relative mt-10 overflow-hidden">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 -translate-y-1/2 rounded-full top-1/2 bg-black/60"
          >
            <ChevronRight size={18} />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * cardsPerPage;
              const items = data.slice(start, start + cardsPerPage);

              return (
                <div key={pageIndex} className="min-w-full">
                  <div className="grid grid-cols-4 gap-4">

                    {items.map((item, i) => (
                      <div key={i} className="space-y-2">

                        <div className="h-[280px] border border-[var(--border-color)] rounded-xl flex items-center justify-center">
                          <span className="text-xs text-[var(--text-secondary)]">
                            {item}
                          </span>
                        </div>

                        <div className="h-[280px] border border-[var(--border-color)] rounded-xl flex items-center justify-center">
                          <span className="text-xs text-[var(--text-secondary)]">
                            {item}
                          </span>
                        </div>

                      </div>
                    ))}

                  </div>
                </div>
              );
            })}
          </div>

        </div>


      </main>

            <div className="max-w-5xl mx-auto">

      {/* HEADER */}
      <h2 className="mb-4 text-4xl font-bold text-yellow-500">
Why Your Thumbnail is Your Most Important Asset
      </h2>

      <p className="text-lg text-[var(--text-secondary)] max-w-7xl ">
On YouTube, your thumbnail is your billboard. It's the single most important factor (along with your title) that determines whether a viewer will click on your video or scroll right past it. A professional, eye-catching thumbnail can dramatically increase your click-through rate (CTR), which in turn signals to the YouTube algorithm that your content is engaging, leading to more impressions and views.      </p>
      <p className="text-lg text-[var(--text-secondary)] max-w-7xl">
Key Elements of a High-Performing Thumbnail  </p>
      <p className="text-lg text-[var(--text-secondary)] max-w-5xl mb-10">
Bold, Readable Text: The text should be large and easy to read on any device, from a large TV screen to a small mobile phone.
High Contrast: Bright colors and strong contrast help your thumbnail pop out from the background and grab a viewer's attention.
Compelling Imagery: An expressive face or an image that clearly depicts the video's topic can create curiosity and emotion.
Consistent Branding: Using a consistent style, logo, or color palette helps your videos become instantly recognizable to your subscribers.  </p>

      {/* STEP SECTION */}
      <h3 className="flex items-center gap-2 mb-6 text-xl font-semibold text-yellow-500">
        <span className="flex items-center justify-center w-6 h-6 text-sm text-black bg-yellow-500 rounded-full">1</span>
        Step-by-Step: How to Use This Tool
      </h3>
          <div className="relative pl-10 border-l border-[var(--border-color)] space-y-6">

        {steps.map((step, i) => (
          <div key={i} className="relative">

            {/* NUMBER */}
            <div className="absolute -left-[22px] top-2 w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-sm font-semibold">
              {i + 1}
            </div>

            {/* CARD */}
            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5">
              <h4 className="mb-1 font-semibold">{step.title}</h4>
              <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
            </div>

          </div>
        ))}

      </div>

      {/* BEST PRACTICES */}
      <h3 className="flex items-center gap-2 mt-16 mb-6 text-xl font-semibold text-yellow-500">
        💡 Best Practices for Best Results
      </h3>

      <div className="grid gap-6 md:grid-cols-2">

        {practices.map((item, i) => (
          <div
            key={i}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-2 flex gap-3"
          >
            <div className="flex items-center justify-center w-5 h-5 mt-1 text-xs text-yellow-500 border-2 border-yellow-500 rounded-full">
              ✓
            </div>

            <div>
              <h6 className="mb-1 font-semibold">{item.title}</h6>
              <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </div>
          </div>
        ))}

      </div>

      
{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What makes a good YouTube thumbnail?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
A good thumbnail is high-contrast, easy to read, and emotionally compelling. It should accurately represent the video's content while being visually striking enough to grab attention in a feed full of other videos.</p>
</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
What size are the generated thumbnails?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
The tool generates thumbnails at a resolution of 1280x720 pixels, which is the standard 16:9 aspect ratio recommended by YouTube for best results on all devices.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Can I use my own images?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Yes! You can upload your own background image, a person's photo, and a logo to create a thumbnail that is perfectly aligned with your brand and video content.</p>

</details>
</div>
</div>
    </div>

    
      <section className="max-w-5xl px-4 pb-16 mx-auto">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">More Tools in Image Tools</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {toolsData.map((tool, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 dark:bg-black border border-[var(--border-color)] rounded-xl hover:border-[#F3A412] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              {/* Icon Container */}
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-lg border border-[var(--border-color)] group-hover:bg-[#F3A412]/10 transition-colors">
                <i className={`${tool.icon} text-lg text-[var(--text-primary)] group-hover:text-[#F3A412]`}></i>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold tracking-tight opacity-90 group-hover:text-[#F3A412] transition-colors">
                    {tool.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {tool.isPowerful && (
                <span className="bg-[#F3A412] text-black text-[9px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                  Powerful
                </span>
              )}
              <i className="transition-all ri-arrow-right-line opacity-40 group-hover:opacity-100 group-hover:translate-x-1"></i>
            </div>
          </div>
        ))}
      </div>
    </section>


      <Footer />
    </div>
  );
}

export default Passport;