const { Router } = require ("express");
const {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos } = require("../controllers/like.controllers.js");
const { verifyJWT } = require ("../middlewares/auth.middleware.js");

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/toggle/v/:videoId").post(toggleVideoLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/t/:tweetId").post(toggleTweetLike);
router.route("/videos").get(getLikedVideos);

module.exports = router;