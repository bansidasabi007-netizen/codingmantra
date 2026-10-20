import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../component/Footer";
import { Upload, Play, ChevronDown} from "lucide-react";
import { RiHome5Line, RiArrowLeftLine} from "react-icons/ri";



function Speech() {

  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");


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
<div className="w-full max-w-4xl px-4 mx-auto my-6">

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
      Text to Speech (AI)
    </span>

  </div>

</div>

      {/* Title */}
      <div className="mt-6 text-center mb-14">
        <h1 className="text-5xl font-bold text-[#F3A412]">
          Text to Speech (AI)     </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Convert your text into high-fidelity, natural-sounding speech using advanced AI models.</p>  </div>

      <div className="max-w-7xl mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6">

        {/* QUICK TEMPLATE */}
        <p className="mb-2 text-sm font-semibold">Quick Templates (Optional)</p>

        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]"
          >
            <option value="">Select a Category...</option>
            <option>Podcasts & Interviews</option>
            <option>Audiobooks & Storytelling</option>
            <option>Marketing & Promos</option>
            <option>E-Learning & Documentaries</option>
            <option>Customer Service & IVR</option>
            <option>Entertainment & Gaming</option>
            <option>Social Media & Content Creation</option>
          </select>

          {/* 
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]"
>
  <option value="">Select a Category...</option>
  <option>Podcasts & Interviews</option>
  <option>Audiobooks & Storytelling</option>
  <option>Marketing & Promos</option>
  <option>E-Learning & Documentaries</option>
  <option>Customer Service & IVR</option>
  <option>Entertainment & Gaming</option>
  <option>Social Media & Content Creation</option>
</select> */}

          <select className="p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
            <option>Select a Template...</option>

            <option>Epic Game Narrator</option>
            <option>Villainous Character</option>
            <option>Radio DJ</option>
            <option>Meditation Guide</option>
          </select>
        </div>

        {/* TEXT AREA */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-semibold">Text Content</p>

          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-[var(--border-color)] rounded">
            <Upload size={14} /> Upload File
          </button>
        </div>

        <p className="text-xs text-[var(--text-secondary)] mb-2">
          Enter the text you want to convert into speech. Keep it shorter than 28000 characters.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)] mb-2"
          placeholder="The quick brown fox jumps over the lazy dog..."
        />

        <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-6">
          <span>{text.split(" ").filter(Boolean).length} words</span>
          <span>{text.length} / 28000 characters</span>
        </div>

        {/* VOICE SECTION */}
        <div className="grid gap-6 mb-6 md:grid-cols-2">

          {/* GENDER */}
          <div>
            <p className="mb-1 text-sm font-semibold">Voice Gender</p>
            <p className="text-xs text-[var(--text-secondary)] mb-2">
              Filter voice options by gender.
            </p>

            <select className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
              <option>All</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* STYLE */}
          <div>
            <p className="mb-1 text-sm font-semibold">Voice Style</p>
            <p className="text-xs text-[var(--text-secondary)] mb-2">
              Select the voice character that best suits your content.
            </p>

            <div className="flex gap-2">
              <select className="flex-1 p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
                <option>Meera - Female (Breezy)</option>
              </select>

              <button className="px-3 border border-[var(--border-color)] rounded">
                <Play size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* ADVANCED */}
        <div
          onClick={() => setAdvancedOpen(!advancedOpen)}
          className="flex justify-between items-center cursor-pointer py-3 border-t border-[var(--border-color)]"
        >
          <span className="text-sm font-semibold">Advanced Options & Directing</span>
          <ChevronDown className={`${advancedOpen ? "rotate-180" : ""} transition`} />
        </div>

        {advancedOpen && (
          <div className="mt-4">

            <div className="grid gap-6 mb-6 md:grid-cols-2">

              {/* LANGUAGE */}
              <div>
                <p className="mb-1 text-sm font-semibold">Language & Accent</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Gemini detects language automatically, or you can guide its accent.
                </p>

                <select className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <option>Auto-detect (Detect from text)</option>
                </select>
              </div>

              {/* TONE */}
              <div>
                <p className="mb-1 text-sm font-semibold">Tones & Emotions</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Add emotions or styles (e.g., 'cheerful', 'sad', 'news anchor').
                </p>

                <select className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <option>Standard</option>
                </select>
              </div>

              {/* SPEED */}
              <div>
                <p className="mb-1 text-sm font-semibold">Reading Speed</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Control how fast the character reads the output.
                </p>

                <select className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
                  <option>Normal Speed</option>
                </select>
              </div>

              {/* NAME */}
              <div>
                <p className="mb-1 text-sm font-semibold">Character Name</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Giving your character a name helps ground the model.
                </p>

                <input className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]" />
              </div>

            </div>

            {/* ROLE */}
            <div className="mb-6">
              <p className="mb-1 text-sm font-semibold">Character Role</p>
              <p className="text-xs text-[var(--text-secondary)] mb-2">
                Core identity (e.g. Radio DJ, Podcaster, Beauty Influencer).
              </p>

              <textarea
                rows={2}
                className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]"
              />
            </div>

            {/* SCENE + SAMPLE */}
            <div className="grid gap-6 mb-6 md:grid-cols-2">

              <div>
                <p className="mb-1 text-sm font-semibold">The Scene</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Set the stage. Describe the physical environment and the emotional 'vibe'.
                </p>

                <textarea
                  rows={2}
                  className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]"
                />
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold">Sample Context</p>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  Gives the model a contextual starting point.
                </p>

                <textarea
                  rows={2}
                  className="w-full p-3 rounded bg-[var(--card-bg)] border border-[var(--border-color)]"
                />
              </div>

            </div>

          </div>
        )}

        {/* FOOTER */}
        <div className="flex justify-between items-center border-t border-[var(--border-color)] pt-4">

          <div className="text-sm">
            Credits: <span className="font-semibold text-yellow-500">10</span>
            <div className="text-xs text-[var(--text-secondary)]">
              Expires in 3 days
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 text-black bg-yellow-500 rounded">
              Buy More
            </button>

            <button className="px-6 py-2 font-semibold text-black bg-yellow-600 rounded">
              🔊 Convert to Speech (10 credits)
            </button>
          </div>

        </div>

      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20">

        <h2 className="text-3xl font-bold text-[#F3A412]">
          Transform Text into Lifelike Audio
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
          Our AI-powered Text to Speech tool leverages the state-of-the-art TTS model to deliver incredibly natural and expressive voice generation. Whether you're creating voiceovers for videos, generating podcast content, or building accessibility features, this tool provides the high-fidelity audio you need.</p>
        <p className=" text-[var(--text-secondary)] leading-relaxed">
          High-Fidelity Synthesis: Designed for producing premium audio suitable for professional use cases like audiobooks and presentations.</p>
        <p className=" text-[var(--text-secondary)] leading-relaxed">
          Expressive Voices: Multiple distinct character voices are available to match the tone and style of your project.
          Fast Generation: Generate high-quality WAV audio within seconds.</p>
      </div>


      {/* FAQ Section */}
      <div className="w-full max-w-4xl px-1 mx-auto mt-20 mb-24">

        <h2 className="mb-6 text-2xl font-bold text-[#F3A412] w-full">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
Which Ai model is used for generation?
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
We use cutting-edge TTS model, which is optimized for high-quality speech synthesis.            </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
              In what format is audio saved? 
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
The generated audio is provided in the WAV format to ensure the highest quality without compression artifacts.            </p>
          </details>

          <details className="w-full p-4 border-b border-[var(--border-color)] group">
            <summary className="flex items-center justify-between font-medium cursor-pointer">
 Does this cost credits? 
              <i className="text-xl transition ri-arrow-down-s-line group-open:rotate-180"></i>
            </summary>

            <p className="mt-3 text-sm text-[var(--text-secondary)] w-full">
Yes, generating audio uses a small amount of AI credits to cover the advanced processing required by the TTS models.            </p>
          </details>


        </div>

      </div>

      <Footer />
    </div>



  );
}

export default Speech;