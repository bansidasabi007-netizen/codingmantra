import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line,} from "react-icons/ri";
const tools = [
  {
    title: "Keyword Generator(AI)",
    desc: "Generate a list of relevant primary ,long-tail , and LSI Keywords for any topic",
    icon: "ri-video-line",
    link: "/Keyword"
  },
  {
    title: "Title & Description Generator (AI)",
    desc: "Create and customize a free WhatsApp chat widget for your website to engage visitors",
    icon: "ri-calendar-line",
    link: "/Meta"

  },
  {
    title: "SERP Snippet Preview (AI)",
    desc: "Create stunning, on-brand promotional images for your social media channels in just a few clicks.",
    icon: "ri-video-line",
    link: "/Snippet"
  },
  {
    title: "FAQ schema Generator (AI)",
    desc: "Generate professional engaging posts for your LinkedIn profile or comapany page.",
    icon: "ri-video-line",
    link: "/Schema"
  },
  {
    title: "Meta TAg Generator ",
    desc: "Generate relevant and trending hashtags for Instagram, Twitter, and LinkedIn to boost your social media reach.",
    icon: "ri-t-shirt-line",
    link: "/Tag"
  },
  {
    title: "Keyword Density Checker",
    desc: "Generate high-converting ad copy for your campaigns, Get multiple headline and description variations for Google and Facebook Ads.",
    icon: "ri-book-open-line",
    link: "/Density"
  },
  {
    title: "Google review Link Generator ",
    desc: "Generate Catch ,high-converting email subject lines with our AI tool to improve your open rates.",
    icon: "ri-book-open-line",
    link: "/Review"
  },

];

function Seo() {

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
               SEO Tools
            </span>

          </div>

        </div>

      </div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          SEO Tools      </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Improve your website's visibility on search engines with our suite of SEO utilities.</p>  </div>

      {/* Cards */}
      <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

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
          Mastering Your On-Page SEO to Win Clicks & Traffic
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
          Search Engine Optimization (SEO) isn't just about ranking #1; it's about convincing users to click on your link. On-page SEO is your first and most powerful lever to pull. It's the art of optimizing the elements on your website—your titles, your content structure, your descriptions—to not only please search engines but to also attract and engage your target audience. Our suite of free SEO tools is designed to help you master these critical elements.</p>

        <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
          From crafting the perfect first impression with our AI-powered snippet tools to ensuring your content is perfectly structured with schema generators, these utilities give you the power to enhance your website's performance, attract more qualified organic traffic, and outshine the competition right on the search results page.</p>

      </div>


      {/* FAQ Section */}
      <div className="px-6 mt-20 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
            What is the most important part of on-page SEO?
            <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

          </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              While all elements work together, your page's title tag is often considered the most important on-page factor. It's the main headline in search results and tells both users and search engines what your page is about. A compelling title is crucial for a good click-through rate.</p>
          </details>

          <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
            What is a good Title and meta description so important?

            <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

          </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)]">

              Your title and meta description are your digital storefront on Google. They act as an advertisement for your page. A compelling, relevant snippet directly influences whether a user clicks on your link or a competitor's, which is why optimizing them with a tool like our SERP Snippet Preview is so effective.</p>

          </details>

          <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
              What is structured data(schema)?

              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)]">


              Structured data is a standardized format of code that you add to your website to help search engines understand your content more deeply. For example, our FAQ Schema Generator creates code that explicitly tells Google "this content is a question and answer," making your page eligible for a rich result that stands out in search.</p>
          </details>

          <details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
              How often should I review my on-page SEO?

              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)]">



              It's a good practice to perform an on-page SEO check for any new content you publish. For your most important existing pages (your "money pages"), reviewing them every 6-12 months is a good idea to ensure they remain fresh, relevant, and aligned with current SEO best practices.</p></details>

        </div>

      </div>


      <Footer />
    </div>



  );
}

export default Seo;