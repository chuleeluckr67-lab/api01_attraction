const express = require('express');
const cors = require('cors');
require('dotenv').config();

const attractionRoutes = require('./routes/attractions');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/attractions', attractionRoutes);

// Root path for testing
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Thai Cafe Attraction API' });
});

// Start Server Only if not on Vercel (Production)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Export app for Vercel
module.exports = app;