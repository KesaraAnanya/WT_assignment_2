import React from "react";
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import cbitLogo from "../assets/cbit_logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#a4a4a4", padding: "40px 20px", marginTop :"150px" }}>
      <div style={{ display: "inline-flex", verticalAlign: "top", width: "45%", alignItems: "center" }}>
        <img src={cbitLogo} alt="CBIT Logo" style={{ width: "120px", marginRight: "20px" }} />
        <div>
          <h4 style={{ margin: "0 0 10px 0" }}>College Contact Info</h4>
          <p><FaMapMarkerAlt /> Gandipet, Hyderabad, Telangana</p>
          <p><FaPhone /> 040-24193276</p>
          <p><FaMobileAlt /> 8466997201</p>
          <p><FaEnvelope /> principal@cbit.ac.in</p>
        </div>
      </div>

      <div style={{ display: "inline-block", verticalAlign: "top", width: "45%", marginLeft: "5%" }}>
        <h4>Connect With Us</h4>
        <p><FaFacebook /> Facebook</p>
        <p><FaInstagram /> Instagram</p>
        <p><FaYoutube /> Youtube</p>
      </div>

      <hr style={{ margin: "30px 0" }} />
      <p style={{ textAlign: "center", marginBottom: "0", color: "white" }}>
        © 2025 Student Management System - CBIT. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
