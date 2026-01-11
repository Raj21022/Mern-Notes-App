import ratLimit from"../config/upstash.js";


const rateLimiter =async (req, res, next) => {
    try {
        const{ success }=await ratLimit.limit("my-rate-limit-key");
        if(!success){
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next();
}
    catch (error) {
        console.error("Rate Limiter Error:", error);
        next(error);
    }       
};

export default rateLimiter;