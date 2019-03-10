const Stripe = require('stripe');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const stripe = new Stripe(keys.stripe.secretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '$5 for 5 email credits',
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
