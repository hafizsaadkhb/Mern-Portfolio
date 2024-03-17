const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dbConfig = require('./config/dbConfig');

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mern-portfolio-lemon.vercel.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true'); // Set to true when credentials are included in the request
  next();
});
app.use(cors({
  origin: ["https://mern-portfolio-lemon.vercel.app"],
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