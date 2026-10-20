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
      "Which e-commerce platform is right for my business?",
    answer:
      "It depends on your needs. Shopify is excellent for getting started quickly with a user-friendly interface. WooCommerce offers great flexibility and control if you're using WordPress. For large-scale operations with complex requirements, a custom-built solution often provides the best long-term value and scalability.",
  },

  {
    question: "How do you ensure my e-commerce site is secure?",
    answer:
      "We prioritize security by implementing several measures: using SSL certificates for data encryption, integrating with trusted and PCI-compliant payment gateways, protecting against common web vulnerabilities, and ensuring all customer data is handled securely.",
  },

];

const Commerce = () => {
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
        E-commerce Web & App Development
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
                  E-commerce Web & App Development
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
                  Transform your retail business with a custom e-commerce solution designed to convert visitors into loyal customers. We understand that every online store is unique, which is why we offer tailored development services for platforms like Shopify, WooCommerce, and Magento, as well as fully custom-built headless commerce architectures. Our solutions include secure payment gateway integration, advanced inventory management, SEO-friendly product catalogs, and seamless checkout flows. Whether you are launching a new brand or scaling an existing operation, we provide the technical foundation you need to succeed in the competitive e-commerce landscape.
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
                    src="ecommerce-development (1).png"
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
                  Your Complete E-commerce Solution

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
                  In a competitive market, a generic online store isn't enough. We build custom e-commerce platforms and mobile apps that are tailored to your products, your customers, and your brand. From first click to final checkout, we optimize every step of the user journey to maximize conversions and build a loyal customer base.
                </p>

                <div className="mt-10 space-y-5">

                  {[
                    {
                      title: "Custom Storefront Design",
                      text: "A unique design that reflects your brand and makes your products shine.",
                    },

                    {
                      title: "Mobile Commerce Apps:",
                      text: "Dedicated iOS and Android apps for the best mobile shopping experience.",
                    },

                    {
                      title: "Secure Payment Gateway Integration:",
                      text: "We integrate with popular payment providers like Stripe, PayPal, and Razorpay.",
                    },

                    {
                      title: "Inventory & Order Management:",
                      text: "Custom dashboards to manage your products, track inventory, and process orders efficiently.",
                    },

                    {
                      title: "Third-Party Integrations:",
                      text: "Connect your store with shipping carriers, accounting software, and marketing automation tools.",
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
    Platforms We Work With
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
    We have expertise in building on top of popular platforms as well as creating fully custom solutions from scratch.
  </p>

  {/* POINTS */}
  <div className="mt-8 space-y-4">

    {[
      "Shopify & Shopify Plus",
      "WooCommerce",
      "Magento",
      "Custom-built solutions with Next.js or React",
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

export default Commerce;