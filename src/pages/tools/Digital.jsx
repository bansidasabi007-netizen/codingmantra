import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../../component/Footer";
import VideoTools from "./VideoTools";
import { Upload, Play, ChevronDown} from "lucide-react";
import { RiHome5Line, RiArrowLeftLine, } from "react-icons/ri";
import { ArrowLeft } from "lucide-react";

const tools = [
  {
    title: "VEO-3 Video Script Generator (AI)",
    desc: "Generate engaging video scripts for short-from ads,optimized for AI video generator like VEO-3",
    icon: "ri-video-line",
    link: "/VEO"
  },
  {
    title: "WhatsApp Widget Generator",
    desc: "Create and customize a free WhatsApp chat widget for your website to engage visitors",
    icon: "ri-calendar-line",
    link: "/WhatsApp"
  },
  {
    title: "Social Media post Generator (AI)",
    desc: "Create stunning, on-brand promotional images for your social media channels in just a few clicks.",
    icon: "ri-video-line",
    link: "/Social"
  },
  {
    title: "LinkedIn Post Generator (AI)",
    desc: "Generate professional engaging posts for your LinkedIn profile or comapany page.",
    icon: "ri-video-line",
    link: "/LinkedInn"
  },
  {
    title: "Hastag Generator (AI)",
    desc: "Generate relevant and trending hashtags for Instagram, Twitter, and LinkedIn to boost your social media reach.",
    icon: "ri-t-shirt-line",
    link: "/Hashtag"
  },
  {
    title: "Ad Copy Generator (AI)",
    desc: "Generate high-converting ad copy for your campaigns, Get multiple headline and description variations for Google and Facebook Ads.",
    icon: "ri-book-open-line",
    link: "/AD"
  },
  {
    title: "Email Subject Line Generator (AI) ",
    desc: "Generate Catch ,high-converting email subject lines with our AI tool to improve your open rates.",
    icon: "ri-book-open-line",
    link: "/Line"
  },
  {
    title: "UTM Builder",
    desc: "Generate UTM codes to track your campaign performance accurately.",
    icon: "ri-book-open-line",
    link: "/UTM"
  },
];

function Digital() {

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
<div className="w-full px-4 mx-auto my-6">

  <div
    className="
      flex
      items-center

      gap-2
      sm:gap-4

      px-3
      sm:px-5

      py-3
      sm:py-4

      rounded-2xl

      border
      border-[#E5E7EB]
      dark:border-[#232531]

      bg-white
      dark:bg-[#121218]

      shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      dark:shadow-none

      overflow-x-auto
      whitespace-nowrap

      transition-all
      duration-300
    "
  >

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
      className="
        flex-shrink-0

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      <RiHome5Line className="text-[14px] sm:text-[18px]" />
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>

    {/* TOOLS */}
    <Link
      to="/tools"
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      Tools
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>


    {/* CURRENT */}
    <span
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        font-semibold

        text-[#111111]
        dark:text-white
      "
    >
      Digital Marketing Tools
    </span>

  </div>

</div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Digital Marketing Tools        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
Supercharge your online presence with our suite of AI-powered marketing utilities.</p>  </div>

      {/* Cards */}
      <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

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
Create Smarter, Not Harder
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Effective digital marketing requires a constant stream of high-quality, engaging content. Our AI-powered tools are designed to act as your creative partner, helping you overcome writer's block, generate branded visuals, and optimize your posts for maximum reach.
</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
Whether you need to craft the perfect LinkedIn update, design a promotional image for Instagram, or find the right hashtags to join a trending conversation, these utilities provide a fast, free, and efficient solution to help you achieve your marketing goals.
</p>

</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
How can AI help with my social media marketing?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
AI can be a powerful partner in content creation. It can help you brainstorm ideas, write catchy headlines, and even generate entire posts based on a single prompt. This saves you time and helps you overcome writer's block, allowing you to maintain a consistent presence on social media.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
Are these tools free to use?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

Yes, all the tools listed here are free to use. Our goal is to provide valuable utilities to the community of developers, designers, and marketers.
</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
How do the post generator create on-brand images?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

When you upload your logo, our tools analyze its colors to create a matching theme. This ensures that the generated post images have a consistent and professional look that aligns with your brand identity, without any manual design work required.</p>

</details>

</div>

</div>


<Footer/>
    </div>



  );
}

export default Digital;