const { Router } = require("express");
const productsModel = require("../models/products.model");

const router = Router();

router.get("/products/", async (req, res) => {
  try {
    const home = await productsModel.find();
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: "Server side error on get Products" });
  }
});

module.exports = router;
