import rateLimit from 'express-rate-limit'

const rateLimiter = rateLimit({
    windowMs: 1 * 1000, // Time is 1 second
    max: 3, // Maximum number of calls
    handler: (req, res, next, options) => {
        res.status(options.statusCode).json({
            status: 'error',
            error: 'You have elapsed the total number of requests per second'
        });
    },
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false,
})

export default rateLimiter;
