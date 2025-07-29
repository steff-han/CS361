
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import * as users from './users_model.mjs';

const PORT = process.env.PORT;
const app = express();

// Use CORS as middleware for navigating external sources outside the site 
app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(PORT, async () => {
    await users.connect();
    console.log(`Server listening on port ${PORT}...`);
});