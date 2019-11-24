const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const cardsRouter = require("./cardsRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.use("/api/cards", cardsRouter);

server.get("/", (_req, res) => {
  res.send("Server is up and running ");
});

module.exports = server;
