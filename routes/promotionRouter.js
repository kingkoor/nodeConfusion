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
    res.end("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotiones");
  })
  .delete((req, res, next) => {
    res.end("Deleating all the promotions!");
  });

promotionRouter
  .route("/:promoId")
  .all(function(req, res, next) {
    res.writeHead(200, { "Content-Type": "application/json" });
    next();
  })
  .get((req, res, next) =>{
    res.end("will send the promotion (" + req.params.promoId + ") to you");
  })
  .put((req, res, next) => {
    res.write("Updating the promotion (" + req.params.promoId + ")");
    res.end(
      " Updating the promotion (" +
        req.body.name +
        ") with details (" +
        req.body.description +
        "about the promotion)"
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
  })
  .delete((req, res, next) => {
    res.end("Deleteing the promotion (" + req.params.promoId + ")");
  });

module.exports = promotionRouter;
