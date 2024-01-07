import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import warmPicture from "../assets/apt.jpg";
import "./AboutComponent.css";

export default function About() {
  return (
    <div className="container">
      <div className="pageTitle">Despre noi</div>
      <div className="pageSubtitle">O experiență ușoară de închiriere</div>
      <div className="flexContainer">
        <div className="pageContent">
          <p>
            Bine ați venit la Homie, destinația dvs. pentru tranzacții
            transparente și comunicare de încredere. Platforma noastră asigură o
            verificare solidă pentru tranzacții de încredere, oferind profiluri
            detaliate ale proprietarilor și feedback real. Experimentați un hub
            centralizat pentru toate documentele dvs., promovând soluții
            organizate pentru rezolvarea rapidă a problemelor. Descoperiți un
            nou standard de eficiență și adevăr cu Homie - unde tranzacțiile
            sunt transparente, comunicarea este fiabilă și documentele sunt
            gestionate fără probleme.
          </p>
        </div>
        <div className="warmImageStyle">
          <img src={warmPicture} alt="" />
        </div>
      </div>
    </div>
  );
}
