import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const products = [
  {
    title: "CM POS – Smart POS for Small & Medium Businesses",
    category: "Business Software",
    price: "Starting from $999",
    img: "color.svg",
    desc: "A powerful and easy-to-use Point of Sale system for growing businesses.",
    link: "/CMPOS"
  },
  {
    title: "WACM.IN - Simplify Your WhatsApp Marketing",
    category: "Business Software",
    price: "Starting from $999",
    img: "6bb8b8df-14e0-42f9-a304-d57f9e5778dd_logo.png",
    desc: "Transform your customer engagement with powerful WhatsApp marketing.",
    link: "/WACM"
  },
  {
    title: "CodingMantra AI",
    category: "Business Software",
    price: "Starting from $299",
    img: "1705429477ZpIWyKY9IwjMLRygaB9n.png",
    desc: "AI powered WhatsApp marketing with bulk messaging and automation.",
        link: "/CodingMantra"
  },
  {
    title: "CodingMantra Sanatan",
    category: "Spiritual App",
    price: "Free",
    img: "q8ghvJm_IjrBNgdaV3fiGxZEvdpXkebW2R7VHeoElPFez9HdpjT9nvbw6Ej3LM2BRuY=w480-h960-rw.jpeg",
    desc: "Dive into India's spiritual heritage with scriptures and mantras.",
    link: "/Sanatan"
  },
  {
    title: "SocioMantra - Society Management System",
    category: "Business Software",
    price: "Starting from $999",
    img: "sociomantra.jpeg",
    desc: "A comprehensive platform for society operations and security.",
    link: "/SociooMantra"
  },
  {
    title: "cmBiz - eCommerce Storefront for SMBs",
    category: "Business Software",
    price: "Starting from $999",
    img: "logo.jpeg",
    desc: "Create your online store directly from your POS system.",
    link: "/Storefront"
  },
];



function Products() {
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
 <div className="min-h-screen dark:bg-[#09090B] text-[var(--text-primary)]">

      {/* Navbar */}
     <Navbar changeTheme={changeTheme}/>

      <div className="px-6 py-5">

            <div className="w-full p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300">
          
          <Link to="/" className="hover:underline">
            Home
          </Link>
        
          {" > "}
          <span className="font-semibold text-black dark:text-white">
            Products
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#F3A412]">
            Our Products
          </h1>

          <p className="mt-3 text-[var(--text-secondary)]">
            High-quality tools and resources to accelerate your development journey.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid w-full gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">

{products.map((item, index) => (
  <Link
     key={index}
  to={item.link}
    className="
      block
      p-6
      transition
      duration-300
      border
      rounded-xl
      group
      border-gray-200
      dark:border-gray-700
      bg-[var(--card-bg)]
      hover:border-[#F3A412]
      hover:-translate-y-1
      hover:shadow-xl
    "
  >

    
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
  src={item.img}
  alt={item.title}
  className="object-contain transition w-28 h-28 group-hover:scale-105"
/>
              </div>

              {/* Category + Price */}
              <div className="flex items-center justify-between mb-2 text-xs">

                <span className="text-[var(--text-secondary)]">
                  {item.category}
                </span>

                <span className="px-3 py-1 text-green-500 rounded-full bg-green-500/10">
                  {item.price}
                </span>

              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-[#F3A412]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>

              {/* Rating */}
              <div className="mb-4 text-yellow-400">
                ★★★★★
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between">

                <button className="flex items-center justify-center w-10 h-10 transition border rounded-lg border-gray-300 dark:border-gray-700 hover:border-[#F3A412]">
                  🌐
                </button>

                <button className="px-4 py-2 transition rounded-lg text-[var(--btn-text)] bg-[#F3A412] hover:opacity-90">
                  Details
                </button>

              </div>

            </Link  >
          ))}

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Products;