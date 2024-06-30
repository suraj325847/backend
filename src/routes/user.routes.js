const { Router } = require("express"); // Use curly braces for named export
const {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
  updateAccountDetails,
} = require("../controllers/user.controllers.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");
const {upload} = require("../middlewares/multer.middlewares.js");

const router = Router();

router.route("/register").post(
  upload.fields([
      {
          name: "avatar",
          maxCount: 1
      }, 
      {
          name: "coverImage",
          maxCount: 1
      }
  ]),
  registerUser
  )
;
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/history").get(verifyJWT, getWatchHistory);

module.exports = router; // Export the router instance
