import { useState } from "react";

function General({ onChange }) {
  const [generalData, setGeneralData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });

  const handleGeneralChange = (event) => {
    const { name, value } = event.target;

    setGeneralData((prevFormData) => {
      const updatedGeneralData = {
        ...prevFormData,
        [name]: value,
      };
      onChange(updatedGeneralData);
      return updatedGeneralData;
    });
  };

  return (
    <fieldset>
      <legend>General Information</legend>
      <label htmlFor="fullname">Full Name:</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        placeholder="Full Name"
        value={generalData.fullname}
        onChange={handleGeneralChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={generalData.email}
        onChange={handleGeneralChange}
      />
      <label htmlFor="phonenumber">Phone Number:</label>
      <input
        type="text"
        id="phonenumber"
        name="phonenumber"
        placeholder="Phone Number"
        value={generalData.phonenumber}
        onChange={handleGeneralChange}
      />
    </fieldset>
  );
}

export default General;
