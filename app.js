const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 8000;

// Use the cors middleware
app.use(cors());

app.use(bodyParser.json());

// JSON parsing error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ status: false, error: 'Invalid JSON' });
  }
  next();
});

app.use('/api', productRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ status: false, error: 'Internal Server Error' });
});

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
