import React from "react";

export default function Resume() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>My Resume</h2>
      <iframe
        src="/Resume.pdf"
        title="Resume"
        width="100%"
        height="800px"
        style={{ border: "none", borderRadius: "8px" }}
      ></iframe>
    </div>
  );
}
