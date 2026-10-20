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
            "Why should I choose a custom solution over off-the-shelf software?",
        answer:
            "Choose a custom solution when existing software doesn't meet your specific needs, forces inefficient workarounds, or when you have a unique business model that gives you a competitive advantage. Custom software is an investment in a long-term asset that is perfectly tailored to your operations.",
    },

    {
        question: "What is a Minimum Viable Product (MVP)?",
        answer:
            "An MVP is a version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort. We often recommend building an MVP first to test your core business idea with real users and gather feedback before investing in a full-featured product.",
    },

];

const Tailor = () => {
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
                                                               Tailor-Made Custom Solutions
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
                                    Tailor-Made Custom Solutions

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
                                    Off-the-shelf software often forces you to compromise, changing your unique processes to fit rigid tools. At CodingMantra, we believe technology should adapt to you. Our Tailor-Made Custom Solutions service is designed for businesses with unique challenges that require bespoke software. We partner with you from the initial discovery phase to the final deployment, architecting scalable, secure, and innovative software products. Whether you need a Minimum Viable Product (MVP) to test a startup idea or a complex enterprise resource planning (ERP) system, we turn your vision into a competitive advantage.</p>

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
                                        src="process-automation.png"
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
                                    When a Perfect Fit Doesn't Exist


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
                                    Sometimes your business has a problem so unique that no existing software can solve it. You're forced to use clunky workarounds, stitch together multiple incompatible tools, or change your process to fit the software. We believe software should fit your process, not the other way around.  </p>
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
                                    We specialize in building tailor-made solutions from a blank canvas. We take the time to understand your vision, your industry, and your specific challenges to design and develop a software product that is uniquely yours.  </p>

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "Discovery & Strategy:",
                                            text: "We start with in-depth workshops to define the scope, user stories, and technical requirements.",
                                        },

                                        {
                                            title: "Product Design (UI/UX): ",
                                            text: "We design an intuitive and efficient user interface and experience from the ground up.",
                                        },

                                        {
                                            title: "Agile Development: ",
                                            text: " We build your application iteratively, providing regular demos so you can provide feedback throughout the process.",
                                        },

                                        {
                                            title: "Quality Assurance: ",
                                            text: " Rigorous manual and automated testing ensures your final product is stable, secure, and bug-free.",
                                        },

                                        {
                                            title: "Scalable Architecture: ",
                                            text: "We build on a flexible foundation that can grow and adapt as your business needs evolve.",
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
                                    Your Idea, Brought to Life
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
                                    Whether you need a new SaaS product, a complex internal management tool, or a minimum viable product (MVP) to test a new business idea, our team has the expertise to turn your concept into a fully-functional reality.
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

export default Tailor;