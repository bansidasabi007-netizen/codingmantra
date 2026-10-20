import React from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiHome5Line, RiArrowRightSLine, RiArrowDownSLine,} from "react-icons/ri";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const faqs = [
  {
    question:
      "What is the typical timeframe for a web portal development project?",
    answer:
      "The timeline depends on the complexity and features required. A basic portal may take 4–6 weeks, while enterprise-grade platforms can take several months including testing and deployment.",
  },

  {
    question: "How do you ensure the web portal is secure?",
    answer:
      "We implement secure authentication, role-based access control, encrypted APIs, server validation, security audits, and modern deployment practices to ensure your portal remains protected.",
  },

  {
    question:
      "Do you provide ongoing maintenance and support after launch?",
    answer:
      "Yes. We provide post-launch maintenance, feature updates, monitoring, bug fixing, optimization, and long-term support plans for scaling businesses.",
  },
];

const Portal = () => {
     const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">
              <Navbar changeTheme={changeTheme} />

      {/* MAIN CONTAINER */}
      <div className="px-4 pb-24 mx-auto max-w-7xl">

        {/* BREADCRUMB */}
 <div
                              className="
                                mt-8
                            
                                rounded-2xl
                            
                                border
                            
                                border-[#E5E7EB]
                                dark:border-[#1E1E28]
                            
                                bg-[#FAFAFA]
                                dark:bg-[#0B0B10]
                            
                                px-5
                                py-4
                            
                                transition-colors duration-300
                              "
                            >
                            
                              <div className="flex items-center gap-3 text-[15px]">
                            
                                {/* BACK */}
                                <button
                                  onClick={() => window.history.back()}
                                  className="
                                    text-[#666]
                                    dark:text-[#A1A1AA]
                            
                                    hover:text-[#F3A412]
                            
                                    transition-colors duration-300
                                  "
                                >
                                  <RiArrowLeftLine className="text-[18px]" />
                                </button>
                            
                                {/* HOME */}
                                <Link
                                  to="/"
                                  className="
                                    text-[#666]
                                    dark:text-[#A1A1AA]
                            
                                    hover:text-[#F3A412]
                            
                                    transition-colors duration-300
                                  "
                                >
                                  <RiHome5Line className="text-[18px]" />
                                </Link>
                            
                                <RiArrowRightSLine
                                  className="
                                    text-[#666]
                                    dark:text-[#A1A1AA]
                                  "
                                />
                            
                                {/* SERVICES */}
                                <Link
                                  to="/services"
                                  className="
                                    text-[#666]
                                    dark:text-[#A1A1AA]
                            
                                    hover:text-[#F3A412]
                            
                                    transition-colors duration-300
                                  "
                                >
                                  Services
                                </Link>
                            
                                <RiArrowRightSLine
                                  className="
                                    text-[#666]
                                    dark:text-[#A1A1AA]
                                  "
                                />
                            
                                {/* CURRENT PAGE */}
                                <span
                                  className="
                                    font-semibold
                            
                                    text-[#111111]
                                    dark:text-white
                                  "
                                >
                                           Web Portal Development
                                </span>
                            
                              </div>
                            
                            </div>
 

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-12 mt-8">

          {/* LEFT SIDE */}
          <div>

            {/* HERO */}
            <section>

              <h1
                className="
                  text-[38px]
                  md:text-[54px]

                  leading-[1.1]
                  font-extrabold

                  text-[#F3A412]

                  mb-6
                "
              >
                Web Portal Development
              </h1>

              <p
                className="
                  text-[18px]
                  md:text-[20px]

                  leading-[44px]

                  text-[#3F3F46]
                  dark:text-[#E4E4E7]
                "
              >
                In today’s fast-paced digital landscape, a website is often the
                first interaction a potential customer has with your brand. At
                CodingMantra, we go beyond basic websites to build robust,
                scalable web portals that serve as the engine of your digital
                business. Whether you need a customer-facing dashboard, an
                internal enterprise management system, or a complex SaaS
                application, our expert team leverages the latest technologies
                like Next.js, React, and Laravel to deliver fast, secure, and
                SEO-optimized solutions. We focus on performance,
                accessibility, and user experience to ensure your web portal not
                only looks great but drives measurable business results.
              </p>

              <div
                className="
                  mt-10
                  overflow-hidden
                  rounded-[28px]

                  border

                  border-[#E5E7EB]
                  dark:border-[#1E1E28]
                "
              >

                <img
                  src="web-portal-development.png"
                  alt="portal"
                  className="object-cover w-full h-full"
                />

              </div>

            </section>

            {/* SERVICES */}
            <section className="mt-20">

              <h2
                className="
                  text-[30px]
                  md:text-[44px]

                  font-extrabold

                  text-[#F3A412]

                  mb-5
                "
              >
                Our Web Development Services
              </h2>

              <p
                className="
                  text-[17px]
                  md:text-[18px]

                  leading-[40px]

                  text-[#3F3F46]
                  dark:text-[#E4E4E7]
                "
              >
                In today’s digital-first world, your web portal is more than
                just a website — it’s the heart of your business operations,
                customer interactions, and brand identity. We build custom web
                portals that are not only visually stunning but are also
                powerful, scalable, and engineered to meet your specific
                business challenges.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  {
                    title: "Custom Web Applications:",
                    text: "Tailored solutions built from the ground up to automate your unique business processes.",
                  },

                  {
                    title: "Enterprise Portal Development:",
                    text: "Scalable and secure portals for large organizations to manage complex operations.",
                  },

                  {
                    title: "E-commerce Platforms:",
                    text: "Feature-rich online stores optimized for performance and conversions.",
                  },

                  {
                    title: "CMS Development:",
                    text: "Easy-to-manage content management systems that put you in control of your content.",
                  },

                  {
                    title: "API Integration:",
                    text: "Seamlessly connect your web portal with third-party services and internal systems.",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-[7px] h-[7px] rounded-full bg-[#F3A412] mt-[16px]" />

                    <p
                      className="
                        text-[17px]
                        md:text-[18px]

                        leading-[38px]

                        text-[#3F3F46]
                        dark:text-[#E4E4E7]
                      "
                    >

                      <span className="font-bold text-[#111111] dark:text-white">
                        {item.title}
                      </span>{" "}

                      {item.text}

                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* TECH STACK */}
            <section className="mt-20">

              <h2
                className="
                  text-[30px]
                  md:text-[44px]

                  font-extrabold

                  text-[#F3A412]

                  mb-5
                "
              >
                Our Technology Stack
              </h2>

              <p
                className="
                  text-[17px]
                  md:text-[18px]

                  leading-[40px]

                  text-[#3F3F46]
                  dark:text-[#E4E4E7]
                "
              >
                We leverage the best of modern web technologies to deliver
                exceptional results. Our primary stack includes:
              </p>

              <div className="mt-10 space-y-5">

                {[
                  {
                    title: "Front-End:",
                    text: "Next.js, React, Angular, TypeScript, Tailwind CSS",
                  },

                  {
                    title: "Back-End:",
                    text: "Node.js, PHP, Laravel, Python",
                  },

                  {
                    title: "Databases & BaaS:",
                    text: "PostgreSQL, MySQL, MongoDB, Firebase",
                  },

                  {
                    title: "Deployment:",
                    text: "Vercel, AWS, Google Cloud",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-[7px] h-[7px] rounded-full bg-[#F3A412] mt-[16px]" />

                    <p
                      className="
                        text-[17px]
                        md:text-[18px]

                        leading-[38px]

                        text-[#3F3F46]
                        dark:text-[#E4E4E7]
                      "
                    >

                      <span className="font-bold text-[#111111] dark:text-white">
                        {item.title}
                      </span>{" "}

                      {item.text}

                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* FAQ */}
            <section className="mt-24">

              <h2
                className="
                  text-[30px]
                  md:text-[44px]

                  font-extrabold

                  text-[#F3A412]

                  mb-10
                "
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">

                {faqs.map((faq, index) => (

                  <details
                    key={index}
                    className="
                      group

                      border-b

                      border-[#E5E7EB]
                      dark:border-[#1E1E28]

                      pb-5
                    "
                  >

                    <summary className="list-none cursor-pointer">

                      <div className="flex items-center justify-between gap-6 py-3">

                        <h3
                          className="
                            text-[20px]
                            font-semibold

                            text-[#111111]
                            dark:text-white
                          "
                        >
                          {faq.question}
                        </h3>

                        <RiArrowDownSLine
                          className="
                            text-[24px]

                            text-[#666]
                            dark:text-[#A1A1AA]

                            transition-all duration-300

                            group-open:rotate-180
                          "
                        />

                      </div>

                    </summary>

                    <p
                      className="
                        pt-3
                        pr-10

                        text-[17px]
                        leading-[36px]

                        text-[#5E5E66]
                        dark:text-[#A1A1AA]
                      "
                    >
                      {faq.answer}
                    </p>

                  </details>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="sticky top-24">

              <div
                className="
                  rounded-[28px]

                  border

                  border-[#E8B14C33]
                  dark:border-[#3A2B12]

                  bg-[#FFF9F0]
                  dark:bg-[#120D06]

                  p-8
                "
              >

                <h3
                  className="
                    text-[34px]
                    leading-[1.2]
                    font-extrabold

                    text-[#F3A412]

                    mb-6
                  "
                >
                  Ready to Start Your Project?
                </h3>

                <p
                  className="
                    text-[18px]
                    leading-[40px]

                    text-[#5E5E66]
                    dark:text-[#CFCFD4]
                  "
                >
                  Let’s turn your vision into reality. Contact us today for a
                  free, no-obligation consultation to discuss how our Web Portal
                  Development service can help you achieve your business goals.
                </p>

                <button
                  className="
                    w-full
                    h-[60px]
                    rounded-2xl

                    mt-8

                    bg-[#F3A412]
                    hover:bg-[#E29A00]

                    text-black
                    text-[18px]
                    font-bold

                    transition-all duration-300
                  "
                >
                  Get a Free Quote
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
        <Footer />

    </div>
  );
};

export default Portal;