const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /postaukset posts-taulussa, sekä omat put ja delete-metodit
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost)
  .put(postControllers.putPostById) // OMA put-metodi
  .delete(postControllers.deletePostById); // OMA delete-metodi

router.route("/:id").get(postControllers.getPostById);
router.route("/:id").put(postControllers.putPostById); // PUT-päivitys id:llä
router.route("/:id").delete(postControllers.deletePostById); // DELETE id:llä

module.exports = router;
