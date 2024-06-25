require('dotenv').config();
const express = require('express');
const mongoose = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use('/worko/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
