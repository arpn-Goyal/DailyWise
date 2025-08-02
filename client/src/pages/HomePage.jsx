import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="navbar-brand text-primary fw-bold fs-3">DailyWise</h1>
          <div>
            <button className="btn btn-outline-primary me-2" onClick={() => navigate("/signup")}>
              Login
            </button>
            <button className="btn btn-primary" onClick={handleStartClick}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-5 bg-warning bg-gradient flex-grow-1">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">
            Learn 1 Small Thing Daily.<br />Personalized. Free.
          </h2>
          <p className="lead text-dark mb-4">
            Discover powerful tips in health, finance, law, and more — delivered to you in a friendly, easy-to-read way every day.
          </p>
          <button
            className="btn btn-dark btn-lg px-4 py-2 rounded-pill shadow"
            onClick={handleStartClick}
          >
            Start in 10 seconds →
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <h3 className="text-center mb-5 fw-semibold fs-4">What People Say</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-warning-subtle rounded shadow-sm h-100">
                <p className="fst-italic">“Every morning I get a tip that makes me feel smarter. It’s become my daily habit!”</p>
                <p className="fw-semibold mt-3">– Renu Aunty, Homemaker</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-success-subtle rounded shadow-sm h-100">
                <p className="fst-italic">“It told me about a finance scheme I never knew! Super helpful.”</p>
                <p className="fw-semibold mt-3">– Mohan, Shopkeeper</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-info-subtle rounded shadow-sm h-100">
                <p className="fst-italic">“I get daily tips on parenting. It’s like a friend who always supports me.”</p>
                <p className="fw-semibold mt-3">– Ayesha, Working Mom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
