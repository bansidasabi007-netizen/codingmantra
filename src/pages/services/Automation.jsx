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
            "What kind of processes can be automated?",
        answer:
            "Almost any rules-based, repetitive digital task can be automated. This includes data entry, file transfers, report generation, invoice processing, customer onboarding notifications, and much more. If a task follows a consistent set of steps, it's a good candidate for automation.",
    },

    {
        question: "Will automation replace my employees?",
        answer:
            "No, the goal of automation is to augment your team, not replace them. By handling the tedious, low-value tasks, automation allows your employees to focus on more creative, strategic, and customer-facing activities that require a human touch and drive real business growth.",
    },

];

const Automation = () => {
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
      In-House Process Automation
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
                                    In-House Process Automation
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
                                    Inefficiency is the silent scaling killer. Manual data entry, repetitive reporting, and disjointed software systems drain your team's productivity and lead to costly human errors. Our In-House Process Automation service identifies these bottlenecks and deploys custom software bots, scripts, and API integrations to handle them instantly. By automating routine workflows, we free up your human talent to focus on strategic, creative, and high-value tasks. From automating invoice processing to synchronizing data between your CRM and accounting software, we build the digital infrastructure that lets your business run on autopilot. </p>

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
                                        src="ecommerce-development.png"
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
                                    Stop Wasting Time on Repetitive Tasks

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
Are your employees spending hours on manual data entry, copying information between spreadsheets, or generating the same reports every week? These repetitive tasks are not only inefficient but are also prone to human error. We build custom automation solutions that integrate with your existing software and handle these processes for you.                                </p>

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "Workflow Analysis:",
                                            text: "A unique design that reflects your brand and makes your products shine.",
                                        },

                                        {
                                            title: "Custom Script & Tool Development:",
                                            text: "We create tailored software that performs tasks exactly to your specifications.",
                                        },

                                        {
                                            title: "API Integration:",
                                            text: "We connect your different software tools (e.g., CRM, accounting, inventory) so they can talk to each other and share data automatically.",
                                        },

                                        {
                                            title: "Automated Reporting: ",
                                            text: "Schedule custom reports to be generated and emailed to stakeholders automatically.",
                                        },

                                        {
                                            title: "Data Scraping & Entry:",
                                            text: "Automate the process of gathering information from websites or documents and entering it into your systems.",
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
    The Benefits of Automation
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
    Investing in process automation provides a clear and measurable return.
  </p>

  {/* POINTS */}
  <div className="mt-8 space-y-4">

    {[
      {
        title: "Increased Productivity:",
        text: "Free up your team to focus on strategic initiatives instead of manual labor.",
      },

      {
        title: "Reduced Errors:",
        text: "Eliminate costly mistakes caused by manual data entry.",
      },

      {
        title: "Improved Consistency:",
        text: "Ensure tasks are performed the same way, every time.",
      },

      {
        title: "Faster Turnaround Times:",
        text: "Complete processes in minutes that used to take hours or days.",
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

            mt-[12px]
          "
        />

        <p
          className="
            text-[16px]
            md:text-[17px]

            leading-[30px]

            text-[#111111]
            dark:text-[#E4E4E7]

            transition-colors duration-300
          "
        >

          <span className="font-bold">
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

export default Automation;