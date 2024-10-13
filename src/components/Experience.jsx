import { useState } from "react";

function Experience({ onChange }) {
    const [experienceData, setExperienceData] = useState({
        company: "",
        position: "",
        description: "",
      });

  const handleExperienceChange = (event) => {
    const { name, value } = event.target;

    setExperienceData((prevFormData) => {
      const updatedExperienceData = {
        ...prevFormData,
        [name]: value,
      };
      onChange(updatedExperienceData);
      return updatedExperienceData;
    });
  };

  return (
    <div>
      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company"
        value={experienceData.company}
        onChange={handleExperienceChange}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        value={experienceData.position}
        onChange={handleExperienceChange}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="Description"
        size={50}
        value={experienceData.description}
        onChange={handleExperienceChange}
      />
    </div>
  );
}

export default Experience;
