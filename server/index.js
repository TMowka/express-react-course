const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const ms = require('ms');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const config = require('./config');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongo.uri, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: ms(config.cookie.maxAge),
    keys: [keys.cookie.key],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth.routes')(app);
require('./routes/billing.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
