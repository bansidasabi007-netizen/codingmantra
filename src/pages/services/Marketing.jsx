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
            "What's the difference between the free WhatsApp Business app and the API?",
        answer:
            "The free app is for single users on one device and has limited automation. The API is for teams, allows for powerful chatbot automation, can be integrated with other software (like CRMs), and can handle a high volume of messages. The API is the choice for businesses looking to scale their WhatsApp communications.",
    },

    {
        question: "Can I use the WhatsApp API for marketing blasts?",
        answer:
            "No, WhatsApp has strict policies against unsolicited promotional messages. The API is primarily for sending transactional messages (like order confirmations, shipping alerts) and for customer-initiated conversations. However, you can use it for 'promotional notifications' sent to users who have opted-in to receive them.",
    },

];

const Marketing = () => {
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
                              WhatsApp Marketing
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
                                    WhatsApp Marketing
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
                                   Unlock the power of direct, conversational marketing with the WhatsApp Business API. Traditional channels like email and SMS are seeing declining engagement, but WhatsApp offers near-instant open rates. We help you obtain official WhatsApp Business verification (Green Tick) and set up comprehensive marketing funnels. Send personalized bulk broadcasts, recover abandoned carts, and provide 24/7 automated customer support with intelligent chatbots. Our solution integrates directly with your existing CRM, allowing you to track conversions and manage customer relationships at scale on their favorite messaging app.</p>

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
                                        src="whatsapp-marketing.png"
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
                                    The Future of Customer Communication
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
With billions of active users, WhatsApp is the most direct and personal channel to engage with your customers. We help you harness the power of the WhatsApp Business Platform (API) to move beyond simple messaging and create powerful, automated communication funnels that drive sales and improve customer satisfaction.
</p>                  

                                <div className="mt-10 space-y-5">

                                    {[
                                        {
                                            title: "API Setup & Integration:",
                                            text: "We handle the entire process of getting your business approved for the Meta API and integrating it with your existing systems.",
                                        },

                                        {
                                            title: "Chatbot Development:",
                                            text: "Build intelligent 24/7 chatbots to answer FAQs, qualify leads, take orders, and book appointments.",
                                        },

                                        {
                                            title: "Bulk Messaging Campaigns:",
                                            text: "Send personalized, non-promotional notifications, alerts, and updates to thousands of users at once.",
                                        },

                                        {
                                            title: "Multi-Agent Inbox:",
                                            text: "Equip your sales and support teams with a unified dashboard to manage customer conversations collaboratively.",
                                        },

                                        {
                                            title: "Green Tick Verification:",
                                            text: " We guide eligible businesses through the process of obtaining the official green tick to enhance brand trust and credibility.",
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
                                   Why Use the WhatsApp API?
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
Unlike the free business app, the API is built for scale, automation, and reliability. It allows you to build sophisticated solutions that can handle massive volume, integrate with your CRM, and provide a level of professionalism that builds customer confidence and loyalty. </p>
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

export default Marketing;