// src/components/EditStudent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditStudent() {
  const [formData, setFormData] = useState({
    studentID: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    enrollmentYear: '',
    department: '',
    isActive: true,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/students/${id}`)
      .then((res) => {
        const formattedData = {
          ...res.data,
          dob: res.data.dob ? res.data.dob.slice(0, 10) : '',
        };
        setFormData(formattedData);
      })
      .catch(() => toast.error('Error loading student data'));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'studentID' || name === 'enrollmentYear' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/students/${id}`, formData)
      .then(() => {
        toast.success('Student updated successfully!');
        navigate('/students');
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        toast.error('Error updating student');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Student ID</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g., 160123452099"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., John"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Doe"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="e.g., john.doe@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Enrollment Year</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g., 2023"
            name="enrollmentYear"
            value={formData.enrollmentYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Department</label>
          <select
            className="form-select"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <label className="form-check-label">Active</label>
        </div>

        <button type="submit" className="btn btn-success">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
