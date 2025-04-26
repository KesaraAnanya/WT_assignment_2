// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/students`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios
        .delete(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`)
        .then(() => {
          alert(`Deleted ${name} successfully!`);
          fetchStudents();
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>

      <Link
        to="/add"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
      >
        Add Student
      </Link>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Student ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Branch</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center">
              <td className="p-2 border">{student.studentID}</td>
              <td className="p-2 border">
                {student.firstName} {student.lastName}
              </td>
              <td className="p-2 border">{student.email}</td>
              <td className="p-2 border">{student.department}</td>
              <td className="p-2 border">
                <span
                  className={`font-semibold ${
                    student.isActive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {student.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="p-2 border">
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => navigate(`/edit/${student._id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <br />
                  <br />
                  <button
                    onClick={() => handleDelete(student._id, `${student.firstName} ${student.lastName}`)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
