import React from "react";

export default function Resume() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>My Resume</h2>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="80%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
