import React from "react";
import Navbar from "../../component/Navbar";
import { useNavigate,Link } from "react-router-dom";
import Footer from "../../component/Footer";
import { RiArrowLeftLine, RiHome5Line} from "react-icons/ri";
const tools = [
    {
    title: "Invoice Generator",
    desc: "Create and download professional invoices with GST/VAT support.",
    icon: "ri-video-line",
    powerful: true,
    link: "/Invoice"
  },
  {
    title: "Quotation Generator",
    desc: "Create and download professional quotations for your clients.",
    icon: "ri-calendar-line",
    powerful: true,
    link: "/Quotation"
  },
  {
    title: "EMI calculator ",
    desc: "calculate your loan EMI with advanced options like yearly prepayments and annual step-up.",
    icon: "ri-video-line",
    link: "/EMI"
  },
  {
    title: "Loan Prepayment Calculator ",
    desc: "Calculate how making prepayments can reduce your loan tenure and save you interest.",
    icon: "ri-video-line",
    link: "/Loan"
  },
  {
    title: "SIP Calculator ",
    desc: "Estimate mutual fund returns with a step-up option to see how increasing your investment can accelerate wealth creation.",
    icon: "ri-t-shirt-line",
    link: "/SIPP"
  },
  {
    title: "SWP Calculator",
    desc: "Plan your retirement income with our systematic withdrawal Plan (SWP) calculator.",
    icon: "ri-book-open-line",
    link: "/SWP"
  },
  {
    title: "PPF Calculator ",
    desc: "Calculate the maturity amount and interest earned on your Public Provident Fund (PPF) investment",
    icon: "ri-book-open-line",
    link: "/PPF"
  },
  {
    title: "EPF Calculator",
    desc: "Estimate your EPF balance at retirement based on your salary and contributions.",
    icon: "ri-book-open-line",
    link: "/EPF"
  },
  {
    title: "Sukanya Samriddhi Calculator",
    desc: "Estimate the maturity amount for your investment in the Sukanya Samriddhi Yojana (SSY) scheme .",
    icon: "ri-book-open-line",
    link: "/Sukanya"
  },
  {
    title: "RD Calculator",
    desc: "Calculate the maturity amount and interest earned on your Recurring Deposite (RD) investment.",
    icon: "ri-book-open-line",
    link: "/RD"
  },
  {
    title: "Compound Interest calculator ",
    desc: "Calculate the compound interest on your investments over time.",
    icon: "ri-book-open-line",
    link: "/Compound"
  },
  {
    title: "Simple interest Calculator",
    desc: "Calculate simple interest on a prinicipal amount with our easy-to-use calculator .",
    icon: "ri-book-open-line",
    link: "/Simple"
  },
  {
    title: "GST Calculator",
    desc: "A free and simple online GST calculator to easily add or remove Goods and services Tax from any amount.",
    icon: "ri-book-open-line",
    link: "/GST"
  },
];

function Financial() {

  const navigate = useNavigate();

  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  return (
 <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />

      {/* Breadcrumb */}
<div className="w-full px-4 mx-auto my-6 max-w-8xl">

  <div
    className="
      flex
      items-center

      gap-2
      sm:gap-4

      px-3
      sm:px-5

      py-3
      sm:py-4

      rounded-2xl

      border
      border-[#E5E7EB]
      dark:border-[#232531]

      bg-white
      dark:bg-[#121218]

      shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      dark:shadow-none

      overflow-x-auto
      whitespace-nowrap

      transition-all
      duration-300
    "
  >

    {/* BACK */}
    <button
      onClick={() => navigate(-1)}
      className="
        flex-shrink-0

        text-[#666]
        dark:text-gray-400

        transition-all
        duration-300

        hover:text-[#F3A412]
      "
    >
      <RiArrowLeftLine className="text-[16px] sm:text-[20px]" />
    </button>

    {/* HOME */}
    <Link
      to="/"
      className="
        flex-shrink-0

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      <RiHome5Line className="text-[14px] sm:text-[18px]" />
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>

    {/* TOOLS */}
    <Link
      to="/tools"
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        text-[#666]
        dark:text-gray-400

        hover:text-[#F3A412]

        transition-all
        duration-300
      "
    >
      Tools
    </Link>

    <span className="flex-shrink-0 text-[#B0B0B8] dark:text-[#4B5563]">
      &gt;
    </span>


    {/* CURRENT */}
    <span
      className="
        flex-shrink-0

        text-xs
        sm:text-[15px]

        font-semibold

        text-[#111111]
        dark:text-white
      "
    >
      Financial Tools  
    </span>

  </div>

</div>

      {/* Title */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-bold text-[#F3A412]">
Financial Tools      </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
A suite of handy calculators to help you plan your loans, investments, and savings goals.</p>  </div>

      {/* Cards */}
      <div className="grid w-full gap-8 px-8 mx-auto mt-14 md:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool, index) => (
<div
key={index}
onClick={() => tool.link && navigate(tool.link)}
className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[#F3A412] hover:scale-[1.02] transition cursor-pointer"
>

{tool.powerful && (
  <span className="absolute px-3 py-1 text-xs font-semibold text-black bg-[#F3A412] rounded-full top-5 right-5">
    Powerful
  </span>
)}

<div className="flex items-start justify-between gap-4">

<div className="flex items-start gap-4">

<div className="flex items-center justify-center w-12 h-12 text-xl text-[#F3A412] rounded-full bg-[#F3A412]/20">
<i className={tool.icon}></i>
</div>

<h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug pr-16">
{tool.title}
</h3>

</div>

</div>
<p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
{tool.desc}
</p>

</div>
        ))}

      </div>
      
{/* Content Section */}
<div className="w-full px-6 mt-20">

<h2 className="text-3xl font-bold text-[#F3A412]">
Empower Your Financial Decisions
</h2>

<p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Navigating the world of finance can be complex. Whether you're planning for a major purchase, looking to grow your wealth, or saving for a future goal, having the right tools can make all the difference. Our collection of financial calculators is designed to bring clarity to your financial planning.</p>

<p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
From understanding your loan obligations with our EMI Calculator to visualizing your investment growth with the SIP and Compound Interest calculators, these tools help you make informed decisions. Take control of your financial future by exploring the potential of your savings and investments today.</p>

</div>


{/* FAQ Section */}
<div className="px-6 mt-20 mb-24">

<h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
Frequently Asked Questions
</h2>

<div className="space-y-4">

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">  <summary className="flex items-center justify-between font-medium cursor-pointer">
What is the difference between simple and compound interest?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">
Simple interest is calculated only on the initial principal amount. Compound interest is calculated on the principal and also on the accumulated interest from previous periods. This "interest on interest" effect allows your investments to grow at a much faster rate over time.</p>
</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group"><summary className="flex items-center justify-between font-medium cursor-pointer">
What is an EMI and why is it important to calculate?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">

EMI stands for Equated Monthly Installment. It's the fixed amount you pay to a lender each month for a loan. Calculating your EMI is crucial for budgeting as it helps you understand if you can comfortably afford the loan payments before you commit.</p>

</details>

<details className="w-full w-full mx-auto p-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] group">
  <summary className="flex items-center justify-between font-medium cursor-pointer">
Why is a SIP (systematic investment plan) a popular investment method?
<i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>

</summary>

<p className="mt-3 text-sm text-[var(--text-secondary)]">


SIPs are popular because they encourage disciplined investing. By investing a fixed amount regularly, you benefit from "rupee cost averaging" (buying more units when prices are low and fewer when they are high). It's an accessible way to build wealth over the long term without needing a large lump sum to start.</p>
</details>

</div>

</div>


<Footer/>
    </div>



  );
}

export default Financial;