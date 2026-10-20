import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

import {
    RiArrowLeftLine,
    RiHome5Line,
    RiArrowRightSLine,
    RiGlobalLine,
    RiArrowRightLine,
    RiAppleLine,
    RiGooglePlayLine,
} from "react-icons/ri";

const Gigascale = () => {
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

                            {/* PORTFOLIO */}
                            <Link
                                to="/portfolio"
                                className="
                  text-[#666]
                  dark:text-[#A1A1AA]

                  hover:text-[#F3A412]

                  transition-colors duration-300
                "
                            >
                                Portfolio
                            </Link>

                            <RiArrowRightSLine
                                className="
                  text-[#666]
                  dark:text-[#A1A1AA]
                "
                            />

                            {/* CURRENT */}
                            <span
                                className="
                  font-semibold

                  text-[#111111]
                  dark:text-white
                "
                            >
                      Gigascale Consultant - Elite Finance & IT-Tech Recruitment
                            </span>

                        </div>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 mt-8">

                        {/* LEFT */}
                        <div>

                            {/* HERO */}
                            <section>

                                <h1
                                    className="
                    text-[40px]
                    md:text-[44px]

                    leading-[1.05]
                    font-extrabold

                    text-[#F3A412]

                    mb-6
                  "
                                >
                             Gigascale Consultant - Elite Finance & IT-Tech Recruitment
                                </h1>

                                <p
                                    className="
                    text-[16px]
                    md:text-[18px]

                    leading-[34px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                                >
A strategic bridge connecting elite talent in high-skilled Finance and IT-Tech with the UK’s most prestigious organizations.</p>

                                {/* IMAGE */}
                                <div
                                    className="
    mt-10

    overflow-hidden

    rounded-[28px]

    border

    border-[#E5E7EB]
    dark:border-[#1E1E28]

    bg-[#F4F4F5]
    dark:bg-[#27272A]

    transition-colors duration-300
  "
                                >

                                    <div
                                        className="
    flex
    items-center
    justify-center

    h-[260px]
    md:h-[300px]
    lg:h-[340px]

    px-6
  "
                                    >

                                        <img
                                            src="logo (9).png"
                                            alt="food platform"
                                            className="object-contain w-full h-full "
                                        />

                                    </div>

                                </div>

                            </section>

                            {/* OVERVIEW */}
                            <section className="mt-20">

                                <h2
                                    className="
                    text-[30px]
                    md:text-[34px]

                    font-extrabold

                    text-[#F3A412]

                    mb-5
                  "
                                >
                                    Project Overview
                                </h2>

                                <p
                                    className="
                    text-[16px]
                    md:text-[18px]

                    leading-[24px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                                >
Gigascale Consultant Ltd operates at the intersection of top-tier talent and premier organizations in the UK. Specializing in high-skilled Finance and IT-Tech recruitment, they needed a compelling digital platform that reflects their elite positioning and effectively communicates their specialized services and flagship Job Guaranteed Programme</p>
                            </section>

                            {/* SOLUTION */}
                            <section className="mt-20">

                                <h2
                                    className="
                    text-[30px]
                    md:text-[34px]

                    font-extrabold

                    text-[#F3A412]

                    mb-5
                  "
                                >
                                  Our Solution
                                </h2>

                                <p
                                    className="
                    text-[16px]
                    md:text-[18px]

                    leading-[24px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                                >
We designed and developed a sophisticated, corporate-grade web platform tailored to their target audience of ambitious professionals and leading firms.</p>

                                {/* POINTS */}
                                <div className="mt-8 space-y-5">

                                    {[
                                        {
                                            title: "Professional Brand Identity:",
                                            text: " Created an elegant, modern design that communicates trust, expertise, and exclusivity.",
                                        },

                                        {
                                            title: "Clear Service Structuring: ",
                                            text: " Organized content effectively to highlight their specializations in Finance, IT-Tech, and their comprehensive career support pathway.",
                                        },

                                        {
                                            title: "Lead Generation: ",
                                            text: " Integrated streamlined user flows to capture inquiries from both top-tier candidates and partner companies.",
                                        },
                                        {
                                            title: "Responsive & Fast: ",
                                            text: " Built on modern web technologies ensuring rapid load times and a flawless experience across all devices.",
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

                          leading-[32px]

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

                            {/* RESULTS */}
                            <section className="mt-20">

                                <h2
                                    className="
                    text-[30px]
                    md:text-[34px]

                    font-extrabold

                    text-[#F3A412]

                    mb-5
                  "
                                >
                                    Impact & Results
                                </h2>

                                <p
                                    className="
                    text-[16px]
                    md:text-[18px]

                    leading-[34px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                                >
The new website establishes a strong digital authority for Gigascale Consultant Ltd in the competitive UK recruitment market. It acts as a powerful marketing tool, attracting the right caliber of talent and facilitating strategic partnerships to build the infrastructure of the UK's financial and digital future.</p>

                            </section>

                        </div>


                        {/* RIGHT SIDE */}
                        <div
                            className="
    mt-16
    lg:mt-0

    lg:sticky
    lg:top-28

    h-fit

    lg:max-w-[410px]
  "
                        >

                            {/* PROJECT DETAILS CARD */}
                            <div
                                className="
      rounded-[24px]

      border

      border-[#E5E7EB]
      dark:border-[#1E1E28]

      bg-[#FAFAFA]
      dark:bg-[#0B0B10]

      p-6

      transition-colors duration-300
    "
                            >

                                <h3
                                    className="
        text-[24px]
        md:text-[28px]

        font-extrabold

        text-[#111111]
        dark:text-white

        mb-7

        transition-colors duration-300
      "
                                >
                                    Project Details
                                </h3>

                                {/* CLIENT */}
                                <div className="mb-7">

                                    <p
                                        className="
          text-[14px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-2
        "
                                    >
                                        Client
                                    </p>

                                    <h5
                                        className="
          text-[16px]
          font-bold

          text-[#111111]
          dark:text-white
        "
                                    >
                                    Gigascale Consultant Ltd

                                    </h5>

                                </div>

                                {/* INDUSTRY */}
                                <div className="mb-7">

                                    <p
                                        className="
          text-[14px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-2
        "
                                    >
                                        Industry
                                    </p>

                                    <h4
                                        className="
          text-[16px]
          font-semibold

          text-[#111111]
          dark:text-white
        "
                                    >
                                  Recruitment / Consulting
                                    </h4>

                                </div>

                                {/* TECHNOLOGIES */}
                                <div>

                                    <p
                                        className="
          text-[14px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-4
        "
                                    >
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">

                                        {[
                                            "Brand Website",
                                            "Recruitment",
                                            "Finance",
                                            "IT-Tech",
                                            "Next.js",
                                        
                                        ].map((item, index) => (

                                            <div
                                                key={index}
                                                className="
              px-3
              py-2
              rounded-full
              bg-[#F4F4F5]
              dark:bg-[#18181B]
              border
              border-[#E5E7EB]
              dark:border-[#27272A]
              text-[13px]
              font-semibold
              text-[#111111]
              dark:text-white
              transition-colors duration-300
            "
                                            >
                                                {item}
                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* DIVIDER */}
                                <div
                                    className="
        w-full
        h-[1px]

        bg-[#E5E7EB]
        dark:bg-[#1E1E28]

        my-7
      "
                                />

                                {/* VISIT BUTTON */}
                                <button
                                    className="
        w-full
        h-[52px]

        rounded-2xl

        bg-[#F3A412]
        hover:bg-[#E29A00]

        text-black

        font-bold
        text-[15px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
                                >

                                    <RiGlobalLine className="text-[18px]" />

                                    Visit Live Site

                                </button>

                            </div>

                            {/* CTA CARD */}
                            <div
                                className="
      mt-6

      rounded-[24px]

      border

      border-[#E8B14C33]
      dark:border-[#3A2B12]

      bg-[#FFF9F0]
      dark:bg-[#120D06]

      p-6

      transition-colors duration-300
    "
                            >

                                <h3
                                    className="
        text-[24px]
        md:text-[28px]

        leading-[1.2]
        font-extrabold

        text-[#F3A412]

        mb-5
      "
                                >
                                    Have a Similar Project?
                                </h3>

                                <p
                                    className="
        text-[15px]

        leading-[30px]

        text-[#5E5E66]
        dark:text-[#D4D4D8]
      "
                                >
                                    Let’s turn your vision into reality. Contact us today for a
                                    free consultation.
                                </p>

                                <button
                                    className="
        mt-6

        w-full
        h-[54px]

        rounded-2xl

        bg-[#F3A412]
        hover:bg-[#E29A00]

        text-black

        font-bold
        text-[15px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
                                >

                                    Get a Free Quote

                                    <RiArrowRightLine className="text-[18px]" />

                                </button>

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

export default Gigascale;