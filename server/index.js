const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig');

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credientials: true
}))

app.use("/api/portfolio", portfolioRoute);
app.get('/', (req, res)=>(res.status(200).json({ "message": "Hello World!"})))

const port = process.env.PORT || 5000;
const path = require("path");

// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
//   })
// }

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});