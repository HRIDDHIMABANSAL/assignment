"use client";

import { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<string | null>(null); // Allow both null and string

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]; // Use optional chaining for safety
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Upload and View Document
        </h1>
        <div className="text-center">
          <label
            htmlFor="file-upload"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            Choose a Document
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf, .ppt, .pptx"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
              Document Preview
            </h2>
            <iframe
              src={file}
              className="w-full h-[500px] border-2 border-gray-300 rounded-lg shadow-md"
              title="Document Preview"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
