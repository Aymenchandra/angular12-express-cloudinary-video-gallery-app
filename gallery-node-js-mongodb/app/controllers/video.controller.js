const db = require("../models");
const Video = db.video;

// exports.addvideo = (req, res) => {
//   const video = new Video({
//     title: req.body.title,
//     description: req.body.description,
//     source: req.body.source,
//     state:req.body.state,
//     comment:req.body.comment
//   });

//   video.save((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     res.send({ message: "Video was registered successfully!" });

// //     video.save(err => {
// //     if (err) {
// //         res.status(500).send({ message: err });
// //         return;
// //         }
// //   });
// });


exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Video
    const video = new Video({
        title: req.body.title,
        description: req.body.description,
        source: req.body.source,
        state: false,
        comment:''
      
    });
  
    // Save Video in the database
    video
    .save(video)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Video."
        });
      });
  };
  
  // Retrieve all Videos from the database.
  exports.findAll = (req, res) => {
    Video.find({},{})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving videos."
        });
      });
  };

  // Retrieve one Video by id from the database.
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Video.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Video with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Video with id=" + id });
      });
  };

  // Update a Videos by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Video.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Video with id=${id}. Maybe Video was not found!`
          });
        } else res.send({ message: "Video was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Video with id=" + id
        });
      });
  };
  
  // Delete a Tutorial with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Video.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Video with id=${id}. Maybe Video was not found!`
          });
        } else {
          res.send({
            message: "Video was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Video with id=" + id
        });
      });
  };