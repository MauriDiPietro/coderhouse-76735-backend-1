export const errorHandler = (error, req, res, next) => {
    // throw new Error(error);
    //{ message, stack }
    const status = error.status || 500;
    res.status(status).json({ message: error.message });
}