import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Tools() {

  const { toolName } = useParams();
  const navigate = useNavigate();

  const toolData = {
    image: {
      title: "Image Tools",
      desc: "Edit, compress, resize and convert images.",
      tools: ["Image Resize", "Image Compress", "Image Converter"]
    },
    video: {
      title: "Video Tools",
      desc: "Edit and create videos using AI.",
      tools: ["Video Cutter", "Video Converter"]
    },
    audio: {
      title: "Audio Tools",
      desc: "Generate and edit audio.",
      tools: ["Audio Converter", "Audio Generator"]
    },
    crm: {
      title: "CRM Tools",
      desc: "Manage customers and campaigns.",
      tools: ["Email Sender", "Contact Manager"]
    },
    marketing: {
      title: "Marketing Tools",
      desc: "Boost your business growth.",
      tools: ["SEO Generator", "Ad Copy Generator"]
    }
  };

  const data = toolData[toolName];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-black">
        <h1 className="text-3xl">Tool Not Found ❌</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 text-white bg-black">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-6 text-black bg-yellow-500 rounded"
      >
        Back
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-yellow-500">
        {data.title}
      </h1>

      <p className="mt-4 text-gray-400">
        {data.desc}
      </p>

      {/* Tools List */}
      <div className="grid gap-6 mt-10 md:grid-cols-3">

        {data.tools.map((tool, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/tools/${toolName}/${tool.toLowerCase().replaceAll(" ", "-")}`)
            }
            className="p-6 bg-[#111] border border-gray-800 rounded-xl hover:border-yellow-500 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{tool}</h3>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Tools;