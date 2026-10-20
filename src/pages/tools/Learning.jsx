import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../component/Footer";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";

const tools = [
  {
    title: "Learning Pathway Generator (AI)",
    desc: "A versatile text manipulation tool...",
    icon: "ri-video-line",
    link: "/Pathaway"   
  },
  {
    title: "Typing Speed Test",
    desc: "Quickly generate Lorem Ipsum...",
    icon: "ri-calendar-line",
    powerful: true,
    link: "/Typing"    
  }
];

function Learning() {

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
 <div className="w-full px-4 mx-auto mt-6 max-w-8xl">

  <div
    className="
      flex items-center
      gap-4
      px-5
      py-4
      rounded-2xl
      border
      border-[#232531]
      bg-[#121218]
    "
  >

    {/* BACK */}
    <button
      onClick={() => navigate(-1)}
      className="text-gray-400 transition hover:text-white"
    >
      <RiArrowLeftLine className="text-[20px]" />
    </button>

    {/* HOME */}
    <Link
      to="/"
      className="
        text-gray-400
        hover:text-[#F3A412]
        transition
      "
    >
      <RiHome5Line className="text-[18px]" />
    </Link>

    <span className="text-[#4B5563]">&gt;</span>

    {/* TOOLS */}
    <Link
      to="/tools"
      className="
        text-[15px]
        text-gray-400
        hover:text-[#F3A412]
        transition
      "
    >
      Tools
    </Link>

    <span className="text-[#4B5563]">&gt;</span>

    {/* CURRENT */}
    <span
      className="
        text-[15px]
        font-semibold
        text-white
      "
    >
   Learning Tools 
    </span>

  </div>

</div>

            

            {/* Title */}
            <div className="mt-6 text-center">
                <h1 className="text-5xl font-bold text-[#F3A412]">
       Learning Tools   </h1>

                <p className="max-w-2xl mx-auto mt-4 text-gray-400">
                  Accelerate your growth with our collection of AI-powered learning utilities.</p>  </div>

            {/* Cards */}
            <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

                {tools.map((tool, index) => (
                    <div
                        key={index}
                        onClick={() => tool.link && navigate(tool.link)}
                        className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
                    >
                        {tool.powerful && (
  <span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
    Powerful
  </span>
)}



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
          Smarter Learning, Powered by AI
                </h2>

                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
The journey of learning a new technology can be daunting. With endless resources available, it's easy to get lost or overwhelmed. Our AI-powered learning tools are designed to provide structure and direction to your educational journey, helping you learn more effectively.</p>              
  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
 By generating a personalized pathway, our tool cuts through the noise and provides a clear, step-by-step roadmap from your current skill level to your desired expertise. Stop wondering what to learn next and start building a solid foundation of knowledge with a plan tailored just for you.
            </p></div>


            {/* FAQ Section */}
            <div className="px-6 mt-20 mb-24">

                <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
                 How Does the AI Create a learning pathway?
                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                          

The AI analyzes the vast amount of information available on a given technology. It identifies the core concepts, prerequisites, and advanced topics. It then organizes these into a logical sequence of modules and suggests relevant learning resources and practical challenges, all tailored to your specified experience level (beginner, intermediate, or advanced).</p></details>

                    <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
               why is a personalized path better than a generic course?

                        <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

                    </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
                        Generic courses are designed for a broad audience and may spend too much time on topics you already know or jump too quickly into concepts you aren't ready for. A personalized path respects your current knowledge, ensuring you're always learning something new and relevant, which makes the process more efficient and engaging.</p>
                    </details>

                    <details className="w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
                        <summary className="flex items-center justify-between font-medium cursor-pointer">
                     Why are coding challenges important?
                            <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
                        </summary>

                        <p className="mt-3 text-sm text-[var(--text-secondary)]">
Reading and watching videos (passive learning) is important, but true understanding comes from applying what you've learned. The suggested coding challenges provide the hands-on practice (active learning) needed to solidify your skills and build real-world competence. It's the difference between knowing the path and walking the path.
                        </p>
                    </details>
                </div>

            </div>
            <Footer />
        </div>



    );
}

export default Learning;