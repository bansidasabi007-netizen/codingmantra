import React from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

function Contact() {
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
    <div className="min-h-screen dark:bg-[#09090B] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />
       <div className="w-full max-w-7xl mx-auto p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 mt-[20px]">
  
  <Link to="/" className="hover:underline">
    Home
  </Link>

  {" > "}

  <span className="font-semibold text-black dark:text-white">
    Contact Us
  </span>

</div>

      <div className="px-4 py-16 mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-[#F3A412] mb-4">
            Contact Us
          </h1>
          <p className="text-lg opacity-70">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-bold text-[#F3A412] mb-8">
              Get in Touch
            </h2>

            <div className="space-y-10">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#F3A412] flex items-center justify-center text-[#F3A412] text-xl">
                  📧
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-sm opacity-60">
                    contact@codingmantra.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#F3A412] flex items-center justify-center text-[#F3A412] text-xl">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Call or WhatsApp Us
                  </h3>
                  <p className="text-sm opacity-60">
                    +91 7201080909
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[#F3A412] flex items-center justify-center text-[#F3A412] text-xl">
                  📍
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Ahmedabad Branch
                  </h3>
                  <p className="max-w-sm text-sm opacity-60">
                    A 315, Celebration City Center, South Bopal, Bopal,
                    Ahmedabad, Gujarat 380058 (India)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-[#F3A412] mb-6">
              Send us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#F3A412]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#F3A412]"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:border-[#F3A412] resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-[#F3A412] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;