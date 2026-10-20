import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Starter (Monthly)",
    price: 1100,
    approx: "₹9.02 / image",
    credits: "1,220 Total Credits",
    base: "1,100 Base Credits",
    bonus: "+ 120 FREE Bonus Credits (11% Extra)",
    validity: "30 days validity",
  },
  {
    title: "Startup (Half Year)",
    price: 5100,
    approx: "₹6.00 / image",
    credits: "8,500 Total Credits",
    base: "5,100 Base Credits",
    bonus: "+ 3,400 FREE Bonus Credits (67% Extra)",
    validity: "180 days validity",
  },
  {
    title: "Business (Yearly)",
    price: 11000,
    approx: "₹5.50 / image",
    credits: "20,000 Total Credits",
    base: "11,000 Base Credits",
    bonus: "+ 9,000 FREE Bonus Credits (82% Extra)",
    validity: "365 days validity",
    popular: true,
  },
  {
    title: "Business Pro (Yearly)",
    price: 51000,
    approx: "₹5.05 / image",
    credits: "101,000 Total Credits",
    base: "51,000 Base Credits",
    bonus: "+ 50,000 FREE Bonus Credits (98% Extra)",
    validity: "365 days validity",
  },
  {
    title: "Enterprise (Yearly)",
    price: 101000,
    approx: "₹4.51 / image",
    credits: "224,000 Total Credits",
    base: "101,000 Base Credits",
    bonus: "+ 123,000 FREE Bonus Credits (122% Extra)",
    validity: "365 days validity",

  },
  {
    title: "Enterprise / Custom",
    isCustom: true,
  },
];

function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const rate = 83;

  const convertPrice = (price) => {
    if (currency === "USD") {
      return "$" + (price / rate).toFixed(2);
    }
    return "₹" + price;
  };

  const changeTheme = (mode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "light") {
      root.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar changeTheme={changeTheme} />

      <div className="w-full px-4 pt-5 mx-auto">
        {/* Breadcrumb */}
        <div className="w-full p-3 mb-8 text-sm border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-300 ">
  
  <Link to="/" className="hover:underline">
    Home
  </Link>

  {" > "}

  <span className="font-semibold text-black dark:text-white">
    Pricing
  </span>

</div>

        {/* Title Section */}
        <div className="mb-0 text-center">
          <h1 className="text-5xl font-bold text-[#F3A412]">
           Our Pricing
          </h1>
          <p className="mt-3 text-[18px] md:max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
Choose a credit package that suits your needs. This credit will be utilised on AI based and Other Advanced tools.          </p>
        </div> {/* FIXED: Added missing closing div here */}

        {/* Currency Toggle */}
        <div className="flex items-center justify-center gap-4 pt-10">
          <span className={`font-medium ${currency === "INR" ? "text-yellow-600 dark:text-yellow-500" : "text-gray-400"}`}>
            INR (₹)
          </span>

          <button
            onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
            className="relative transition-colors bg-gray-300 rounded-full dark:bg-gray-700 w-14 h-7"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-yellow-500 rounded-full transition-all duration-300 ${
                currency === "USD" ? "left-8" : "left-1"
              }`}
            ></div>
          </button>

          <span className={`font-medium ${currency === "USD" ? "text-yellow-600 dark:text-yellow-500" : "text-gray-400"}`}>
            USD ($)
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid max-w-5xl gap-8 mx-auto py-14 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const cardStyle = `relative flex flex-col p-8 border rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] 
              ${plan.popular 
                ? "border-yellow-500 ring-1 ring-yellow-500/20" 
                : "border-gray-200 dark:border-gray-800"} 
              bg-white dark:bg-[#111] text-gray-900 dark:text-white`;

            if (plan.isCustom) {
              return (
                <div key={index} className={`${cardStyle} items-center`}>
                  <div className="flex items-center justify-center mb-6 text-3xl bg-yellow-100 w-14 h-14 dark:bg-yellow-900/30 rounded-2xl">
                    🏢
                  </div>
                  <h2 className="mb-4 text-3xl font-extrabold text-center">{plan.title}</h2>
                  <p className="mb-8 text-sm leading-relaxed text-center text-gray-500 dark:text-gray-400">
                    Need higher credit volumes, custom API access, or dedicated support? We can build a plan tailored to your business needs.
                  </p>
                  <h3 className="mb-10 text-4xl font-bold tracking-tight text-center">Let's Talk</h3>
                  <ul className="w-full mb-10 space-y-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-3"><span className="text-lg text-green-500">✔</span> Custom credit packages</li>
                    <li className="flex items-center gap-3"><span className="text-lg text-green-500">✔</span> Volume discounts</li>
                    <li className="flex items-center gap-3"><span className="text-lg text-green-500">✔</span> API access for integrations</li>
                    <li className="flex items-center gap-3"><span className="text-lg text-green-500">✔</span> Dedicated support & onboarding</li>
                  </ul>
                  <button className="w-full py-4 mt-auto font-bold tracking-wider uppercase transition-all border-2 border-gray-900 dark:border-gray-600 rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black">
                    Contact Sales
                  </button>
                </div>
              );
            }

            return (
              <div key={index} className={cardStyle}>
                {plan.popular && (
                  <div className="absolute px-4 py-1 text-xs font-black tracking-widest text-black bg-yellow-400 rounded-full shadow-lg -top-3 right-8">
                    MOST POPULAR
                  </div>
                )}
                <h2 className="mb-4 text-2xl font-bold text-center opacity-90">{plan.title}</h2>
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1 text-xs font-bold text-white rounded-full shadow-md bg-gradient-to-r from-pink-500 to-purple-600">
                    ✨ Smart Creation Sale
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-black">{convertPrice(plan.price)}</p>
                  <p className="mt-2 mb-6 text-sm font-semibold text-yellow-600 dark:text-yellow-500">
                    (Approx. {plan.approx})
                  </p>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="flex items-center gap-2 text-lg font-bold">
                    <span className="text-green-500">✔</span> {plan.credits}
                  </p>
                  <p className="text-sm italic font-medium ml-7 opacity-60">{plan.base}</p>
                </div>
                <div className="p-4 mb-6 text-sm font-bold text-center text-green-800 transition-colors border-2 border-green-100 rounded-xl dark:text-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-900/50">
                  {plan.bonus}
                </div>
                <ul className="mb-8 space-y-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3"><span className="text-green-500">✔</span> ⏱ {plan.validity}</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✔</span> Access to all AI features</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✔</span> Cloud gallery & Downloads</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✔</span> Priority Support</li>
                </ul>
                <button className="w-full py-4 mt-auto font-bold text-black transition-all bg-yellow-400 rounded-xl hover:bg-yellow-500 hover:shadow-lg active:scale-95">
                  Purchase Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;