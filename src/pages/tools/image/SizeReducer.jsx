import React, { useState, useEffect } from "react";
import { Upload, Image as ImageIcon, SlidersHorizontal } from "lucide-react";
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

function SizeReducer() {
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
               Image Size Reducer - Compress & Optimize Images
    
                </span>
              </div>
            </div>
          </div>

      <main className="max-w-5xl px-4 pb-20 mx-auto mt-12">

         <div className="mx-auto mb-12 text-center max-w-8xl">
          <h1 className="text-5xl font-extrabold text-[#F3A412] mb-4 tracking-tight">
Image Size Reducer - Compress & Optimize Images
          </h1>
          <p className="max-w-xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed">
Adjust the quality slider to compress your image. The tool runs entirely in your browser.</p>
        </div>

<div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-4 py-10">

      <div className="max-w-6xl mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

        {/* HEADER */}
        <h2 className="flex items-center gap-2 mb-2 text-xl font-semibold">
          ✳ Image Size Reducer
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Optimize your images for the web with advanced compression controls.
        </p>

        {/* TOP GRID */}
        <div className="grid gap-6 mb-6 md:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="mb-2 text-sm font-semibold">Original Image</p>

            <div className="border border-dashed border-[var(--border-color)] rounded-xl h-[260px] flex items-center justify-center text-center">

              <div>
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                    <ImageIcon size={18} className="text-yellow-500" />
                  </div>
                </div>

                <p className="text-sm font-semibold">Upload an image</p>
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
          </div>

          {/* RIGHT */}
          <div>
            <p className="mb-2 text-sm font-semibold">Compressed Result</p>

            <div className="h-[260px] rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-700/40 to-gray-600/20">

              <div className="text-center text-[var(--text-secondary)]">
                <div className="flex justify-center mb-3">
                  <SlidersHorizontal size={30} />
                </div>
                <p className="text-sm">Result will appear here</p>
              </div>

            </div>
          </div>

        </div>

        {/* SLIDER */}
        <div className="mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span>Compression Level (Quality)</span>
            <span>{quality}%</span>
          </div>

          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full accent-yellow-500"
          />
        </div>

        {/* ADVANCED */}
        <div
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="flex items-center justify-between py-3 cursor-pointer"
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <SlidersHorizontal size={16} /> Advanced Output Settings
          </span>
          <span>{advancedOpen ? "▲" : "▼"}</span>
        </div>

        {advancedOpen && (
          <div className="border border-[var(--border-color)] rounded-xl p-4 mb-4">

            <div className="grid gap-4 mb-4 md:grid-cols-2">

              {/* FORMAT */}
              <div>
                <p className="mb-1 text-xs">Output Format</p>
                <select className="w-full p-3 rounded bg-black border border-[var(--border-color)]">
                  <option>Original Format</option>
                  <option>JPEG</option>
                  <option>PNG</option>
                  <option>WEBP</option>
                </select>
              </div>

              {/* SIZE */}
              <div>
                <p className="mb-1 text-xs">Target File Size (MB, optional)</p>
                <input
                  placeholder="e.g. 0.5 for 500KB"
                  className="w-full p-3 rounded bg-black border border-[var(--border-color)]"
                />
              </div>

            </div>

            {/* WIDTH */}
            <div>
              <p className="mb-1 text-xs">Max Width (px, optional)</p>
              <input
                placeholder="e.g. 1920"
                className="w-full p-3 rounded bg-black border border-[var(--border-color)]"
              />
            </div>

          </div>
        )}

        {/* BUTTON */}
        <button className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-black transition bg-yellow-600 rounded-lg hover:bg-yellow-700">
          ✳ Compress Image
        </button>

      </div>
    </div>

      </main>

            <div className="max-w-5xl mx-auto">

      {/* HEADER */}
      <h2 className="mb-4 text-4xl font-bold text-yellow-500">
Why is Image Compression Important?    </h2>

      <p className="text-lg text-[var(--text-secondary)] max-w-7xl ">
Have you ever found the perfect image, only to realize it's too small or blurry to use? Our Image Upscaler solves this common problem. Using a lightweight but powerful machine learning model, this tool doesn't just enlarge your image—it enhances it. How to Use the Upscaler  </p>
      <p className="text-lg text-[var(--text-secondary)] max-w-7xl">
Upload Your Image: Start by uploading the low-resolution image you want to enhance.
 </p>
      <p className="text-lg text-[var(--text-secondary)] max-w-5xl">
    How Does It Work?
      </p>
      <p className="text-lg text-[var(--text-secondary)] max-w-5xl mb-10">
Our tool uses a technique called "lossy" compression. It intelligently removes unnecessary data from the image file. By adjusting the "Quality" slider, you can control the trade-off between file size and image quality. A lower quality setting will result in a much smaller file, but you may start to see some visual artifacts. A higher quality setting preserves more detail but results in a larger file. The key is to find the sweet spot where the file size is small, but the image still looks great to the human eye.  </p>

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

export default SizeReducer;