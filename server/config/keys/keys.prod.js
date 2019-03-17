module.exports = {
  cookie: {
    key: process.env.COOKIE_KEY,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  redirectDomain: process.env.REDIRECT_DOMAIN,
  sendGrid: {
    apiKey: process.env.SEND_GRID_API_KEY,
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
};
