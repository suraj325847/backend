const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        try {
            // Execute the route handler and handle both synchronous and asynchronous errors
            Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
        } catch (err) {
            // If a synchronous error occurs, pass it to the Express error handling middleware
            next(err);
        }
    };
};

module.exports = asyncHandler;
