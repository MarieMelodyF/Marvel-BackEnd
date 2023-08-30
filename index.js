require("dotenv").config();
const express = require("express"); // import du package express
const cors = require("cors");
const app = express();
app.use(cors());

// import route Marvel
const MarvelRoutes = require("./routes/marvel");
app.use(MarvelRoutes);

app.get("/", (req, res) => {
  try {
    res.status(200).json("Bienvenue sur le serveur Marvel ! ");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// routes

app.all("*", (req, res) => {
  try {
    res.status(404).json("Cette page n'existe pas");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started !");
});
