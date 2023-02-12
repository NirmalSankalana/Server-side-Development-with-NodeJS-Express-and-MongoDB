const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the all the promotions to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported in promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotions");
  });

promotionRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send the " + req.params.id + " promotion");
  })
  .post((req, res, next) => {
    res.end("Will add the promotion: " + req.params.id);
  })
  .put((req, res, next) => {
    res.end("Updating " + req.params.id + " promotion");
  })
  .delete((req, res, next) => {
    res.end("Deleting " + req.params.id + " promotion");
  });

module.exports = promotionRouter;
