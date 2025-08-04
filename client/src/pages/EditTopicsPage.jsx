import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditTopicsPage() {
    const navigate = useNavigate();
    const [selectedTopics, setSelectedTopics] = useState([]);
    const allTopics = ['Health', 'Finance', 'Law', 'Parenting', 'Technology', 'Self Growth'];

    // Load from localStorage (for now)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('dailywiseUser')) || {};
        setSelectedTopics(user.interests || []);
    }, []);

    const toggleTopic = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter((t) => t !== topic));
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    const handleSave = () => {
        if (selectedTopics.length === 0) {
            alert('Select at least one topic');
            return;
        }

        // Update localStorage (later via API)
        const user = JSON.parse(localStorage.getItem('dailywiseUser')) || {};
        user.interests = selectedTopics;
        localStorage.setItem('dailywiseUser', JSON.stringify(user));

        navigate('/dashboard');
    }
        return (
            <div className="bg-light min-vh-100 py-5 px-3">
                <div className="container">
                    <h2 className="text-center text-primary fw-bold mb-4">Edit Your Topics</h2>
                    <p className="text-center text-muted mb-5">Choose the topics you want to get daily tips on.</p>
                    <div className="row justify-content-center g-3 mb-4">
                        {allTopics.map((topic) => (
                            <div className="col-6 col-md-4 col-lg-3" key={topic}>
                                <button
                                    className={`btn w-100 py-3 shadow-sm rounded-pill ${selectedTopics.includes(topic) ? 'btn-primary' : 'btn-outline-primary'
                                        }`}
                                    onClick={() => toggleTopic(topic)}
                                >
                                    {topic}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="btn btn-success btn-lg rounded-pill px-4" onClick={handleSave}>
                            Save Changes →
                        </button>
                    </div>
                </div>
            </div>
        );
    }
