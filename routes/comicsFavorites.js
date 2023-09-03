const axios = require("axios");
const express = require("express"); // import du package express
const cors = require("cors");
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());

const User = require("../models/User");

const API_KEY_MARVEL = process.env.API_KEY_MARVEL;

router.get("/favoritesComcis", async (req, res) => {
  const usertoken = req.query.token;
  //   console.log(usertoken);
  try {
    const user = await User.findOne({ token: usertoken }).populate(
      "favoritesComics"
    );
    if (user) {
      res.status(200).json({ favorites: user.favoritesComics });
      console.log(user);
    } else {
      res.status(400).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("comics/addToFav", async (req, res) => {
  const user = await User.findOne({ token: usertoken });

  const favComicsId = req.body.favComicsId;

  try {
    user.favoritesComics.push(favComicsId);
    res.status(200).json({ message: "Favoris ajouté" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
