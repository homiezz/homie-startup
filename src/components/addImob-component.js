import React, { useState } from "react";

const AddImob = () => {
  const [imobTitle, setImobTitle] = useState("");
  const [imobDescription, setImobDescription] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [bathroomNumber, setBathroomNumber] = useState(0);
  const [imobFacilities, setImobFacilities] = useState([]);

  return (
      <div>
        Add imob page
      </div>

  );
};

export default AddImob;