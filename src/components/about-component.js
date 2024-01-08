import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import warmPicture from "../assets/about-us-asset.png";
import "./AboutComponent.css"; // Import the new CSS file

export default function About() {
  return (
    <div className="container">
      <div className="overlayContainer">
        <div className="pageTitle">Despre noi</div>
        <div className="content">
          <div className="flexContainer" style={{ display: 'flex' }}>
            <div className="pageContent" style={{ flex: 1 }}>
              <div className="pageSubtitle">O experiență ușoară de închiriere</div>
              <div className="description">
                Bine ați venit la Homie, destinația dvs. pentru tranzacții transparente și comunicare de încredere. Platforma noastră asigură o verificare solidă pentru tranzacții de încredere, oferind profiluri detaliate ale proprietarilor și feedback real. Experimentați un hub centralizat pentru toate documentele dvs., promovând soluții organizate pentru rezolvarea rapidă a problemelor. Descoperiți un nou standard de eficiență și adevăr cu Homie - unde tranzacțiile sunt transparente, comunicarea este fiabilă și documentele sunt gestionate fără probleme.
              </div>
            </div>
            <div className="warmImageStyle" style={{ flex: 1 }}>
              <img src={warmPicture} alt="house-key" style={{ maxWidth: '27vw', marginLeft: '5vw' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
