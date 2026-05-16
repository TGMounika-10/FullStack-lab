const http = require("http");

// Student Data
const students = [
  {
    id: 1,
    name: "Mounika",
    course: "MCA"
  },
  {
    id: 2,
    name: "Sheresh",
    course: "BSc Agriculture"
  }
];

// Create Server
const server = http.createServer((req, res) => {

  // Home Route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Node.js Server");
  }

  // Student Route
  else if (req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  }

  // Not Found
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

// Port Number
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// http://localhost:3000/students