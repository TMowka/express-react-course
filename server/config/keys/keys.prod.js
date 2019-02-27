module.exports = {
  google: {
    clinetID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  cookie: {
    key: process.env.COOKIE_KEY,
  },
};
