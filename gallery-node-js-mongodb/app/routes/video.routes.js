module.exports = app => {
  const controller = require("../controllers/video.controller");

  var router = require("express").Router();

  // Create a new video
  router.post("/addnew", controller.create);

  // Retrieve all videos
  router.get("/findall", controller.findAll);
  
  // Retrieve one videos
  router.get("/findone/:id", controller.findOne);
  
  // Update videos
  router.put("/update/:id", controller.update);
  
  // delete videos
  router.delete("/delete/:id", controller.delete);

  

  app.use("/api/video", router);
};
