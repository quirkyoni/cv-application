import { useState } from "react";
import "./App.css";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import "./styles/experience.css";

function App() {
  // General Section
  const [generalData, setGeneralData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });

  const handleGeneralFormChange = (newGeneralData) => {
    setGeneralData(newGeneralData);
  };

  // Education Section
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    studydate: "",
  });

  const handleEducationFormChange = (newEducationData) => {
    setEducationData(newEducationData);
  };

  // Experience Section
  const [experienceCount, setExperienceCount] = useState(1);

  const handleAddExperience = () => {
    setExperienceCount((prevExperienceCount) => {
      return prevExperienceCount + 1;
    });

    setExperienceData((prevExperienceData) => [
      ...prevExperienceData,
      { company: "", position: "", description: "" },
    ]);
  };

  const [experienceData, setExperienceData] = useState([
    { company: "", position: "", description: "" },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleExperienceFormChange = (newExperienceData, index) => {
    setExperienceData((prevFormData) =>
      prevFormData.map((experienceData, i) =>
        i === index ? { ...experienceData, ...newExperienceData } : experienceData
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <h1>General</h1>
        <div className="general">
          <General onChange={(newGeneralData) => handleGeneralFormChange(newGeneralData)} />
        </div>
        <h1>Education</h1>
        <div className="education">
          <Education onChange={(newEducationData) => handleEducationFormChange(newEducationData)} />
        </div>
        <h1>Experience</h1>
        <div className="experiences">
          {[...Array(experienceCount)].map((_, index) => (
            <Experience
              key={index}
              index={index}
              onChange={(newExperienceData) => handleExperienceFormChange(newExperienceData, index)}
            />
          ))}
        </div>

        <input
          type="button"
          value="Add Experience"
          onClick={handleAddExperience}
        />
        <input type="submit" value="Submit" />

        {isSubmitted && (
          <div>
            <h3>General</h3>
            <p>{generalData.fullname}</p>
            <p>{generalData.email}</p>
            <p>{generalData.phonenumber}</p>
          </div>
        )}

        {isSubmitted && (
          <div>
            <h3>Education</h3>
            <p>{educationData.school}</p>
            <p>{educationData.degree}</p>
            <p>{educationData.studydate}</p>
          </div>
        )}

        {isSubmitted &&
          experienceData.map((experience, index) => (
            <div key={index}>
              <h3>Experience {index + 1}</h3>
              <p>{experience.company}</p>
              <p>{experience.position}</p>
              <p>{experience.description}</p>
            </div>
          ))}
      </form>
    </>
  );
}

export default App;
