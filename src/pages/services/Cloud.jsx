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
            "What are the main benefits of moving to the cloud?",
        answer:
            "The primary benefits of the cloud are scalability, cost-effectiveness, and flexibility. You can easily scale your resources up or down as needed, you only pay for what you use (reducing capital expenditure on hardware), and you gain access to a wide range of advanced services.",
    },

    {
        question: "What is DevOps?",
        answer:
            "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the systems development life cycle and provide continuous delivery with high software quality. We implement DevOps pipelines to automate the building, testing, and deployment of your applications.",
    },
];

const Cloud = () => {
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
      Cloud Solutions
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
                                  Cloud Solutions
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
Modern businesses require infrastructure that is agile, secure, and infinitely scalable. Our Cloud Solutions service helps you navigate the journey to the cloud with confidence. Whether you are migrating legacy on-premise servers to AWS, Azure, or Google Cloud, or looking to optimize your existing cloud spend, our certified architects have you covered. We implement best practices in DevOps and Infrastructure as Code (IaC) to ensure your deployments are automated and reliable. Secure your data, reduce downtime, and scale your resources instantly to meet demand with our professionally managed cloud services.
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
                                        src="cloud-solutions.png"
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
                                   Build for the Future with the Cloud
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
Leverage the power, scalability, and cost-efficiency of the cloud to transform your IT infrastructure. Whether you are looking to migrate existing applications or build new cloud-native solutions, our team of certified experts can guide you every step of the way.</p>                  

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "Cloud Migration: ",
                                            text: " We plan and execute seamless migrations of your applications and data to the cloud with minimal downtime.",
                                        },

                                        {
                                            title: "Infrastructure as Code (IaC): ",
                                            text: "We use tools like Terraform and CloudFormation to build automated, repeatable, and secure cloud environments.",
                                        },

                                        {
                                            title: "DevOps & CI/CD: ",
                                            text: " We implement continuous integration and delivery pipelines to accelerate your development lifecycle and improve code quality.",
                                        },

                                        {
                                            title: "Serverless Architecture:",
                                            text: "We design and build serverless applications to reduce operational overhead and lower costs.",
                                        },

                                        {
                                            title: "Managed Cloud Services:",
                                            text: " Our team provides 24/7 monitoring, security, and maintenance for your cloud infrastructure, so you can focus on your business.",
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
    Partnering with Leading Cloud Providers
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
    We have deep expertise across all major cloud platforms, ensuring we can architect the best possible solution for your specific needs and budget. We are proficient in:
  </p>

  {/* POINTS */}
  <div className="mt-8 space-y-4">

    {[
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
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
          {item}
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

export default Cloud;