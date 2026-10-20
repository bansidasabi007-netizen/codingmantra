import React, { useState } from "react";
import Navbar from "../../component/Navbar";

function ImageResize() {

  const [image, setImage] = useState(null);

  // ✅ FIX: changeTheme function add
  const changeTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else if (mode === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen overflow-x-hidden">

      {/* ✅ Navbar FIX */}
   <Navbar changeTheme={changeTheme} />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-yellow-500">
          Image Resize Tool
        </h1>
        <p className="mt-2 text-gray-400">
          Upload image and resize it easily.
        </p>

        {/* Upload */}
        <input
          type="file"
          onChange={handleUpload}
          className="mt-6"
        />

        {/* Preview */}
        {image && (
          <div className="mt-6">
            <img
              src={image}
              alt="preview"
              className="w-64 rounded"
            />
          </div>
        )}

        {/* Resize Inputs */}
        <div className="flex gap-4 mt-6">
          <input
            type="number"
            placeholder="Width"
            className="p-2 text-black rounded"
          />
          <input
            type="number"
            placeholder="Height"
            className="p-2 text-black rounded"
          />
        </div>

        {/* Button */}
        <button className="px-6 py-2 mt-6 text-black bg-yellow-500 rounded">
          Resize Image
        </button>

      </div>
    </div>
  );
}

export default ImageResize;