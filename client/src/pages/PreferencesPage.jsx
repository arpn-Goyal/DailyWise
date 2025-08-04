import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PreferencesPage() {
    const navigate = useNavigate();
    const [deliveryTime, setDeliveryTime] = useState('08:00');
    const [deliveryMethod, setDeliveryMethod] = useState('email');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In real app: also retrieve topics & signup form data from context or storage
        const finalData = {
            deliveryTime,
            deliveryMethod,
            // TODO: add name, email, topics etc.
        };

        console.log("Submitting preferences:", finalData);

        // Send to backend here later
        navigate('/dashboard');

    };

    return (
        <div className="bg-light min-vh-100 py-5 px-3">
            <div className="container">
                <h2 className="text-center text-primary fw-bold mb-4">When & how should we deliver your daily tips?</h2>
                <form onSubmit={handleSubmit} className="mx-auto p-4 bg-white rounded shadow" style={{ maxWidth: 500 }}>
                    <div className="mb-4">
                        <label className="form-label fw-semibold">⏰ Preferred Time</label>
                        <input
                            type="time"
                            className="form-control shadow-sm"
                            value={deliveryTime}
                            onChange={(e) => setDeliveryTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">📩 Delivery Method</label>
                        <select
                            className="form-select shadow-sm"
                            value={deliveryMethod}
                            onChange={(e) => setDeliveryMethod(e.target.value)}
                        >
                            <option value="email">Email</option>
                            <option value="whatsapp">WhatsApp</option>
                        </select>
                    </div>

                    <div className="d-grid mt-4">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                            Finish Setup →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

