import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../../../component/Footer";
import { Link } from "react-router-dom";
import {
  Search,
  Download,
  Upload,
  Users,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  User
} from "lucide-react";
import { RiVolumeUpLine, RiArrowLeftLine, RiHome5Line  } from "react-icons/ri";



function CM() {
  const navigate = useNavigate();
        // ✅ ADD HERE
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  

  const [rows, setRows] = useState(10);

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
    <div className="flex flex-col min-h-screen dark:bg-black text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />
      <div className="max-w-7xl mx-auto border-b border-[var(--border-color)]">
     <div className="max-w-5xl px-4 mx-auto my-6">
     
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
     
         {/* IMAGE TOOLS */}
         <Link
           to="/tools/image-tools"
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
           Image Tools
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
            Customer Management (CRM)
         </span>
     
       </div>
     
     </div>

      {/* Title */}
      <div className="mt-6 text-center mb-14">
        <h1 className="text-5xl font-bold text-[#F3A412]">
       Customer Management (CRM)    </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
      Add, edit, and organize your customer contacts into groups for targeted campaigns.</p>  </div>

   <div className="min-h-screen dark:bg-black  text-[var(--text-primary)]">
  <div className="max-w-5xl p-6 mx-auto">
      {/* HEADER */}
      <div className="flex items-start justify-between w-full mb-6">

        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Manage your customer base and interactions.
          </p>
        </div>

        <div className="flex gap-2">

          <button className="flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded">
            <Download size={16} /> Export
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded">
            <Upload size={16} /> Import
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded">
            <Users size={16} /> Groups
          </button>

          <button className="flex items-center gap-2 px-4 py-2 font-medium text-black bg-yellow-500 rounded">
            <Plus size={16} /> Add Customer
          </button>

        </div>
      </div>

      {/* CARD */}
      <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl">

        {/* SEARCH */}
        <div className="flex gap-4 p-4 border-b border-[var(--border-color)]">

          <div className="flex items-center w-full px-3 border border-[var(--border-color)] rounded">
            <Search size={16} className="mr-2 text-gray-400" />
            <input
              placeholder="Search by name..."
              className="w-full py-2 bg-transparent outline-none"
            />
          </div>

<select
  className="px-4 py-2 border border-[var(--border-color)] rounded 
             bg-[var(--card-bg)] text-[var(--text-primary)] 
             outline-none"
>
  <option className="bg-[var(--card-bg)] text-[var(--text-primary)]">
    Name
  </option>
  <option className="bg-[var(--card-bg)] text-[var(--text-primary)]">
    Email
  </option>
  <option className="bg-[var(--card-bg)] text-[var(--text-primary)]">
    Mobile
  </option>
  <option className="bg-[var(--card-bg)] text-[var(--text-primary)]">
    Company
  </option>
</select>
        </div>

        {/* EMPTY STATE */}
        <div className="flex flex-col items-center justify-center py-16 text-center">

          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-700/40">
            <User size={28} />
          </div>

          <p className="mb-1 text-lg font-semibold">No customers found</p>

          <p className="mb-4 text-sm text-[var(--text-secondary)]">
            Get started by adding your first customer or <br />
            importing from a CSV file.
          </p>

          <button className="flex items-center gap-2 px-5 py-2 text-black bg-yellow-500 rounded">
            <Plus size={16} /> Add Customer
          </button>

        </div>

        {/* FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-t border-[var(--border-color)] text-sm">

          <p className="text-[var(--text-secondary)]">
            Showing 1 to 0 of 0 entries
          </p>

          <div className="flex items-center gap-2">
            Rows per page
            <select
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              className="px-2 py-1 border border-[var(--border-color)] rounded text-black"
            >
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex items-center gap-2">

            <span>Page 1 of 1</span>

            <button className="p-2 border border-[var(--border-color)] rounded">
              <ChevronsLeft size={14} />
            </button>

            <button className="p-2 border border-[var(--border-color)] rounded">
              <ChevronLeft size={14} />
            </button>

            <button className="p-2 border border-[var(--border-color)] rounded">
              <ChevronRight size={14} />
            </button>

            <button className="p-2 border border-[var(--border-color)] rounded">
              <ChevronsRight size={14} />
            </button>

          </div>

        </div>

      </div>

    </div>
    </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20">

        <h2 className="text-3xl font-bold text-[#F3A412]">
          The Core of Your Marketing: Your Audience
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Effective marketing starts with understanding and organizing your audience. A simple Customer Relationship Management (CRM) system is the most powerful tool for this job. Our free tool provides the essential features you need to manage your contacts and segment them into meaningful groups, laying the foundation for effective, personalized communication.
</p>       
      </div>


      {/* FAQ Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
Why should I segment customers into groups?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Segmenting customers allows you to send more relevant and targeted messages. For example, you can create a 'VIP Customers' group for exclusive offers or a 'New Leads' group for a welcome email series. This personalization leads to higher engagement and better results than sending the same message to everyone.          </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
            Is my customer data secure?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

Yes, your data is secure. All customer and group information is stored in your personal, protected account database. We do not access, share, or use your customer data for any purpose.           </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
Can I import an existing list of customers?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Currently, you can add customers manually through the interface. We are working on a feature to allow bulk importing of customers from a CSV file to make getting started even easier.            </p>
          </details>


        </div>

      </div>

      <Footer />
    </div>
    </div>



  );
}

export default CM;