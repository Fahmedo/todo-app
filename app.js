const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.static());
app.use(express.json());

// route

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on ${port}....`));
  } catch (err) {
    console.log(err);
  }
};

start();
