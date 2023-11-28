const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/api', productRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
