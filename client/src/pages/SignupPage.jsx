import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryType: 'email',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/topics');
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Header */}
      <header className="navbar navbar-light bg-white border-bottom shadow-sm px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="navbar-brand text-primary fw-bold fs-3">DailyWise</h1>
          <button className="btn btn-outline-primary" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </header>

      {/* Signup Form Section */}
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="row w-100">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <div>
              <h2 className="text-primary fw-bold">Learn 1 Small Thing Daily</h2>
              <p className="fs-5 text-muted mt-3">
                Get personalized daily tips via email or WhatsApp to improve your life in 2 minutes a day.
              </p>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="p-5 bg-white rounded-4 shadow w-100" style={{ maxWidth: '400px' }}>
              <h3 className="text-center fw-semibold text-primary mb-4">Sign Up for DailyWise</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-start w-100">Name</label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-start w-100">Email</label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-start w-100">Phone (Optional)</label>
                  <input
                    type="tel"
                    className="form-control shadow-sm"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp number"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-start w-100">Delivery Method</label>
                  <select
                    className="form-select shadow-sm"
                    name="deliveryType"
                    value={form.deliveryType}
                    onChange={handleChange}
                  >
                    <option value="email">Email</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill shadow"
                  >
                    Continue →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
