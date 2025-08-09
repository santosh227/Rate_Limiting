const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMS : 15  * 60 * 1000,
    max:5,
    message :{ status : 429 , message : "too many requests "}
})


module.exports = limiter