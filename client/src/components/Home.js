import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import cbit from "../assets/cbit.jpeg";
import cbithac from "../assets/cbithac.jpeg";
import graduation from "../assets/graduation.jpeg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const bootstrap = require("bootstrap");
    const carousel = document.querySelector("#carouselExampleControls");
    if (carousel) {
      new bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-5">Welcome to the Student Registration System</h1>

      {/* Carousel Section */}
      <div className="p-4 mb-5 shadow rounded bg-light">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={cbit}
                className="d-block w-100"
                alt="CBIT"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cbithac}
                className="d-block w-100"
                alt="CBIT HAC"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={graduation}
                className="d-block w-100"
                alt="Graduation"
                style={{ height: "600px", objectFit: "cover" }}
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>

      {/* Register Here Section */}
      <div className="p-4 shadow rounded bg-light">
        <h2 className="mb-4">Register Here</h2>
        <div className="d-flex justify-content-center gap-3">
          <button onClick={() => navigate("/students")} className="btn btn-primary">
            View Students
          </button>
          <button onClick={() => navigate("/add")} className="btn btn-success">
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
