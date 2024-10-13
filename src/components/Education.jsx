import { useState } from "react";

function Education({ onChange }) {
  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    studydate: "",
  });

  const handleEducationChange = (event) => {
    const { name, value } = event.target;

    setEducationData((prevFormData) => {
      const updatedEducationData = {
        ...prevFormData,
        [name]: value,
      };
      onChange(updatedEducationData);
      return updatedEducationData;
    });
  };

  return (
    <fieldset>
      <legend>Education</legend>
      <label htmlFor="school">School:</label>
      <input
        type="text"
        id="school"
        name="school"
        placeholder="School"
        value={educationData.school}
        onChange={handleEducationChange}
      />
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        id="degree"
        name="degree"
        placeholder="Degree"
        value={educationData.degree}
        onChange={handleEducationChange}
      />
      <label htmlFor="studydate">Study End Date:</label>
      <input
        type="date"
        id="studydate"
        name="studydate"
        placeholder="Study Date"
        value={educationData.studydate}
        onChange={handleEducationChange}
      />
    </fieldset>
  );
}

export default Education;
