const express = require('express');
const cors = require('cors');
require('dotenv').config();

const attractionsRoutes = require('./routes/attractions');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/attractions', attractionsRoutes);

// health check
// index.js
app.get('/', (req, res) => {
    res.redirect('/api/attractions');
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// start server only in dev
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// export for Vercel
module.exports = app;