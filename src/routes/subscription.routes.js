const { Router } = require ('express');
const {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels } = require("../controllers/subscription.controllers.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
    .route("/c/:channelId")
    .get(getSubscribedChannels)
    .post(toggleSubscription);

router.route("/u/:subscriberId").get(getUserChannelSubscribers);

module.exports= router;