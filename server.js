const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./routes/user");


const corsOptions = {
  origin: "http://localhost:3001"
};

//MIDDLEWARES
app.use(cors(corsOptions));  // enable CORS
app.use(express.json());
app.use("/user", user);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
