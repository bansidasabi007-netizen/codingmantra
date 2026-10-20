import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Portal Development",
    desc: "We build responsive, high-performance web portals and applications tailored to your business needs, using the latest technologies for a seamless user experience.",
    img: "web-portal-development.png",
    link: "/Portal",
  },
  {
    title: "Mobile App Development",
    desc: "We design and develop custom mobile applications for iOS and Android, delivering intuitive user experiences and powerful functionality to engage your customers on the go.",
    img: "mobile-app-development.png",
    link: "/Mobile",
  },
  {
    title: "E-commerce Web & App Development",
    desc: "Build a powerful online store with our custom e-commerce solutions. We create seamless shopping experiences on both web and mobile platforms to drive sales and customer loyalty.",
    img: "ecommerce-development.png",
    link: "/Commerce",
  },
  {
    title: "In-House Process Automation",
    desc: "Eliminate repetitive manual tasks and streamline your operations. We build custom software to automate your unique internal processes, saving you time and reducing errors.",
    img: "ecommerce-development (1).png",
    link: "/Automation",
  },
  {
    title: "Tailor Made Custom Solutions ",
    desc: "Have a unique challenge that off-the-shelf software can't solve? We specialize in building completely custom software solutions from the ground up to meet your exact needs.",
    img: "process-automation.png",
    link: "/Tailor",
  },
  {
    title: "WhatsApp Marketing ",
    desc: "Engage customers directly with powerful WhatsApp campaigns, chatbots, and automation to drive sales and support.",
    img: "whatsapp-marketing.png",
    link: "/Marketing",
  },
  {
    title: "AI Integration",
    desc: "We design and develop custom mobile applications for iOS and Android, delivering intuitive user experiences and powerful functionality to engage your customers on the go.",
    img: "ai-integration.png",
    link: "/Integration",
  },
  {
    title: "Cloud Solutions",
    desc: "Build a powerful online store with our custom e-commerce solutions. We create seamless shopping experiences on both web and mobile platforms to drive sales and customer loyalty.",
    img: "cloud-solutions.png",
    link: "/Cloud",
  },
];

function Services() {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system theme initially
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemDark);
  }, []);

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      setDarkMode(true);
    } else if (mode === "light") {
      root.classList.remove("dark");
      setDarkMode(false);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
      setDarkMode(systemDark);
    }
  };

  return (
<div className="min-h-screen text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">
        {/* Navbar */}
      <Navbar changeTheme={changeTheme} darkMode={darkMode} />
      <div className="px-6 pb-10">
       <div className="w-full p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 mt-[20px]">
  
  <Link to="/" className="hover:underline">
    Home
  </Link>

  {" > "}
  <span className="font-semibold text-black dark:text-white">
    Services
  </span>
</div>

     {/* Title */}
        <div className="mb-0 text-center ">
          <h1 className="text-5xl font-bold text-[#F3A412]">
           Our Core Services
          </h1>

          <p className="mt-3 text-[18px] md:max-w-3xl mx-auto text-[var(--text-secondary)] ">
          We provide cutting-edge solutions to help your business grow and innovate in the digital landscape. Explore our offerings to find the perfect fit for your project.
          </p>
          <p className="mt-3 text-[15px] md:max-w-3xl mx-auto text-[#95959D] mb-[50px]">
            Note: Pricing is based on your requirements and will start from ₹999 to ₹999999  
          </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 transform bg-gray-100 shadow-lg dark:bg-[#17171C] rounded-xl hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {service.desc}
                </p>
                <a
                  href={service.link}
                  className="font-semibold text-yellow-500 hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;