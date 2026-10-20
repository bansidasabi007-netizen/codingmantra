import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../component/Navbar";
import { FaSearch, FaClock, FaFileAlt, FaShareAlt } from "react-icons/fa";
import Footer from "../component/Footer";
import { Links, useNavigate } from "react-router-dom";
import { link } from "framer-motion/client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


function Home() {

const [theme, setTheme] = useState("system");
const sectionRef = useRef(null);



const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});

const navigate = useNavigate();

const scale = useTransform(scrollYProgress,[0,1],[1,1.1]);
const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 70,
  damping: 20,
});

const row1Y = useTransform(
  smoothProgress,
  [0, 1],
  [0, 120]
);

const row2Y = useTransform(
  smoothProgress,
  [0, 1],
  [0, 160]
);

const row3Y = useTransform(
  smoothProgress,
  [0, 1],
  [0, 220]
);

const rowOpacity = useTransform(
  scrollYProgress,
  [0, 0.35, 0.6],
  [1, 0.18, 1]
);

const textOpacity = useTransform(
  scrollYProgress,
  [0, 0.15, 0.45],
  [0, 1, 1]
);



const tools = [
  {
    title: "Image Tools",
    count: "17 Tools",
    desc: "Edit, convert, and optimize images with AI-powered tools.",
    icon: <FaSearch />,
    link: "/tools/image-tools",
  },

  {
    title: "Video Tools",
    count: "6 Tools",
    desc: "Create and edit videos using the power of AI.",
    icon: <FaSearch />,
    link: "/tools/video-tools",
  },

  {
    title: "Audio Tools",
    count: "1 Tools",
    desc: "Generate and manage high-quality audio using AI.",
    icon: <FaSearch />,
    link: "/tools/audio-tools",
  },

  {
    title: "Customer Relationship Management(CRM)",
    count: "3 Tools",
    desc: "Tools to manage customer relationships, groups, and email campaigns",
    icon: <FaSearch />,
    link: "/tools/customer",
  },

  {
    title: "Digital Marketing Tools",
    count: "14 Tools",
    desc: "Supercharge your online presence with our suite of marketing utilities",
    icon: <FaShareAlt />,
    link: "/tools/digital",
  },

  {
    title: "Financial Tools",
    count: "6 Tools",
    desc: "Plan your loans, investments, and savings with our suite of financial calculators.",
    icon: <FaSearch />,
    link: "/tools/financial",
  },

  {
    title: "SEO Tools",
    count: "7 Tools",
    desc: "Generate meta tags and other utilities to improve your search engine ranking",
    icon: <FaSearch />,
    link: "/tools/seo",
  },

  {
    title: "Date & Time Tools",
    count: "6 Tools",
    desc: "A suite of tools for handling dates, times and timezones",
    icon: <FaClock />,
    link: "/tools/date-time",
  },

  {
    title: "Legal Tools",
    count: "4 Tools",
    desc: "Generate standard legal documents for your website and business operations.",
    icon: <FaFileAlt />,
    link: "/tools/legal",
  },

  {
    title: "Text & Content Tools",
    count: "3 Tools",
    desc: "A collection of handy utilities for all your text manipulation needs",
    icon: <FaSearch />,
    link: "/tools/content",
  },

  {
    title: "QR Code Tools",
    count: "6 Tools",
    desc: "Generate, customize, and download QR codes for your business or personal use.",
    icon: <FaSearch />,
    link: "/tools/qr",
  },

  {
    title: "Developer & Productivity Tools",
    count: "14 Tools",
    desc: "A collection of handy utilities for developers and everyday tasks.",
    icon: <FaSearch />,
    link: "/tools/developer",
  },

  {
    title: "Learning Tools",
    count: "2 Tools",
    desc: "Generate personalized learning pathways and educational resources",
    icon: <FaSearch />,
    link: "/tools/learning",
  },
];

const cards=[
{
title:"AI Product Photography",
desc:"Transform your e-commerce visuals with our advanced AI product photography tools.",
},
{
title:"Top Web Development in Ahmedabad",
desc:"Based in Ahmedabad, Gujarat, our renowned web and mobile app development company delivers scalable solutions.",
},
{
title:"Guides, Tutorials & Case Studies",
desc:"Stay ahead of the curve with our expert tutorials and case studies.",
}
];

const imagesRow1=["/img1.png","/img2.png","/img3.png","/img4.png"];
const imagesRow2=["/img5.png","/img6.png","/img7.png","/img2.png"];
const imagesRow3=["/img1.png","/img6.png","/img4.png","/img3.png"];


const applyTheme=useCallback((mode)=>{
const root=document.documentElement;

if(mode==="dark") root.classList.add("dark");     
else if(mode==="light") root.classList.remove("dark");
else{
const systemDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
root.classList.toggle("dark",systemDark);
}
},[]);


const changeTheme=(mode)=>{
setTheme(mode);
localStorage.setItem("theme",mode);
applyTheme(mode);
};


useEffect(()=>{
const savedTheme=localStorage.getItem("theme")||"system";
setTheme(savedTheme);
applyTheme(savedTheme);
},[applyTheme]);


return(

<div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen overflow-x-hidden">

<Navbar changeTheme={changeTheme}/>



{/* SCROLL GALLERY */}
<section
ref={sectionRef}
className="
relative
overflow-hidden
bg-black
h-[55vh]
sm:h-[95vh]
md:h-[130vh]
lg:h-[185vh]
xl:h-[185vh]
"
>
<div className="relative z-20 px-4 pt-4 text-center sm:pt-6 md:pt-8 lg:pt-10">

<h1 className="
text-[30px]
sm:text-[42px]
md:text-[60px]
lg:text-[80px]
xl:text-[90px]
font-black
leading-[0.9]
tracking-[-4px]
bg-gradient-to-r
from-pink-700
via-orange-600
to-purple-800
bg-clip-text
text-transparent
">
AI Product Photography
</h1>

<h2 className="
mt-2
text-[28px]
sm:text-[40px]
md:text-[55px]
lg:text-[85px]
xl:text-[100px]
font-black
leading-[0.9]
tracking-[-3px]
">
<span className="text-white">&</span>{" "}
<span
className="text-transparent bg-gradient-to-r from-violet-500 via-pink-300 to-orange-300 bg-clip-text"
>
Virtual Try-On
</span>
</h2>

<h3 className="
mt-2
text-[16px]
sm:text-[22px]
md:text-[32px]
lg:text-[52px]
xl:text-[72px]
font-extrabold
leading-none
text-white/90
tracking-[-2px]
">
for E-commerce Brands
</h3>

<p className="max-w-4xl px-4 mx-auto mt-10 text-xs text-xl leading-relaxed sm:px-6 md:text-2xl text-white/70 sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
Turn product photos and creative ideas into high-quality images,
try-on visuals, and videos for social media, websites, and marketing.
</p>

<button
className="
relative
z-[120]
px-5
py-2

sm:px-6
sm:py-2

md:px-8
md:py-3

lg:px-10
lg:py-3

text-sm
sm:text-base
md:text-lg
lg:text-xl
mt-10
font-semibold
text-black
transition-all
duration-300
bg-white
rounded-full
border border-white/15
shadow-[0_8px_30px_rgba(255,255,255,0.12)]
hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)]
hover:scale-105
"
>
Start Creating for Free →
</button>

</div>


{/* ROW 1 */}

<motion.div
style={{
  y: row1Y,

opacity: useTransform(
  scrollYProgress,
  [0, 0.45, 0.75, 1],
  [0.22, 0.3, 0.55, 0.7]
),
  scale: useTransform(
    scrollYProgress,
    [0, 0.85],
    [0.92, 1]
  ),

filter: useTransform(
  scrollYProgress,
  [0, 0.7, 1],
  [
    "brightness(0.45) blur(1.5px)",
    "brightness(0.6) blur(1px)",
    "brightness(0.85) blur(0px)"
  ]
),
}}

animate={{ x: ["0%", "-50%"] }}
transition={{
  repeat: Infinity,
  repeatType: "loop",
  duration: 35,
  ease: "linear",
}}
className="
marquee-row
absolute
top-[20px]
sm:top-[10px]
md:top-[50px]
lg:top-[0px]
z-10
flex
w-max
gap-1
sm:gap-2
md:gap-6
"
>

{[
...imagesRow1,
...imagesRow1,
...imagesRow1,
...imagesRow1,
...imagesRow1,
].map((src,i)=>(
<img
key={i}
src={src}
alt=""
className="
w-[170px]
h-[120px]

sm:w-[320px]
sm:h-[250px]

md:w-[320px]
md:h-[230px]

lg:w-[380px]
lg:h-[270px]

xl:w-[460px]
xl:h-[330px]

2xl:w-[520px]
2xl:h-[400px]

object-cover
rounded-xl
md:rounded-2xl
flex-shrink-0
will-change-transform
transform-gpu

"
/>
))}

</motion.div>


{/* ROW 2 */}

<motion.div
style={{
  y: row2Y,
opacity: useTransform(
  scrollYProgress,
  [0, 0.35, 0.7, 1],
  [0.35, 0.65, 1, 1]
),
  scale: useTransform(
    scrollYProgress,
    [0, 0.85],
    [0.92, 1]
  ),

filter: useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [
    "brightness(0.65) blur(1.5px)",
    "brightness(1.1) blur(0.5px)",
    "brightness(1.8) blur(0px)"
  ]
),
}}
animate={{ x: ["-50%", "0%"] }}
transition={{
  repeat: Infinity,
  repeatType: "loop",
  duration: 35,
  ease: "linear",
}}
className="
absolute
top-[100px]
sm:top-[250px]
md:top-[300px]
lg:top-[380px]
z-10
flex
w-max
gap-1
sm:gap-2
md:gap-6
"
>

{[...imagesRow2,...imagesRow2,...imagesRow2].map((src,i)=>(
<img
key={i}
src={src}
alt=""
className="
w-[170px]
h-[120px]

sm:w-[320px]
sm:h-[250px]

md:w-[300px]
md:h-[210px]

lg:w-[380px]
lg:h-[270px]

xl:w-[460px]
xl:h-[330px]

2xl:w-[520px]
2xl:h-[400px]

object-cover
rounded-xl
md:rounded-2xl
flex-shrink-0

scale-[0.95]
hover:scale-100

transition-transform
duration-700
will-change-transform
"
/>
))}

</motion.div>


{/* ROW 3 */}

<motion.div
style={{
  y: row3Y,
opacity: useTransform(
  scrollYProgress,
  [0, 0.35, 0.7, 1],
  [0.4, 0.75, 1, 1]
),
  scale: useTransform(
    scrollYProgress,
    [0, 0.85],
    [0.92, 1]
  ),

filter: useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [
    "brightness(0.7) blur(1.5px)",
    "brightness(1.2) blur(0.5px)",
    "brightness(2) blur(0px)"
  ]
),
}}
animate={{ x: ["0%", "-50%"] }}
transition={{
  repeat: Infinity,
  repeatType: "loop",
  duration: 35,
  ease: "linear",
}}
className="
absolute
top-[230px]
sm:top-[525px]
md:top-[550px]
lg:top-[580px]
xl:top-[760px]
z-10
flex
w-max
gap-1
sm:gap-2
md:gap-6
"
>
  

{[
...imagesRow1,
...imagesRow1,
...imagesRow1,
...imagesRow1,
...imagesRow1,
].map((src,i)=>(
<img
key={i}
src={src}
alt=""
className="
w-[170px]
h-[120px]

sm:w-[320px]
sm:h-[250px]

md:w-[300px]
md:h-[210px]

lg:w-[380px]
lg:h-[270px]

xl:w-[460px]
xl:h-[330px]

2xl:w-[520px]
2xl:h-[400px]

object-cover
rounded-xl
md:rounded-2xl
flex-shrink-0

scale-[0.95]
hover:scale-100

transition-transform
duration-700
will-change-transform
"
/>
))}

</motion.div>

</section>

{/* TOOLS */}

{/* TOOLS */}
<section className="px-6 pt-8 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-yellow-500">
      Explore Our Tool Categories
    </h2>

    <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, index) => (
        <div
          key={index}
          onClick={() => navigate(tool.link)}
          className="p-8 rounded-xl border bg-[var(--card-bg)] border-[var(--border-color)] hover:border-yellow-500 transition cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 text-yellow-500 rounded-full bg-yellow-500/10">
              {tool.icon}
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {tool.title}
            </h3>
          </div>

          <p className="text-sm text-[var(--text-secondary)]">{tool.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CARDS */}

<div className="px-6 py-16 text-white bg-[#121215]">

{/* CARDS */}
<div className="px-6 py-16 bg-[var(--bg-primary)] text-[var(--text-primary)]">
  <div className="max-w-6xl mx-auto">
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -8 }}
          className=" p-16 min-h-[320px] rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] transition flex flex-col justify-between "
        >
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            {card.title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</div>
<Footer/>
</div>
);
}

export default Home;