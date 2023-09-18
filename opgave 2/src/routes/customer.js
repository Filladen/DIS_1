const express = require("express");
const customerRoutes = express.Router();

const customers = require("../db/customers");

customerRoutes.get("/", (req, res) => {
  res.send(customers);
});

customerRoutes.post("/", (req, res) => {
  const newCustomer = req.body;
  customers.push(newCustomer);
  res.status(201).send(customers);
});

module.exports = customerRoutes;
