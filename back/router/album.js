const {viewAll, viewone, create, update, deleteOne} = require('../controller/album')
const express = require("express");
const router = express.Router();

router.route("/").post(create).get(viewAll);
router
  .route("/:id")
  .post(viewone)
  .patch(update)
  .delete(deleteOne);

module.exports = router;
