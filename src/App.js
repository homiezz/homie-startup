import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddImob from "./components/addImob-component";
import Posts from "./components/posts-component";
import Home from "./components/home-component";
import About from "./components/about-component";
import Navbar from "./Navbar";
import ProfilePage from "./components/profile-page";
import Settings from "./components/settings-component";
import RentalDetails from "./components/rental-details";

export default function App() {
  return (
    <div className="backgroundStyle">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homie-startup" element={<Home />} />
        <Route path="/addImob" element={<AddImob />} />
        <Route path="/posts" element= {<Posts />}/>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/posts/:id" element={<RentalDetails />} />
      </Routes>
    </div>
  );
}
