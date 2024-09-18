const {viewAll, viewone, create, update, deleteOne} = require('../controller/track')
const express = require("express");
const router = express.Router();

router.route("/").post(create).get(viewAll);
router
  .route("/:id")
  .post(viewone)
  .patch(update)
  .delete(deleteOne);

module.exports = router;