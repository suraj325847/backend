class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Call the constructor of the parent class (Error) with the provided message

        // Set properties of the error object
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false;

        // Ensure 'stack' property is set correctly
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;
