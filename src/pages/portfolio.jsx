import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const projects = [
  {
    title: "Khadhya Khurak - Food Industry Platform",
    category: "Events / Media",
    desc: "A comprehensive digital platform for India's leading food industry publication and exhibition, supporting their long-standing mission to connect and inform...",
    img: "logo (4).png", 
    tags: ["Web Portal", "Event Management", "QR Code", "Payment Gateway", "Laravel"],
    link: "/Khadhya",
  },
  {
    title: "RotaPal - Rota Management for Healthcare",
    category: "Healthcare / SaaS",
    desc: "RotaPal is your best friend for building and managing rotas, reducing the hassle of back-and-forth messages and time consuming paperwork...",
    img: "60e41da2fe074c2aa2244409_rotopal-logo.svg",
    tags: ["SaaS", "Healthcare", "Web App", "Rota Management", "iOS", "Android"],
    link: "/RotaPal",
  },
  {
    title: "Mr. Samosa - Digital Menu & Ordering Portal",
    category: "Food & Beverage",
    desc: "A vibrant and user-friendly digital menu portal for a restaurant chain specializing in a wide variety of samosas and other fast food items.",
    img: "logo (5).png",
    tags: ["Web Portal", "Food & Beverage", "Digital Menu", "UI/UX"],
    link: "/Samosa",
  },
  {
    title: "Krislur-Digital Transformaton & Automation",
    category: "Consulting/Business Services",
    desc: "A Custom web portal that digitizes manual form filling and automates reporting. streamlining business operations for krislur.  ",
    img: "logo (6).png", 
    tags: ["Web App", "Automation ", "Digital Transformation ", "Data Management", "Laravel"],
    link: "/Krislur",
  },
  {
    title: "RotaPal - Rota Management for Healthcare",
    category: "Healthcare / SaaS",
    desc: "A vehicle management system to register vehicles,associate them with unique QR codes for residential flats, and allow security to scan for resident details.",
    img: "logo (7).png",
    tags: ["Web App", "QR Code  ", "Security ", "Laravel"],
    link: "/ARVMS",
  },
  {
    title: "Hemu Silver-Jwellery Business Management  ",
    category: "Food & Beverage",
    desc: "A specialized application for a wholesale Jewellery business to automate the complex calculations of wastage, labor charges, fine weight, and final rates ",
    img: "color.jpeg",
    tags: ["Web Portal", "Business Tool", "Finance", "PHP"],
    link: "/Hemu",
  },
  {
    title: "Anmol Silver - Jewellery Business Management",
    category: "Jewellery/B2B",
    desc: "A bespoke tool for a wholesale jewellery business to manage and automate complex calculations for wastage, labor,purity(fine), and final pricing ",
    img: "android-chrome-512x512.png", 
    tags: ["Web App", "Automation ", "Digital Transformation ", "Data Management", "Laravel"],
    link: "/Anmol",
  },

    {
    title: "SocioMantra-Comprehensive Society Management  ",
    category: "Real Estate / Management",
    desc: "A Comprehensive society management platform designed to streamline operations for residential complexes ,enhancing communiation and security",
    img: "sociomantra (1).jpeg",
    tags: ["Web Portal", "Business Tool", "Finance", "PHP"],
    link: "/SocioMantra",
  },
  {
    title: "N.D. Shah Tea-Premium Authentic Assam tea since 1948 ",
    category: "Healthcare / SaaS",
    desc: "A brand website for N.D Shah Tea,bringing the robuts soul of Assam's finest tea estate of every Gujarati home with 75 years of trust and expert...",
    img: "logo (8).png",
    tags: ["Web App", "QR Code  ", "Security ", "Laravel"],
    link: "/Shah",
  },
  {
    title: "Gigascale Consultant-Elite Finance & IT-Tech Recruitment ",
    category: "Recruitment / Consulting",
    desc: "A Strategic bridge connecting elite talent in high-skilled Finance and IT-Tech with the UK's most prestigious Organization. ",
    img: "logo (9).png",
    tags: ["Web App", "QR Code  ", "Security ", "Laravel"],
    link: "/Gigascale",
  },

];



function Portfolio() {
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Navbar */}
     <Navbar changeTheme={changeTheme}/>
     <div className="px-6 pb-10">


     
     
       <div className="w-full p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 mt-[20px]">
  
  <Link to="/" className="hover:underline">
    Home
  </Link>

  {" > "}

  <span className="font-semibold text-black dark:text-white">
    Portfolio
  </span>

</div>

       {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#F3A412]">
           Our Work
          </h1>

          <p className="mt-3 max-w-3xl text-[18px] mx-auto text-[var(--text-secondary)]">
          We take pride in building solutions that solve real-world problems and drive business growth. Here’s a look at some of the projects we’ve brought to life
          </p>
        </div>
    
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
         <div
  key={index}
  className="flex flex-col justify-between p-6  border rounded-xl bg-[var(--card-bg)] border-gray-700 
             transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
>
            <div>
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-contain w-[180px] h-[180px]"
                />
              </div>

              {/* Category */}
              <p className="mb-2 text-xs text-[var(--text-secondary)]">{project.category}</p>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{project.title}</h3>

              {/* Description */}
              <p className="mb-4 text-sm text-gray-400">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-white bg-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link aligned at bottom */}
            <a
              href={project.link}
              className="mt-auto text-sm font-semibold text-[#F3A412] hover:underline"
            >
              View Case Study →
            </a>
          </div>
        ))}
      </div>
   

      {/* Footer */}
      <Footer />
         </div>
    </div>
  );
}

export default Portfolio;