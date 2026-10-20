import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

import {
  RiArrowLeftLine,
  RiHome5Line,
  RiArrowRightSLine,
  RiArrowDownSLine,
} from "react-icons/ri";

const faqs = [
  {
    question:
      "What's the difference between native and hybrid app development?",
    answer:
      "Native apps are built specifically for iOS or Android using platform-specific technologies, offering maximum performance and deep hardware integration. Hybrid and cross-platform apps use frameworks like Flutter or React Native to build once and deploy on multiple platforms, reducing development time and cost.",
  },

  {
    question: "How long does it take to build a mobile app?",
    answer:
      "The development timeline depends on the complexity, features, and integrations required. Simple MVP apps can take 4–8 weeks, while advanced enterprise-level applications may require several months including testing and deployment.",
  },

  {
    question:
      "Can you help me get my app on the App Store and Google Play?",
    answer:
      "Yes. We handle the complete publishing process including app optimization, screenshots, privacy setup, testing, and submission to both Apple App Store and Google Play Store.",
  },
];

const Mobile = () => {
  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
  };
  return (
    <>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">

        {/* NAVBAR */}
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
                                       Mobile App Development
                               </span>
                           
                             </div>
                           
                           </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8 mt-8">

            {/* LEFT SIDE */}
            <div>

              {/* HERO */}
              <section>

                <h1
                  className="
                    text-[38px]
                    md:text-[44px]

                    leading-[1.1]
                    font-extrabold

                    text-[#F3A412]

                    mb-6
                  "
                >
                  Mobile App Development
                </h1>

                <p
                  className="
                    text-[18px]
                    md:text-[18px]

                    leading-[24px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                >
                  Capture your audience where they spend the most time — on
                  their smartphones. Our mobile app development team
                  specializes in creating native and cross-platform
                  applications that offer seamless performance and intuitive
                  user experiences. Using modern frameworks like Flutter and
                  React Native, we build apps that work flawlessly on both
                  iOS and Android from a single codebase, reducing development
                  time and cost without compromising quality. From initial
                  concept and UI/UX design to App Store submission and
                  post-launch maintenance, we handle the entire lifecycle of
                  your mobile product.
                </p>

                {/* HERO IMAGE */}
                <div
                  className="
                    mt-10

                    overflow-hidden

                    rounded-[28px]

                    border

                    border-[#E5E7EB]
                    dark:border-[#1E1E28]

                    transition-colors duration-300
                  "
                >

                  <img
                    src="mobile-app-development.png"
                    alt="mobile app"
                    className="object-cover w-full h-full"
                  />

                </div>

              </section>

              {/* SERVICES */}
              <section className="mt-20">

                <h2
                  className="
                    text-[30px]
                    md:text-[28px]

                    font-extrabold

                    text-[#F3A412]

                    mb-5
                  "
                >
                  Engage Your Users on Every Platform
                </h2>

                <p
                  className="
                    text-[17px]
                    md:text-[18px]

                    leading-[25px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                >
                  A mobile application is the most direct way to connect with
                  your customers. We specialize in building high-performance,
                  feature-packed mobile apps for both iOS and Android that
                  provide a seamless and engaging user experience. Whether
                  you're a startup looking to launch your first app or an
                  enterprise needing a complex mobile solution, we have the
                  expertise to deliver.
                </p>

                <div className="mt-10 space-y-5">

                  {[
                    {
                      title: "iOS App Development:",
                      text: "Beautiful and performant apps built for the Apple ecosystem using Swift and SwiftUI.",
                    },

                    {
                      title: "Android App Development:",
                      text: "Scalable and reliable apps for the diverse Android market, built with Kotlin and Jetpack Compose.",
                    },

                    {
                      title: "Hybrid & Cross-Platform Development:",
                      text: "Cost-effective solutions using React Native, Flutter, or Ionic to build for both platforms from a single codebase.",
                    },

                    {
                      title: "Backend as a Service (BaaS):",
                      text: "We leverage powerful platforms like Firebase to accelerate development and provide robust backend functionality.",
                    },

                    {
                      title: "UI/UX Design:",
                      text: "We create intuitive and visually appealing interfaces that make your app a joy to use.",
                    },

                    {
                      title: "App Maintenance & Support:",
                      text: "Ongoing support to ensure your app remains updated, secure, and compatible with new OS versions.",
                    },
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <div
                        className="
                          w-[7px]
                          h-[7px]

                          rounded-full

                          bg-[#F3A412]

                          mt-[16px]
                        "
                      />

                      <p
                        className="
                          text-[17px]
                          md:text-[16px]

                          leading-[20px]

                          text-[#3F3F46]
                          dark:text-[#E4E4E7]

                          transition-colors duration-300
                        "
                      >

                        <span
                          className="
                            font-bold

                            text-[#111111]
                            dark:text-white
                          "
                        >
                          {item.title}
                        </span>{" "}

                        {item.text}

                      </p>

                    </div>

                  ))}

                </div>

              </section>

              {/* PROCESS */}
              <section className="mt-20">

                <h2
                  className="
                    text-[30px]
                    md:text-[24px]

                    font-extrabold

                    text-[#F3A412]

                    mb-5
                  "
                >
                  Our Mobile Development Process
                </h2>

                <p
                  className="
                    text-[17px]
                    md:text-[18px]

                    leading-[30px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                >
                  Our process is designed for transparency and results. We
                  start with a deep dive into your goals, followed by
                  wireframing and prototyping. Once the design is perfected,
                  our developers bring it to life with clean, efficient code.
                  Rigorous testing ensures a bug-free launch, and we provide
                  full support for App Store and Google Play submission.
                </p>

              </section>

              {/* FAQ */}
              <section className="mt-24">

                <h2
                  className="
                    text-[30px]
                    md:text-[34px]

                    font-extrabold

                    text-[#F3A412]

                    mb-10
                  "
                >
                  Frequently Asked Questions
                </h2>

                <div className="">

                  {faqs.map((faq, index) => (

                    <details
                      key={index}
                      className="
                        group

                        border-b

                        border-[#E5E7EB]
                        dark:border-[#1E1E28]

                        pb-5

                        transition-colors duration-300
                      "
                    >

                      <summary className="list-none cursor-pointer">

                        <div className="flex items-center justify-between py-3">

                          <h3
                            className="
                             text-[17px]
                              md:text-[18px]
                              font-semibold

                              text-[#111111]
                              dark:text-white

                              transition-colors duration-300
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
                          pr-1
                          text-[15px]
                          md:text-[16px]

                          leading-[28px]
                          md:leading-[20px]

                          text-[#5E5E66]
                          dark:text-[#A1A1AA]

                          transition-colors duration-300
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
            <div className="mt-16 lg:mt-0">

              <div className="sticky top-24">

                <div
                  className="
                    border

                    border-[#E8B14C33]
                    dark:border-[#3A2B12]

                    bg-[#FFF9F0]
                    dark:bg-[#120D06]

                    p-5

                    transition-colors duration-300
                  "
                >

                  <h3
                    className="
                      text-[24px]
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

                      // leading-[40px]

                      text-[#5E5E66]
                      dark:text-[#CFCFD4]

                      transition-colors duration-300
                    "
                  >
                    Let’s turn your vision into reality. Contact us today for a
                    free, no-obligation consultation to discuss how our Mobile
                    App Development service can help you achieve your business
                    goals.
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

        {/* FOOTER */}
        <Footer />

      </div>
    </>
  );
};

export default Mobile;