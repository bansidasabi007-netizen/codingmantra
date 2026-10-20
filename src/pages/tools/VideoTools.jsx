import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer";
const tools = [
  {
    title: "Logo Animation Generator (AI)",
    desc: "Animate your logo with stunning video effects using AI.",
    icon: "ri-video-line",
    link: "/Animation"
  },
  {
    title: "Festival Video Generator (AI)",
    desc: "Generate professional, cinematic festival greetings videos using AI.",
    icon: "ri-calendar-line",
    link: "/Festivall"
  },
  {
    title: "Jewelry Product Videography (AI)",
    desc: "Generate stunning, short video clips of jewelry products from text prompts.",
    icon: "ri-video-line",
    link: "/Jewelry"
  },
  {
    title: "Product Videography (AI)",
    desc: "Generate professional, cinematic video clips for any product using AI.",
    icon: "ri-video-line",
    link: "/Productss"
  },
  {
    title: "Apparel Product Videography (AI)",
    desc: "Create cinematic video clips of your apparel on models or in scenes.",
    icon: "ri-t-shirt-line",
    link: "/Apparel"
  },
  {
    title: "AI Story Teller",
    desc: "Bring stories to life with AI video. Control characters, scenes, and transitions.",
    icon: "ri-book-open-line",
    link: "/Story"
  }
];

function VideoTools() {

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
      <div className="px-6 py-4 text-sm text-gray-400">
        Home &gt; Tools &gt; <span className="text-white">Video Tools</span>
      </div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          AI Video Tools
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Harness the power of generative AI to create stunning video content from simple text descriptions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid max-w-6xl gap-8 px-6 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

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
The Next Frontier of Content Creation
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Video is the most engaging medium on the internet, but production has traditionally been complex and expensive. 
Generative AI is changing everything. Our AI video tools put the power of a film studio in your hands, allowing you to bring your ideas to life from a simple text prompt.
</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
Whether you need a dynamic product showcase, an eye-catching social media ad, or a beautiful background visual, 
our tools provide a fast, cost-effective way to produce high-quality video content at scale.
</p>

</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What is generative video AI?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Generative video AI refers to artificial intelligence models that create video clips from text prompts or images using deep learning.
</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
How do I write a good prompt?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Use clear descriptions including scene, lighting, camera angle, subject and mood.
</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
How long does AI video generation take?

<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Most AI video generators take between a few seconds to a few minutes depending on complexity.
</p>

</details>

</div>

</div>


<Footer/>
    </div>



  );
}

export default VideoTools;