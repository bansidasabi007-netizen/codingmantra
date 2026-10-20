import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


function Navbar({ changeTheme = () => {}, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Fix: close dropdown after selecting theme
const handleThemeChange = (mode) => {
  if (typeof changeTheme === "function") {
    changeTheme(mode);
  }
  setOpen(false);
};
const location = useLocation();
const navLinkClass = (path) => {
  return location.pathname === path
    ? "text-[#F3A412] px-3 py-2 rounded-lg font-semibold"
    : `
        text-[#111111]
        dark:text-white

        hover:text-[#F3A412]
        dark:hover:text-[#F3A412]

        transition-colors duration-300

        px-3 py-2
      `;
};

  return (
<nav
  className="
    sticky
    top-0
    left-0

    z-[9999]

    w-full

    bg-white
    dark:bg-[#09090B]

    border-b

    border-[#E5E7EB]
    dark:border-[#1E1E28]

    transition-colors duration-300
  "
>
  <div className="flex items-center justify-between w-full px-6 py-4">


        {/* Logo */}
        <div
  className="
    text-xl
    font-bold

    text-[#111111]
    dark:text-white

    transition-colors duration-300
  "
>
          Coding<span className="text-yellow-500">Mantra</span>
        </div>

        {/* Desktop Menu */}
        <ul className="relative items-center hidden space-x-8 text-sm lg:flex">

          <li className="relative">

            <div
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-400"
            >
              Powerful Tools <FaChevronDown className="text-xs" />
            </div>

{toolsOpen && (
  <div
    className="
      absolute
      left-0
      top-full

      z-[9999]

      w-64
      p-4
      mt-4

      border
      border-gray-300

      rounded-lg
      shadow-2xl

      bg-[var(--card-bg)]
      text-[var(--text-primary)]

      space-y-2
    "
  >

    <Link
      to="/tools/image-tools"
      className="block py-1 hover:text-yellow-400"
    >
      Image Tools
    </Link>

    <Link
      to="/tools/video-tools"
      className="block py-1 hover:text-yellow-400"
    >
      Video Tools
    </Link>

    <Link
      to="/tools/audio-tools"
      className="block py-1 hover:text-yellow-400"
    >
      Audio Tools
    </Link>

    <Link
      to="/tools/customer"
      className="block py-1 hover:text-yellow-400"
    >
      CRM
    </Link>

    <Link
      to="/tools/digital"
      className="block py-1 hover:text-yellow-400"
    >
      Digital Marketing
    </Link>

    <Link
      to="/tools/financial"
      className="block py-1 hover:text-yellow-400"
    >
      Financial Tools
    </Link>

    <Link
      to="/tools/seo"
      className="block py-1 hover:text-yellow-400"
    >
      SEO Tools
    </Link>

    <Link
      to="/tools/date-time"
      className="block py-1 hover:text-yellow-400"
    >
      Date & Time Tools
    </Link>

    <Link
      to="/tools/legal"
      className="block py-1 hover:text-yellow-400"
    >
      Legal Tools
    </Link>

    <Link
      to="/tools/content"
      className="block py-1 hover:text-yellow-400"
    >
      Text & Content Tools
    </Link>

    <Link
      to="/tools/qr"
      className="block py-1 hover:text-yellow-400"
    >
      QR Code Tools
    </Link>

    <Link
      to="/tools/developer"
      className="block py-1 hover:text-yellow-400"
    >
      Developer Tools
    </Link>

    <Link
      to="/tools/learning"
      className="block py-1 hover:text-yellow-400"
    >
      Learning Tools
    </Link>

  </div>
)}
          </li>
          <Link to="/Gallery" className={navLinkClass("/Gallery")}>
  Gallery
</Link>

 <Link to="/products" className={navLinkClass("/products")}>
  Products
</Link>

<Link to="/portfolio" className={navLinkClass("/portfolio")}>
  Portfolio
</Link>

<Link to="/Services" className={navLinkClass("/Services")}>
  Services
</Link>

<Link to="/Games" className={navLinkClass("/Games")}>
  Games
</Link>

<Link to="/Pricing" className={navLinkClass("/Pricing")}>
  Pricing
</Link>


<Link to="/Contatus" className={navLinkClass("/Contatus")}>

       Contact
</Link>


        </ul>

        {/* Right Section */}
        <div className="relative flex items-center gap-3">

          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-lg border border-yellow-500 rounded-lg hover:text-yellow-400"
          >
            <FiMoon />
          </button>

         {open && (
  <div
    className="
      absolute
      right-0
      top-full

      z-[9999]

      w-32
      p-2
      mt-2

      text-sm

      border
      border-gray-300

      rounded-lg
      shadow-2xl

      bg-[var(--card-bg)]
    "
  >

              <div
                onClick={() => handleThemeChange("light")}
                className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Light
              </div>

              <div
                onClick={() => handleThemeChange("dark")}
                className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Dark
              </div>

              <div
                onClick={() => handleThemeChange("system")}
                className="px-3 py-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                System
              </div>

            </div>
          )}

          <button
  className="
    px-4 py-2

    rounded-lg

    border

    border-[#E5E7EB]
    dark:border-[#2A2A35]

    text-[#111111]
    dark:text-white

    hover:bg-[#F5F5F5]
    dark:hover:bg-[#111827]

    transition-all duration-300
  "
>
            Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div
          className="text-xl cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

 {/* Mobile Menu */}
{menuOpen && (
  <div className="px-6 py-4 space-y-4 border-t border-gray-300 bg-[var(--bg-primary)] lg:hidden">

    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => setToolsOpen(!toolsOpen)}
    >
      Powerful Tools
      <FaChevronDown />
    </div>

  {toolsOpen && (
  <div className="pl-4 space-y-2 text-sm">

    <Link
      to="/ImageToolsPage"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Image Tools
    </Link>

    <Link
      to="/VideoTools"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Video Tools
    </Link>

    <Link
      to="/AudioTools"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Audio Tools
    </Link>

    <Link
      to="/Customer"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      CRM
    </Link>

    <Link
      to="/Digital"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Digital Marketing
    </Link>

    <Link
      to="/Financial"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Financial Tools
    </Link>

    <Link
      to="/Seo"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      SEO Tools
    </Link>

    <Link
      to="/Date&time"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Date & Time Tools
    </Link>

    <Link
      to="/legal"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Legal Tools
    </Link>

    <Link
      to="/Content"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Text & Content Tools
    </Link>

    <Link
      to="/QR"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      QR Code Tools
    </Link>

    <Link
      to="/Devloper"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Developer Tools
    </Link>

    <Link
      to="/Learning"
      onClick={() => setMenuOpen(false)}
      className="block cursor-pointer hover:text-yellow-400"
    >
      Learning Tools
    </Link>


  </div>
)}

    <Link
      to="/Gallery"
      onClick={() => setMenuOpen(false)}
        className={`block ${navLinkClass("/Gallery")}`}
    >
      Gallery
    </Link>

    <Link
  to="/portfolio"
  onClick={() => setMenuOpen(false)}
  className={`block ${navLinkClass("/portfolio")}`}
>
  Portfolio
</Link>

<Link
  to="/Services"
  onClick={() => setMenuOpen(false)}
  className={`block ${navLinkClass("/Services")}`}
>
  Services
</Link>

<Link
  to="/Games"
  onClick={() => setMenuOpen(false)}
  className={`block ${navLinkClass("/Games")}`}
>
  Games
</Link>

<Link
  to="/Pricing"
  onClick={() => setMenuOpen(false)}
  className={`block ${navLinkClass("/Pricing")}`}
>
  Pricing
</Link>

<Link
  to="/Contact"
  onClick={() => setMenuOpen(false)}
  className={`block ${navLinkClass("/Contact")}`}
>
  Contact
</Link>

  </div>
)}
    </nav>
  );
}

export default Navbar;