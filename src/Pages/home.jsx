import { useState } from "react";
import FreeformInput from "../components/FreeFormInput"; // 👈 Import it

function Home() {


  return (
    <div className="app-container">
      <h1 className="app-title">Portfolio Website Generator</h1>

      {/* 👇 Freeform AI Assistant */}
      <FreeformInput />

    </div>
  );
}

export default Home;
