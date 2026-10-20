import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";

const tools = [
  {
    title: "Privacy Policy Generator",
    desc: "Generate a standard Privacy Policy for your website or app.",
    icon: "ri-video-line",
    link: "/Privacy"
  },
  {
    title: "Terms & condition Generator",
    desc: "Generate standard Terms and Conditions for Your website, SaaS, or e-commerce store.",
    icon: "ri-calendar-line",
    link: "/Terms"
  },
  {
    title: "Return Policy Generator",
    desc: "Quickly generate a standard return & Refund Policy for your business.",
    icon: "ri-video-line",
    link: "/Return"
  },
  {
    title: "Rent Agreement Generator",
    desc: "Create a standard residential rent agreement in minutes.",
    icon: "ri-video-line",
    link: "/Agreement "
  },
];

function Legal() {

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


            <div className="w-full px-4 mx-auto my-6 max-w-8xl">

        <div className="mx-auto max-w-7xl">

          <div
            className="
              flex items-center
              gap-4
      
              px-5
              py-4
      
              rounded-2xl
      
              border
      
              border-[#E5E7EB]
              dark:border-[#232531]
      
              bg-white
              dark:bg-[#121218]
      
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              dark:shadow-none
      
              transition-all duration-300
            "
          >

            {/* BACK */}
            <button
              onClick={() => navigate(-1)}
              className="
                text-[#666]
                dark:text-gray-400
      
                transition-all duration-300
      
                hover:text-[#F3A412]
              "
            >
              <RiArrowLeftLine className="text-[20px]" />
            </button>

            {/* HOME */}
            <Link
              to="/"
              className="
                text-[#666]
                dark:text-gray-400
      
                hover:text-[#F3A412]
      
                transition-all duration-300
              "
            >
              <RiHome5Line className="text-[18px]" />
            </Link>

            <span
              className="
                text-[#B0B0B8]
                dark:text-[#4B5563]
              "
            >
              &gt;
            </span>

            {/* TOOLS */}
            <Link
              to="/tools"
              className="
                text-[15px]
      
                text-[#666]
                dark:text-gray-400
      
                hover:text-[#F3A412]
      
                transition-all duration-300
              "
            >
              Tools
            </Link>

  

            <span
              className="
                text-[#B0B0B8]
                dark:text-[#4B5563]
              "
            >
              &gt;
            </span>

            {/* CURRENT */}
            <span
              className="
                text-[15px]
                font-semibold
      
                text-[#111111]
                dark:text-white
              "
            >
        Legal Tools
            </span>

          </div>

        </div>

      </div>


            {/* Title */}
            <div className="mt-6 text-center">
                <h1 className="text-5xl font-bold text-[#F3A412]">
                    Legal Tools   </h1>

                <p className="max-w-2xl mx-auto mt-4 text-gray-400">
                    Create essential legal documents for your website to build trust and ensure compliance.</p>  </div>

            {/* Cards */}
            <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-2">

                {tools.map((tool, index) => (
                    <div
                        key={index}
                        onClick={() => tool.link && navigate(tool.link)}
                        className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
                    >



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
                    Protect Your Business with Essential Legal Pages
                </h2>

                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    Every website, from a simple blog to a complex e-commerce store, needs basic legal documents to operate safely. These pages are crucial for protecting your business from liability, building trust with your users, and complying with various regulations.</p>
                <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                    Our AI-powered Legal Page Generators provide a quick and easy starting point for creating these essential documents. While they are not a substitute for professional legal advice, they serve as robust templates tailored to your type of business.
                </p>
            </div>


            {/* FAQ Section */}
            <div className="px-6 mt-20 mb-24">

                <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
                        Why do I need a Privacy Policy?
                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                            A Privacy Policy is legally required in most jurisdictions if you collect any personal data from users (e.g., names, email addresses through a contact form, or usage data through analytics). It informs users what data you collect and how you use it.</p></details>

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
                        What are terms and conditions?

                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                            Terms and Conditions (also known as Terms of Service) are the rules that users must agree to in order to use your website or service. It outlines the rights and responsibilities of both you and the user, and can limit your liability.</p>
                    </details>

                    <details className="w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
                        <summary className="flex items-center justify-between font-medium cursor-pointer">
                            Is an AI-generated legal page legally binding?
                            <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
                        </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                            Our tool generates standard templates based on common legal principles. However, laws vary significantly by location and specific business activities. We strongly recommend that you have any generated document reviewed by a qualified legal professional to ensure it is complete and appropriate for your specific needs
                        </p>
                    </details>
                </div>

            </div>


            <Footer />
        </div>



    );
}

export default Legal;