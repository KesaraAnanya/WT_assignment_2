// src/components/AddStudent.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentID: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    enrollmentYear: "",
    department: "",
    isActive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox"
        ? checked
        : name === "studentID" || name === "enrollmentYear"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/students`, formData)
      .then(() => {
        toast.success("Student added successfully!");
        setFormData({
          studentID: "",
          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          enrollmentYear: "",
          department: "",
          isActive: false,
        });
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        toast.error("Error adding student");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Student ID</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Student ID"
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
            placeholder="Enter First Name"
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
            placeholder="Enter Last Name"
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
            placeholder="Enter Email"
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
            placeholder="Enter Enrollment Year"
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
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
