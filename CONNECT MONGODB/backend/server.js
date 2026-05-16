const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Model
const Student = mongoose.model("Student", StudentSchema);

// API to Save Data
app.post("/addStudent", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added Successfully");
  } catch (err) {
    res.send(err);
  }
});

// API to Get Data
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// Server Port
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
