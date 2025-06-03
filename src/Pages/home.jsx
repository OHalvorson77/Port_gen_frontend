import { useState } from "react";
import FreeformInput from "../components/FreeFormInput"; // 👈 Import it

function Home() {

  // 👇 Merge AI-generated data with existing form data
  const handleStructuredData = (structured) => {
    setFormData((prev) => ({
      ...prev,
      ...structured,
    }));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Portfolio Website Generator</h1>

      {/* 👇 Freeform AI Assistant */}
      <FreeformInput setStructuredData={handleStructuredData} />

    </div>
  );
}

export default Home;
