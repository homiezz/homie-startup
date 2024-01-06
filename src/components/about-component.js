import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import warmPicture from "../assets/apt.jpg";

export default function About() {
  return (
    <div className="container">
      <style>{`
            .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            }

            .pageTitle {
            font-size: 3.5rem;
            text-align: center;
            margin-top: 300px;
            color: white;
            }

            .pageSubtitle {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 30px;
            color: white;
            }

            .pageContent {
            max-width: 800px;
            font-size: 1rem;
            line-height: 1.5;
            text-align: justify;
            margin-bottom: 30px;
            color: white;
            }

            .flexContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            }

            .textContainer {
            width: 45%; /* Adjust the width as needed */
            }

            .warmImageStyle {
            width: 85%; /* Adjust the width as needed */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
        `}</style>
      <div className="pageTitle">Despre noi</div>
      <div className="pageSubtitle">O experiență ușoară de închiriere</div>
      <div className="flexContainer">
        <div className="pageContent">
          Bine ați venit la homie, destinația dvs. pentru tranzacții
          transparente și comunicare de încredere. Platforma noastră asigură o
          verificare solidă pentru tranzacții de încredere, oferind profiluri
          detaliate ale proprietarilor și feedback real. Experimentați un hub
          centralizat pentru toate documentele dvs., promovând soluții
          organizate pentru rezolvarea rapidă a problemelor. Descoperiți un nou
          standard de eficiență și adevăr cu Homie - unde tranzacțiile sunt
          transparente, comunicarea este fiabilă și documentele sunt gestionate
          fără probleme.
        </div>
        <div>
          <img src={warmPicture} alt="" className="warmImageStyle" />
        </div>
      </div>
    </div>
  );
}
