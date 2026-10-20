import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Gallery() {
  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  const categories = [
    "All",
    "Product Photography",
    "Jewelry",
    "Apparel",
    "Festival Posts",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    {
      id: 1,
      category: "Jewelry",
      title: "Dark Luxury Studio",
      image: "/1764768755165.png",
    },
    {
      id: 2,
      category: "Jewelry",
      title: "Elegant Gold Collection",
      image: "/1764768090457.png",
    },

    {
      id: 3,
      category: "Product Photography",
      title: "Premium Product Shot",
      image: "/1764768052663 (1).png",
    },

    {
      id: 4,
      category: "Product Photography",
      title: "Studio Product Campaign",
      image: "/1764768357622.png",
    },

    {
      id: 5,
      category: "Festival Posts",
      title: "Festive Celebration",
      image: "/1764769990786.png",
    },

    {
      id: 6,
      category: "Festival Posts",
      title: "Holiday Campaign",
      image: "/1764768231375.png",
    },

    {
      id: 7,
      category: "Apparel",
      title: "Modern Fashion",
      image: "/1764768500904.png",
    },

    {
      id: 8,
      category: "Apparel",
      title: "Luxury Clothing",
      image: "/1759566520884.png",
    },

    {
      id: 9,
      category: "Jewelry",
      title: "Diamond Showcase",
      image: "/1764772113463.png",
    },
  ];


  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
        (item) => item.category === activeCategory
      );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />

                  <div className="w-full max-w-7xl mx-auto p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 mt-[20px]">

                <Link to="/" className="hover:underline">
                    Home
                </Link>

                {" > "}

                <span className="font-semibold text-black dark:text-white">
                    Gallery
                </span>

            </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center px-4 text-center py-28">
        <h1
          className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Our{" "}
          <span className="text-yellow-500">
            Masterpiece
          </span>{" "}
          Gallery
        </h1>

        <p
          className="max-w-3xl mt-6 text-sm text-[var(--text-secondary)] sm:text-base md:text-lg"
        >
          Explore stunning AI-generated visuals including
          product photography, jewelry showcases,
          apparel campaigns and festival creatives.
        </p>

        <button
          className="
px-8
py-4
mt-8
font-semibold
rounded-full
transition-all
duration-300

bg-[var(--text-primary)]
text-[var(--bg-primary)]

hover:scale-105
"
        >
          Create Yours Now
        </button>
      </section>

      {/* STICKY FILTER */}
      <div className="sticky top-[72px] z-40 flex justify-center px-4 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-xl">
        <div
          className="flex flex-wrap justify-center gap-3 px-4 py-3 border rounded-full bg-[var(--card-bg)] border-[var(--border-color)]"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                px-4
                py-2
                rounded-full
                text-sm
                transition-all
                duration-300

                ${activeCategory === category
                  ? "bg-yellow-500 text-black"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <section className="px-5 py-12 mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className={`
          group
          relative
          overflow-hidden
          rounded-3xl
          bg-[var(--card-bg)]
          border
          border-[var(--border-color)]
          cursor-pointer
          transition-all
          duration-500

          ${index % 3 === 1 ? "lg:translate-y-20" : ""}
        `}
            >
              <img
                src={item.image}
                alt=""
                className="
            w-full
            h-[300px]
            sm:h-[360px]
            lg:h-[420px]
            object-cover

            transition-all
            duration-700

            group-hover:scale-110
          "
              />

              {/* Shadow Overlay */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-100"              />

              {/* Title */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 p-6 transition-all duration-500 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;