import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardPage() {
    const navigate = useNavigate();

    // In real app, get user from localStorage or context
    const user = {
        name: 'Arpan',
        todayTip: '💡 Finance Tip: Set up auto-debit for savings every month to build wealth without thinking.',
        interests: ['Finance', 'Health', 'Self Growth'],
    };

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">
                <h2 className="text-center text-primary fw-bold mb-4">
                    Welcome back, {user.name.split(' ')[0]}!
                </h2>
                <div className="bg-white p-4 rounded shadow-sm mb-4">
                    <h5 className="text-secondary mb-2">🧠 Today's Tip</h5>
                    <div className="fs-5 fw-semibold text-dark">{user.todayTip}</div>
                </div>

                <div className="bg-white p-4 rounded shadow-sm mb-4">
                    <h6 className="text-muted mb-3">📚 Your Topics</h6>

                    <div className="d-flex flex-wrap gap-2">
                        {user.interests.map((topic) => (
                            <span key={topic} className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                                {topic}
                            </span>
                        ))}
                    </div>

                    <button
                        className="btn btn-outline-primary rounded-pill mt-3"
                        onClick={() => navigate('/edit-topics')}>
                        Edit Topics
                    </button>
            </div>

            <div className="text-center">
                <button className="btn btn-outline-dark rounded-pill px-4" onClick={() => navigate('/preferences')}>
                    Change Preferences
                </button>
            </div>
        </div>
        </div >
    );
}