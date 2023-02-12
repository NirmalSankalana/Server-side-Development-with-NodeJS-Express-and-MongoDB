const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the all the dishes to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported in dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the dishes");
  });

dishRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the" + req.params.id + " dish");
  })
  .post((req, res, next) => {
    res.end("Will add the dish: " + req.params.id);
  })
  .put((req, res, next) => {
    res.end("Updating " + req.params.id + " dish");
  })
  .delete((req, res, next) => {
    res.end("Deleting " + req.params.id + " dish");
  });

module.exports = dishRouter;
