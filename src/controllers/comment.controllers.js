const mongoose = require( "mongoose");
const {Comment} = require( "../models/comment.models.js"); // Destructuring because it's exported as a property
const  ApiError  = require( "../utils/ApiError.js"); // Direct assignment because it's exported directly
const ApiResponse = require( "../utils/ApiResponse.js");
const  asyncHandler  = require( "../utils/asyncHandler.js");

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
})

module.exports = {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    };