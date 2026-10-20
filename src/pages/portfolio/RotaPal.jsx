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

const RotaPal = () => {
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
                                RotaPal - Rota Management for Healthcare
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
                                    RotaPal - Rota Management for Healthcare
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
                                    RotaPal is your best friend for building and managing rotas, reducing the hassle of back-and-forth messages and time consuming paper work so you can do more of what matters.
                                </p>

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
                                            src="60e41da2fe074c2aa2244409_rotopal-logo.svg"
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
                                    Healthcare professionals face immense challenges in coordinating schedules and managing rotas. Traditional methods involving spreadsheets and endless back-and-forth messaging are inefficient and prone to errors. RotaPal needed a cloud-based solution to simplify this entire process, allowing teams to build, manage, and swap shifts with ease.
                                </p>

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
                                    We developed a clean, intuitive, and powerful SaaS platform designed specifically for the needs of healthcare teams. The solution focuses on user experience and real-time updates.
                                </p>

                                {/* POINTS */}
                                <div className="mt-8 space-y-5">

                                    {[
                                        {
                                            title: "Intuitive Rota Builder:",
                                            text: " A visual interface for managers to easily create and publish weekly or monthly rotas.",
                                        },

                                        {
                                            title: "Automated Shift Swapping:",
                                            text: "A streamlined process for team members to request shift swaps, which can be approved or denied by managers with a single click.",
                                        },

                                        {
                                            title: "Real-Time Notifications:",
                                            text: "Instant alerts for new rotas, swap requests, and approvals, keeping the entire team in sync.",
                                        },

                                        {
                                            title: "Mobile-First Design:",
                                            text: "A responsive design ensures that doctors, nurses, and other professionals can manage their schedules from any device, anywhere.",
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
                                    RotaPal has significantly reduced the administrative burden on healthcare managers, saving hours of work each week. The automated swap system has improved team morale and flexibility, while the clear, centralized rota has minimized scheduling conflicts and miscommunication. The platform is now an essential tool for healthcare teams looking to improve their operational efficiency.
                                </p>

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
        RotaPal
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
        Healthcare / SaaS
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
          "SaaS",
          "Healthcare",
          "Web App",
          "Rota Management",
          "iOS",
          "Android"
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

    {/* APP STORE */}
    <button
      className="
        mt-3

        w-full
        h-[52px]

        rounded-2xl

        border

        border-[#E5E7EB]
        dark:border-[#27272A]

        bg-white
        dark:bg-[#09090D]

        text-[#111111]
        dark:text-white

        font-semibold
        text-[15px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
    >

      <RiAppleLine className="text-[18px]" />

      View on App Store

    </button>

    {/* PLAY STORE */}
    <button
      className="
        mt-3

        w-full
        h-[52px]

        rounded-2xl

        border

        border-[#E5E7EB]
        dark:border-[#27272A]

        bg-white
        dark:bg-[#09090D]

        text-[#111111]
        dark:text-white

        font-semibold
        text-[15px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
    >

      <RiGooglePlayLine className="text-[18px]" />

      View on Google Play

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

export default RotaPal;