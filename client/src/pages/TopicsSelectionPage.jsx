import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopicsSelectionPage() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);

  const allTopics = [
    "Health",
    "Finance",
    "Law",
    "Parenting",
    "Technology",
    "Self Growth",
  ];

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleContinue = () => {
    if (selectedTopics.length === 0) {
      alert("Please select at least one topic");
      return;
    }
    // Save to backend or localStorage (to be done later)
    navigate("/preferences"); // next step
  };

  return (
    <div className="bg-light min-vh-100 py-5 px-3">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">
          What topics interest you?
        </h2>
        <p className="text-center text-muted mb-5">
          Choose 1 or more areas you want to receive tips in daily.
        </p>
        <div className="row justify-content-center g-3 mb-4">
          {allTopics.map((topic) => (
            <div className="col-6 col-md-4 col-lg-3" key={topic}>
              <button
                className={`btn w-100 py-3 shadow-sm rounded-pill ${
                  selectedTopics.includes(topic)
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="btn btn-dark btn-lg rounded-pill px-5 shadow"
            onClick={handleContinue}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
