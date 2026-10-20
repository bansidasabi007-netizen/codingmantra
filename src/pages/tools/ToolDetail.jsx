import React from "react";
import { useParams } from "react-router-dom";
import ImageResize from "./ImageResize";

function ToolDetail() {

  const { subTool } = useParams();

  // 🔥 condition
  if (subTool === "image-resize") {
    return <ImageResize />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <h1>Tool Not Found</h1>
    </div>
  );
}

export default ToolDetail;