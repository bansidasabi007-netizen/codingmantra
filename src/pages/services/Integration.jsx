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
            "What is Generative AI?",
        answer:
            "Generative AI refers to models that can create new content, such as text, images, or code, based on the data they were trained on. We can integrate models like Google's Gemini to build tools that write marketing copy, generate reports, or power intelligent chatbots for your business.",
    },

    {
        question: "How can AI help my specific business?",
        answer:
            "AI can be applied to almost any industry. For e-commerce, it can power recommendation engines. For logistics, it can optimize delivery routes. For customer service, it can automate responses to common questions. The best way to find out is to schedule a consultation with us to discuss your specific operational challenges.",
    },
    {
        question: "Is AI integration expensive?",
        answer:
            "The cost varies greatly depending on the complexity. However, leveraging pre-trained models from providers like Google AI has made powerful AI much more accessible. An AI project can range from a small integration to a large-scale custom model development. We focus on solutions that provide a clear return on investment.",
    },

];

const Integration = () => {
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
         AI Integration
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
                                   AI Integration
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
                                 Stay ahead of the competition by embedding state-of-the-art Artificial Intelligence into your business DNA. We specialize in demystifying AI and making it practical for your operations. From integrating Large Language Models (LLMs) like GPT-4 and Gemini for automated content generation and smart customer support, to building custom computer vision models for quality control, we deliver tangible results. Our data scientists and AI engineers work with you to identify high-impact use cases where AI can reduce costs, predict trends, and enhance decision-making, ensuring you get a real return on your innovation investment.</p>

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
                                        src="ai-integration.png"
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
                                    Make Your Business Smarter
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
Artificial Intelligence is no longer a futuristic concept; it's a practical tool that can revolutionize your business operations. We specialize in integrating cutting-edge AI solutions into your existing workflows to automate tasks, uncover valuable insights, and create innovative products and services.</p>                  

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "Generative AI Solutions: ",
                                            text: "Build applications powered by Large Language Models (LLMs) like Gemini for content creation, summarization, and intelligent search.",
                                        },

                                        {
                                            title: "Custom Chatbots & Voice Assistants:",
                                            text: " Develop sophisticated conversational AI agents that understand user intent and provide human-like support.",
                                        },

                                        {
                                            title: "Process Automation:",
                                            text: "Identify and automate repetitive, manual tasks within your business to save time, reduce errors, and free up your team for more strategic work.",
                                        },

                                        {
                                            title: "Data Analysis & Predictive Modeling:",
                                            text: "Use machine learning to analyze your business data, identify trends, and make accurate forecasts.",
                                        },

                                        {
                                            title: "Computer Vision:",
                                            text: "Implement AI solutions for image recognition, object detection, and video analysis.",
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
                                   Our AI Integration Process
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
We begin by understanding your business problem and identifying the right AI technology to solve it. We then develop a proof-of-concept to demonstrate the value before moving to full-scale development and integration. Our goal is to provide you with a practical, measurable return on your AI investment. </p>
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

export default Integration;