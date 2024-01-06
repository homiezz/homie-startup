import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const LocationInputMap = ({ onSaveLocation }) => {
  const [location, setLocation] = useState({ lat: 44.439663, lng: 26.096306 });
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const handleMapClick = async ({ lat, lng }) => {
    setLocation({ lat, lng });

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }

      const data = await response.json();

      const formattedAddress =
        data.results[0]?.formatted_address || "Address not found";

      onSaveLocation({ lat, lng, formattedAddress });
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        center={location}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        onClick={handleMapClick}
      />
    </div>
  );
};

export default LocationInputMap;
