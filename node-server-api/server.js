const http = require('http');
const app = require('./index');
const db = require('./models');

const PORT = process.env.NODE_PORT || '7000';

const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  server.listen(PORT, () => {
    console.log('*************************************');
    console.log(`*** 🚀 Local: ${process.env.NODE_APP_URL}:${PORT} ***`);
    console.log('*************************************');
    console.log(`${process.env.DB_USERNAME} database connected | database name: ${process.env.DB_DATABASE}`);
    console.log('*************************************');
  });
} else {
  // Sync sequelize models then start Express app
  // =============================================
  db.sequelize.sync({ force: false, alter: true })
    .then(() => {
      server.listen(PORT, () => {
        console.log('*************************************');
        console.log(`*** 🚀 Local: ${process.env.NODE_APP_URL}:${PORT} ***`);
        console.log('*************************************');
      });
    })
    .then(() => {
      console.log('\n*************************************');
      console.log(`${process.env.DB_USERNAME} database connected | database name: ${process.env.DB_DATABASE}`);
      console.log('*************************************');
    });
}
