import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import { Mail, Users, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ECM() {
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
    <div className="flex flex-col min-h-screen dark:bg-black text-[var(--text-primary)]">

      <Navbar changeTheme={changeTheme} />
      <div className="w-full border-b border-[var(--border-color)]">
        <div className="max-w-4xl px-6 py-4 mx-auto text-sm text-gray-400 ">
          Home &gt; Tools &gt; CRM &gt; <span className="text-white">Customer Management</span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 text-center mb-14">
        <h1 className="text-5xl font-bold text-[#F3A412]">
      Email Campaign Manager    </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
    Your all-in-one solution for managing email campaigns, customers, and SMTP configurations.</p>  </div>


  <div className="h-auto dark:bg-black">
      <div className="p-6 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5">

          <div className="flex items-center justify-between mb-4">

            {/* LEFT */}
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <h2 className="text-lg font-semibold">
                Email Campaigns (0)
              </h2>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex gap-2">

              <button
                onClick={() => navigate("/customers")}
                className="flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded 
                           bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-yellow-500"
              >
                <Users size={16} />
                Customers & Groups
              </button>

              <button
                onClick={() => navigate("/smtp")}
                className="flex items-center gap-2 px-3 py-2 border border-[var(--border-color)] rounded 
                           bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-yellow-500"
              >
                📧 SMTP
              </button>

              <button
                onClick={() => navigate("/create-campaign")}
                className="flex items-center gap-2 px-4 py-2 font-medium text-black bg-yellow-500 rounded"
              >
                <Plus size={16} />
                Create Campaign
              </button>

            </div>
          </div>

          {/* EMPTY STATE */}
          <div className="border border-[var(--border-color)] rounded-lg p-4 bg-[var(--bg-primary)]">

            <div className="flex items-start gap-2">

              <span className="text-[var(--text-secondary)] mt-0.5">ℹ️</span>

              <div>
                <p className="font-semibold">
                  No Campaigns Found
                </p>

                <p className="text-sm text-[var(--text-secondary)]">
                  Click "Create Campaign" to start your first email campaign.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
      {/* Content Section */}
      <div className="w-full px-1 mx-auto mt-20 max-w-7xl">

        <h2 className="text-3xl font-bold text-[#F3A412]">
      Take Control of Your Email Marketing
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
Email remains one of the most effective digital marketing channels, offering a direct line of communication to your customers. Our integrated Email Campaign Manager empowers you to leverage this channel effectively by managing your audience and your sending infrastructure all in one place.</p>       
        <p className=" text-[var(--text-secondary)] leading-relaxed">
Start by segmenting your contacts in our Customer Management tool, configure your own trusted SMTP server for high deliverability, and then create and send targeted campaigns. This suite gives you the core components of a professional email marketing setup, completely free.</p>       
      </div>


      {/* FAQ Section */}
      <div className="w-full px-1 mx-auto mt-20 mb-24 max-w-7xl">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
What is SMTP and why do I need to configure it?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

SMTP (Simple Mail Transfer Protocol) is the standard for sending emails. To send campaigns, you need to connect a sending service (like SendGrid, Mailgun, or even your own Gmail account) by providing its SMTP server details. This ensures your emails are delivered reliably from a source you control.      </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
           Can I use my personal Gmail account to send emails? 
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">

While you can technically use Gmail's SMTP servers, it is strongly discouraged for bulk emailing. Free email providers have very low sending limits (e.g., 500 emails/day) and are likely to mark your campaigns as spam. We recommend using a dedicated transactional email service like SendGrid or Amazon SES for better deliverability.
       </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
How Can I track if my emails are being opened ?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Open and click tracking typically requires embedding a tiny, invisible tracking pixel and redirecting links through a tracking service. Our tool currently focuses on the sending mechanism. For detailed analytics, we recommend using a professional email service provider whose SMTP you can configure here.     </p>
          </details>


        </div>

      </div>

      <Footer />
    </div>



  );
}

export default ECM;