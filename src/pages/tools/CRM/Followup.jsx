import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { useNavigate } from "react-router-dom";
import { Bell, Plus } from "lucide-react";


function Followup() {
        // ✅ ADD HERE
  // const [category, setCategory] = useState("");
  // const [text, setText] = useState("");
  // const [advancedOpen, setAdvancedOpen] = useState(true);
  
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
    <div className="flex flex-col min-h-screen dark:bg-[#09090B] text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />
      <div className="w-full border-b border-[var(--border-color)]">
        <div className="max-w-4xl px-6 py-4 mx-auto text-sm text-gray-400 ">
          Home &gt; Tools &gt; CRM &gt; <span className="text-white">Customer Management</span>
        </div>
      </div>

      {/* Title */}
<div className="mt-4 mb-10 text-center">
  <h1 className="text-4xl font-bold text-[#F3A412]">
    Follow-up Reminders
  </h1>

  <p className="max-w-xl mx-auto mt-2 text-[var(--text-secondary)] text-sm">
    Set, track, and manage follow-up tasks for your customers to ensure no opportunity slips through the cracks.
  </p>
</div>
<div className="w-full px-6 mt-8">
  <div className="max-w-5xl mx-auto">
    
    {/* CARD */}
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        
        <div className="flex items-center gap-2 text-[var(--text-primary)]">
          <Bell size={18} />
          <h2 className="text-base font-semibold">
            Follow-up Reminders (0)
          </h2>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-yellow-500 rounded-md hover:bg-yellow-400">
          <Plus size={16} />
          Add Reminder
        </button>

      </div>

      {/* EMPTY STATE */}
      <div className="flex items-start gap-3 p-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg">
        
        <span className="text-[var(--text-secondary)] mt-0.5">ℹ️</span>

        <div>
          <p className="font-medium text-[var(--text-primary)]">
            No Reminders Found
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Click "Add Reminder" to create your first follow-up task.
          </p>
        </div>

      </div>

    </div>
  </div>
</div>



      {/* Content Section */}
      <div className="w-full max-w-5xl px-1 mx-auto mt-20">

        <h2 className="text-3xl font-bold text-[#F3A412]">
The Fortune is in the Follow-up
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
In sales and customer service, the most common point of failure is a lack of timely follow-up. A potential lead goes cold, a question goes unanswered, or a promised check-in is forgotten. This simple tool is designed to solve that problem by providing a clear, actionable list of your customer-related tasks.</p>       
      </div>


      {/* FAQ Section */}
      <div className="w-full max-w-5xl px-1 mx-auto mt-20 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
Why is following up with customers important?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Following up demonstrates professionalism and shows that you value your customer's business. It keeps you top-of-mind, helps answer lingering questions, and is often the key to moving a potential lead from 'interested' to 'closed'.     </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
          CAn I get notifications for this reminders?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">


Currently, this tool serves as a visual dashboard for your upcoming tasks. We are exploring browser and email notifications for a future update to make it even more powerful.       </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
How does this integrate with my customer list ?              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
When you create a reminder, you link it directly to a customer from your existing list in the Customer Management tool. This keeps all your interaction history organized and in one place.   </p>
          </details>


        </div>

      </div>

      <Footer />
    </div>



  );
}

export default Followup;