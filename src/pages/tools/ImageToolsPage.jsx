import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";
import { useEffect } from "react";


function ImageToolsPage() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

const tools = [
  {
    title: "Product Photography (AI)",
    desc: "Generate professional photos of your product in any scene.",
    icon: "ri-camera-line", // કેમેરા આઈકોન
    link: "/ProductPhotography"
  },
  {
    title: "Jewelry Try-On (AI)",
    desc: "Virtually try on jewelry using AI by uploading product and model photos.",
    icon: "ri-sparkling-2-line", 
    link: "/AiJewelry"
  },
  {
    title: "Jewellery All In One (AI)",
    desc: "Generate stunning jewellery try-on images with your product and model photos.",
    icon: "ri-magic-line",
    link: "/Jewellery"
  },
  {
    title: "Jewellery Rate Poster (AI)",
    desc: "Generate Today's gold and silver rate posters with your branding.",
    icon: "ri-money-dollar-circle-line",
    link: "/Poster"
  },
  {
    title: "Festival Post Generator (AI)",
    desc: "Create stunning festival greeting and promotional posts using AI.",
    icon: "ri-calendar-event-line", 
    link: "/Festival"
  },
  {
    title: "Product Try-On (AI)",
    desc: "Virtually try on products like apparel, eyewear, and furniture.",
    icon: "ri-t-shirt-line", 
    link: "/Product"
  },
  {
    title: "Apparel Try-On (AI)",
    desc: "Virtually try on Clothes. See how apparel looks on a model.",
    icon: "ri-t-shirt-line", 
    link: "/Product"
  },
  {
    title: "Sketch to Real (AI)",
    desc: "Transform your sketches into photorealistic images using AI.",
    icon: "ri-quill-pen-line", 
    link: "/Sketch"
  },
  {
    title: "AI Logo Creator",
    desc: "Generate professional logos based on your brand name and ideas.",
    icon: "ri-pentagon-line", 
    link: "/AiLogo"
  },
  {
    title: "AI Professional Photography Editor",
    desc: "Upload your pictures and use AI to create professional-quality photographs.",
    icon: "ri-camera-line", 
    link: "/AIProfessional"
  },
  {
    title: "Nano Banana Image Editor (AI)",
    desc: "Generate New image from multiple reference images and a text prompt .",
    icon: "ri-pentagon-line", 
    link: "/Nano"
  },
  {
    title: "YouTube Thumbnail Generator (AI)",
    desc: "Create compelling, clickable YouTube thembnails in seconds with AI.",
    icon: "ri-pentagon-line", 
    link: "/Thumbnail"
  },
  {
    title: "Baby Milestone Generator (AI)",
    desc: "Create beautiful, custom milestone photos for your baby with AI",
    icon: "ri-pentagon-line", 
    link: "/Milestone"
  },
  {
    title: "Passport Photo Creator(AI)",
    desc: "Convert any portrait into a professional, complaint passport-style photo automatically.",
    icon: "ri-pentagon-line", 
    link: "/Passport"
  },

    {
    title: "Image Upscaler ",
    desc: "Enhance image resolution and quality using AI, making them sharper and more detailed. ",
    icon: "ri-pentagon-line", 
    link: "/ImageUpscaler"
  },
  {
    title: "Image Size Reducer  ",
    desc: "Compress and resize JPEG, PNG and WEBP images to reduce file size without signification loss of quality. ",
    icon: "ri-pentagon-line", 
    link: "/SizeReducer"
  },

  {
    title: "Image Format Convert  ",
    desc: "Easily convert images to and form PNG ,JPEG and WEBP formats in your browser.",
    icon: "ri-pentagon-line", 
    link: "/ImageFormat"
  },
];
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
<Navbar changeTheme={changeTheme} />


{/* BREADCRUMB NAVBAR */}
<div className="px-4 mx-auto mt-6 max-w-7xl">

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

    {/* CURRENT */}
    <span
      className="
        text-[15px]
        font-semibold
        text-white
      "
    >
      Image Tools
    </span>

  </div>

</div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-500">
          Image Tools
        </h1>
        <p className="mt-4 text-gray-400">
          Edit, convert, and optimize your images with our suite of powerful tools.
        </p>
      </div>

  {/* Cards */}
      <div className="grid gap-8 px-6 mx-auto w--full mt-14 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
<div
key={index}
onClick={() => tool.link && navigate(tool.link)}
className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
>

<span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
Powerful
</span>

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
Perfect Images, Faster Websites</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
In today's visual-driven world, high-quality images are essential. But large image files can drastically slow down your website, leading to poor user experience and lower search rankings. Our suite of image tools is designed to solve this problem.
</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
Whether you need to quickly compress a photo for your blog, convert a PNG to a more efficient WEBP format, or create a professional passport photo without leaving your house, these browser-based tools provide a fast, free, and secure solution. Your images are processed directly on your device and are never uploaded to our servers.
</p>
</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
Why is it important to reduce image file size?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Reducing image file size is crucial for web performance. Smaller images load faster, which improves user experience, reduces bounce rates, and is a positive signal for search engine rankings like Google's Core Web Vitals.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
What is the best image format for the web?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Generally, WEBP is the best format for modern websites as it offers superior compression and quality compared to both JPEG and PNG. However, JPEG is still excellent for photos, and PNG is necessary for images requiring a transparent background.
</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Are these tools secure to use?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Yes. Our image compression and conversion tools work entirely within your web browser. For the AI-powered tools, the image is sent to our server for processing but is not stored. Your privacy and data are a top priority.
</p>

</details>

</div>

</div>


<Footer/>

    </div>
  );
}

export default ImageToolsPage;