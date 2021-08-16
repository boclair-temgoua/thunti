const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

const app = express();
const logger = require('morgan');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const messagesRoute = require('./routes/messages');

/** Moteur de template */
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get(/^((?!\/api\/v1).)*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Express boilerplate middleware
// =============================================
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());

app.use(async (req, res, next) => {
  if (req.headers.origin) {
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(cors());

/** app.use('/', [homeRoute]); */
app.use(`/api/${process.env.NODE_API_VERSION}`, [
  authRoute,
  usersRoute,
  messagesRoute,
]);
app.all('*', (req, res) => res.status(404).json('404 Not Found'));

module.exports = app;
