// const users = require("./MOCK_DATA.json");
// const fs = require("fs");
// const express = require("express");
// const app = express();
// const port = 8000;

// //Middleware - plugin
// app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log("Hello from Middleware 1");
//   next();
// });

// //GET HTML Document
// app.get("/users", (req, res) => {
//   const html = ` 
//   <ul>
//   ${users.map((user) => `<li>${user.id} : ${user.first_name}</li>`).join("")}
//   </ul>
//   `;
//   res.send(html);
// });
// //REST API
// app.get("/api/users", (req, res) => {
//   res.setHeader("X-myNamer", "sahil"); //custom header
//   //always add X to custom headers
//   // console.log(req.headers);
//   res.json(users);
// });
// // GET /api/users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // Dynamic Path Perameters :
// // GET /api/users/:id
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   res.json(user);
// });

// // post /api/users
// app.post("/api/users", (req, res) => {
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     res.status(400).json({ msg: "all fields are require" });
//   }
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     res.status(201).json({ status: "success", id: users.length });
//   });
// });

// // PATCH /api/users/:id
// app.patch("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const body = req.body;
//   const user = users.find((user) => user.id === id);
//   user.first_name = body.first_name;
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     res.json({ status: "success", id });
//   });
// });

// // DELETE /api/users
// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const newUsers = users.filter((user) => user.id !== id);
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsers), (err, data) => {
//     res.json({ status: "success", id });
//   });
// });

// // Server
// app.listen(port, () => console.log(`server atarted at ${port}`));
