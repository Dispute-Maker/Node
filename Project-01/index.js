const users = require("./MOCK_DATA.json");
const fs = require("fs");
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 8000;
// Middleware
app.use(express.json()); // parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // parse URL-encoded request bodies
//connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-01")
  .then(() => console.log("mangoDB Connected"))
  .catch((err) => console.log("Mango Error", err));
//schema
const userSchema = new mongoose.Schema({
  fristName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
},{timestamps:true});

const User = mongoose.model("user", userSchema);

//GET HTML Document
app.get("/users", async(req, res) => {
  const allDbUsers=await User.find({})
  const html = ` 
  <ul>
  ${allDbUsers.map((user) => `<li>${user.fristName} : ${user.email}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//REST API
app.get("/api/users", async(req, res) => {
    const allDbUsers=await User.find({})
  res.json(allDbUsers);
});

// Dynamic Path Perameters :
// GET /api/users/:id
app.get("/api/users/:id", async(req, res) => {
  const user=await User.findById(req.params.id)
  res.json(user);
});

// post /api/users
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are require" })
  }
  const result = await User.create({
    fristName: body.first_name,
    lastName: body.last_name,
    email: body.email, 
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log("Result : ", result);
  return res.status(201).json({ msg: "success" });
});

// // PATCH /api/users/:id
app.patch("/api/users/:id", async(req, res) => {
  await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})
  res.json({status:"Success"})
}); 

// // DELETE /api/users
app.delete("/api/users/:id", async(req, res) => {
  await User.findByIdAndDelete(req.params.id)
    res.json({ status: "success"});
});

// Global error handler (catches async route errors in Express v5)
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: err.message });
});

// Server
app.listen(port, () => console.log(`server atarted at ${port}`));
