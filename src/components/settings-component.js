import React, { useState } from "react";
import "./Settings.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [username, setUsername] = useState("");

  const handlePasswordSubmit = () => {
    // Add logic to handle password submission
    if (currentPassword && newPassword && confirmNewPassword) {
      if (currentPassword !== newPassword) alert("Passwords do not match.");
      console.log("Password Form submitted.");
    } else {
      alert("Please complete all password fields.");
    }
  };

  const handleUsernameSubmit = () => {
    // Add logic to handle username submission
    if (username) {
      console.log("Username Form submitted.");
      // pentru partea de username update
      navigate("/profile", { state: { updatedUsername: username } });
    } else {
      alert("Please enter a new username.");
    }
  };

  return (
    <div className="settingsPageView">
      {/* Password Section */}
      <div className="inputContainer">
        <h2>Passwords</h2>
        <input
          type="password"
          className="inputField"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          className="inputField"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="inputField"
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <button className="submitButton" onClick={handlePasswordSubmit}>
          Submit Password
        </button>
      </div>

      {/* Username Section */}
      <div className="inputContainer">
        <h2>Username</h2>
        <input
          type="text"
          className="inputField"
          placeholder="New Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="submitButton" onClick={handleUsernameSubmit}>
          Submit Username
        </button>
      </div>
    </div>
  );
};

export default Settings;
