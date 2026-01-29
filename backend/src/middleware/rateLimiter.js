import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = req.ip || "anonymous";

    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    return next();
  } catch (error) {
    console.error("Rate Limiter Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default rateLimiter;
