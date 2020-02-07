const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaders to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /leaderes");
  })
  .delete((req, res, next) => {
    res.end("Deleating all the leaders!");
  });

leaderRouter
  .route("/:leaderId")
  .all(function(req, res, next) {
    res.writeHead(200, { "Content-Type": "application/json" });
    next();
  })
  .get((req, res, next) =>{
    res.end("will send the leader (" + req.params.leaderId + ") to you");
  })
  .put((req, res, next) => {
    res.write("Updating the leader (" + req.params.leaderId + ")");
    res.end(
      " Updating the leader (" +
        req.body.name +
        ") with details (" +
        req.body.description +
        "about the leader)"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
  })
  .delete((req, res, next) => {
    res.end("Deleteing the leader (" + req.params.leaderId + ")");
  });

module.exports = leaderRouter;
