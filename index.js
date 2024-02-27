const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URL
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db('reliefAid');
        const user = db.collection('users');
        const good = db.collection('goods');

        // User Registration
        app.post('/api/v1/register', async (req, res) => {
            const { name, email, password } = req.body;

            // Check if email already exists
            const existingUser = await user.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'User already exists'
                });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert user into the database
            await user.insertOne({ name, email, password: hashedPassword });

            res.status(201).json({
                success: true,
                message: 'User registered successfully'
            });
        });
       // Get all users
app.get('/api/v1/users', async (req, res) => {
    try {
        const users = await user.find().toArray();
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ 
            success: false,
            message: 'Internal server error' 
        });
    }
});

        // User Login
        // User Login
app.post('/api/v1/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: foundUser.email }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN });

    res.json({
        success: true,
        message: 'Login successful',
        token
    });
});



        // ==============================================================
        app.get('/api/v1/goods', async (req, res) => {
            try {
                const goods = await good.find().toArray();
                res.status(200).json({
                    success: true,
                    message: 'Goods retrieved successfully',
                    data: goods
                });
            } catch (error) {
                console.error('Error fetching users:', error);
                res.status(500).json({ 
                    success: false,
                    message: 'Internal server error' 
                });
            }
        });
        // ==============================================================


        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } finally {
    }
}

run().catch(console.dir);

// Test route
app.get('/', (req, res) => {
    const serverStatus = {
        message: 'Server is running smoothly',
        timestamp: new Date()
    };
    res.json(serverStatus);
});