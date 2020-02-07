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
    res.end("Will send all the dishes to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the dish: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleating all the dishes!");
  });

dishRouter
  .route("/:dishId")
  .all(function(req, res, next) {
    res.writeHead(200, { "Content-Type": "application/json" });
    next();
  })
  .get((req, res, next) =>{
    res.end("will send the dish (" + req.params.dishId + ") to you");
  })
  .put((req, res, next) => {
    res.write("Updating the dish (" + req.params.dishId + ")");
    res.end(
      " Updating the dish (" +
        req.body.name +
        ") with details (" +
        req.body.description +
        "about the dish)"
    );
  })
  .post((req, res, next) =>{
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
  })
  .delete((req, res, next) => {
    res.end("Deleteing the dish (" + req.params.dishId + ")");
  });

module.exports = dishRouter;
