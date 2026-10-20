import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../../component/Footer";
import {RiArrowLeftLine, RiHome5Line, } from "react-icons/ri";


const tools = [
  {
    title: "Case convertor & word counter",
    desc: "A versatile text manipulation tool to convert text case, count words,and clean text.",
    icon: "ri-video-line",
    link: "/Editor"
  },
  {
    title: "Lorem Ipsum Generator",
    desc: "Quickly generate Lorem Ipsum placeholder text for your designs, mockups, and layouts",
    icon: "ri-calendar-line",
    link: "/Lorem"
  },
  {
    title: "Text & File Comparator",
    desc: "A diff checker tool to easily compare two text files and highlight the difference.",
    icon: "ri-video-line",
    link: "/Text"
  }
];

function Content() {

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
       Text & Content Tools 
            </span>

          </div>

        </div>

      </div>

            {/* Title */}
            <div className="mt-6 text-center">
                <h1 className="text-5xl font-bold text-[#F3A412]">
        Text & Content Tools   </h1>

                <p className="max-w-2xl mx-auto mt-4 text-gray-400">
                    A suite of simple but powerful utilities for all your text manipulation needs.</p>  </div>

            {/* Cards */}
            <div className="grid max-w-6xl gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

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
                Perfect Your Content with Ease
                </h2>

                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
For writers, marketers, developers, and students, working with text is a daily activity. Our collection of text and content tools is designed to simplify common tasks, saving you time and improving the quality of your work.</p>              
  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
    Whether you need to quickly fix the capitalization of a headline, check if your social media post is within the character limit, or compare two versions of a document, our free, browser-based tools are here to help.
                </p>
            </div>


            {/* FAQ Section */}
            <div className="px-6 mt-20 mb-24">

                <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
                     What is a "dff" Checker?
                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                          
A "diff checker" or text comparator is a tool that highlights the differences between two pieces of text. It's incredibly useful for developers reviewing code, writers comparing drafts, or anyone needing to spot changes between two versions of a document.</p></details>

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
                      What is a word counter useful?

                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                           Word and character counters are essential for meeting specific requirements for things like essays, tweets, meta descriptions for SEO, or social media posts. Our tool provides a real-time count so you always know where you stand.</p>
                    </details>

                    <details className="w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
                        <summary className="flex items-center justify-between font-medium cursor-pointer">
                            Is my text secure with these tools?
                            <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
                        </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
Yes, absolutely. All text manipulation and comparison operations are performed directly in your web browser. Your content is never sent to our servers, ensuring your data remains completely private.
                        </p>
                    </details>
                </div>

            </div>


            <Footer />
        </div>



    );
}

export default Content;