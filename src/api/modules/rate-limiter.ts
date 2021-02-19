import rateLimit from 'express-rate-limit';
import RateLimitStore from 'rate-limit-mongo';

export default rateLimit({
  max: 300,
  message: 'Sorry but you are currently being rate limited. Contact our modmail bot if this matter continues after 5 minutes. Thank you and we appoligize for your own rate limit causing you a issue.',
  store: new RateLimitStore({
    uri: process.env.MONGO_URI || 'mongodb+srv://iut3890g:6BclYy2yHqvs3hKQ@cluster0.sbr9d.mongodb.net/blist1?retryWrites=true&w=majority'
  }),
  windowMs: 60 * 1000
});
