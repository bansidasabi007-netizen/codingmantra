import {
  Download,
  Upload,
  Plus,
  Trash2,
  ArrowRight,
  Calendar,
  Clock,
  Globe,
  Code,
  Timer,
  Hourglass,
  ChevronRight,
  ArrowLeftRight,
  ArrowLeft,
  Copy,
  ChevronDown,
  X,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Lock,
  KeyRound,
  Key,
  Fingerprint,
  Palette,
  Clock3,
  FileJson,
  Asterisk,
  Zap,
  Shield,
  LockKeyhole,
  ShieldCheck,
  Pickaxe,
} from "lucide-react";


function Planning() {
  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

const [mode, setMode] = useState("basic");

const faqData = [
  {
    question: "Why use story points instead of hours?",
    answer:
      "Story points focus on relative effort, complexity, and uncertainty rather than exact time. This helps teams estimate more consistently because development time can vary greatly between developers and situations.",
  },
  {
    question: "Why does the tool offer different card decks like T-shirt sizes?",
    answer:
      "Different teams prefer different estimation styles. Some teams use Fibonacci numbers for precision, while others prefer simpler systems like T-shirt sizes (S, M, L, XL) for faster collaboration.",
  },
  {
    question: "Can Planning Poker improve team collaboration?",
    answer:
      "Yes. Since all team members discuss requirements and vote independently, it encourages communication, exposes misunderstandings early, and leads to more balanced estimates.",
  },
  {
    question: "What happens if team members vote very differently?",
    answer:
      "Large differences in votes usually indicate unclear requirements or different assumptions. The discussion after voting helps the team align their understanding before finalizing estimates.",
  },
];
const toolsData = [
  {
    title: "Random Password Generator",
    badge: "Powerful",
    icon: <Lock size={18} />,
  },
  {
    title: "RSA Key Generator",
    icon: <KeyRound size={18} />,
  },
  {
    title: "SSH Key Generator",
    icon: <Key size={18} />,
  },
  {
    title: "UUID/GUID Generator",
    icon: <Fingerprint size={18} />,
  },
  {
    title: "Color Theme Generator",
    icon: <Palette size={18} />,
  },
  {
    title: "Cron Expression Generator",
    icon: <Clock3 size={18} />,
  },
  {
    title: "JSON Formatter",
    icon: <FileJson size={18} />,
  },
  {
    title: "Regex Tester",
    icon: <Asterisk size={18} />,
  },
  {
    title: "Code Minifier",
    icon: <Zap size={18} />,
  },
  {
    title: "JavaScript Obfuscator",
    icon: <Shield size={18} />,
  },
  {
    title: "JWT Decoder",
    icon: <LockKeyhole size={18} />,
  },
  {
    title: "Base64 Encoder/Decoder",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "PDF Merger",
    icon: <Pickaxe size={18} />,
  },
];
  
  return (
<div
  className="min-h-screen transition-colors duration-300"
  style={{
    background: "var(--bg-primary)",
    color: "var(--text-primary)",
  }}
>
          <Navbar changeTheme={changeTheme} />

  <section className="w-full px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-3 px-5 py-4 mb-10 border rounded-xl"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border-color)",
          }}
        >
          <Link
            to="/"
            className="
              flex items-center gap-2
              text-sm
              transition
              hover:text-[#ffb000]
            "
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={16} />
            Home
          </Link>

          <ChevronRight
            size={16}
            style={{ color: "var(--text-secondary)" }}
          />

          <Link
            to="/"
            className="
              text-sm transition
              hover:text-[#ffb000]
            "
            style={{ color: "var(--text-secondary)" }}
          >
            Tools
          </Link>

          <ChevronRight
            size={16}
            style={{ color: "var(--text-secondary)" }}
          />

          <Link
            to="/tools/developer"
            className="
              text-sm transition
              hover:text-[#ffb000]
            "
            style={{ color: "var(--text-secondary)" }}
          >
            Developer & Productivity Tools
          </Link>

          <ChevronRight
            size={16}
            style={{ color: "var(--text-secondary)" }}
          />

          <span
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Planning Poker
          </span>
        </div>

        {/* Hero */}
        <div className="text-center">
          <h1
            className="text-3xl font-bold leading-tight md:text-6xl"
            style={{ color: "#ffb000" }}
          >
            Planning Poker for Agile Teams
          </h1>

          <p
            className="max-w-3xl mx-auto mt-5 text-lg leading-8 "
            style={{ color: "var(--text-primary)" }}
          >
            A real-time tool for agile teams to estimate effort and
            complexity for development tasks collaboratively.
          </p>
        </div>

 <div className="flex items-center justify-center gap-4 mt-14">

  <button
    onClick={() => setMode("basic")}
    className="w-[180px] py-4 rounded-xl border font-semibold transition"
    style={{
      background: "transparent",
      borderColor:
        mode === "basic" ? "#ffb000" : "var(--border-color)",
      color: "var(--text-primary)",
    }}
  >
    Basic Mode
  </button>

  <button
    onClick={() => setMode("team")}
    className="w-[180px] py-4 rounded-xl border font-semibold transition"
    style={{
      background: "transparent",
      borderColor:
        mode === "team" ? "#ffb000" : "var(--border-color)",
      color: "var(--text-primary)",
    }}
  >
    Team Mode
  </button>

</div>

      </div>
      {/* BASIC MODE CONTENT */}


    </section>

    {/* MODE CONTENT */}
{/* MODE CONTENT */}

{mode === "basic" ? (

<div className="max-w-6xl px-4 mx-auto mt-10">

  {/* ESTIMATION / RESULTS */}
  <div
    className="grid grid-cols-2 overflow-hidden rounded-xl"
    style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border-color)",
    }}
  >
    <button
      className="py-4 text-sm font-semibold"
      style={{
       background: "var(--card-inner-bg)",
        color: "#ffffff",
      }}
    >
      Estimation
    </button>

    <button
      className="py-4 text-sm font-semibold"
      style={{
        color: "var(--text-secondary)",
      }}
    >
      Results
    </button>
  </div>

  {/* BASIC CONTENT */}
  <div className="mt-8 space-y-8">

    {/* STORIES */}
    <div
      className="p-6 border rounded-2xl"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* TOP */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Stories
        </h2>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium border rounded-xl"
            style={{
            background: "var(--card-inner-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Upload size={17} />
            Import CSV
          </button>

          <button
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium border rounded-xl"
            style={{
              background: "var(--card-inner-bg)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Plus size={17} />
            Add Story
          </button>
        </div>
      </div>

      {/* TEXTAREA */}
      <div>
        <p
          className="mb-2 text-sm font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          Active Story Description
        </p>

        <textarea
          rows={4}
          defaultValue="Your first story description goes here..."
          className="w-full px-4 py-4 border outline-none resize-none rounded-xl"
          style={{
            background: "var(--card-inner-bg)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {/* DIVIDER */}
      <div
        className="my-5 border-t"
        style={{ borderColor: "var(--border-color)" }}
      />

      {/* STORY ITEM */}
      <div
        className="flex items-center justify-between px-5 py-4 border rounded-xl"
        style={{
          background: "rgba(255,176,0,0.10)",
          borderColor: "#ffb000",
        }}
      >
        <p
          className="text-sm"
          style={{ color: "var(--text-primary)" }}
        >
          Your first story description goes here...
        </p>

        <Trash2 size={18} color="#dc2626" />
      </div>
    </div>

    {/* VOTES */}
    <div
      className="overflow-hidden border rounded-2xl"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="py-8 text-center">
        <h2
          className="text-3xl font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Votes Cast (0)
        </h2>

        <p
          className="mt-2 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Click "Reveal Votes" when your team is ready.
        </p>
      </div>

      <div
        className="min-h-[180px] flex items-center justify-center border-t"
        style={{
          borderColor: "var(--border-color)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <p
          className="text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          No votes cast yet.
        </p>
      </div>
    </div>

    {/* BUTTONS */}
    <div className="flex items-center justify-center gap-5">
      <button
        className="px-8 py-4 font-semibold rounded-xl"
        style={{
          background: "#ffb000",
          color: "#000",
        }}
      >
        Reveal Votes
      </button>

      <button
        className="px-8 py-4 font-semibold border rounded-xl"
        style={{
          background: "var(--card-inner-bg)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        Reset
      </button>
    </div>

    {/* DECK */}
    <div
      className="p-8 border rounded-2xl"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-center gap-5 mb-10">
        <h2
          className="text-5xl font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Deck
        </h2>

        <select
          className="px-5 py-3 border rounded-lg outline-none"
          style={{
           background: "var(--card-inner-bg)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          <option>Fibonacci</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-center gap-5">
        {[
          "0",
          "1",
          "2",
          "3",
          "5",
          "8",
          "13",
          "20",
          "40",
          "100",
          "?",
          "☕",
        ].map((item, index) => (
          <button
            key={index}
            className="
              w-[110px]
              h-[160px]
              rounded-2xl
              border
              flex
              items-center
              justify-center
              text-5xl
              font-bold
              transition
              hover:-translate-y-1
            "
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>

  </div>
</div>

) : (

<div
  className="
    max-w-6xl
    mx-auto
    px-4
    mt-10
    min-h-[320px]
    rounded-2xl
    border
    flex
    items-center
    justify-center
    text-center
  "
  style={{
    background: "var(--card-bg)",
    borderColor: "var(--border-color)",
  }}
>
  <div>

    <div className="flex justify-center mb-6">
      <div
        className="flex items-center justify-center w-16 h-16 rounded-full "
        style={{
          background: "rgba(255,176,0,0.08)",
        }}
      >
        <Plus size={28} color="#fff" />
      </div>
    </div>

    <p
      className="mb-6 text-2xl"
      style={{ color: "var(--text-primary)" }}
    >
      Create a session to invite your team.
    </p>

    <button
      className="px-8 py-4 font-semibold rounded-xl"
      style={{
        background: "#ffb000",
        color: "#000",
      }}
    >
      Create Session
    </button>

  </div>
</div>

)}

<section
  className="w-full px-4 py-16 transition-colors duration-300 md:px-10"
  style={{
    background: "var(--bg-primary)",
    color: "var(--text-primary)",
  }}
>
  <div className="max-w-6xl mx-auto">

    {/* TOP CONTENT */}
    <div className="mb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-[#ffb200] mb-6">
        What is Planning Poker?
      </h1>

      <div style={{ color: "var(--text-secondary)" }} className="space-y-4 text-lg leading-8 ">
        <p>
          Planning Poker, also known as Scrum Poker, is a consensus-based
          technique for estimating effort or relative size of development goals
          in software development. It’s a gamified approach that helps agile
          teams make more accurate and collaborative estimates.
        </p>

        <p>
          Instead of estimating in hours, teams use a sequence of numbers
          (often a modified Fibonacci sequence) to assign "story points."
          These points are a relative measure of complexity, uncertainty,
          and effort involved in a task.
        </p>

        <div className="mt-8">
          <h2 style={{ color: "var(--text-primary)" }} className="mb-5 text-2xl font-bold ">
            How to Use This Tool for a Sprint Planning Session
          </h2>

          <div className="space-y-5">

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold">
                Start a Session:
              </span>{" "}
              Choose 'Team Mode' and log in. Click 'Create Session'
              and share the generated invite link with your teammates.
            </div>

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold">
                Add Stories:
              </span>{" "}
              The host (or moderator) can add multiple user stories
              for the upcoming sprint. Click "Add Story" to create
              new items in the list.
            </div>

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold ">
                Discuss and Vote:
              </span>{" "}
              The host selects a story from the list to make it the
              "active" story. The team discusses it, and then each
              member privately chooses a card that represents their
              estimate of the effort involved.
            </div>

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold ">
                Reveal and Reach Consensus:
              </span>{" "}
              The host clicks "Reveal Votes." If the estimates are
              similar, the host can enter the agreed-upon point value
              and click "Finalize Points" to lock it in.
            </div>

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold ">
                Repeat:
              </span>{" "}
              The host moves to the next story and repeats the process
              until all items for the sprint have been estimated.
            </div>

            <div>
              <span style={{ color: "var(--text-primary)" }} className="font-bold ">
                View Summary:
              </span>{" "}
              At any time, the team can switch to the "Results" tab
              to see a summary of all estimated stories for the sprint.
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* FAQ SECTION */}
    <div>
      <h2 className="text-3.xl md:text-5xl font-bold text-[#ffb200] mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div style={{ borderColor: "var(--border-color)" }} className="space-y-4">
        {faqData.map((faq, index) => (
          <details
            key={index}
            className="pb-4 border-b group"
          >
            <summary className="flex items-center justify-between py-4 text-lg font-semibold list-none cursor-pointer md:text-xl">
              {faq.question}

              <span className="transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
<p
  style={{ color: "var(--text-secondary)" }}
  className="pt-2 pr-10 leading-7"
>
   
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>

  </div>
</section>
<section className="w-full px-4 py-16">
  <div
    className="max-w-6xl p-6 mx-auto transition-colors duration-300 border rounded-3xl md:p-8"
  style={{
  background: "var(--tool-card-bg)",
  borderColor: "var(--border-color)",
}}
  >
    {/* HEADING */}
    <h2
      className="mb-8 text-2xl font-bold md:text-3xl"
      style={{ color: "var(--text-primary)" }}
    >
      More Tools in Developer & Productivity Tools
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

      {toolsData.map((tool, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-5 py-4 transition-all duration-300 border cursor-pointer group rounded-2xl hover:-translate-y-1"
         style={{
  background: "var(--tool-card-bg)",
  borderColor: "var(--border-color)",
}}
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* ICON */}
            <div
              className="flex items-center justify-center rounded-full w-11 h-11"
              style={{
                background: "rgba(255,176,0,0.10)",
                color: "#ffb000",
              }}
            >
              {tool.icon}
            </div>

            {/* TEXT */}
            <div className="flex flex-col">

              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="text-sm font-semibold md:text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tool.title}
                </h3>

                {tool.badge && (
                  <span
                    className="px-3 py-1 text-[11px] font-semibold rounded-full"
                    style={{
                      background: "#ffb000",
                      color: "#000",
                    }}
                  >
                    {tool.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT ICON */}
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "var(--text-secondary)" }}
          />
        </div>
      ))}

    </div>
  </div>
</section>
  
      <Footer />
    </div>
  );
}

export default Planning;