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
} from "react-icons/ri";

const Khadhya = () => {
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
                Khadhya Khurak - Food Industry Platform
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
                    md:text-[64px]

                    leading-[1.05]
                    font-extrabold

                    text-[#F3A412]

                    mb-6
                  "
                >
                  Khadhya Khurak - Food Industry Platform
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
                  A comprehensive digital platform for India's leading food
                  industry publication and exhibition, supporting their
                  long-standing mission to connect and inform the sector.
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
      src="logo (4).png"
      alt="food platform"
      className="
        w-full

        max-w-[260px]
        md:max-w-[320px]
        lg:max-w-[360px]

        object-contain
      "
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

                    leading-[34px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                >
                  With a rich history starting in 2000, Khadhya Khurak is a
                  cornerstone of the Indian Food & Hospitality industry, known
                  for its influential publications and one of the largest
                  annual exhibitions in the country. To continue their growth
                  and embrace the "Digital India" initiative, they needed a
                  modern digital platform to manage their massive event, from
                  registrations and bookings to real-time entry management.
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

                    leading-[34px]

                    text-[#3F3F46]
                    dark:text-[#E4E4E7]

                    transition-colors duration-300
                  "
                >
                  We developed a comprehensive event management portal to
                  digitize and streamline the entire exhibition experience.
                  The platform serves as a central hub for organizers,
                  exhibitors, and attendees.
                </p>

                {/* POINTS */}
                <div className="mt-8 space-y-5">

                  {[
                    {
                      title: "Full-Featured Portal:",
                      text: "We built a complete portal handling user registrations, exhibitor bookings, and public inquiries.",
                    },

                    {
                      title: "Secure Payment Integration:",
                      text: "Integrated Razorpay to handle paid entries and exhibitor fees, providing a seamless and secure transaction process.",
                    },

                    {
                      title: "QR-Based Entry System:",
                      text: "We implemented a QR code system for attendees. This allows for fast, digital entry at the event, providing organizers with real-time data on attendance and footfall.",
                    },

                    {
                      title: "Content Management:",
                      text: "An integrated system to manage and display content from their various industry publications.",
                    },

                    {
                      title: "Scalable Architecture:",
                      text: "Built on a reliable Laravel framework to handle high traffic during peak exhibition seasons and to accommodate future growth.",
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
                  The digital platform has successfully transformed Khadhya
                  Khurak's operations. The automated registration and payment
                  system has improved efficiency, while the QR-based entry
                  provides valuable real-time data. The portal has solidified
                  their position as a modern, tech-forward industry leader and
                  provides a robust foundation for future digital expansion.
                </p>

              </section>

            </div>

            {/* RIGHT */}
{/* RIGHT SIDE */}
<div
  className="mt-16 lg:mt-0 lg:sticky lg:top-28 h-fit"
>

  {/* PROJECT DETAILS CARD */}
  <div
    className="
      rounded-[28px]

      border

      border-[#E5E7EB]
      dark:border-[#1E1E28]

      bg-[#FAFAFA]
      dark:bg-[#0B0B10]

      p-8

      transition-colors duration-300
    "
  >

    <h3
      className="
        text-[34px]
        md:text-[38px]

        font-extrabold

        text-[#111111]
        dark:text-white

        mb-8

        transition-colors duration-300
      "
    >
      Project Details
    </h3>

    {/* CLIENT */}
    <div className="mb-8">

      <p
        className="
          text-[15px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-2

          transition-colors duration-300
        "
      >
        Client
      </p>

      <h4
        className="
          text-[28px]
          font-bold

          text-[#111111]
          dark:text-white

          transition-colors duration-300
        "
      >
        Khadhya Khurak
      </h4>

    </div>

    {/* INDUSTRY */}
    <div className="mb-8">

      <p
        className="
          text-[15px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-2

          transition-colors duration-300
        "
      >
        Industry
      </p>

      <h4
        className="
          text-[22px]
          font-semibold

          text-[#111111]
          dark:text-white

          transition-colors duration-300
        "
      >
        Events / Media
      </h4>

    </div>

    {/* TECHNOLOGIES */}
    <div>

      <p
        className="
          text-[15px]

          text-[#71717A]
          dark:text-[#A1A1AA]

          mb-4

          transition-colors duration-300
        "
      >
        Technologies
      </p>

      <div className="flex flex-wrap gap-3">

        {[
          "Web Portal",
          "Event Management",
          "QR Code",
          "Payment Gateway",
          "Laravel",
        ].map((item, index) => (

          <div
            key={index}
            className="
              px-4
              py-2

              rounded-full

              bg-[#F4F4F5]
              dark:bg-[#18181B]

              border

              border-[#E5E7EB]
              dark:border-[#27272A]

              text-[14px]
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

        my-8

        transition-colors duration-300
      "
    />

    {/* BUTTON */}
    <button
      className="
        w-full
        h-[58px]

        rounded-2xl

        bg-[#F3A412]
        hover:bg-[#E29A00]

        text-black

        font-bold
        text-[17px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
    >

      <RiGlobalLine className="text-[20px]" />

      Visit Live Site

    </button>

  </div>

  {/* CTA CARD */}
  <div
    className="
      mt-8

      rounded-[28px]

      border

      border-[#E8B14C33]
      dark:border-[#3A2B12]

      bg-[#FFF9F0]
      dark:bg-[#120D06]

      p-8

      transition-colors duration-300
    "
  >

    <h3
      className="
        text-[32px]
        md:text-[36px]

        leading-[1.2]
        font-extrabold

        text-[#F3A412]

        mb-6
      "
    >
      Have a Similar Project?
    </h3>

    <p
      className="
        text-[17px]

        leading-[34px]

        text-[#5E5E66]
        dark:text-[#D4D4D8]

        transition-colors duration-300
      "
    >
      Let’s turn your vision into reality. Contact us today for a
      free consultation.
    </p>

    <button
      className="
        mt-8

        w-full
        h-[58px]

        rounded-2xl

        bg-[#F3A412]
        hover:bg-[#E29A00]

        text-black

        font-bold
        text-[17px]

        flex items-center justify-center gap-3

        transition-all duration-300
      "
    >

      Get a Free Quote

      <RiArrowRightLine className="text-[20px]" />

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

export default Khadhya;