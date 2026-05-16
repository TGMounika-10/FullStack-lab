import { useState , useEffect } from 'react'

import './App.css'

import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);

  // Fetch Data
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  // Add Student
  const addStudent = async () => {

    const studentData = {
      name: name,
      email: email,
    };

    await axios.post(
      "http://localhost:5000/addStudent",
      studentData
    );

    alert("Student Added");

    setName("");
    setEmail("");

    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React + MongoDB Connection</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      <h3>Student List</h3>

      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;