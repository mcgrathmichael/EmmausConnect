const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.put("/products/:id", productControllers.edit);
router.post("/products", productControllers.add);
router.delete("/products/:id", productControllers.destroy);

const accountControllers = require("./controllers/accountControllers");

router.get("/accounts", accountControllers.browse);
router.get("/accounts/:id", accountControllers.read);
router.put("/accounts/:id", accountControllers.edit);
router.post("/accounts", accountControllers.add);
router.delete("/accounts/:id", accountControllers.destroy);

module.exports = router;
