import Personal from "./Personal.jsx";
import Projects from "./Projects.jsx";
import Work from "./Work.jsx";
import Education from "./Education.jsx";
import Preview from "./Preview.jsx";
import { useState } from "react";

export default function Template() {

  const [view, setView] = useState("personal");

  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: ""
    },
    projects: [],
    work: [],
    education: []
  });

  function renderView() {
    switch (view) {
      case "personal":
        return (
          <Personal
            setView={setView}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        );

      case "projects":
        return (
          <Projects
            setView={setView}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        );

      case "work":
        return (
          <Work
            setView={setView}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        );

      case "education":
        return (
          <Education
            setView={setView}
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        );

      default:
        return null;
    }
  }

  return (
    <div className="template-page">
      <div className="template-container">

        <div className="input-container">
          {renderView()}
        </div>

        <div className="preview-container">
          <Preview resumeData={resumeData} />
        </div>

      </div>
    </div>
  );
}